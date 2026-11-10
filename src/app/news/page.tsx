"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Award } from "lucide-react";
import { NEWS_ARTICLES } from "@/data/studio";

export default function NewsPage() {
  return (
    <div className="pt-32 pb-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#E7E3DA]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#9E7D2D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
              Editorial · Recognition & Project Milestones
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#8A0D50] tracking-tight mb-4 uppercase">
            News & Accolades
          </h1>

          <p className="text-base sm:text-lg text-[#68635A] max-w-3xl leading-relaxed font-light">
            Documenting our architectural recognitions, project inaugurations, academic lectures, and milestone achievements across Kolkata, Bhubaneswar, and Eastern India.
          </p>
        </div>

        {/* Full Editorial Articles List */}
        <div className="space-y-16">
          {NEWS_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              id={article.slug}
              className="scroll-mt-32 p-8 sm:p-12 border border-[#E7E3DA] bg-[#FFFFFF] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden border border-[#E7E3DA] bg-[#FBFBFA]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#FBFBFA]/90 backdrop-blur-sm border border-[#9E7D2D]/60 text-[10px] font-mono uppercase tracking-widest text-[#9E7D2D] flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-[#9E7D2D]" />
                  <span>{article.category}</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#7A746B]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#9E7D2D]" />
                    {article.date}
                  </span>
                  <span>·</span>
                  <span className="uppercase text-[#9E7D2D] font-semibold">{article.category}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif text-[#141311] leading-snug uppercase">
                  {article.title}
                </h2>

                <div className="space-y-3 text-sm text-[#4D4942] font-light leading-relaxed">
                  {article.fullText.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
                  >
                    Enquire About Studio Collaborations →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
