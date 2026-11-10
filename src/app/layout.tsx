import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryPrompt from "@/components/InquiryPrompt";
import "./globals.css";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FBFBFA",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redefiningarchitecture.com"),
  title: {
    default: "Redefining Design Studio | Multidisciplinary Design Studio",
    template: "%s | Redefining Design Studio",
  },
  description:
    "Buildings shaped by climate, city, and the people who use them. High-end luxury residences, healthcare complexes, master planning, and sustainable architecture across Kolkata and Bhubaneswar.",
  keywords: [
    "Architecture Studio Kolkata",
    "Architect Bhubaneswar",
    "High End Luxury Residences",
    "Hospital Architecture",
    "IGBC Green Buildings",
    "Building Sanction KMC BDA",
    "Master Planning",
    "Redefining Design Studio",
  ],
  authors: [{ name: "Redefining Design Studio" }],
  openGraph: {
    title: "Redefining Design Studio | Multidisciplinary Design Studio",
    description:
      "Buildings shaped by climate, city, and the people who use them. High-end luxury residences, healthcare complexes, master planning, and sustainable architecture across Kolkata and Bhubaneswar.",
    url: "https://www.redefiningarchitecture.com",
    siteName: "Redefining Design Studio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} light`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#FBFBFA] text-[#141311] flex flex-col antialiased selection:bg-[#9E7D2D] selection:text-white" suppressHydrationWarning>
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <InquiryPrompt />
      </body>
    </html>
  );
}
