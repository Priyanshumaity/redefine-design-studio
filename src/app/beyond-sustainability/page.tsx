"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Leaf, Shield, Sun, Sparkles } from "lucide-react";

export default function BeyondSustainabilityPage() {
  const philosophies = [
    {
      title: "THE LIMITLESSNESS WITHIN A LIMIT",
      desc: "Constraints in architecture—site setbacks, municipal FAR, extreme heatwaves, and tight budgets—are not impediments. They are the generative boundary conditions from which pure architectural innovation blooms.",
      icon: <Compass className="w-5 h-5 text-[#9E7D2D]" />,
    },
    {
      title: "THE JOURNEY OF REALISATION",
      desc: "Design is an art of discovery, not arbitrary imposition. Research, humility, and site listening guide our pencils from initial massing diagrams to final occupancy commissioning.",
      icon: <Sparkles className="w-5 h-5 text-[#9E7D2D]" />,
    },
    {
      title: "TECHNOLOGY FOR SUSTAINABILITY",
      desc: "We deploy advanced thermodynamic simulation, solar path algorithms, and rainwater percolation modeling not as superficial tech gimmicks, but to ensure minimal operational carbon over a 100-year lifecycle.",
      icon: <Sun className="w-5 h-5 text-[#9E7D2D]" />,
    },
    {
      title: "KEEP NATURE FIRST",
      desc: "Before a single foundation footing is excavated, existing mature trees, surface water drainages, and wind vectors are meticulously mapped and woven into the building geometry.",
      icon: <Leaf className="w-5 h-5 text-[#9E7D2D]" />,
    },
    {
      title: "THE 5S PHILOSOPHY",
      desc: "Rooted in Vedic sciences: Save, Support, Simplify, Sustain, and Sanctify. Every wall, joinery detail, and service duct must satisfy these five qualitative touchstones.",
      icon: <Shield className="w-5 h-5 text-[#9E7D2D]" />,
    },
    {
      title: "INDIA IS ABOUT CONTINUITY",
      desc: "Our architectural heritage is not locked in a museum; it is a living river of contextual wisdom that provides modern architecture with dignity, cultural resonance, and climatic resilience.",
      icon: <Compass className="w-5 h-5 text-[#9E7D2D]" />,
    },
  ];

  return (
    <div className="pt-32 pb-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#E7E3DA]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#9E7D2D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
              Philosophy · Beyond Sustainability
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#8A0D50] tracking-tight mb-4 uppercase">
            Beyond Sustainability
          </h1>

          <p className="text-base sm:text-lg text-[#68635A] max-w-3xl leading-relaxed font-light">
            Creating regenerative spaces that restore nature, conserve resources and enhance the quality of life for generations to come.
          </p>
        </div>

        {/* Hero Visual — Replaced with Image No 17 */}
        <div className="relative aspect-[21/9] min-h-[320px] w-full overflow-hidden border border-[#E7E3DA] mb-20 bg-[#FFFFFF]">
          <Image
            src="/images/all-images/img-17.jpg"
            alt="Beyond Sustainability regenerative architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E7D2D] block mb-2 font-medium">
              Regenerative Built Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white uppercase">
              Save · Support · Simplify · Sustain
            </h2>
            <p className="text-xs sm:text-sm text-white/85 mt-2 font-light leading-relaxed">
              With integration of Vedic science into architectural thinking, buildings transform from energy consumers into living ecological contributors.
            </p>
          </div>
        </div>

        {/* 6 Philosophies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {philosophies.map((p) => (
            <div
              key={p.title}
              className="p-8 bg-[#FFFFFF] border border-[#E7E3DA] flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="p-2.5 bg-[#FAF9F5] border border-[#E7E3DA] text-[#9E7D2D] w-fit mb-4">
                  {p.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-[#141311] mb-2 uppercase min-h-[3.25rem] flex items-start">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#4D4942] leading-relaxed font-light min-h-[4rem]">{p.desc}</p>
              </div>

              <div className="pt-2 text-[10px] font-mono uppercase tracking-wider text-[#9E7D2D]">
                Beyond Sustainability Principle
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="p-8 sm:p-12 border border-[#E7E3DA] bg-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-[#141311] uppercase">
              Commission a Regenerative Development
            </h3>
            <p className="text-xs sm:text-sm text-[#68635A] mt-1 max-w-xl font-light leading-relaxed">
              From daylight simulations and passive cooling verandas to rainwater aquifer replenishment and IGBC certification filings.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3.5 bg-[#9E7D2D] text-[#FBFBFA] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#8C6D24] transition-colors shrink-0"
          >
            Start Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
