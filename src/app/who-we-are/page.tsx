"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Award, Compass, Shield, BookOpen } from "lucide-react";
import { STUDIO_DATA, SERVICES, STATISTICS } from "@/data/studio";

export default function WhoWeArePage() {
  return (
    <div className="pt-32 pb-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#E7E3DA]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#9E7D2D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
              About The Practice · Leadership & Philosophy
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#8A0D50] tracking-tight mb-4 uppercase">
            Who We Are
          </h1>

          <p className="text-base sm:text-lg text-[#68635A] max-w-3xl leading-relaxed font-light">
            Redefining Design Studio is a multidisciplinary design practice operating from Kolkata and Bhubaneswar, established to bring climate-responsive intelligence, statutory mastery, and architectural beauty to Eastern India.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#4D4942] font-light leading-relaxed">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#141311] leading-snug font-normal uppercase">
              THE INTERSECTION OF DESIGN AND HUMAN CONNECTIONS.
              <span className="block text-base sm:text-lg md:text-xl font-normal text-[#5E5950] mt-2">
                CREATING SPACES THAT CONNECT, INSPIRE AND ENDURE.
              </span>
            </h2>

            <p>
              Redefining Design Studio is led by a registered architect with more than twenty years of rigorous experience in architectural design, design management, and the coordination of large multi-disciplinary consultant teams across India and the Gulf region.
            </p>

            <p>
              Educated at prestigious institutions with a Bachelor of Architecture (B.Arch) from NIT Calicut and a Master of Architecture (M.Arch) in Urban Development, our leadership combines micro-scale tectonic detailing with macro-scale urban planning insights.
            </p>

            <p>
              The practice operates on an uncompromising philosophy: we treat drawings, bills of quantities, structural models, and consultant input as one unified job. That cohesion prevents design dilution through municipal approvals, contractor bidding, and site execution.
            </p>

            <p>
              We maintain active design offices in both Kolkata and Bhubaneswar, traveling to construction sites frequently to guarantee adherence to specifications and design purity.
            </p>

            {/* Statutory Registrations Box */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E7E3DA] space-y-3 mt-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#141311] font-medium">
                Professional Licensure & Registrations
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#7A746B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D2D]" />
                  <span>Council of Architecture (COA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D2D]" />
                  <span>Kolkata Municipal Corporation (KMC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D2D]" />
                  <span>Bhubaneswar Development Authority (BDA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D2D]" />
                  <span>Cuttack Development Authority (CDA)</span>
                </li>
              </ul>
            </div>

            {/* Mandatory Transparency Disclaimer */}
            <div className="p-4 bg-[#FFFFFF] border-l-2 border-[#9E7D2D] text-xs text-[#7A746B] leading-relaxed">
              <strong className="text-[#68635A] block uppercase text-[10px] tracking-wider mb-1 font-semibold">
                Transparency & Attribution
              </strong>
              {STUDIO_DATA.transparencyNote}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#E7E3DA] bg-[#FFFFFF]">
              <Image
                src="/images/studio/high-end-luxury-building-01.jpeg"
                alt="High End Luxury Building - Redefine Design Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E7D2D] block mb-1">
                  High-End Architectural Statement
                </span>
                <p className="text-sm font-serif text-white uppercase">
                  Where research, Vedic mathematics, and sustainable craft converge.
                </p>
              </div>
            </div>

            {/* Studio Fast Facts */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E7E3DA] space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-[#F2EFE8]">
                <span className="text-[#827C72] font-mono">Offices</span>
                <span className="text-[#141311]">Kolkata & Bhubaneswar</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#F2EFE8]">
                <span className="text-[#827C72] font-mono">Experience</span>
                <span className="text-[#9E7D2D] font-mono font-bold">20+ Years</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#F2EFE8]">
                <span className="text-[#827C72] font-mono">Education</span>
                <span className="text-[#141311]">B.Arch (NIT Calicut) · M.Arch</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#827C72] font-mono">Consultancy Languages</span>
                <span className="text-[#141311]">English, Hindi, Odia, Bengali</span>
              </div>
            </div>
          </div>
        </div>

        {/* 11 Integrated Services Section */}
        <div className="pt-16 border-t border-[#E7E3DA]">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#9E7D2D] block mb-2">
              Comprehensive Scope
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#141311] uppercase tracking-tight">
              11 Services Under One Roof
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-6 bg-[#FFFFFF] border border-[#E7E3DA] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#9E7D2D] mb-2 block font-medium">{s.number}</span>
                  <h4 className="text-lg font-serif text-[#141311] mb-2 uppercase min-h-[3rem] flex items-start">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-[#7A746B] leading-relaxed mb-4 font-light min-h-[3.5rem]">{s.shortDesc}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#9E7D2D] hover:text-[#141311] transition-colors pt-2 border-t border-[#F2EFE8]"
                >
                  Consult on this →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
