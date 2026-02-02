/**
 * Google Apps Script to handle Waitlist Form Submissions
 * 
 * INSTRUCTIONS:
 * 1. Go to https://sheets.new to create a new Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any code in the editor and paste the code below.
 * 4. Save the project (Cmd/Ctrl + S).
 * 5. Run the 'setup' function once to create the sheet headers (Select 'setup' from the toolbar dropdown and click Run).
 *    - You will need to authorize the script (Review Permissions -> Choose Account -> Advanced -> Go to ... (unsafe) -> Allow).
 * 6. Click 'Deploy' > 'New deployment'.
 * 7. Select type: 'Web app'.
 * 8. Description: 'Waitlist API'.
 * 9. Execute as: 'Me'.
 * 10. Who has access: 'Anyone'. (CRITICAL for it to work without login)
 * 11. Click 'Deploy'.
 * 12. Copy the 'Web app URL'.
 * 13. Create a .env file in your project root and add:
 *     VITE_GOOGLE_SHEET_URL=your_web_app_url_here
 */

const SHEET_NAME = 'Waitlist';

function doPost(e) {
    const lock = LockService.getScriptLock();
    // Wait for 10 seconds before timeout
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        let sheet = doc.getSheetByName(SHEET_NAME);

        // Ensure sheet exists
        if (!sheet) {
            sheet = doc.insertSheet(SHEET_NAME);
            sheet.appendRow(['Timestamp', 'Name', 'Email']);
        }

        const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        const emailIndex = headers.indexOf('Email');

        // Parse data - handling both JSON and form-urlencoded just in case, though we will send JSON
        let data;
        try {
            data = JSON.parse(e.postData.contents);
        } catch (err) {
            return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': 'Invalid JSON' })).setMimeType(ContentService.MimeType.JSON);
        }

        const { name, email } = data;

        // Validate
        if (!email || !name) {
            return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': 'Missing name or email' })).setMimeType(ContentService.MimeType.JSON);
        }

        // Check duplicates
        if (emailIndex > -1) {
            const dataRange = sheet.getDataRange();
            const values = dataRange.getValues();
            // Simple duplicate check - for very large lists, this is inefficient but fine for <10k rows
            for (let i = 1; i < values.length; i++) {
                if (values[i][emailIndex] === email) {
                    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': 'Email already registered' })).setMimeType(ContentService.MimeType.JSON);
                }
            }
        }

        const timestamp = new Date();
        sheet.appendRow([timestamp, name, email]);

        // Return success
        return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() })).setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

// Function to handle CORS (Cross-Origin Resource Sharing)
function doGet(e) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Endpoint is ready' })).setMimeType(ContentService.MimeType.JSON);
}

function setup() {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = doc.getSheetByName(SHEET_NAME);
    if (!sheet) {
        sheet = doc.insertSheet(SHEET_NAME);
        sheet.appendRow(['Timestamp', 'Name', 'Email']);
    }
}
