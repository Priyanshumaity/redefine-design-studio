import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Award } from "lucide-react";
import { NEWS_ARTICLES } from "@/data/studio";

export default function NewsSection() {
  const featuredNews = NEWS_ARTICLES.find((n) => n.featured) || NEWS_ARTICLES[0];
  const supportingNews = NEWS_ARTICLES.filter((n) => n.id !== featuredNews.id);

  return (
    <section className="relative py-24 md:py-32 bg-[#F4F1EA] border-t border-[#E7E3DA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E7E3DA]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#9E7D2D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
                Section 08 · Editorial & Media
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#8A0D50] tracking-tight uppercase">
              News & Accolades
            </h2>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
          >
            All Editorial Articles
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Master News Grid: Large Featured Item + Supporting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Large Featured News Item (Column Span 7) */}
          <div className="lg:col-span-7 group border border-[#E7E3DA] bg-[#FFFFFF] overflow-hidden flex flex-col h-full">
            <Link href={`/news#${featuredNews.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FBFBFA]">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute top-5 left-5 px-3 py-1 bg-[#FBFBFA]/90 backdrop-blur-sm border border-[#9E7D2D]/60 text-[10px] font-mono uppercase tracking-widest text-[#9E7D2D] flex items-center gap-2">
                  <Award className="w-3 h-3 text-[#9E7D2D]" />
                  <span>Featured Accolade</span>
                </div>
              </div>

              <div className="p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-[#7A746B]">
                  <span className="uppercase text-[#9E7D2D] tracking-widest font-semibold">
                    {featuredNews.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {featuredNews.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#141311] leading-snug group-hover:text-[#9E7D2D] transition-colors uppercase">
                  {featuredNews.title}
                </h3>

                <p className="text-sm text-[#4D4942] leading-relaxed font-light">
                  {featuredNews.snippet}
                </p>

                <div className="pt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9E7D2D] group-hover:text-[#141311] transition-colors">
                  Read Full Article
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>

          {/* Supporting News Cards (Column Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            {supportingNews.map((news) => (
              <div
                key={news.id}
                className="group border border-[#E7E3DA] bg-[#FFFFFF] overflow-hidden flex-1 flex flex-col"
              >
                <Link href={`/news#${news.slug}`} className="grid grid-cols-1 sm:grid-cols-12 gap-0 grow">
                  <div className="sm:col-span-5 relative aspect-[16/10] sm:aspect-auto sm:min-h-[180px] overflow-hidden bg-[#FBFBFA]">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="sm:col-span-7 p-6 space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#68635A] mb-2.5">
                        <span className="text-[#9E7D2D] uppercase">{news.category}</span>
                        <span>·</span>
                        <span>{news.date}</span>
                      </div>

                      <h3 className="text-base font-serif text-[#141311] line-clamp-2 leading-snug group-hover:text-[#9E7D2D] transition-colors uppercase">
                        {news.title}
                      </h3>

                      <p className="text-xs text-[#4D4942] line-clamp-2 leading-relaxed mt-1.5">
                        {news.snippet}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#9E7D2D]">
                      Read Story →
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
