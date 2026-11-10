import React from "react";
import Image from "next/image";
import { SERVICES } from "@/data/studio";

export default function Expertise() {
  const expertiseImages = [
    { src: "/images/all-images/img-1.jpg", alt: "Architectural project exterior" },
    { src: "/images/all-images/img-7.jpg", alt: "Contemporary architecture" },
    { src: "/images/all-images/img-8.jpg", alt: "Public realm architecture" },
    { src: "/images/all-images/img-26.jpg", alt: "Interior design detail" },
    { src: "/images/all-images/img-28.jpg", alt: "Landscape and built form" },
  ];

  return (
    <section id="expertise" className="relative bg-[#FBFBFA] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 scroll-reveal">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E7E3DA]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#9E7D2D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
                Section 05 · Core Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#8A0D50] tracking-tight uppercase">
              Expertise
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-relaxed text-[#7A746B]">
            Eleven multidisciplinary services operating from concept through handover.
          </p>
        </div>

        {/* Master Interactive Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Numbered Service Rows */}
          <div className="lg:col-span-7 divide-y divide-[#E7E3DA] border-y border-[#E7E3DA]">
            {SERVICES.map((service) => (
              <article key={service.id} className="px-3 py-5 sm:px-5">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="pt-0.5 text-xs font-mono font-medium tracking-widest text-[#8A0D50]">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-base font-medium uppercase tracking-wide text-[#240318] sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-xs leading-relaxed text-[#7A746B]">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Curated five-image architecture collage */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="grid min-h-[30rem] grid-cols-2 grid-rows-3 gap-2 overflow-hidden bg-[#240318] p-2 sm:min-h-[34rem]">
              {expertiseImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden ${index === 0 ? "row-span-2" : index === 3 ? "col-span-2" : ""}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
