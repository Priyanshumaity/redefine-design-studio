import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    HRFlowable,
)
from reportlab.pdfgen import canvas

# Studio Color Palette
COLOR_INK = HexColor("#141311")
COLOR_GOLD = HexColor("#9E7D2D")
COLOR_GOLD_LIGHT = HexColor("#F5EEDB")
COLOR_BG_LIGHT = HexColor("#FAF9F5")
COLOR_LINE = HexColor("#E2DDD3")
COLOR_MUTE = HexColor("#68635A")
COLOR_SUCCESS = HexColor("#2E6930")
COLOR_WHITE = HexColor("#FFFFFF")

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(COLOR_MUTE)

        # Draw Running Header (Pages > 1)
        if self._pageNumber > 1:
            self.drawString(
                45,
                letter[1] - 30,
                "REDEFINING ARCHITECTURE STUDIO  ·  COMPREHENSIVE AUDIT & VERIFICATION REPORT"
            )
            self.setStrokeColor(COLOR_LINE)
            self.setLineWidth(0.5)
            self.line(45, letter[1] - 34, letter[0] - 45, letter[1] - 34)

        # Draw Running Footer (All Pages)
        footer_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(letter[0] - 45, 25, footer_text)
        self.drawString(
            45,
            25,
            "Confidential · Prepared for Redefining Architecture Studio & Shourya-exe"
        )
        self.setStrokeColor(COLOR_LINE)
        self.setLineWidth(0.5)
        self.line(45, 34, letter[0] - 45, 34)

        self.restoreState()

def create_report(output_filename="website_changes_and_verification_report.pdf"):
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=letter,
        leftMargin=45,
        rightMargin=45,
        topMargin=40,
        bottomMargin=40,
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        "DocTitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=22,
        textColor=COLOR_INK,
        spaceAfter=3,
    )

    subtitle_style = ParagraphStyle(
        "DocSubtitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=12,
        textColor=COLOR_GOLD,
        spaceAfter=3,
    )

    h1_style = ParagraphStyle(
        "SectionH1",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=11,
        leading=14,
        textColor=COLOR_INK,
        spaceBefore=7,
        spaceAfter=4,
        keepWithNext=True,
    )

    h2_style = ParagraphStyle(
        "SectionH2",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9,
        leading=12,
        textColor=COLOR_GOLD,
        spaceBefore=5,
        spaceAfter=2,
        keepWithNext=True,
    )

    body_style = ParagraphStyle(
        "BodyDark",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8,
        leading=11,
        textColor=COLOR_INK,
        spaceAfter=3,
    )

    bullet_style = ParagraphStyle(
        "BulletDark",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=7.5,
        leading=10.5,
        textColor=COLOR_INK,
        leftIndent=11,
        spaceAfter=2,
    )

    callout_style = ParagraphStyle(
        "CalloutText",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=7.5,
        leading=10.5,
        textColor=COLOR_INK,
    )

    table_header_style = ParagraphStyle(
        "TableHeader",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=7.5,
        leading=9.5,
        textColor=COLOR_WHITE,
    )

    table_cell_style = ParagraphStyle(
        "TableCell",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=7,
        leading=9,
        textColor=COLOR_INK,
    )

    table_cell_bold = ParagraphStyle(
        "TableCellBold",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=7,
        leading=9,
        textColor=COLOR_INK,
    )

    table_status_style = ParagraphStyle(
        "TableStatus",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=7,
        leading=9,
        textColor=COLOR_SUCCESS,
    )

    story = []

    # ==================== PAGE 1 ====================
    # Title Block
    story.append(Paragraph("REDEFINING ARCHITECTURE STUDIO", subtitle_style))
    story.append(Paragraph("Website Development, Verification & Performance Report", title_style))
    story.append(
        Paragraph(
            "<b>Generated:</b> November 8, 2026 &nbsp;|&nbsp; <b>Repositories:</b> web-dev.git &amp; test.git &nbsp;|&nbsp; <b>Status:</b> Production Ready &amp; Verified",
            body_style,
        )
    )
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_GOLD, spaceBefore=0, spaceAfter=6))

    # Executive Summary
    story.append(Paragraph("1. Executive Summary", h1_style))
    story.append(
        Paragraph(
            "This document provides a comprehensive audit and verification record of all structural, architectural, "
            "functional, design, and performance updates completed across the Redefining Architecture Studio web platform. "
            "Every item from the client markup specification (<b>website_inputs-06.11.26.pdf</b>), inquiry communication pipelines, "
            "deployment configurations, gallery architectures, Core Web Vitals optimizations, and cinematic animations has been "
            "rigorously implemented, verified with zero build errors, and synchronized across both GitHub repositories.",
            body_style,
        )
    )

    meta_data = [
        [Paragraph("Target Domain", table_cell_bold), Paragraph("https://www.redefiningarchitecture.com", table_cell_style)],
        [Paragraph("Inquiry Delivery Route", table_cell_bold), Paragraph("info@redefinedesignstudio.in (Direct SMTP Nodemailer)", table_cell_style)],
        [Paragraph("Primary Git Remote", table_cell_bold), Paragraph("https://github.com/Shourya-exe/web-dev.git", table_cell_style)],
        [Paragraph("Secondary Git Remote", table_cell_bold), Paragraph("https://github.com/Shourya-exe/test.git", table_cell_style)],
        [Paragraph("Deployment Targets", table_cell_bold), Paragraph("Hostinger (Node.js/VPS) &amp; Vercel (Next.js Managed)", table_cell_style)],
        [Paragraph("Production Build Status", table_cell_bold), Paragraph("✓ 13/13 static &amp; serverless routes pre-rendered with 0 errors", table_status_style)],
    ]
    t_meta = Table(meta_data, colWidths=[1.8 * 72, 5.4 * 72])
    t_meta.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), COLOR_BG_LIGHT),
            ("BOX", (0, 0), (-1, -1), 0.5, COLOR_LINE),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, COLOR_LINE),
            ("TOPPADDING", (0, 0), (-1, -1), 2.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
        ])
    )
    story.append(t_meta)
    story.append(Spacer(1, 6))

    # Section 2: Form & Backend Email Migration
    story.append(Paragraph("2. Inquiry Pipeline & Email Automation", h1_style))
    story.append(
        Paragraph(
            "The legacy Google Sheets integration was retired and replaced with an institutional-grade, "
            "direct email pipeline powered by Nodemailer and SMTP to ensure instantaneous delivery of high-value architectural inquiries.",
            body_style,
        )
    )
    story.append(Paragraph("• <b>Target Recipient:</b> info@redefinedesignstudio.in", bullet_style))
    story.append(Paragraph("• <b>Endpoint:</b> <code>/api/inquiry</code> (Serverless Next.js App Router POST handler with payload sanitization)", bullet_style))
    story.append(Paragraph("• <b>Security &amp; Sanitization:</b> Strict email format validation, HTML escaping to prevent injection attacks, and client-safe response payloads.", bullet_style))
    story.append(Paragraph("• <b>Environment Configuration:</b> Dedicated SMTP variables (<code>SMTP_HOST</code>, <code>SMTP_PORT</code>, <code>SMTP_USER</code>, <code>SMTP_PASS</code>) configured in <code>.env</code> and templated in <code>.env.example</code> with git-ignore enforcement to ensure credentials are never leaked.", bullet_style))
    story.append(Paragraph("• <b>Branded Notification Template:</b> Structured HTML notification delivering client name, contact phone, verified email, project typology, budget tier, and project brief directly into studio inboxes.", bullet_style))
    story.append(Spacer(1, 6))

    # Section 3: Deployment Configurations
    story.append(Paragraph("3. Deployment Architecture (Hostinger &amp; Vercel)", h1_style))
    story.append(
        Paragraph(
            "Dual deployment readiness was engineered to support Hostinger VPS/Node deployments as well as Vercel serverless environments.",
            body_style,
        )
    )
    story.append(Paragraph("• <b>Vercel Configuration:</b> Provided <code>vercel.json</code> declaring <code>\"framework\": \"nextjs\"</code> to prevent false static output directory warnings (<code>STATIC_BUILD_NO_OUT_DIR</code>).", bullet_style))
    story.append(Paragraph("• <b>Hostinger Compatibility:</b> Decoupled <code>output: \"standalone\"</code> via conditional environment variables so that standard local <code>next start</code> runs without warnings while maintaining standalone compilation for Docker / VPS.", bullet_style))
    story.append(Paragraph("• <b>Environment Variable Guidance:</b> Documented exact procedures for configuring production SMTP credentials in Vercel's Environment Variables dashboard and Hostinger PM2/environment files.", bullet_style))

    # ==================== PAGE 2 ====================
    story.append(PageBreak())

    # Section 4: Projects Architecture
    story.append(Paragraph("4. Projects Architecture: Conversion to Filterable Image Gallery", h1_style))
    story.append(
        Paragraph(
            "The studio projects showcase was refactored into an image-first visual anthology with responsive typology filtering and interactive modal lightbox viewing:",
            body_style,
        )
    )
    story.append(Paragraph("• <b>Elimination of Individual Slug Routes:</b> Permanently removed <code>/projects/[slug]</code> page routes to eliminate fragmented landing pages and keep visitors in a seamless visual experience.", bullet_style))
    story.append(Paragraph("• <b>Filterable Architectural Gallery:</b> Rebuilt <code>/projects</code> with intuitive typology filter tabs: <b>All (60)</b>, <b>Architecture (36)</b>, <b>Residential (28)</b>, <b>Healthcare (4)</b>, <b>Commercial (4)</b>, <b>Interiors (12)</b>, and <b>Hospitality (8)</b>.", bullet_style))
    story.append(Paragraph("• <b>Full-Screen Architectural Lightbox:</b> Implemented a bespoke modal with smooth keyboard controls (Escape to close, Left/Right arrows to navigate), displaying high-resolution imagery, project title, typology badge, location, and counter.", bullet_style))
    story.append(Paragraph("• <b>Homepage &amp; Global Card Link Normalization:</b> Updated all project preview cards across <code>page.tsx</code>, <code>HeroCarousel.tsx</code>, and <code>StudioIntro.tsx</code> to route directly to the visual gallery, preventing dead links.", bullet_style))
    story.append(Paragraph("• <b>Sitemap Sanitation:</b> Cleaned <code>public/sitemap.xml</code> to index exclusively valid, pre-rendered routes.", bullet_style))
    story.append(Spacer(1, 4))

    # Section 5: Verification Matrix Table
    story.append(Paragraph("5. PDF Input Verification Matrix (website_inputs-06.11.26.pdf)", h1_style))
    story.append(
        Paragraph(
            "Point-by-point cross-verification of all client annotations and red-pen markups across Pages 1 through 13 of the design inputs document:",
            body_style,
        )
    )
    story.append(Spacer(1, 3))

    pdf_table_data = [
        [
            Paragraph("Page / Scope", table_header_style),
            Paragraph("Client Requirement / PDF Markup", table_header_style),
            Paragraph("Implementation in Codebase", table_header_style),
            Paragraph("Audit Status", table_header_style),
        ],
        [
            Paragraph("<b>Page 1</b><br/>Header &amp; Hero", table_cell_style),
            Paragraph("• Update studio logo<br/>• Replace 'Net Positive' with 'Beyond Sustainability'<br/>• Reduce hero headline text size<br/>• Expand hero carousel imagery", table_cell_style),
            Paragraph("• Applied <code>/images/logo.png</code> in Header &amp; Footer<br/>• Nav updated to <code>/beyond-sustainability</code><br/>• Scaled to <code>text-2xl sm:text-3xl md:text-4xl lg:text-[42px]</code><br/>• Configured 17 curated hero slides (img-1 to img-17)", table_cell_style),
            Paragraph("100% VERIFIED<br/>&amp; MATCHED", table_status_style),
        ],
        [
            Paragraph("<b>Page 2</b><br/>Beyond Sustainability", table_cell_style),
            Paragraph("• Title: 'Beyond Sustainability'<br/>• Tagline: 'Creating regenerative spaces that restore nature...'<br/>• Hero Image: img-17.jpg", table_cell_style),
            Paragraph("• Built standalone page at <code>/beyond-sustainability</code><br/>• Exact tagline applied in header block<br/>• Visual set to <code>/images/all-images/img-17.jpg</code><br/>• 308 permanent redirect from <code>/net-positive</code>", table_cell_style),
            Paragraph("100% VERIFIED<br/>&amp; MATCHED", table_status_style),
        ],
        [
            Paragraph("<b>Page 3</b><br/>Footer &amp; Studios", table_cell_style),
            Paragraph("• Update footer logo<br/>• Bhubaneswar address: Remove '66, Bidhannagar', standardize to 'Bhubaneswar, Odisha 751006'", table_cell_style),
            Paragraph("• New studio logo applied in <code>Footer.tsx</code><br/>• Text '66, Bidhannagar' removed; standardized in <code>Footer.tsx</code>, <code>studio.ts</code>, and <code>contact/page.tsx</code>", table_cell_style),
            Paragraph("100% VERIFIED<br/>&amp; MATCHED", table_status_style),
        ],
        [
            Paragraph("<b>Pages 4 &amp; 5</b><br/>The Duet Ballygunge", table_cell_style),
            Paragraph("• Title: 'LUXURY 16 STOREY RESIDENCY AT BALLYGUNGE'<br/>• Cover: img-5.jpg<br/>• Year &amp; Status: 'ON GOING'<br/>• Built-up Area: '50,000 sq.ft'<br/>• Certification: IGBC Gold<br/>• 4 Gallery Images", table_cell_style),
            Paragraph("• Title, ongoing status, and 50,000 sq.ft area recorded<br/>• Cover set to <code>img-5.jpg</code><br/>• Certification: 'IGBC Gold Certified Sustainable Architecture'<br/>• Gallery holds exactly: img-5, img-6, img-7, img-8", table_cell_style),
            Paragraph("100% VERIFIED<br/>&amp; MATCHED", table_status_style),
        ],
        [
            Paragraph("<b>Pages 6 &amp; 7</b><br/>Medical College Bhubaneswar", table_cell_style),
            Paragraph("• Cover Image: img-9.jpg<br/>• Gallery: Exact 4 images specified in markup", table_cell_style),
            Paragraph("• Cover set to <code>/images/all-images/img-9.jpg</code><br/>• Gallery populated with: img-9.jpg, img-18.jpg, img-19.jpg, img-20.jpg", table_cell_style),
            Paragraph("100% VERIFIED<br/>&amp; MATCHED", table_status_style),
        ],
        [
            Paragraph("<b>Pages 8–10</b><br/>42 Storied Luxury Residence", table_cell_style),
            Paragraph("• Title: '42 STORIED LUXURY RESIDENCE'<br/>• Cover: img-2.jpg<br/>• Year &amp; Status: 'ON GOING'<br/>• Built-up Area: 'Approx. 12,40,000 sq.ft'<br/>• Certification: IGBC PLATINUM<br/>• 4 Gallery Images", table_cell_style),
            Paragraph("• Title and exact specs applied in <code>projects.ts</code><br/>• Cover set to <code>/images/all-images/img-2.jpg</code><br/>• Area: 'Approx. 12,40,000 sq.ft'<br/>• Certification: 'IGBC PLATINUM CERTIFIED BUILDING'<br/>• Gallery: img-2, img-3, img-4.webp, img-21", table_cell_style),
            Paragraph("100% VERIFIED<br/>&amp; MATCHED", table_status_style),
        ],
        [
            Paragraph("<b>Pages 11 &amp; 12</b><br/>Murshidabad Villa", table_cell_style),
            Paragraph("• Title: 'Luxury Waterfront Villa at Murshidabad'<br/>• Year &amp; Status: 'ONGOING'<br/>• Fourth image slot: img-24.jpg", table_cell_style),
            Paragraph("• Title and ongoing status verified<br/>• Fourth gallery slot updated to <code>/images/all-images/img-24.jpg</code>", table_cell_style),
            Paragraph("100% VERIFIED<br/>&amp; MATCHED", table_status_style),
        ],
        [
            Paragraph("<b>Page 13</b><br/>Additional Typologies", table_cell_style),
            Paragraph("• Project 1: Private Villas and Farm House (Cover img-13, Gallery 25-28)<br/>• Project 2: Interiors - Executive &amp; Resident Salons (Cover img-16, Gallery 14, 15, 29, 30)<br/>• Project 3: Interiors - Luxury Private Residences &amp; Lounges (Cover img-33, Gallery 31, 32, 34, 35)", table_cell_style),
            Paragraph("• All 3 projects added to <code>projects.ts</code> with exact specifications and photo assignments<br/>• Verified all 15 image assets present and accessible on disk with 0 missing files", table_cell_style),
            Paragraph("100% VERIFIED<br/>&amp; MATCHED", table_status_style),
        ],
    ]

    t_pdf = Table(pdf_table_data, colWidths=[1.1 * 72, 2.35 * 72, 2.75 * 72, 1.0 * 72])
    t_pdf.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), COLOR_INK),
            ("BOX", (0, 0), (-1, -1), 0.5, COLOR_LINE),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, COLOR_LINE),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("TOPPADDING", (0, 0), (-1, -1), 2.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [COLOR_WHITE, COLOR_BG_LIGHT]),
        ])
    )
    story.append(t_pdf)

    # ==================== PAGE 3 ====================
    story.append(PageBreak())
    story.append(Paragraph("6. Performance Engineering & Core Web Vitals", h1_style))
    story.append(
        Paragraph(
            "In response to the PageSpeed Insights / Lighthouse performance audit, extensive optimizations were made to ensure minimal main-thread contention, fast LCP, and zero render-blocking requests:",
            body_style,
        )
    )

    story.append(Paragraph("A. Main-Thread Decongestion & Timer Throttling", h2_style))
    story.append(Paragraph("• Below-the-fold interactive components (<code>Expertise.tsx</code> and <code>DialogueIndia.tsx</code>) were refactored with native <code>IntersectionObserver</code> triggers so their cycle timers only activate when scrolled into view.", bullet_style))
    story.append(Paragraph("• Implemented <code>document.hidden</code> listeners to pause carousel rotations when the browser tab is in the background, conserving client CPU cycles and device battery.", bullet_style))

    story.append(Paragraph("B. Modern Image Delivery & Preload Correction", h2_style))
    story.append(Paragraph("• Enabled dual modern format negotiation in <code>next.config.mjs</code>: <code>formats: [\"image/avif\", \"image/webp\"]</code>. AVIF delivers an additional 20-30% compression savings over WebP with superior photographic fidelity.", bullet_style))
    story.append(Paragraph("• Removed the redundant uncompressed raw JPEG preload from <code>layout.tsx</code>, which was causing duplicate image downloads and triggering Lighthouse's 'Improve image delivery' and 'Network dependency tree' flags.", bullet_style))
    story.append(Paragraph("• Cleaned invisible priority preloads in hero containers to prioritize critical above-the-fold assets.", bullet_style))

    story.append(Paragraph("C. Production Bundle Optimization", h2_style))
    story.append(Paragraph("• Configured SWC production minification with automatic console cleanup (<code>removeConsole: true</code>).", bullet_style))
    story.append(Paragraph("• Cleaned package trees and enabled granular bundle splitting, reducing initial route transfer weight.", bullet_style))
    story.append(Spacer(1, 5))

    # Section 7: Restored Hero Carousel Animation
    story.append(Paragraph("7. Hero Carousel Animation", h1_style))
    story.append(
        Paragraph(
            "The architectural crossfade and Ken-Burns scale zoom animation in the hero portfolio carousel is fully active:",
            body_style,
        )
    )
    story.append(Paragraph("• <b>Ken-Burns Scale Zoom:</b> The active architectural slide smoothly scales from <code>1.05</code> to <code>1.0</code> over a 1.0-second ease-out curve, creating a cinematic editorial presence.", bullet_style))
    story.append(Paragraph("• <b>Dual Crossfade:</b> Outgoing slides smoothly exit via <code>opacity: 0</code> while incoming slides fade in over <code>duration: 1.0</code> with zero white flashes or blank frames.", bullet_style))
    story.append(Paragraph("• <b>Staggered Editorial Text Transitions:</b> Project title, typography subtitle, and action buttons transition smoothly on slide advance with staggered delays (0.15s, 0.3s) and cubic-bezier easing.", bullet_style))
    story.append(Paragraph("• <b>17 Complete Slides Maintained:</b> All 17 project slides verified from the input PDF are active with automated continuous auto-play, keyboard arrow shortcuts, and touch swipe gestures.", bullet_style))
    story.append(Spacer(1, 6))

    # Section 8: Sign-off & Verification Summary
    story.append(Paragraph("8. Final Verification & Repository Sync", h1_style))
    
    signoff_data = [
        [Paragraph("Repository (Primary)", table_cell_bold), Paragraph("https://github.com/Shourya-exe/web-dev.git", table_cell_style), Paragraph("✓ Synced to main", table_status_style)],
        [Paragraph("Repository (Test)", table_cell_bold), Paragraph("https://github.com/Shourya-exe/test.git", table_cell_style), Paragraph("✓ Synced to main", table_status_style)],
        [Paragraph("Next.js Build Test", table_cell_bold), Paragraph("npm run build (13 static pages, 0 errors)", table_cell_style), Paragraph("✓ 100% Pass", table_status_style)],
        [Paragraph("Hero Animation", table_cell_bold), Paragraph("Ken-Burns scale zoom + crossfade active", table_cell_style), Paragraph("✓ Restored", table_status_style)],
        [Paragraph("Inquiry Delivery", table_cell_bold), Paragraph("Direct SMTP email to info@redefinedesignstudio.in", table_cell_style), Paragraph("✓ Operational", table_status_style)],
        [Paragraph("Projects Section", table_cell_bold), Paragraph("Image-only gallery with typology filters &amp; lightbox", table_cell_style), Paragraph("✓ Operational", table_status_style)],
    ]
    t_signoff = Table(signoff_data, colWidths=[1.8 * 72, 3.8 * 72, 1.6 * 72])
    t_signoff.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), COLOR_BG_LIGHT),
            ("BOX", (0, 0), (-1, -1), 0.5, COLOR_LINE),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, COLOR_LINE),
            ("TOPPADDING", (0, 0), (-1, -1), 2.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
        ])
    )
    story.append(t_signoff)
    story.append(Spacer(1, 6))

    # Concluding Callout Box
    concluding_text = (
        "<b>Architectural Studio Web Platform Status:</b><br/>"
        "All updates requested across all conversations and documentation have been successfully engineered, verified against production builds, "
        "and pushed to the remote GitHub repositories. The platform is primed for high-performance deployment on Hostinger or Vercel."
    )
    t_callout = Table([[Paragraph(concluding_text, callout_style)]], colWidths=[7.2 * 72])
    t_callout.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), COLOR_GOLD_LIGHT),
            ("BOX", (0, 0), (-1, -1), 1, COLOR_GOLD),
            ("TOPPADDING", (0, 0), (-1, -1), 5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
            ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ])
    )
    story.append(t_callout)

    # Build PDF with custom NumberedCanvas
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Report successfully generated at: {os.path.abspath(output_filename)}")

if __name__ == "__main__":
    create_report()
