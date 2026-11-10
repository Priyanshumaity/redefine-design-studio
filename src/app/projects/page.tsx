"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, Download } from "lucide-react";
import { useMemo, useState } from "react";
import { CATEGORIES, PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects = useMemo(
    () => selectedCategory === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="min-h-screen bg-[#FBFBFA] pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <header className="border-b border-[#E7E3DA] pb-8 sm:pb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#9E7D2D]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9E7D2D] sm:text-[11px]">
              Studio Portfolio · Selected Works
            </p>
          </div>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal uppercase tracking-tight text-[#8A0D50]">
                Selected Projects
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#5E5950] sm:text-base font-light">
                Architecture, interiors, healthcare and landscape projects shaped around place, performance and people.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/redefine-design-studio-portfolio.pdf"
                download="Redefine_Design_Studio_Portfolio.pdf"
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-2.5 border border-[#9E7D2D] bg-[#9E7D2D]/5 hover:bg-[#9E7D2D] text-[#9E7D2D] hover:text-white transition-all shadow-sm"
                aria-label="Download Complete Portfolio PDF"
              >
                <Download className="w-3.5 h-3.5" />
                Download Portfolio
              </a>
              <p aria-live="polite" className="text-xs font-mono font-medium uppercase tracking-[0.14em] text-[#827C72]">
                {filteredProjects.length} Projects
              </p>
            </div>
          </div>
        </header>

        <div className="mt-7 overflow-x-auto pb-3" aria-label="Project categories">
          <div className="flex min-w-max items-center gap-2">
            <span className="mr-1 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#827C72]">
              <Filter className="h-3.5 w-3.5 text-[#9E7D2D]" /> Filter
            </span>
            {CATEGORIES.map((category) => {
              const selected = category === selectedCategory;
              const count = category === "All" ? PROJECTS.length : PROJECTS.filter((project) => project.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selected}
                  className={`border px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.13em] transition-colors sm:text-[11px] ${
                    selected ? "border-[#141311] bg-[#141311] text-white" : "border-[#E1DDD3] bg-white text-[#5E5950] hover:border-[#9E7D2D] hover:text-[#141311]"
                  }`}
                >
                  {category} <span className={selected ? "text-white/70" : "text-[#9E7D2D]"}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        <section className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3 lg:gap-8" aria-label="Project collection">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={`group flex flex-col justify-between border border-[#E7E3DA] bg-white p-5 transition-all duration-300 hover:border-[#9E7D2D]/60 hover:shadow-md motion-safe:animate-fade-in-up ${
                index === 0 && selectedCategory === "All" ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${Math.min(index * 55, 330)}ms` }}
            >
              <div>
                <div className={`relative overflow-hidden bg-[#EDE9E1] ${index === 0 && selectedCategory === "All" ? "aspect-[16/8.8]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes={index === 0 && selectedCategory === "All" ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>
                <div className="pt-4">
                  <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.17em] text-[#9E7D2D]">{project.category}</p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h2 className="text-lg font-serif font-normal uppercase leading-snug tracking-[-0.02em] text-[#141311] sm:text-xl min-h-[3rem] flex items-start group-hover:text-[#9E7D2D] transition-colors">
                      {project.title}
                    </h2>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#827C72] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#9E7D2D]" />
                  </div>
                  <p className="mt-1 text-xs text-[#68635A] font-light line-clamp-2 leading-relaxed min-h-[2rem]">{project.tagline}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-[11px] font-mono text-[#827C72]">
                <span>{project.location}</span>
                <span className="text-[#9E7D2D] uppercase">{project.status}</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
