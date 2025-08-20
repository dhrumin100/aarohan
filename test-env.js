// Test environment variables
require('dotenv').config({ path: '.env.local' })

console.log('Testing environment variables:')
console.log('GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID)
console.log('GOOGLE_SHEET_ID length:', process.env.GOOGLE_SHEET_ID?.length)
console.log('GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 exists:', !!process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64)
