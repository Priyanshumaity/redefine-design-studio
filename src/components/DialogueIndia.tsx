"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Pause } from "lucide-react";
import { INDIA_PILLARS } from "@/data/studio";

export default function DialogueIndia() {
  const [activeTab, setActiveTab] = useState(INDIA_PILLARS[0].id);
  const [isAutoCycle, setIsAutoCycle] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoCycle || !isInView) return;

    const timer = setInterval(() => {
      if (typeof document !== "undefined" && document.hidden) return;
      setActiveTab((prevTab) => {
        const curIdx = INDIA_PILLARS.findIndex((p) => p.id === prevTab);
        const nextIdx = (curIdx + 1) % INDIA_PILLARS.length;
        return INDIA_PILLARS[nextIdx].id;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoCycle, isInView]);

  const currentPillar = INDIA_PILLARS.find((p) => p.id === activeTab) || INDIA_PILLARS[0];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#FBFBFA] border-t border-[#E7E3DA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E7E3DA]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#9E7D2D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
                Section 07 · Cultural Context
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#8A0D50] tracking-tight uppercase">
              Dialogue with India
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoCycle(!isAutoCycle)}
              className="px-3.5 py-2 border border-[#D4CEBF] bg-[#FFFFFF] text-[10px] font-mono uppercase tracking-widest text-[#141311] hover:text-[#9E7D2D] hover:border-[#9E7D2D] transition-colors flex items-center gap-2 shadow-sm"
              aria-label="Toggle auto theme cycle"
            >
              {isAutoCycle ? <Pause className="w-3 h-3 text-[#9E7D2D]" /> : <Play className="w-3 h-3 text-[#9E7D2D]" />}
              <span>{isAutoCycle ? "Auto Theme: ON" : "Auto Theme: OFF"}</span>
            </button>

            <Link
              href="/dialogue-with-india"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
            >
              Explore India Dialogue
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Thematic Navigation Tabs matching Reference with Active Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12 border-b border-[#E7E3DA] pb-6">
          {INDIA_PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                role="tab"
                aria-selected={isActive}
                aria-label={`Select ${pillar.title} theme`}
                onClick={() => {
                  setIsAutoCycle(false);
                  setActiveTab(pillar.id);
                }}
                className={`py-3.5 px-4 text-center transition-all duration-300 border relative overflow-hidden ${
                  isActive
                    ? "border-[#9E7D2D] bg-[#FFFFFF] text-[#141311] shadow-sm font-semibold"
                    : "border-[#E7E3DA] bg-[#FAF9F5] text-[#5E5950] hover:text-[#141311] hover:bg-white hover:border-[#C5A85C]"
                }`}
              >
                <span className="block text-xs font-mono font-medium tracking-[0.2em] uppercase">
                  {pillar.title}
                </span>

                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9E7D2D]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Thematic Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Sketch / Visual Architecture */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E7E3DA] bg-[#FFFFFF]">
              <div
                key={currentPillar.id}
                className="absolute inset-0 w-full h-full animate-fade-in"
              >
                <Image
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                <span className="font-mono uppercase tracking-widest text-[#9E7D2D]">
                  Theme: {currentPillar.title}
                </span>
                <span className="font-mono">Dialogue with Indian Tectonics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Discourse */}
          <div className="lg:col-span-5 space-y-6">
            <div
              key={currentPillar.id}
              className="space-y-4 animate-fade-in-up"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#9E7D2D] uppercase tracking-widest">
                  Thematic Lens
                </span>
                <span className="w-6 h-[1px] bg-[#9E7D2D]" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#141311] font-normal leading-tight uppercase">
                {currentPillar.subhead}
              </h3>

              <p className="text-sm text-[#4D4942] leading-relaxed font-light">
                {currentPillar.description}
              </p>

              <div className="pt-4 border-t border-[#E7E3DA]">
                <Link
                  href={`/dialogue-with-india#${currentPillar.id}`}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
                >
                  Read Full Thematic Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
