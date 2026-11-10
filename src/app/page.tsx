import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroCarousel from "@/components/HeroCarousel";
import StudioIntro from "@/components/StudioIntro";
import Statistics from "@/components/Statistics";
import NewsSection from "@/components/NewsSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Redefining Design Studio | Multidisciplinary Design Studio",
  description:
    "Multidisciplinary architecture and master planning studio based in Kolkata and Bhubaneswar. Over 20 years of expertise across luxury residences, healthcare complexes, and sustainable architecture.",
};

// Code-split below-the-fold interactive client components for performance (TBT, LCP, Main-thread)
const Expertise = dynamic(() => import("@/components/Expertise"), { ssr: true });

const DialogueIndia = dynamic(() => import("@/components/DialogueIndia"), { ssr: true });

export default function HomePage() {
  const featuredProjects = [PROJECTS[0], PROJECTS[1], PROJECTS[2], PROJECTS[3], PROJECTS[4], PROJECTS[5]];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 02 — HERO IMAGE CAROUSEL */}
      <HeroCarousel />

      {/* SECTION 03 — STUDIO INTRODUCTION (Zero-JS Server Component) */}
      <StudioIntro />

      {/* SECTION 04 — STUDIO STATISTICS (Lightweight native observer) */}
      <Statistics />

      {/* FEATURED WORK PREVIEW GALLERY */}
      <section className="py-24 md:py-32 bg-[#FBFBFA] border-t border-[#E7E3DA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E7E3DA]">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#9E7D2D]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
                  Portfolio Selection · Built & Commissioned
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#8A0D50] tracking-tight uppercase">
                Selected Works
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/redefine-design-studio-portfolio.pdf"
                download="Redefine_Design_Studio_Portfolio.pdf"
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-2.5 border border-[#9E7D2D] bg-[#9E7D2D]/5 hover:bg-[#9E7D2D] text-[#9E7D2D] hover:text-white transition-all shadow-sm"
                aria-label="Download Redefine Design Studio Portfolio PDF"
              >
                <Download className="w-3.5 h-3.5" />
                Download Portfolio
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-2.5 border border-[#E7E3DA] bg-white text-[#9E7D2D] hover:text-[#141311] hover:border-[#9E7D2D] transition-colors shadow-sm"
              >
                Explore All Projects ({PROJECTS.length})
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Symmetrical Architectural Project Grid with Strictly Aligned Headings & Subtext */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href="/projects"
                className="group flex flex-col justify-between border border-[#E7E3DA] bg-white overflow-hidden transition-all duration-500 hover:border-[#9E7D2D]/60 shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FBFBFA]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="h-5 flex items-center justify-between text-[11px] font-mono text-[#68635A]">
                      <span className="uppercase text-[#9E7D2D] tracking-wider truncate mr-2">{project.category}</span>
                      <span className="shrink-0">{project.location}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif text-[#141311] leading-snug uppercase min-h-[3.5rem] flex items-start group-hover:text-[#9E7D2D] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#4D4942] line-clamp-2 leading-relaxed min-h-[2.5rem]">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-[#F2EFE8] flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#9E7D2D] group-hover:text-[#141311] transition-colors">
                    View in Gallery
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — EXPERTISE */}
      <Expertise />




      {/* SECTION 07 — DIALOGUE WITH INDIA */}
      <DialogueIndia />

      {/* SECTION 08 — NEWS (Zero-JS Server Component) */}
      <NewsSection />
    </div>
  );
}
