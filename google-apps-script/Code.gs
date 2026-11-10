/**
 * Redefining Architecture — inquiry form → Google Sheets
 *
 * Paste this file into Extensions → Apps Script of the Google Sheet that
 * should receive inquiries, then Deploy → New deployment → Web app:
 *   Execute as:       Me
 *   Who has access:   Anyone
 * Copy the web-app URL (ends in /exec) into the website's .env as
 * VITE_GOOGLE_SHEETS_ENDPOINT. Full steps: website/README.md.
 */

/** Tab that rows are written to (created automatically). */
const SHEET_NAME = 'Inquiries';

/** Optional: comma-separated addresses to email on every new inquiry. Leave '' to disable. */
const NOTIFY_EMAILS = '';

/** Column order. Keys map to the form field names sent by the website. */
const COLUMNS = [
  ['Received', '_timestamp'],
  ['Form', 'formType'],
  ['Name', 'name'],
  ['Organisation', 'organisation'],
  ['Email', 'email'],
  ['Phone', 'phone'],
  ['Project type', 'projectTypes'],
  ['Services needed', 'services'],
  ['Site location', 'location'],
  ['Plot area', 'plotArea'],
  ['Built-up area', 'builtUpArea'],
  ['Approval authority', 'authority'],
  ['Timeline', 'timeline'],
  ['Brief / message', 'message'],
  ['Heard about us', 'source'],
  ['Page', 'page'],
  ['Submission ID', 'submissionId'],
  ['User agent', 'userAgent'],
];

const MAX_FIELD_LENGTH = 5000;

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    const p = (e && e.parameter) || {};

    // Honeypot: real visitors never fill this hidden field.
    if (p.hp_field) return json_({ ok: true });

    const missing = ['name', 'email', 'message'].filter((k) => !String(p[k] || '').trim());
    if (missing.length) return json_({ ok: false, error: 'Missing required fields: ' + missing.join(', ') });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(p.email).trim())) {
      return json_({ ok: false, error: 'Please enter a valid email address.' });
    }

    const sheet = getSheet_();

    // Ignore repeats of the same submission (retries, double clicks).
    const id = String(p.submissionId || '');
    if (id && isDuplicate_(sheet, id)) return json_({ ok: true, duplicate: true });

    const row = COLUMNS.map(([, key]) => (key === '_timestamp' ? new Date() : clean_(p[key])));
    sheet.appendRow(row);

    if (NOTIFY_EMAILS) notify_(p);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'Server error — please try again.' });
  } finally {
    lock.releaseLock();
  }
}

/** Visiting the /exec URL in a browser shows this — handy for checking the deployment. */
function doGet() {
  return json_({ ok: true, service: 'Redefining Architecture inquiries' });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS.map(([title]) => title));
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold').setBackground('#f3ede0');
    sheet.setFrozenRows(1);
    sheet.getRange('A:A').setNumberFormat('dd mmm yyyy, hh:mm');
  }
  return sheet;
}

function isDuplicate_(sheet, id) {
  const idCol = COLUMNS.findIndex(([, key]) => key === 'submissionId') + 1;
  const last = sheet.getLastRow();
  if (last < 2) return false;
  const n = Math.min(100, last - 1);
  return sheet
    .getRange(last - n + 1, idCol, n, 1)
    .getValues()
    .some((r) => r[0] === id);
}

/** Trim, cap length, and neutralise spreadsheet formula injection (=, +, -, @). */
function clean_(value) {
  let s = String(value == null ? '' : value).trim().slice(0, MAX_FIELD_LENGTH);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return s;
}

function notify_(p) {
  const lines = COLUMNS.filter(([, key]) => key !== '_timestamp' && key !== 'userAgent' && p[key])
    .map(([title, key]) => title + ': ' + String(p[key]).slice(0, MAX_FIELD_LENGTH));
  MailApp.sendEmail({
    to: NOTIFY_EMAILS,
    replyTo: String(p.email || ''),
    subject: 'New inquiry — ' + String(p.name || '').slice(0, 80) + (p.projectTypes ? ' (' + String(p.projectTypes).slice(0, 60) + ')' : ''),
    body: lines.join('\n'),
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
