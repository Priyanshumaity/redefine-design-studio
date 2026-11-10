"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

export interface HeroSlide {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  image: string;
  projectSlug: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "01",
    number: "01",
    title: "INTERNATIONAL EXHIBITION CENTRE",
    subtitle: "CIVIC MONUMENT & CONVENTION EXCELLENCE",
    category: "Civic & Institutional",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-1.jpg",
    projectSlug: "international-exhibition-convention-centre",
  },
  {
    id: "02",
    number: "02",
    title: "42 STORIED LUXURY RESIDENCE",
    subtitle: "CURVILINEAR AERODYNAMIC GRANDEUR",
    category: "Residential: High-End Luxury",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-2.jpg",
    projectSlug: "the-curve-residences",
  },
  {
    id: "03",
    number: "03",
    title: "SUNCREST TOWERS",
    subtitle: "CONTEMPORARY URBAN HIGH-RISE",
    category: "Residential: High-End Luxury",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-6.jpg",
    projectSlug: "the-duet-ballygunge",
  },
  {
    id: "04",
    number: "04",
    title: "SUNCREST VILLA",
    subtitle: "SEAMLESS INDOOR-OUTDOOR LIVING",
    category: "Villas",
    location: "West Bengal",
    image: "/images/all-images/img-7.jpg",
    projectSlug: "private-villas-and-farm-house",
  },
  {
    id: "05",
    number: "05",
    title: "EXHIBITION & CONVENTION",
    subtitle: "MONUMENTAL COLUMN-FREE SPACES",
    category: "Civic & Hospitality",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-8.jpg",
    projectSlug: "kolkata-exhibition-centre",
  },
  {
    id: "06",
    number: "06",
    title: "TEACHING HOSPITAL CAMPUS",
    subtitle: "CLINICAL EXCELLENCE & HEALING",
    category: "Health Care",
    location: "Phulbani & Koraput, Odisha",
    image: "/images/all-images/img-9.jpg",
    projectSlug: "medical-college-bhubaneswar",
  },
  {
    id: "07",
    number: "07",
    title: "WATERFRONT VILLA",
    subtitle: "TROPICAL MINIMALISM BY THE RIVER",
    category: "Villas",
    location: "Murshidabad, West Bengal",
    image: "/images/all-images/img-10.jpg",
    projectSlug: "dhuliyan-luxury-villa",
  },
  {
    id: "08",
    number: "08",
    title: "COURTYARD HAVEN",
    subtitle: "VERNACULAR MASONRY & SHADING",
    category: "Villas",
    location: "Murshidabad, West Bengal",
    image: "/images/all-images/img-11.jpg",
    projectSlug: "dhuliyan-luxury-villa",
  },
  {
    id: "09",
    number: "09",
    title: "SOMNATH VILLA",
    subtitle: "TIMELESS GEOMETRY & NATURE HARMONY",
    category: "Villas",
    location: "Bangalore, Karnataka",
    image: "/images/all-images/img-12.jpg",
    projectSlug: "private-villas-and-farm-house",
  },
  {
    id: "10",
    number: "10",
    title: "PRIVATE VILLAS & FARM HOUSE",
    subtitle: "TRANQUIL AGRARIAN RETREAT",
    category: "Villas",
    location: "Mysore, Karnataka",
    image: "/images/all-images/img-13.jpg",
    projectSlug: "private-villas-and-farm-house",
  },
  {
    id: "11",
    number: "11",
    title: "BESPOKE INTERIORS",
    subtitle: "WARM ACOUSTIC CRAFTSMANSHIP",
    category: "Interiors",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-14.jpg",
    projectSlug: "interiors-contemporary",
  },
  {
    id: "12",
    number: "12",
    title: "RESIDENT'S HALL & CLUB",
    subtitle: "EXCLUSIVE VIP COMMUNITY SPACES",
    category: "Interiors",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-15.jpg",
    projectSlug: "interiors-contemporary",
  },
  {
    id: "13",
    number: "13",
    title: "CONTEMPORARY INTERIORS",
    subtitle: "TACTILE TEXTURES & REFINED LIGHT",
    category: "Interiors",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-16.jpg",
    projectSlug: "interiors-contemporary",
  },
  {
    id: "14",
    number: "14",
    title: "BEYOND SUSTAINABILITY",
    subtitle: "REGENERATIVE ECOLOGICAL ARCHITECTURE",
    category: "Regenerative Built Systems",
    location: "Eastern India",
    image: "/images/all-images/img-17.jpg",
    projectSlug: "beyond-sustainability",
  },
];

const SLIDE_DURATION_MS = 6000;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic Smooth Continuous Auto-Play
  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-[92vh] min-h-[620px] max-h-[980px] overflow-hidden bg-[#FBFBFA] select-none"
      aria-label="Architectural Portfolio Hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Carousel with Ken-Burns and Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide.id}
          initial={hasMounted ? { opacity: 0, scale: 1.05 } : false}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="absolute inset-0 w-full h-full transform-gpu"
        >
          <Image
            src={currentSlide.image}
            alt={`${currentSlide.title} - ${currentSlide.subtitle}`}
            fill
            priority
            fetchPriority="high"
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Crisp Architectural Photo with zero white haze */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Instant Cache Preload for Next Slide */}
      <div className="hidden" aria-hidden="true">
        <Image
          src={HERO_SLIDES[(currentIndex + 1) % HERO_SLIDES.length].image}
          alt="Preload next slide"
          width={1920}
          height={1080}
          priority
          quality={80}
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/65 via-black/30 to-transparent pointer-events-none" />

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-12">
        {/* Top Category Badge */}
        <div className="flex items-center gap-4">
          <motion.div
            key={`badge-${currentSlide.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-black/35 backdrop-blur-md border border-white/30 shadow-sm"
          >
            <span className="w-6 h-[1.5px] bg-[#9E7D2D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#9E7D2D] font-semibold">
              {currentSlide.category}
            </span>
            <span className="text-[11px] text-[#8C867B]">·</span>
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-white/90 font-medium">
              {currentSlide.location}
            </span>
          </motion.div>
        </div>

        {/* Central Bold Editorial Title with Automatic Staggered Animations */}
        <div className="relative z-30 max-w-3xl my-auto translate-y-16 bg-[#1A0512]/80 p-4 sm:translate-y-20 sm:p-5 md:translate-y-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide.id}`}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold tracking-[-0.025em] text-white leading-[1.15]">
                {currentSlide.title}
              </h1>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.18em] text-[#F4D887] font-semibold"
              >
                {currentSlide.subtitle}
              </motion.p>

              {/* Automatic Animated Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pt-5 flex flex-wrap items-center gap-3"
              >
                {/* Primary Button with Live Shimmer Effect */}
                <Link
                  href="/projects"
                  className="relative group overflow-hidden px-5 py-3 bg-[#141311] text-white text-[11px] font-bold uppercase tracking-[0.17em] transition-all duration-300 hover:bg-[#9E7D2D] flex items-center gap-3"
                >
                  <span className="relative z-10 text-white">Explore Projects</span>
                  <ArrowRight className="w-4 h-4 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1.5" />

                  {/* Continuous Sheen Sweep Animation */}
                  <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-shimmer-sweep" />
                </Link>

                {/* Secondary Button: Semi-translucent Frosted Glass ("in middle of opaque and translucent") */}
                <Link
                  href="/projects"
                  className="group relative px-5 py-3 border border-white/50 bg-white/90 backdrop-blur-md text-[#141311] text-[11px] font-semibold uppercase tracking-[0.17em] transition-all duration-300 hover:bg-white hover:border-[#F4D887]"
                >
                  <span className="relative z-10 text-[#141311]">All Projects</span>
                </Link>

                {/* Direct Action Link to Consultation */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.17em] text-white bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/50 hover:border-[#F4D887] transition-all py-3 px-4"
                >
                  <span>Start Inquiry</span>
                  <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Editorial Slide Number Indicator */}
        <div className="flex items-center justify-between text-xs text-[#68635A] font-mono">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-black/35 backdrop-blur-md border border-white/30 shadow-sm">
            <span className="text-base font-semibold text-[#9E7D2D]">
              {currentSlide.id}
            </span>
            <span className="text-xs text-[#8E8A80]">/</span>
            <span className="text-xs text-white/90">
              {HERO_SLIDES.length < 10 ? `0${HERO_SLIDES.length}` : HERO_SLIDES.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="grid h-10 w-10 place-items-center border border-white/35 bg-black/35 text-white transition-colors hover:border-[#F4D887] hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="inline-flex h-10 items-center gap-2 border border-white/35 bg-black/35 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#F4D887] hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-pressed={isPaused}
            >
              {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              {isPaused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="grid h-10 w-10 place-items-center border border-white/35 bg-black/35 text-white transition-colors hover:border-[#F4D887] hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Next project"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
