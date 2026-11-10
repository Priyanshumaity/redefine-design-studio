import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const DEFAULT_RECIPIENT = "info@redefinedesignstudio.in";
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzsk9Xgfyl1A9umOnxJib6HM-JVvSxlR583vxM27TtwWbAHEnWIGf1HHb0Jq4cf8iWA/exec";

function toFormBody(values: Record<string, string>) {
  return new URLSearchParams(values).toString();
}

function escapeHtml(value: unknown) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[char] || char);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, location, message } = body;
    const projectType = body.projectType || body.service || "General enquiry";

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString().replace("T", " ").substring(0, 19);
    const inquiryId = `INQ-${Date.now()}`;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || DEFAULT_RECIPIENT;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeProjectType = escapeHtml(projectType || "General Architecture");
    const safeLocation = escapeHtml(location || "Not specified");
    const safeMessage = escapeHtml(message);

    // Build Email Subject and Contents
    const subject = `New Inquiry: ${name} — ${projectType || "Architecture"} (${location || "Location not specified"})`;

    const textContent = `
========================================
NEW PROJECT INQUIRY — REDEFINING DESIGN STUDIO
========================================

Reference ID: ${inquiryId}
Received At : ${timestamp} (UTC)

CLIENT DETAILS:
- Name        : ${name}
- Email       : ${email}
- Phone       : ${phone || "Not provided"}
- Project Type: ${projectType || "General Architecture"}
- Location    : ${location || "Not specified"}

PROJECT SCOPE & MESSAGE:
${message}

----------------------------------------
To reply directly to the client, reply to this email or write to: ${email}
========================================
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 32px 16px; background-color: #0D0C0B; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ECE9E1;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #141311; border: 1px solid #262420; padding: 32px;">
    
    <!-- Header -->
    <div style="border-bottom: 1px solid #262420; padding-bottom: 20px; margin-bottom: 24px;">
      <div style="font-size: 10px; font-family: monospace; letter-spacing: 0.25em; text-transform: uppercase; color: #C5A85C; margin-bottom: 8px;">
        Redefining Design Studio · Client Inquiry
      </div>
      <h1 style="font-size: 22px; font-weight: normal; margin: 0; color: #F7F5F0;">
        New Project Consultation Request
      </h1>
      <div style="font-size: 11px; font-family: monospace; color: #858178; margin-top: 8px;">
        Ref: ${inquiryId} · ${timestamp}
      </div>
    </div>

    <!-- Client Info Table -->
    <div style="margin-bottom: 24px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <tr>
          <td style="padding: 8px 0; color: #858178; width: 140px; font-family: monospace; text-transform: uppercase; font-size: 11px;">Client Name</td>
          <td style="padding: 8px 0; color: #F7F5F0; font-weight: 600;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #858178; font-family: monospace; text-transform: uppercase; font-size: 11px;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #C5A85C; text-decoration: none;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #858178; font-family: monospace; text-transform: uppercase; font-size: 11px;">Phone</td>
          <td style="padding: 8px 0;"><a href="tel:${safePhone}" style="color: #ECE9E1; text-decoration: none;">${safePhone}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #858178; font-family: monospace; text-transform: uppercase; font-size: 11px;">Discipline / Service</td>
          <td style="padding: 8px 0; color: #ECE9E1;">${safeProjectType}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #858178; font-family: monospace; text-transform: uppercase; font-size: 11px;">Site / Location</td>
          <td style="padding: 8px 0; color: #ECE9E1;">${safeLocation}</td>
        </tr>
      </table>
    </div>

    <!-- Message Section -->
    <div style="margin-bottom: 28px; background-color: #0D0C0B; border: 1px solid #262420; padding: 20px;">
      <div style="font-size: 10px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.15em; color: #C5A85C; margin-bottom: 12px;">
        Project Brief & Site Requirements
      </div>
      <div style="font-size: 13px; line-height: 1.7; color: #ECE9E1; white-space: pre-wrap;">${safeMessage}</div>
    </div>

    <!-- Action Button -->
    <div style="text-align: center; padding-top: 12px; border-top: 1px solid #262420;">
      <a href="mailto:${email}?subject=${encodeURIComponent("Re: Inquiry regarding " + (projectType || "Architecture project") + " — Redefining Design Studio")}" 
         style="display: inline-block; background-color: #C5A85C; color: #0D0C0B; padding: 12px 24px; font-size: 11px; font-family: monospace; font-weight: bold; text-decoration: none; text-transform: uppercase; letter-spacing: 0.15em;">
        Reply to Client Directly
      </a>
    </div>

    <!-- Footer Note -->
    <div style="margin-top: 24px; font-size: 11px; color: #6E6A62; text-align: center;">
      This email was generated from the inquiry form on <a href="https://redefinedesignstudio.in" style="color: #858178; text-decoration: none;">redefinedesignstudio.in</a> and delivered to ${recipientEmail}.
    </div>

  </div>
</body>
</html>
`.trim();

    let emailSent = false;
    let emailServiceUsed = "none";
    let sheetLogged = false;

    // Google Apps Script receives URL-encoded parameters (rather than JSON).
    // Keeping this request server-side avoids browser CORS restrictions and means
    // the Sheet endpoint is never exposed to a visitor.
    const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || GOOGLE_SHEET_WEBHOOK_URL;
    if (sheetWebhookUrl) {
      try {
        const sheetResponse = await fetch(sheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
          body: toFormBody({
            name: String(name).trim(),
            email: String(email).trim(),
            phone: String(phone || "").trim(),
            projectTypes: String(projectType || "General Architecture").trim(),
            services: String(projectType || "General Architecture").trim(),
            location: String(location || "").trim(),
            message: String(message).trim(),
            formType: String(body.formType || "Website inquiry"),
            page: String(body.page || "/contact"),
            submissionId: inquiryId,
            userAgent: req.headers.get("user-agent") || "",
          }),
          cache: "no-store",
        });

        if (sheetResponse.ok) {
          const result = await sheetResponse.json().catch(() => null);
          sheetLogged = !result || result.ok !== false;
          if (!sheetLogged) console.error("[Inquiry] Google Sheets rejected the submission:", result);
        } else {
          console.error("[Inquiry] Google Sheets webhook returned", sheetResponse.status);
        }
      } catch (sheetError) {
        console.error("[Inquiry] Google Sheets dispatch error:", sheetError);
      }
    }

    // 1. Send via Resend REST API if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!emailSent && resendApiKey) {
      try {
        const fromAddress = process.env.EMAIL_FROM || "Redefining Design Studio <onboarding@resend.dev>";
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [recipientEmail],
            reply_to: email,
            subject,
            text: textContent,
            html: htmlContent,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
          emailServiceUsed = "Resend API";
          console.log(`[Inquiry] Successfully sent email to ${recipientEmail} via Resend API`);
        } else {
          const errData = await resendRes.text();
          console.error("[Inquiry] Resend API error:", errData);
        }
      } catch (resendErr) {
        console.error("[Inquiry] Resend dispatch error:", resendErr);
      }
    }

    // 2. Send via SMTP (Nodemailer) if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;

    if (!emailSent && smtpHost && smtpUser && smtpPass) {
      try {
        const port = Number(process.env.SMTP_PORT) || 465;
        const secure = process.env.SMTP_SECURE === "true" || port === 465;
        const from = process.env.SMTP_FROM || `"Redefining Design Studio" <${smtpUser}>`;

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port,
          secure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from,
          to: recipientEmail,
          replyTo: email,
          subject,
          text: textContent,
          html: htmlContent,
        });

        emailSent = true;
        emailServiceUsed = `SMTP (${smtpHost})`;
        console.log(`[Inquiry] Successfully sent email to ${recipientEmail} via SMTP`);
      } catch (smtpErr) {
        console.error("[Inquiry] SMTP dispatch error:", smtpErr);
      }
    }

    // 3. Optional: Send via custom Email Webhook URL if provided
    const webhookUrl = process.env.EMAIL_WEBHOOK_URL;
    if (!emailSent && webhookUrl) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: recipientEmail,
            replyTo: email,
            subject,
            name,
            email,
            phone,
            projectType,
            location,
            message,
            timestamp,
          }),
        });

        if (webhookRes.ok) {
          emailSent = true;
          emailServiceUsed = "Email Webhook";
          console.log(`[Inquiry] Successfully forwarded email via Webhook to ${recipientEmail}`);
        }
      } catch (webhookErr) {
        console.error("[Inquiry] Webhook dispatch error:", webhookErr);
      }
    }

    // 4. Development fallback only. Local files are not a durable delivery
    // mechanism on a serverless host, so the response below never claims a lead
    // was delivered solely because this backup succeeded.
    if (!emailSent && !sheetLogged) {
      console.warn(
        `[Inquiry] Email dispatch skipped (no SMTP or Resend credentials provided). ` +
        `Target recipient: ${recipientEmail}. Detailed payload logged to inquiries.json.`
      );
    }

    // 5. Persistent local backup storage (ensures no lead is ever lost)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, "inquiries.json");
      let currentInquiries: any[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        try {
          currentInquiries = JSON.parse(fileContent);
        } catch {
          currentInquiries = [];
        }
      }

      const newEntry = {
        id: inquiryId,
        timestamp,
        name,
        email,
        phone: phone || "",
        projectType: projectType || "General Architecture",
        location: location || "",
        message,
        recipientEmail,
        emailSent,
        sheetLogged,
        emailServiceUsed,
      };

      currentInquiries.unshift(newEntry);
      fs.writeFileSync(filePath, JSON.stringify(currentInquiries, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("[Inquiry] Local backup storage error:", fsErr);
    }

    if (!emailSent && !sheetLogged) {
      return NextResponse.json(
        {
          success: false,
          error: "The enquiry service is not configured yet. Please email the studio directly.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received by the studio.",
      emailSent,
      sheetLogged,
      recipient: recipientEmail,
    });
  } catch (error: any) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
