"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Route,
  Zap,
  Droplets,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Layers
} from "lucide-react";

interface InfrastructureSlide {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  primaryBadge: string;
  floatingBadges: string[];
  keySpecs: string[];
}

const INFRASTRUCTURE_SLIDES: InfrastructureSlide[] = [
  {
    id: "roads",
    category: "Road Hierarchy",
    title: "50ft Royal Palm Boulevard & 40ft Avenues",
    subtitle: "Heavy-duty blacktop asphalt with concrete kerbs and paved pedestrian walkways",
    image: "/images/6061957682878419874.jpg",
    primaryBadge: "50ft & 40ft Avenues",
    floatingBadges: [
      "50ft Main Entrance Spine",
      "40ft Two-Way Residential Streets",
      "Paved Pedestrian Walkways",
      "Curated Royal Palm Landscaping"
    ],
    keySpecs: [
      "Heavy-duty asphalt blacktop",
      "Dual concrete kerb storm channels",
      "Wide interlocking pedestrian pavers",
      "Warm concealed LED street lighting"
    ]
  },
  {
    id: "utilities",
    category: "Concealed Grid",
    title: "100% Underground Utilities & FTTH Fiber",
    subtitle: "Completely unobstructed sky vistas with reinforced underground conduits for power & data",
    image: "/images/6061957682878419867.jpg",
    primaryBadge: "Zero Overhead Wires",
    floatingBadges: [
      "100% Underground Conduits",
      "Zero Overhead Wires",
      "FTTH Optical Fiber Ready",
      "Individual Plot Feeder Chambers"
    ],
    keySpecs: [
      "High-voltage cabling in reinforced trenches",
      "Zero road cutting post construction",
      "Dedicated high-speed fiber ducts",
      "Clear, unobstructed open skyline"
    ]
  },
  {
    id: "internal-roads",
    category: "Residential Corridors",
    title: "40ft Internal Avenues Engineered for Privacy",
    subtitle: "Wide vehicular clearance ensuring effortless two-way transit and villa driveway transitions",
    image: "/images/6061957682878419876.jpg",
    primaryBadge: "40ft Residential Grid",
    floatingBadges: [
      "Effortless Two-Way Traffic",
      "Reinforced Road Sub-Base",
      "Continuous Boundary Kerbs",
      "Dedicated Tree Planting Pits"
    ],
    keySpecs: [
      "Engineered road gradients for runoff",
      "Substantial turning radius at corners",
      "Direct driveway threshold integration",
      "Calm, pedestrian-first residential setting"
    ]
  },
  {
    id: "security",
    category: "Gated Sanctuary",
    title: "Monumental Gatehouse & 24/7 Security",
    subtitle: "Architectural security archway with automated boom barriers, RFID vehicular access & CCTV",
    image: "/images/6061957682878419879.jpg",
    primaryBadge: "24/7 Manned & Monitored",
    floatingBadges: [
      "Monumental Security Archway",
      "Automated RFID Boom Barriers",
      "HD CCTV Perimeter Grid",
      "Guard Patrol & Visitor Bay"
    ],
    keySpecs: [
      "Twin-arch entry and exit portals",
      "Digital visitor log and RFID scanning",
      "Night patrol security protocols",
      "Exclusive sanctuary for 150 families"
    ]
  },
  {
    id: "water",
    category: "Hydro & Ecology",
    title: "Overhead Reservoir & Dual Water Grid",
    subtitle: "Dedicated potable line per plot, integrated storm runoff channels and rainwater recharge",
    image: "/images/6061957682878419868.jpg",
    primaryBadge: "Dual Stormwater Drains",
    floatingBadges: [
      "Dual Stormwater Drains",
      "Central Overhead Reservoir",
      "Dedicated Plot Water Tap",
      "Rainwater Recharge Pits"
    ],
    keySpecs: [
      "Pressurized potable water distribution",
      "Concealed heavy-flow RCC storm drains",
      "Zero monsoon waterlogging design",
      "Eco-friendly groundwater replenishing"
    ]
  }
];

export default function InfrastructureSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 3-Second Timer Auto-Cycle for commanding visual renders
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % INFRASTRUCTURE_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide = INFRASTRUCTURE_SLIDES[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % INFRASTRUCTURE_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + INFRASTRUCTURE_SLIDES.length) % INFRASTRUCTURE_SLIDES.length);
  };

  return (
    <section
      id="infrastructure"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF6EE] via-[#F4EFE6] to-[#FAF6EE] text-[#1A211D] relative border-t border-[#E5DAC6] overflow-hidden"
    >
      {/* Warm Sandstone / Alabaster Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[450px] bg-[#EFE7D5]/70 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-[#DFBE85]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 relative z-10">
        
        {/* =========================================================================
            SECTION EDITORIAL HEADER
           ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F3ECE0] border border-[#D5C29D]/60 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#9E7E46]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#9E7E46] font-bold">
              A Community Ready Before Your Home Is
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#14382C] leading-[1.15] mb-4">
            Plotted Infrastructure{" "}
            <span className="italic font-normal text-[#9E7E46]">Engineered to Perfection.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#615A51] font-light max-w-2xl mx-auto leading-relaxed">
            50ft royal palm boulevards, 100% concealed underground utilities, and dual stormwater drainage. 100% physically executed on site.
          </p>
        </div>

        {/* =========================================================================
            SLIDE SELECTOR CHIPS (Quick Filter / Pillar Navigation)
           ========================================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {INFRASTRUCTURE_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIdx;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIdx(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 shadow-xs ${
                  isActive
                    ? "bg-[#14382C] text-[#EADDC7] shadow-md ring-2 ring-[#DFBE85]/50 scale-105"
                    : "bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#615A51] hover:text-[#14382C] border border-[#E5DAC6]"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#DFBE85]" : "bg-stone-300"}`} />
                <span>{slide.primaryBadge}</span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            EXPANDED COMMANDING INFRASTRUCTURE RENDER SHOWCASE (75%–80% DOMINANCE)
           ========================================================================= */}
        <div className="w-full max-w-[1600px] mx-auto">
          <div
            className="relative w-full h-[460px] sm:h-[580px] lg:h-[680px] xl:h-[760px] rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#D5C29D]/50 shadow-2xl group bg-[#FAF6EE]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Stacked Panoramic Images for Smooth 1000ms Crossfade */}
            {INFRASTRUCTURE_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIdx;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 z-0"
                      : "opacity-0 scale-105 pointer-events-none z-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    className="object-cover"
                  />
                </div>
              );
            })}

            {/* Top Slim 3-Second Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-stone-200 z-20 overflow-hidden">
              <motion.div
                key={currentIdx}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "0%" : "100%" }}
                transition={{ duration: 3, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#DFBE85] via-[#9A7B38] to-[#DFBE85] shadow-[0_0_10px_#DFBE85]"
              />
            </div>

            {/* Top Left: Slide Index Badge in Crisp Light Tone */}
            <div className="absolute top-4 left-4 sm:top-7 sm:left-7 z-20 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/92 backdrop-blur-md text-[#14382C] border border-[#D5C29D]/60 text-xs font-mono shadow-md">
              <span className="text-[#8C6D34] font-bold">0{currentIdx + 1}</span>
              <span className="text-[#14382C]/40">/</span>
              <span className="text-[#14382C]/70">0{INFRASTRUCTURE_SLIDES.length}</span>
              <span className="w-1 h-1 rounded-full bg-[#8C6D34] mx-0.5" />
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#14382C] font-semibold truncate max-w-[120px] sm:max-w-none">
                {currentSlide.category}
              </span>
            </div>

            {/* Top Right: Small 3s Timer Badge in Warm Sand Light */}
            <div className="absolute top-4 right-4 sm:top-7 sm:right-7 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#FAF1DC]/95 backdrop-blur-md text-[#7A5C22] border border-[#DFBE85]/60 text-[11px] sm:text-xs font-bold shadow-md">
              <span className={`w-2 h-2 rounded-full bg-[#8C6D34] ${!isPaused ? "animate-ping" : "opacity-50"}`} />
              <span className="tracking-wide">⏱ 3s Timer</span>
            </div>

            {/* Navigation Arrows (Prev / Next) on Desktop */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#14382C] backdrop-blur-md border border-[#DFBE85]/50 flex items-center justify-center pointer-events-auto transition-transform active:scale-95 shadow-lg"
                aria-label="Previous infrastructure slide"
              >
                <ChevronLeft className="w-6 h-6 text-[#8C6D34]" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#14382C] backdrop-blur-md border border-[#DFBE85]/50 flex items-center justify-center pointer-events-auto transition-transform active:scale-95 shadow-lg"
                aria-label="Next infrastructure slide"
              >
                <ChevronRight className="w-6 h-6 text-[#8C6D34]" />
              </button>
            </div>

            {/* =========================================================================
                SLEEK FLOATING LIGHT SECONDARY GLASS BADGES OVERLAID DIRECTLY ON RENDER
               ========================================================================= */}
            <div className="absolute top-20 right-5 sm:top-24 sm:right-7 z-20 hidden md:flex flex-col items-end gap-2.5 pointer-events-none max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-end gap-2"
                >
                  {currentSlide.floatingBadges.map((badge, bIdx) => (
                    <div
                      key={bIdx}
                      className="px-3.5 py-1.5 rounded-full bg-white/92 backdrop-blur-md border border-[#DFBE85]/50 text-[#14382C] text-xs font-semibold shadow-md flex items-center space-x-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rich Gradient Scrim for Bottom Caption and Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none z-10" />

            {/* Bottom Caption & Interactive Dots Controller */}
            <div className="absolute bottom-5 left-4 right-4 sm:bottom-8 sm:left-10 sm:right-10 text-white z-20">
              <div className="max-w-3xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#FAF1DC]/90 backdrop-blur-md border border-[#DFBE85]/60 text-[#7A5C22] text-[11px] uppercase tracking-wider font-bold mb-2 shadow-xs">
                  <span>{currentSlide.category}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-light text-white leading-tight mb-2 drop-shadow-md">
                  {currentSlide.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-200 font-light max-w-2xl leading-relaxed mb-4 drop-shadow-sm">
                  {currentSlide.subtitle}
                </p>

                {/* Mobile Floating Badges Strip in Crisp Light Tone */}
                <div className="flex md:hidden flex-wrap gap-1.5 mb-4">
                  {currentSlide.floatingBadges.slice(0, 2).map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2.5 py-1 rounded-full bg-white/92 backdrop-blur-md border border-[#DFBE85]/50 text-[#14382C] text-[10px] font-semibold shadow-sm"
                    >
                      ✦ {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Strip: Dots Selector & Status */}
              <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFBE85]" />
                  <span className="text-[11px] sm:text-xs text-stone-300 font-medium">
                    100% Executed on Site · Ready for Villa Construction
                  </span>
                </div>

                {/* Interactive Dots */}
                <div className="flex items-center space-x-2">
                  {INFRASTRUCTURE_SLIDES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIdx(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIdx === currentIdx
                          ? "w-7 bg-[#DFBE85] shadow-[0_0_8px_#DFBE85]"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Jump to infrastructure render ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            4 LUXURY BENCHMARK METRIC CARDS (Rich Light Secondary Palettes)
           ========================================================================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[1600px] mx-auto">
          {/* 1. Soft Celadon Sage Light */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#E2F0E6]/85 border border-[#C5E2CD] shadow-sm hover:shadow-md transition-shadow text-center">
            <span className="font-serif text-2xl sm:text-3xl font-light text-[#1E4D3B] block mb-1">
              50 &amp; 40 Ft
            </span>
            <span className="text-[11px] sm:text-xs text-[#1E4D3B] uppercase tracking-wider font-bold block mb-1">
              Engineered Avenues
            </span>
            <p className="text-[11px] text-[#2D5A47] font-normal leading-relaxed">
              Grand royal palm spine branching into wide two-way residential corridors.
            </p>
          </div>

          {/* 2. Warm Champagne Sand Light */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF1DC]/90 border border-[#DFBE85]/60 shadow-sm hover:shadow-md transition-shadow text-center">
            <span className="font-serif text-2xl sm:text-3xl font-light text-[#7A5C22] block mb-1">
              0 Overhead Wires
            </span>
            <span className="text-[11px] sm:text-xs text-[#7A5C22] uppercase tracking-wider font-bold block mb-1">
              100% Concealed Grid
            </span>
            <p className="text-[11px] text-[#8C6D34] font-normal leading-relaxed">
              Reinforced underground trenches for power, street lighting, and FTTH fiber.
            </p>
          </div>

          {/* 3. Soft Sky Breeze Light */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#E4F1F9]/90 border border-[#C7E3F5] shadow-sm hover:shadow-md transition-shadow text-center">
            <span className="font-serif text-2xl sm:text-3xl font-light text-[#18527A] block mb-1">
              Dual Water Grid
            </span>
            <span className="text-[11px] sm:text-xs text-[#18527A] uppercase tracking-wider font-bold block mb-1">
              Hydro &amp; Storm Ecology
            </span>
            <p className="text-[11px] text-[#2B6690] font-normal leading-relaxed">
              Overhead storage reservoir, dedicated plot potable tap, and zero waterlogging.
            </p>
          </div>

          {/* 4. Soft Terracotta Peach Light */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FCECE3]/90 border border-[#F5D1C0] shadow-sm hover:shadow-md transition-shadow text-center">
            <span className="font-serif text-2xl sm:text-3xl font-light text-[#944225] block mb-1">
              24 / 7 Sanctuary
            </span>
            <span className="text-[11px] sm:text-xs text-[#944225] uppercase tracking-wider font-bold block mb-1">
              Manned &amp; RFID Gates
            </span>
            <p className="text-[11px] text-[#A65335] font-normal leading-relaxed">
              Monumental architectural portal with automated boom barriers &amp; HD CCTV.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}