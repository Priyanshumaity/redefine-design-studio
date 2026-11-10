# Google Sheets inquiry connection

The contact form posts to Google Sheets from the server when `GOOGLE_SHEET_WEBHOOK_URL` is configured. This is the primary enquiry register; email delivery is optional and independent.

1. Deploy the supplied script from [`google-apps-script/Code.gs`](./google-apps-script/Code.gs) as a Google Apps Script Web App. It accepts standard form fields and creates the `Inquiries` tab and headers automatically.
2. Add the resulting `/exec` URL to the production host and local `.env.local`:

```env
GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

3. Submit one test inquiry. The form will only show its confirmation after the configured Google Sheet or email service has accepted the submission.

Do not commit `.env.local` or the deployed URL if it includes sensitive deployment metadata.

---

# Start Website

```bash```
  npm install
  npm run dev

# production build

```bash```
  npm run build
  npm run start


> **Note:** The inquiry system has been switched to direct **Email Routing** to **`info@redefinedesignstudio.in`**.
> See [`EMAIL_SETUP.md`](./EMAIL_SETUP.md) for full instructions on configuring SMTP or Resend.
>
> *(Legacy Google Sheets documentation preserved below for reference if needed)*

---

## Method A: Google Apps Script Webhook (Fastest & Recommended)

### Step 1: Create your Google Sheet
1. Open [Google Sheets](https://sheets.new) and create a new blank spreadsheet.
2. In Row 1, add these headers in columns A through G:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `Phone`
   - **E1**: `Project Type`
   - **F1**: `Location`
   - **G1**: `Message`

### Step 2: Add the Apps Script Webhook
1. In your Google Sheet, click **Extensions** > **Apps Script**.
2. Delete any code in the editor and paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.projectType || "",
      data.location || "",
      data.message || ""
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy as Web App
1. Click the blue **Deploy** button > **New deployment**.
2. Click the gear icon next to "Select type" and select **Web app**.
3. Fill in:
   - **Description**: `Inquiry Webhook`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` (Important so your site can post inquiries)
4. Click **Deploy**.
5. Copy the **Web app URL** (starts with `https://script.google.com/macros/s/.../exec`).

### Step 4: Add URL to `.env.local`
In your project folder, create or open `.env.local` and add:

```env
GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

---

## Method B: Google Cloud Service Account (Google Sheets API v4)

If you already use Google Cloud Platform (GCP):

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and enable the **Google Sheets API**.
2. Create a **Service Account** under **IAM & Admin** > **Service Accounts**.
3. Generate a new JSON key for the Service Account.
4. Share your Google Sheet with the Service Account email (give **Editor** permissions).
5. In `.env.local`, configure:

```env
GOOGLE_SHEET_ID="your_google_sheet_id_from_url"
GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

---

## Automatic Fallback Storage
Even if your Google Sheet is offline or network fails, all submitted inquiries are immediately recorded and preserved locally in:
`data/inquiries.json`
