import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Award } from "lucide-react";
import { STUDIO_DATA } from "@/data/studio";

export default function StudioIntro() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FBFBFA] border-t border-[#E7E3DA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header & Subhead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E7E3DA]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#9E7D2D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
                Studio Introduction · Section 03
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-serif font-normal text-[#8A0D50] tracking-tight leading-[1.25] max-w-4xl uppercase">
              THE INTERSECTION OF DESIGN AND HUMAN CONNECTIONS.
              <span className="block text-base sm:text-lg md:text-xl font-normal text-[#5E5950] mt-2">
                CREATING SPACES THAT CONNECT, INSPIRE AND ENDURE.
              </span>
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/who-we-are"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
              aria-label="Read complete practice details"
            >
              The Practice Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Two-Column Asymmetrical Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6 text-[#3D3933] text-base md:text-lg leading-relaxed font-light">
            <p>
              Redefining Design Studio, a multidisciplinary practice operating from Kolkata and Bhubaneswar, has a vision to evolve the new-age value system in Indian built environments.
            </p>

            <p>
              Led by a Council of Architecture (COA) registered architect with dual degrees B.Arch from NIT Calicut and M.Arch in Urban Development, the practice brings more than twenty years of architectural leadership across India and the Gulf.
            </p>

            <p>
              Our portfolio spans high-end luxury residential towers, tertiary healthcare campuses, master-planned industrial parks, mixed commercial hubs, leisure and hospitality venues, and bespoke private estates.
            </p>

            <p>
              The studio welds multiple disciplines, architecture, interior architecture, landscape ecology, IGBC green-building, vaastu consultancy, and municipal sanction approvals, under one unified roof. We treat drawings, bills of quantities, and consultant coordination as one holistic craft.
            </p>

            {/* Mandatory Transparency Disclaimer */}
            <div className="p-4 bg-[#FFFFFF] border-l-2 border-[#9E7D2D] text-xs text-[#4D4942] leading-normal font-sans">
              <span className="uppercase tracking-wider font-semibold text-[#8C6D24] block mb-1">
                Transparency & Attribution
              </span>
              {STUDIO_DATA.transparencyNote}
            </div>

            {/* Core Competencies Quick Highlights */}
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-[#FFFFFF] border border-[#E7E3DA]">
                <Compass className="w-5 h-5 text-[#9E7D2D] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[12px] font-medium uppercase tracking-wider text-[#141311]">
                    Kolkata & Bhubaneswar
                  </h3>
                  <p className="text-[11px] text-[#68635A]">Direct studio presence</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FFFFFF] border border-[#E7E3DA]">
                <ShieldCheck className="w-5 h-5 text-[#9E7D2D] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[12px] font-medium uppercase tracking-wider text-[#141311]">
                    Statutory Clearances
                  </h3>
                  <p className="text-[11px] text-[#68635A]">KMC, NKDA, BMC, BDA, CDA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Floating Visuals */}
          <div className="lg:col-span-6 relative">
            {/* Primary Image Frame */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E7E3DA] group">
              <Image
                src="/images/all-images/img-5.jpg"
                alt="Architectural facade of Luxury 16 Storey Residency, Ballygunge, Kolkata"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#9E7D2D] block mb-1">
                    Featured High-Rise
                  </span>
                  <h3 className="text-lg font-serif font-medium text-white">
                    Luxury 16 Storey Residency · Ballygunge
                  </h3>
                </div>
                <Link
                  href="/projects"
                  className="px-3.5 py-1.5 bg-[#FBFBFA]/90 backdrop-blur-sm border border-[#9E7D2D]/60 text-[10px] uppercase tracking-widest text-[#141311] hover:bg-[#9E7D2D] hover:text-[#FBFBFA] transition-colors"
                  aria-label="View Luxury 16 Storey Residency in project gallery"
                >
                  View in Gallery
                </Link>
              </div>
            </div>

            {/* Overlapping Secondary Accent Card */}
            <div className="hidden sm:block absolute -bottom-10 -left-10 w-64 p-5 bg-[#FFFFFF] border border-[#DDD8CE] shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-[#9E7D2D]" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E7D2D]">
                  Practice Ethos
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-[#3D3933]">
                &quot;What is drawn can be built, and what is built stays comfortable and economical to run.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
