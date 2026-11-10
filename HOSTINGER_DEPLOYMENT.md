# Hostinger deployment

This is a Next.js server application. It must run on a **Hostinger VPS** (or another Node.js-capable server), rather than as a static HTML upload, because the enquiry endpoint at `/api/inquiry` securely forwards submissions to Google Sheets.

## Upload

1. Create a Hostinger VPS using a Node.js-capable template, then point your domain's DNS A record to the VPS IP address.
2. Upload this project folder (do not upload `node_modules` or `.next`) using Git, SFTP, or SSH.
3. On the VPS, install Node.js 20 or newer, then run `npm ci` and `npm run build` from the project folder.
4. Set `NODE_ENV=production` and run `npm run start`. Use PM2 or Hostinger CloudPanel to keep the service running and map the domain to port 3000.
5. Enable SSL in CloudPanel or through your reverse proxy, then test the live contact form.

## Enquiry delivery

The Google Apps Script URL supplied by the studio is configured in the application route. Both the popup enquiry and full contact form submit through the same route and send the following values to the sheet: name, email, phone, service, location, message, form type, page, and submission ID.

To change the destination without touching code, set `GOOGLE_SHEET_WEBHOOK_URL` in the VPS/CloudPanel environment variables, then rebuild and restart.

## Before going live

- Confirm the Apps Script deployment is set to accept requests from anyone who visits the website.
- Submit one real test enquiry and confirm the row appears in Google Sheets.
- Set the production domain in `metadataBase` in `src/app/layout.tsx` if it differs from `https://www.redefinedesignstudio.in`.
