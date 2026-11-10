"use client";

import React, { useEffect, useRef, useState } from "react";
import { STATISTICS } from "@/data/studio";

interface CounterProps {
  finalValue: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ finalValue, suffix = "", duration = 1400 }: CounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easedProgress * finalValue);

            if (numRef.current) {
              numRef.current.textContent = String(currentVal);
            }

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else if (numRef.current) {
              numRef.current.textContent = String(finalValue);
            }
          };

          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [finalValue, duration]);

  return (
    <span ref={containerRef} className="font-mono text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#141311]">
      <span ref={numRef}>0</span>
      <span className="text-[#9E7D2D] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="relative bg-[#F4F1EA] border-y border-[#E7E3DA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#9E7D2D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
              By The Numbers · Practice Metrics
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#68635A] hidden sm:inline-block">
            VERIFIED CREDENTIALS
          </span>
        </div>

        {/* 4 Primary Highlight Numbers (Salient Reference Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16 border-b border-[#E7E3DA]">
          {STATISTICS.slice(0, 4).map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col space-y-2 border-l border-[#DDD8CE] pl-6 hover:border-[#9E7D2D] transition-colors"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#9E7D2D]">
                {stat.label}
              </div>

              <div className="py-1">
                <AnimatedCounter
                  finalValue={stat.number}
                  suffix={stat.suffix}
                />
              </div>

              <p className="text-xs text-[#3D3933] leading-relaxed font-sans">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Architectural Regulatory Credentials Footer Strip */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#68635A]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#9E7D2D]" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#141311]">
              Statutory Authority Registrations
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] text-[#68635A]">
            <span className="border-b border-[#DDD8CE] pb-0.5">Council of Architecture (COA)</span>
            <span className="border-b border-[#DDD8CE] pb-0.5">KMC Licensed Class-1</span>
            <span className="border-b border-[#DDD8CE] pb-0.5">BDA / BMC Empanelled</span>
            <span className="border-b border-[#DDD8CE] pb-0.5">IGBC AP Member</span>
          </div>
        </div>
      </div>
    </section>
  );
}
