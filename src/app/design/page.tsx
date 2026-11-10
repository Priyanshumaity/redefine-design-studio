"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Atom, Sparkles, Wind, Sun, Layers } from "lucide-react";

export default function DesignRIPage() {
  const researchTopics = [
    {
      category: "VEDIC SCIENCES",
      title: "DECODING GEOPATHY & TELLURIC ENERGIES",
      subtitle: "ALIGNING HUMAN BIOLOGY WITH TERRESTRIAL ELECTROMAGNETIC FIELDS",
      icon: <Compass className="w-5 h-5 text-[#9E7D2D]" />,
      desc: "In our architectural practice, geopathy refers to the rigorous consideration of the Earth's natural energies and geological features when locating foundations and human sleep/work zones. By mapping underground water veins, faults, and natural electromagnetic fields, we craft spatial volumes that enhance vitality, clarity, and deep restorative rest.",
      image: "/images/all-images/img-11.jpg",
    },
    {
      category: "VERNACULARITY",
      title: "DECODING THE VERNACULAR: ART, ARCHITECTURE & MATERIALS",
      subtitle: "CENTURIES OF REGIONAL WISDOM TRANSLATED INTO MODERN STEEL AND GLASS",
      icon: <Layers className="w-5 h-5 text-[#9E7D2D]" />,
      desc: "Vernacular architecture is not a nostalgic style—it is empirical science refined over generations. By studying Bengal's terracotta jalis, deep shaded verandas, and high ceilings with natural stack ventilation, we engineer contemporary structures that consume a fraction of the cooling energy required by standard commercial glass boxes.",
      image: "/images/all-images/img-4.webp",
    },
    {
      category: "BIOPHILIC DESIGN",
      title: "BUILDINGS FOR ENHANCED HUMAN PERFORMANCE",
      subtitle: "THE INNATE BIOLOGICAL NECESSITY OF NATURAL IMMERSION",
      icon: <Wind className="w-5 h-5 text-[#9E7D2D]" />,
      desc: "Humans evolved in multisensory immersion with living nature. Biophilic design weaves vegetative courtyards, living green walls, daylight modulation, and natural tactile timber and stone into the everyday workflow. Studies demonstrate a 15% increase in cognitive performance and marked reduction in stress markers.",
      image: "/images/all-images/img-27.jpg",
    },
    {
      category: "SUSTAINABILITY IN PRACTICE",
      title: "THERMODYNAMIC ENVELOPE & MICROCLIMATE ENGINEERING",
      subtitle: "BEYOND CERTIFICATIONS TO THERMODYNAMIC REALITY",
      icon: <Sun className="w-5 h-5 text-[#9E7D2D]" />,
      desc: "Energy simulation software guides our massing from Day One. Double-skin ventilated facades, thermal break windows, horizontal overhangs calibrated to Bengal's solar angles, and zero-discharge water recycling systems ensure that high sustainability performance is built directly into the tectonic envelope.",
      image: "/images/all-images/img-22.jpg",
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
              Design Research + Innovation (R+I)
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#8A0D50] tracking-tight mb-4 uppercase">
            Innovate · Adapt · Create
          </h1>

          <p className="text-base sm:text-lg text-[#68635A] max-w-3xl leading-relaxed font-light">
            Our architectural journey is nurtured by rigorous research and ingenious design strategies backed by Vedic sciences, bioclimatic simulations, and vernacular engineering.
          </p>

          <div className="mt-4 flex items-center gap-3 text-xs font-mono text-[#9E7D2D]">
            <span>प्रक्रिया : The Research Process</span>
            <span>·</span>
            <span>Evidence-Based Design Methodology</span>
          </div>
        </div>

        {/* Featured Research Topic Cards */}
        <div className="space-y-16">
          {researchTopics.map((topic, idx) => (
            <div
              key={topic.category}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 border border-[#E7E3DA] bg-[#FFFFFF] ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#9E7D2D] uppercase tracking-widest font-medium">
                  {topic.icon}
                  <span>{topic.category}</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#141311] leading-snug uppercase">
                  {topic.title}
                </h2>

                <p className="text-xs font-mono text-[#8C6D24] uppercase tracking-wider">
                  {topic.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#4D4942] leading-relaxed font-light">
                  {topic.desc}
                </p>

                <div className="pt-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
                  >
                    Consult On This Research Domain →
                  </Link>
                </div>
              </div>

              <div className={`lg:col-span-5 relative aspect-[16/11] overflow-hidden border border-[#E7E3DA] bg-[#FBFBFA] ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
