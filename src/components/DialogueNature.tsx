"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, Sparkles, RefreshCw, Sun } from "lucide-react";
import { NATURE_PILLARS } from "@/data/studio";

export default function DialogueNature() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const getPillarIcon = (keyword: string) => {
    switch (keyword) {
      case "RETAIN":
        return <Leaf className="w-5 h-5 text-[#9E7D2D]" />;
      case "REVERE":
        return <Sun className="w-5 h-5 text-[#9E7D2D]" />;
      case "REGENERATE":
        return <RefreshCw className="w-5 h-5 text-[#9E7D2D]" />;
      case "REJOICE":
        return <Sparkles className="w-5 h-5 text-[#9E7D2D]" />;
      default:
        return <Leaf className="w-5 h-5 text-[#9E7D2D]" />;
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#F4F1EA] border-t border-[#E7E3DA] overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E7E3DA_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E7E3DA]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#9E7D2D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
                Section 06 · Environmental Philosophy
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#141311] tracking-tight">
              Dialogue with Nature
            </h2>
          </div>

          <Link
            href="/beyond-sustainability"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
          >
            Explore Philosophy In Full
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Thematic Cards (RETAIN, REVERE, REGENERATE, REJOICE) with Flip Interactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {NATURE_PILLARS.map((pillar, idx) => {
            const isFlipped = flippedIndex === idx;
            return (
              <div
                key={pillar.keyword}
                className="perspective-1000 h-[360px] w-full cursor-pointer"
                onMouseEnter={() => setFlippedIndex(idx)}
                onMouseLeave={() => setFlippedIndex(null)}
                onClick={() => setFlippedIndex(isFlipped ? null : idx)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Card: Architectural Photograph with Bold Keyword */}
                  <div className="absolute inset-0 w-full h-full backface-hidden border border-[#E7E3DA] bg-[#FFFFFF] overflow-hidden group">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#9E7D2D] font-semibold">
                          0{pillar.number}
                        </span>
                        {getPillarIcon(pillar.keyword)}
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-medium uppercase tracking-wider text-white mb-2">
                          {pillar.keyword}
                        </h3>
                        <p className="text-xs text-white/85 font-light line-clamp-2">
                          {pillar.title}
                        </p>
                        <span className="mt-3 inline-block text-[10px] font-mono uppercase tracking-widest text-[#9E7D2D]">
                          Hover to reveal →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Back Card: Ancient Vedic Citation & Philosophy */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border border-[#9E7D2D]/60 bg-[#FAF9F5] p-7 flex flex-col justify-between text-[#141311] shadow-md">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#E7E3DA] pb-3 mb-4">
                        <span className="font-mono text-xs text-[#9E7D2D] font-semibold">
                          PILLAR 0{pillar.number}
                        </span>
                        <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-[#141311]">
                          {pillar.keyword}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#4D4942] leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E7E3DA]">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#9E7D2D] block mb-1 font-semibold">
                        Sanskrit Axiom
                      </span>
                      <p className="text-xs italic text-[#8C6D24] font-serif leading-snug">
                        &quot;{pillar.quote}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Sustainability Manifesto */}
        <div className="p-8 sm:p-14 bg-[#FFFFFF] border border-[#E7E3DA] relative shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#9E7D2D] block font-semibold">
              Core Studio Manifesto
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#141311] leading-tight">
              We have Embraced Sustainability
            </h3>
            <p className="text-sm sm:text-base text-[#4D4942] leading-relaxed font-light">
              ...not merely as a trending concept or buzzword, but as a fundamental value that underpins everything we do. It serves as the guiding principle for all our decisions, shaping the way we operate, innovate, and interact with the world around us. From the smallest daily choices to our long-term strategic architectural goals.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                href="/beyond-sustainability"
                className="px-6 py-3 bg-[#141311] text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#9E7D2D] shadow-sm"
              >
                Read Nature Thesis
              </Link>
              <Link
                href="/projects"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
              >
                View Green Certified Buildings →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
