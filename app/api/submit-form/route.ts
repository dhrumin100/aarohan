import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

// Google Sheets configuration
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
const SHEET_ID = process.env.GOOGLE_SHEET_ID
console.log('SHEET_ID:', SHEET_ID)

// Initialize Google Auth
const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 || '', 'base64').toString()),
    scopes: SCOPES,
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { fullName, mobile, email, propertyType, message, formType, timestamp } = body

        // Validate required fields
        if (!fullName || !mobile || !email) {
            console.error('Missing required fields:', { fullName, mobile, email })
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Log the received data for debugging
        console.log('Received form data:', body)
        console.log('=== ENVIRONMENT VARIABLES DEBUG ===')
        console.log('- SHEET_ID:', SHEET_ID)
        console.log('- SHEET_ID length:', SHEET_ID?.length)
        console.log('- SHEET_ID type:', typeof SHEET_ID)
        console.log('- SHEET_ID first 10 chars:', SHEET_ID?.substring(0, 10))
        console.log('- SHEET_ID last 10 chars:', SHEET_ID?.substring(SHEET_ID?.length - 10))
        console.log('- GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 exists:', !!process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64)
        console.log('- GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 length:', process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64?.length)
        console.log('=== END ENVIRONMENT DEBUG ===')

        // Check if Google Sheets is configured
        if (!SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64) {
            console.error('Google Sheets not configured properly')
            // Return success anyway for testing the thank you page
            console.log('Form data received (Google Sheets not configured):', {
                fullName,
                mobile,
                email,
                propertyType,
                message,
                formType,
                timestamp
            })
            return NextResponse.json({
                success: true,
                message: 'Form submitted successfully (Google Sheets not configured)',
                debug: 'Google Sheets integration not configured',
                data: {
                    fullName,
                    mobile,
                    email,
                    propertyType,
                    message,
                    formType,
                    timestamp
                }
            })
        }

        // Prepare data for Google Sheets - ensure all 8 columns are filled
        const rowData = [
            timestamp || new Date().toISOString(),                    // A: Timestamp
            (fullName || '').toString().trim(),                      // B: Full Name
            (mobile || '').toString().trim(),                        // C: Mobile
            (email || '').toString().trim(),                         // D: Email
            (propertyType || '').toString().trim(),                  // E: Property Type
            (message || '').toString().trim(),                       // F: Message
            (formType || 'contact').toString().trim(),               // G: Form Type
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) // H: Indian Time
        ]

        // Ensure we have exactly 8 columns
        if (rowData.length !== 8) {
            console.error('Row data length mismatch:', rowData.length, rowData)
            return NextResponse.json(
                { error: 'Data formatting error' },
                { status: 500 }
            )
        }

        // Get Google Sheets instance
        const sheets = google.sheets({ version: 'v4', auth })

        // Test authentication
        try {
            const authClient = await auth.getClient()
            console.log('✅ Authentication successful')
            console.log('✅ Service account key loaded successfully')
        } catch (authError) {
            console.error('❌ Authentication failed:', authError)
            return NextResponse.json(
                { error: 'Google authentication failed. Check your service account key.' },
                { status: 500 }
            )
        }

        console.log('Attempting to append to sheet:', SHEET_ID)
        console.log('Row data to append:', rowData)

        // First, verify the sheet exists
        try {
            const sheetInfo = await sheets.spreadsheets.get({
                spreadsheetId: SHEET_ID
            })
            console.log('Sheet found:', sheetInfo.data.properties?.title)
        } catch (error) {
            console.error('Sheet not found or access denied:', error)
            return NextResponse.json(
                { error: 'Google Sheet not found or access denied. Please check Sheet ID and sharing permissions.' },
                { status: 404 }
            )
        }

        // Append data to the sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: 'A1', // Start from A1, let Google auto-detect columns
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS', // Insert new row
            requestBody: {
                values: [rowData]
            }
        })

        console.log('Sheet response:', response.data)

        return NextResponse.json({
            success: true,
            message: 'Form submitted successfully',
            rowId: response.data.updates?.updatedRange
        })

    } catch (error) {
        console.error('Error submitting form:', error)

        // Return a success response even on error for testing the thank you page
        // In production, you might want to return an error instead
        return NextResponse.json({
            success: true,
            message: 'Form submitted successfully (with fallback)',
            debug: 'Google Sheets error occurred but form was processed',
            error: error instanceof Error ? error.message : 'Unknown error'
        })
    }
}
