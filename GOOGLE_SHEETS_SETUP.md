# Google Sheets Backend Setup Guide

## Step 1: Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Sheets API:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create Service Account

1. Go to "IAM & Admin" → "Service Accounts"
2. Click "Create Service Account"
3. Fill in details:
   - Name: `aarohan-forms-service`
   - Description: `Service account for Aarohan website forms`
4. Click "Create and Continue"
5. Skip role assignment, click "Continue"
6. Click "Done"

## Step 3: Generate Service Account Key

1. Click on your service account email
2. Go to "Keys" tab
3. Click "Add Key" → "Create new key"
4. Choose "JSON" format
5. Download the key file
6. Rename it to `service-account-key.json`
7. Place it in your project root (same level as package.json)

## Step 4: Create Google Sheet

1. Create a new Google Sheet
2. Name it "Aarohan Form Submissions"
3. Create these columns in the first row:
   ```
   A: Timestamp | B: Full Name | C: Mobile | D: Email | E: Property Type | F: Message | G: Form Type | H: Indian Time
   ```
4. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the part between `/d/` and `/edit`

## Step 5: Share Sheet with Service Account

1. In your Google Sheet, click "Share"
2. Add your service account email (ends with `@project-id.iam.gserviceaccount.com`)
3. Give it "Editor" access
4. Click "Send" (no need to send email)

## Step 6: Environment Variables

Create a `.env.local` file in your project root:

```env
GOOGLE_SHEET_ID=your_actual_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_KEY_FILE=./service-account-key.json
```

## Step 7: Install Dependencies

```bash
npm install googleapis google-auth-library
```

## Step 8: Test the Setup

1. Start your development server
2. Fill out any form on your website
3. Submit the form
4. Check your Google Sheet - you should see a new row with the form data

## Troubleshooting

### Common Issues:

1. **"Invalid credentials" error**
   - Make sure service account key file is in the right location
   - Verify the file path in .env.local

2. **"Permission denied" error**
   - Make sure you shared the sheet with the service account email
   - Verify the service account has Editor access

3. **"Sheet not found" error**
   - Check your GOOGLE_SHEET_ID in .env.local
   - Make sure the sheet exists and is accessible

### Security Notes:

- Never commit `service-account-key.json` to version control
- Add it to `.gitignore`
- Keep your service account key secure
- Consider using environment variables for production

## Sheet Structure Example

Your Google Sheet should look like this:

| Timestamp | Full Name | Mobile | Email | Property Type | Message | Form Type | Indian Time |
|-----------|-----------|---------|-------|---------------|---------|-----------|-------------|
| 2024-01-15T10:30:00Z | John Doe | 9998878448 | john@email.com | 3 BHK | Interested in site visit | contact | 15/01/2024 16:00 |
| 2024-01-15T11:00:00Z | Jane Smith | 9876543210 | jane@email.com | 4 BHK | | floor-plan | 15/01/2024 16:30 |

## Form Types

The system automatically categorizes submissions:
- `contact` - General contact form
- `floor-plan` - Floor plan requests
- `enquiry` - Quick enquiries
- `general` - Default fallback
