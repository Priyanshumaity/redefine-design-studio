"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDIA_PILLARS } from "@/data/studio";

export default function DialogueIndiaPage() {
  return (
    <div className="pt-32 pb-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#E7E3DA]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#9E7D2D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
              Cultural Context · Vernacular Dialectics
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#8A0D50] tracking-tight mb-4 uppercase">
            Dialogue with India
          </h1>

          <p className="text-base sm:text-lg text-[#68635A] max-w-3xl leading-relaxed font-light">
            Engaging in a design dialogue with India is akin to embarking on a journey through a kaleidoscope of sacred geometries, vernacular codes, and regional microclimates woven across millennia.
          </p>
        </div>

        {/* 6 Thematic In-Depth Explorations */}
        <div className="space-y-24">
          {INDIA_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="scroll-mt-32 pt-8 border-t border-[#E7E3DA]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#9E7D2D] uppercase tracking-widest font-semibold">
                      THEME 0{idx + 1}
                    </span>
                    <span className="w-6 h-[1px] bg-[#9E7D2D]" />
                    <span className="text-xs font-mono text-[#827C72] uppercase">
                      Indian Built Culture
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif text-[#141311] leading-tight uppercase">
                    {pillar.title}: {pillar.subhead}
                  </h2>

                  <p className="text-sm sm:text-base text-[#4D4942] font-light leading-relaxed">
                    {pillar.description}
                  </p>

                  {pillar.id === "pattern" && (
                    <div className="p-4 bg-[#FFFFFF] border border-[#E7E3DA] space-y-2 text-xs text-[#7A746B]">
                      <strong className="text-[#9E7D2D] block uppercase font-mono tracking-wider">
                        Sacred Geometry & Symbolism
                      </strong>
                      <p>
                        Mandalas, yantras, and fractal kolams are not merely decorative ornaments; they symbolize the cosmic interconnectedness of all living things and serve as profound geometric tools for mental tranquility and spatial balance.
                      </p>
                    </div>
                  )}

                  {pillar.id === "people" && (
                    <div className="p-4 bg-[#FFFFFF] border border-[#E7E3DA] text-xs text-[#8C6D24] italic font-serif">
                      &quot;Men first make buildings and then the buildings build men.&quot;
                    </div>
                  )}

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
                    >
                      Commission Vernacular Architecture →
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-6 relative aspect-[16/10] overflow-hidden border border-[#E7E3DA] bg-[#FFFFFF] ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-[#141311] bg-[#FBFBFA]/80 px-2 py-1 border border-[#E7E3DA]">
                    Plate 0{idx + 1} · {pillar.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
