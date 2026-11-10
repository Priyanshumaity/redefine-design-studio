"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X, Phone, Mail } from "lucide-react";
import { STUDIO_DATA } from "@/data/studio";

const NAV_LINKS = [
  { label: "Beyond Sustainability", href: "/beyond-sustainability", number: "01" },
  { label: "Our Projects", href: "/projects", number: "02" },
  { label: "Who We Are", href: "/who-we-are", number: "03" },
  { label: "Design R+I", href: "/design", number: "04" },
  { label: "Dialogue With India", href: "/dialogue-with-india", number: "05" },
  { label: "Life at Studio", href: "/life-at-studio", number: "06" },
  { label: "News", href: "/news", number: "07" },
  { label: "Contact Us", href: "/contact", number: "08" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldScroll = window.scrollY > 40;
          setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF9F5]/85 backdrop-blur-md py-3.5 border-b border-[#E2DDD3]/80 shadow-sm"
            : "bg-[#FAF9F5]/75 backdrop-blur-md py-4 sm:py-5 border-b border-[#E2DDD3]/60 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Redefining Design Studio Home"
          >
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Redefining Design Studio Logo"
                width={40}
                height={40}
                priority
                className="w-10 h-10 object-contain brightness-0"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#141311] transition-colors group-hover:text-[#9E7D2D]">
                Redefining
              </span>
              <span className="text-[10px] font-light uppercase tracking-[0.3em] text-[#757066]">
                  Design Studio
              </span>
            </div>
          </Link>

          {/* Desktop Direct Links */}
          <nav suppressHydrationWarning className="hidden lg:flex items-center gap-7 text-[12px] font-medium tracking-[0.14em] uppercase text-[#3D3933]">
            {NAV_LINKS.slice(0, 4).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  suppressHydrationWarning
                  className={`transition-colors duration-200 hover:text-[#9E7D2D] relative py-1 ${
                    isActive ? "text-[#9E7D2D] font-semibold" : ""
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E7D2D]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action & Menu Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-2.5 border border-[#9E7D2D]/70 bg-white/80 hover:bg-[#9E7D2D] text-[#141311] hover:text-[#FAF9F5] backdrop-blur-sm transition-all duration-300 shadow-sm"
            >
              Start Conversation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Sidebar / Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 focus:outline-none border border-[#D4CEBF] bg-[#FAF9F5]/80 hover:bg-[#FAF9F5] backdrop-blur-md hover:border-[#9E7D2D] transition-colors p-2 shadow-sm"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              <span
                className={`w-6 h-[1.5px] bg-[#141311] transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2 bg-[#9E7D2D]" : ""
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-[#141311] self-end transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-[#141311] transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2 bg-[#9E7D2D]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Menu Drawer (High-performance GPU-composited CSS) */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Slide-out Menu Panel: Semi-translucent with frosted glass */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xl h-full bg-[#FAF9F5]/95 backdrop-blur-xl border-l border-[#DCD6C9] shadow-2xl text-[#141311] flex flex-col justify-between p-8 sm:p-12 overflow-y-auto transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between border-b border-[#E7E3DA] pb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="RA Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain brightness-0"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#757066] font-medium">
                Navigation Menu
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 border border-[#E7E3DA] bg-white/75 hover:bg-[#9E7D2D] text-[#757066] hover:text-white transition-all focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Editorial Numbers */}
          <nav className="my-8 flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-baseline justify-between py-2.5 border-b border-[#EDE9E1] hover:border-[#9E7D2D]/60 transition-all ${
                      isActive ? "text-[#9E7D2D]" : "text-[#141311] hover:text-[#9E7D2D]"
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[11px] font-mono tracking-widest text-[#9E7D2D] font-medium">
                        {link.number}
                      </span>
                      <span className="text-lg sm:text-xl font-serif tracking-wide font-normal group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#9E7D2D]" />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Drawer Footer Information */}
          <div className="pt-6 border-t border-[#E7E3DA] space-y-4 text-[12px] text-[#757066]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block uppercase text-[10px] tracking-[0.2em] text-[#9E7D2D] mb-1 font-semibold">
                  Kolkata Studio
                </span>
                <p className="text-[11px] leading-relaxed text-[#4D4942]">
                  86 Golaghata Rd, Lake Town, Kolkata 700048
                </p>
              </div>
              <div>
                <span className="block uppercase text-[10px] tracking-[0.2em] text-[#9E7D2D] mb-1 font-semibold">
                  Bhubaneswar Studio
                </span>
                <p className="text-[11px] leading-relaxed text-[#4D4942]">
                  Bhubaneswar, Odisha 751006
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 text-[11px] text-[#827C72]">
              <div className="flex items-center gap-4">
                <a
                  href="tel:+919836421375"
                  className="hover:text-[#141311] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9E7D2D]" />
                  +91 98364 21375
                </a>
                <a
                  href={`mailto:${STUDIO_DATA.generalEmail}`}
                  className="hover:text-[#141311] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9E7D2D]" />
                  Email Us
                </a>
              </div>
              <div className="flex items-center gap-3">
                {STUDIO_DATA.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#9E7D2D] text-[#4D4942] transition-colors uppercase tracking-widest text-[10px] font-semibold"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
