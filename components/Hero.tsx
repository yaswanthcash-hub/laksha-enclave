"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Download,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Compass
} from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreMasterplan: () => void;
}

interface HeroSlide {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "entrance",
    number: "01",
    title: "Grand Entrance Gate",
    subtitle: "Monumental Neoclassical Gateway with 24/7 Security",
    badge: "Direct NE7 Frontage",
    image: "/images/6061957682878419879.jpg"
  },
  {
    id: "boulevard",
    number: "02",
    title: "50ft Royal Palm Boulevard",
    subtitle: "800+ Towering Royal Palms with Concealed Underground Utilities",
    badge: "Arterial Spine",
    image: "/images/6061957682878419873.jpg"
  },
  {
    id: "clubhouse",
    number: "03",
    title: "The Manor Brick Clubhouse - 18,500 Sq.Ft",
    subtitle: "18,500 Sq.Ft Two-Storey Historic Brick Clubhouse & Leisure Wing",
    badge: "18,500 Sq.Ft",
    image: "/images/6061957682878419866.jpg"
  },
  {
    id: "pool",
    number: "04",
    title: "Resort Swimming Pool & Deck",
    subtitle: "Sunken Azure Pool, Sun Deck & Private Cabanas",
    badge: "Aqua Retreat",
    image: "/images/6061957682878419868.jpg"
  },
  {
    id: "park",
    number: "05",
    title: "Central Park & Sunburst Pavilion",
    subtitle: "Manicured Central Amphitheatre & Yoga Pavilion Surrounded by 800+ Palms",
    badge: "Botanical Sanctuary",
    image: "/images/6061957682878419875.jpg"
  },
  {
    id: "masterplan",
    number: "06",
    title: "Official 25-Acre Master Layout Plan",
    subtitle: "150 Vaastu-Compliant Villa Plots with 50ft & 40ft Internal Avenues",
    badge: "BIAAPA Sanctioned",
    image: "/images/6061957682878419872.jpg"
  }
];

const AUTO_ROTATE_INTERVAL = 3000; // 3 seconds per slide

export default function Hero({ onOpenEnquiry, onExploreMasterplan }: HeroProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setActiveSlideIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Auto-Slide Interval Effect (every 5 seconds)
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_ROTATE_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const currentSlide = HERO_SLIDES[activeSlideIndex];

  return (
    <section
      id="overview"
      className="relative w-full h-[100dvh] min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#FAF5EB] text-[#14382C] select-none"
    >
      {/* =========================================================================
          1. FULL-BLEED 100VW × 100VH BACKGROUND IMAGE SLIDESHOW (KEN BURNS ZOOM)
         ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-1" : "opacity-0 z-0"
              }`}
            >
              <div
                className={`w-full h-full transform transition-transform duration-[4000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  unoptimized
                  className="object-cover object-center"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          LUMINOUS AMBIENT LIGHT OVERLAYS (ENSURING RAZOR-SHARP LEGIBILITY)
         ========================================================================= */}
      {/* Left/Center Luminous Ambient Gradient: Soft Champagne Wash for crisp readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EB]/95 via-[#FAF5EB]/85 sm:via-[#FAF5EB]/65 md:via-[#FAF5EB]/45 to-transparent/10 z-10 pointer-events-none" />

      {/* Top Edge: Delicate light blend for the luminous navbar */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#FAF5EB]/80 via-[#FAF5EB]/30 to-transparent z-10 pointer-events-none" />

      {/* Bottom Edge: Ambient warmth behind the slide controls and ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#FAF5EB]/90 via-[#FAF5EB]/40 to-transparent z-10 pointer-events-none" />

      {/* =========================================================================
          2. FOREGROUND LEFT EDITORIAL HERO CONTENT
         ========================================================================= */}
      <div className="relative z-20 w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 pt-24 sm:pt-32 md:pt-36 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow in Elegant Italic Serif with Gold Rule */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-2.5 sm:mb-4">
            <span className="w-6 sm:w-12 h-[2px] bg-[#C8A251]" />
            <span className="font-serif italic text-base sm:text-2xl md:text-3xl text-[#7A5C22] tracking-wider font-medium">
              Luxurious Villa Plots
            </span>
          </div>

          {/* Grand Serif Master Headline */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal text-[#14382C] tracking-tight leading-[1.12] sm:leading-[1.08] mb-3 sm:mb-4">
            Built on Stature &amp; Open Skies, <br />
            <span className="text-[#7A5C22] italic font-normal">
              Bengaluru–Chennai Expressway (NE7)
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-[#3F4F46] font-normal leading-relaxed mb-4 sm:mb-7 max-w-2xl">
            25-Acre Gated Plotted Community • 150 Luxury Villa Plots <br className="hidden sm:inline" />
            Adjacent to BCE Hedaginabele Toll Plaza • 25 Mins to Whitefield
          </p>

          {/* Subtle Warm Champagne Trust Badge */}
          <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#FAF1DC] border border-[#DFBE85]/70 text-[#7A5C22] mb-5 sm:mb-8 text-[10px] sm:text-xs shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7A5C22] shrink-0" />
            <span className="font-semibold tracking-wide">
              Exclusive Founding Allocation • 100% Freehold Clear Titles
            </span>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 max-w-md sm:max-w-none">
            {/* Primary Gold Button */}
            <button
              onClick={onExploreMasterplan}
              className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-sm bg-[#C8A251] hover:bg-[#D4AF37] text-stone-950 font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_4px_24px_rgba(200,162,81,0.35)] hover:shadow-[0_6px_32px_rgba(212,175,55,0.5)] transition-all cursor-pointer flex items-center justify-center space-x-2 active:scale-[0.98] group"
            >
              <Compass className="w-4 h-4 text-stone-950 transition-transform group-hover:rotate-45" />
              <span>EXPLORE MASTERPLAN</span>
            </button>

            {/* Secondary Crisp Light Frosted Button */}
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-sm bg-white hover:bg-[#FAF8F5] text-[#14382C] border border-[#DFBE85]/80 hover:border-[#C8A251] font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2 active:scale-[0.98] group shadow-md"
            >
              <Download className="w-4 h-4 text-[#7A5C22] transition-transform group-hover:-translate-y-0.5" />
              <span>REQUEST BROCHURE &amp; DETAILS</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. SLIDE SELECTOR CONTROLS & HUD (ABOVE BOTTOM TICKER)
         ========================================================================= */}
      <div className="relative z-20 w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 pb-3 sm:pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-3">
        {/* Left: Active Slide Identifier */}
        <div className="flex items-center space-x-2.5 sm:space-x-3 bg-[#FAF8F5] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-[#DFBE85]/70 shadow-lg w-fit text-[#14382C]">
          <span className="font-serif text-base sm:text-xl font-bold text-[#7A5C22]">
            {currentSlide.number}
          </span>
          <span className="text-[#14382C]/30 text-xs sm:text-sm">/</span>
          <span className="text-[#14382C]/60 text-xs sm:text-sm font-medium">06</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A251]" />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold text-[#14382C] tracking-wide truncate max-w-[190px] sm:max-w-none">
              {currentSlide.title}
            </span>
            <span className="text-[10px] text-[#7A5C22] font-semibold truncate hidden sm:block">
              {currentSlide.badge}
            </span>
          </div>
        </div>

        {/* Right: Slide Selector Controls (Dots/Numbers + Play/Pause + Chevrons + 3s Indicator) */}
        <div className="flex items-center gap-2 bg-[#FAF8F5] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-[#DFBE85]/70 text-[#14382C] w-fit self-end sm:self-auto shadow-lg relative overflow-hidden">
          {/* Top 3s Animated Progress Line */}
          {isPlaying && (
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#14382C]/10 overflow-hidden">
              <div
                key={activeSlideIndex}
                className="h-full bg-gradient-to-r from-[#DFBE85] via-[#C8A251] to-[#DFBE85] animate-timer-3s-single"
              />
            </div>
          )}

          <div className="flex items-center space-x-2.5 sm:space-x-3">
            {/* 3s Active Indicator Pill */}
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-[#FAF1DC]/90 border border-[#DFBE85]/50 text-[10px] sm:text-[11px] font-bold text-[#7A5C22]">
              <span className={`w-1.5 h-1.5 rounded-full bg-[#C8A251] ${isPlaying ? "animate-ping" : "opacity-40"}`} />
              <span className="tracking-wide">⏱ 3s AUTO</span>
            </div>

            <div className="h-3.5 w-[1px] bg-[#DFBE85]/40 hidden sm:block" />

            {/* Slide Dots / Selectors */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = activeSlideIndex === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center relative overflow-hidden ${
                      isActive
                        ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-[#C8A251]"
                        : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#14382C]/25 hover:bg-[#14382C]/50"
                    }`}
                    aria-label={`Jump to slide ${idx + 1}: ${slide.title}`}
                  />
                );
              })}
            </div>

            <div className="h-4 w-[1px] bg-[#DFBE85]/40 mx-1" />

            {/* Play / Pause Toggle Button */}
            <button
              onClick={togglePlayPause}
              className="w-7 h-7 rounded-full bg-[#14382C]/5 hover:bg-[#14382C]/10 text-[#14382C] border border-[#DFBE85]/40 flex items-center justify-center transition-all cursor-pointer"
              aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 text-[#14382C]" />
              ) : (
                <Play className="w-3.5 h-3.5 text-[#C8A251] ml-0.5" />
              )}
            </button>

            {/* Prev / Next Chevrons */}
            <div className="flex items-center space-x-1">
              <button
                onClick={prevSlide}
                className="w-7 h-7 rounded-full bg-[#14382C]/5 hover:bg-[#C8A251] hover:text-stone-950 text-[#14382C] border border-[#DFBE85]/40 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-7 h-7 rounded-full bg-[#14382C]/5 hover:bg-[#C8A251] hover:text-stone-950 text-[#14382C] border border-[#DFBE85]/40 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. DEEP BURGUNDY / MAROON BOTTOM TICKER STRIP (MATCHING REFERENCE IMAGE)
         ========================================================================= */}
      <div className="relative z-20 w-full bg-[#701620] border-t border-[#DFBE85]/30 py-2.5 sm:py-3 overflow-hidden shadow-lg select-none">
        <div className="flex animate-marquee items-center whitespace-nowrap text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-[0.16em] uppercase text-white">
          <div className="flex items-center space-x-4 sm:space-x-6 pr-4 sm:pr-6">
            <span className="text-[#DFBE85]">✦ 0 KM FROM NE7 TOLL</span>
            <span className="text-[#C8A251]">✦</span>
            <span>50FT &amp; 40FT ROYAL PALM BOULEVARDS</span>
            <span className="text-[#C8A251]">✦</span>
            <span className="text-[#DFBE85]">18,500 SQ.FT BRICK CLUBHOUSE</span>
            <span className="text-[#C8A251]">✦</span>
            <span>100% VAASTU COMPLIANT</span>
            <span className="text-[#C8A251]">✦</span>
            <span className="text-[#DFBE85]">25 MINS TO WHITEFIELD</span>
            <span className="text-[#C8A251]">✦</span>
            <span>100% CONCEALED UNDERGROUND UTILITIES</span>
            <span className="text-[#C8A251]">✦</span>
            <span className="text-[#DFBE85]">BIAAPA SANCTIONED</span>
            <span className="text-[#C8A251]">✦</span>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6 pr-4 sm:pr-6" aria-hidden="true">
            <span className="text-[#DFBE85]">✦ 0 KM FROM NE7 TOLL</span>
            <span className="text-[#C8A251]">✦</span>
            <span>50FT &amp; 40FT ROYAL PALM BOULEVARDS</span>
            <span className="text-[#C8A251]">✦</span>
            <span className="text-[#DFBE85]">18,500 SQ.FT BRICK CLUBHOUSE</span>
            <span className="text-[#C8A251]">✦</span>
            <span>100% VAASTU COMPLIANT</span>
            <span className="text-[#C8A251]">✦</span>
            <span className="text-[#DFBE85]">25 MINS TO WHITEFIELD</span>
            <span className="text-[#C8A251]">✦</span>
            <span>100% CONCEALED UNDERGROUND UTILITIES</span>
            <span className="text-[#C8A251]">✦</span>
            <span className="text-[#DFBE85]">BIAAPA SANCTIONED</span>
            <span className="text-[#C8A251]">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
