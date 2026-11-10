# Redefining Architecture — Studio Website (Next.js)

A digital atelier and architectural portfolio for **Redefining Architecture**, an architectural practice with studios in Kolkata and Bhubaneswar led by a registered architect with over twenty years of experience across India and the Gulf.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Quick Start

### 1. Requirements
- Node.js 18.18 or newer
- npm 9.0 or newer

### 2. Install & Run
```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm start
```

### 4. Code Quality
```bash
npm run lint
```

---

## Key Features & Structure

- **App Router Architecture (`src/app`)**:
  - `/` — Homepage with hero showcase, interactive metrics, and selected works
  - `/projects` — Curated architectural commissions and typology filter
  - `/projects/[slug]` — Individual project case studies with static generation (`generateStaticParams`)
  - `/who-we-are` — Monograph, principals, and leadership roster
  - `/dialogue-with-nature` — Environmental charter & 4-pillar manifesto
  - `/dialogue-with-india` — Regional & statutory context
  - `/net-positive` — Sustainable building metrics & philosophy
  - `/design` — Design philosophy & methodologies
  - `/life-at-studio` — Studio culture & craftsmanship
  - `/news` — Updates, press, and publications
  - `/contact` — Comprehensive inquiry form with automated email dispatch to `info@redefinedesignstudio.in`
  - `/api/inquiry` — Serverless inquiry submission route with email delivery (SMTP / Resend) and local persistent backup

- **Email Inquiry Routing**:
  - Full instructions provided in [`EMAIL_SETUP.md`](./EMAIL_SETUP.md) for configuring SMTP (Gmail, Zoho, Titan) or Resend.

- **Deployment**:
  - **Hostinger**: Complete guide in [`HOSTINGER_DEPLOYMENT.md`](./HOSTINGER_DEPLOYMENT.md) for hPanel Node.js Web Apps, Hostinger VPS, or static hosting.
  - **Vercel**: Pre-configured via `vercel.json` with zero-config auto-deployments.

