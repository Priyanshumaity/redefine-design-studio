# Email Inquiry Setup Guide — info@redefinedesignstudio.in

This project is configured to automatically route all customer inquiry form submissions directly to **`info@redefinedesignstudio.in`**.

When a customer submits an inquiry, an email is dispatched containing:
- **Client Full Name**
- **Client Email** (the email is set as `reply-to`, so clicking **Reply** immediately replies to the customer)
- **Phone Number**
- **Discipline / Service Requested**
- **Project Site / Location**
- **Detailed Project Brief & Scope**
- **Submission Reference ID & Timestamp**

In addition, every inquiry is backed up locally in `data/inquiries.json` so no lead is ever lost.

---

## Quick Configuration (Choose One Method)

### Method 1: Gmail / Google Workspace (Free & 2 Minutes)

If you use a Gmail or Google Workspace account to send:

1. Go to your **Google Account** → **Security** → **2-Step Verification**.
2. Scroll to the bottom and click **App passwords**.
3. Create a new App Password (name it e.g. `Studio Website`).
4. Copy the 16-character generated password.
5. In your `.env` (or in Vercel Environment Variables):
```env
CONTACT_RECEIVER_EMAIL="info@redefinedesignstudio.in"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER="your-gmail-or-workspace-account@gmail.com"
SMTP_PASS="your-16-character-app-password"
SMTP_FROM="Redefining Architecture <your-gmail-or-workspace-account@gmail.com>"
```

---

### Method 2: Domain SMTP (Zoho Mail, Titan, cPanel, Hostinger)

If `info@redefinedesignstudio.in` is hosted on Zoho or another business email provider:

```env
CONTACT_RECEIVER_EMAIL="info@redefinedesignstudio.in"
SMTP_HOST="smtp.zoho.in"          # or your provider's SMTP host
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER="info@redefinedesignstudio.in"
SMTP_PASS="your-email-password-or-app-password"
SMTP_FROM="Redefining Architecture <info@redefinedesignstudio.in>"
```

---

### Method 3: Resend (Best for Vercel Serverless Deployments)

1. Sign up for free at [resend.com](https://resend.com).
2. Generate an API Key under **API Keys**.
3. Add the following to your environment variables:
```env
CONTACT_RECEIVER_EMAIL="info@redefinedesignstudio.in"
RESEND_API_KEY="re_123456789..."
EMAIL_FROM="Redefining Architecture <onboarding@resend.dev>"
```
*(Once you verify your domain `redefinedesignstudio.in` in Resend, you can change `EMAIL_FROM` to `Redefining Architecture <inquiries@redefinedesignstudio.in>`)*.

---

## Adding Environment Variables on Vercel

1. Open your project on the [Vercel Dashboard](https://vercel.com).
2. Go to **Settings** → **Environment Variables**.
3. Add the variables from your chosen method above.
4. Redeploy the project for the variables to take effect.

