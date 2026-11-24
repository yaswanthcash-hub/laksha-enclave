"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  Sparkles,
  Camera,
  Layers,
  ArrowRight,
  Play,
  Pause
} from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: "all" | "clubhouse" | "boulevards" | "pool" | "sports-parks";
  categoryLabel: string;
  caption: string;
  featured?: boolean;
}

const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "gate-portal",
    src: "/images/6061957682878419879.jpg",
    title: "Monumental Entrance Gate & Portal",
    category: "boulevards",
    categoryLabel: "Boulevards & Grand Gate",
    caption: "Stately double-portal entryway with 24/7 manned security cabins, automated boom barriers & royal palm avenues",
    featured: true
  },
  {
    id: "manor-clubhouse-exterior",
    src: "/images/6061957682878419873.jpg",
    title: "The Manor 2-Storey Brick Clubhouse",
    category: "clubhouse",
    categoryLabel: "The Manor Clubhouse",
    caption: "18,500 Sq.Ft architectural landmark handcrafted with exposed red brick, terracotta roof tiles & Tuscan verandas",
    featured: true
  },
  {
    id: "panoramic-glass-gym",
    src: "/images/6061957682878419866.jpg",
    title: "Upper-Floor Panoramic Glass Fitness Studio",
    category: "clubhouse",
    categoryLabel: "The Manor Clubhouse",
    caption: "Floor-to-ceiling insulated glass fitness center with tranquil panoramic views over the pool and palm avenues"
  },
  {
    id: "azure-resort-pool",
    src: "/images/6061957682878419877.jpg",
    title: "Azure Resort Lap Pool & Splash Oasis",
    category: "pool",
    categoryLabel: "Azure Resort Pool",
    caption: "4,500 Sq.Ft crystal-clear water retreat with adult swimming lap pool, toddler splash zone & comfortable sun loungers",
    featured: true
  },
  {
    id: "poolside-timber-decks",
    src: "/images/6061957682878419875.jpg",
    title: "Sunken Hardwood Sun Decks & Pergolas",
    category: "pool",
    categoryLabel: "Azure Resort Pool",
    caption: "Flush-mounted teak-treated poolside sun promenade with private shaded cabanas and tropical frangipani planters"
  },
  {
    id: "palm-boulevard-arterial",
    src: "/images/6061957682878419874.jpg",
    title: "50-Foot Royal Palm Grand Boulevard",
    category: "boulevards",
    categoryLabel: "Boulevards & Grand Gate",
    caption: "Grand 50ft main boulevard and 40ft cross avenues lined with 800+ mature royal palms and vintage street lamps"
  },
  {
    id: "aerial-masterplan-panorama",
    src: "/images/6061957682878419867.jpg",
    title: "25-Acre Gated Masterplan Aerial Panorama",
    category: "boulevards",
    categoryLabel: "Boulevards & Grand Gate",
    caption: "Bird's-eye architectural perspective showing the 150 villa plots, central radial park, and clubhouse grounds"
  },
  {
    id: "sports-championship-arena",
    src: "/images/6061957682878419869.jpg",
    title: "Multi-Sport Championship Arena",
    category: "sports-parks",
    categoryLabel: "Parks & Sports",
    caption: "Floodlit 12,000 Sq.Ft sports arena with non-abrasive turf for basketball, badminton, pickleball & volleyball"
  },
  {
    id: "youth-skate-arena",
    src: "/images/6061957682878419870.jpg",
    title: "Youth Skate Arena & Roller Park",
    category: "sports-parks",
    categoryLabel: "Parks & Sports",
    caption: "Smooth custom-poured concrete skate plaza with banked curves, rails & safe viewing boundary for youth"
  },
  {
    id: "sunburst-radial-gazebo",
    src: "/images/6061957682878419871.jpg",
    title: "Sunburst Radial Garden & Central Gazebo",
    category: "sports-parks",
    categoryLabel: "Parks & Sports",
    caption: "Botanical radial garden with flower-bordered walking loops and ornamental central amphitheater gazebo"
  },
  {
    id: "children-adventure-playground",
    src: "/images/6061957682878419868.jpg",
    title: "Children's Adventure Playground",
    category: "sports-parks",
    categoryLabel: "Parks & Sports",
    caption: "Natural timber climbing frames, rope bridges, swings, and soft-fall play zones for imaginative childhoods"
  },
  {
    id: "internal-avenue-40ft",
    src: "/images/6061957682878419876.jpg",
    title: "40-Foot Internal Residential Avenue",
    category: "boulevards",
    categoryLabel: "Boulevards & Grand Gate",
    caption: "Wide asphalt-paved internal residential road with curbed walkways, flowering perimeter hedges and concealed utility chambers"
  },
  {
    id: "pedestrian-walkways",
    src: "/images/6061957682878419878.jpg",
    title: "Pedestrian Sidewalks & Kerbed Greenery",
    category: "boulevards",
    categoryLabel: "Boulevards & Grand Gate",
    caption: "Dedicated curbed jogging and walking pathways lined with mature landscaping and cast-iron night lanterns"
  },
  {
    id: "master-layout-blueprint",
    src: "/images/6061957682878419872.jpg",
    title: "Official 25-Acre Master Layout Plan",
    category: "boulevards",
    categoryLabel: "Boulevards & Grand Gate",
    caption: "The complete 25-acre spatial plan displaying all 150 plots, 50ft arterial boulevard, clubhouse campus, and park network"
  }
];

const CATEGORIES = [
  { id: "all", label: "All Perspectives" },
  { id: "clubhouse", label: "The Manor Clubhouse" },
  { id: "boulevards", label: "Boulevards & Grand Gate" },
  { id: "pool", label: "Azure Resort Pool" },
  { id: "sports-parks", label: "Parks & Sports" }
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [spotlightIndex, setSpotlightIndex] = useState<number>(0);
  const [spotlightPaused, setSpotlightPaused] = useState<boolean>(false);
  const [lightboxAutoPlay, setLightboxAutoPlay] = useState<boolean>(true);
  const [lightboxHoverPaused, setLightboxHoverPaused] = useState<boolean>(false);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // 3-Second Auto-Cycle for Featured Spotlight Showcase
  useEffect(() => {
    if (spotlightPaused) return;
    const interval = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [spotlightPaused]);

  // 3-Second Auto-Cycle for Lightbox Modal
  useEffect(() => {
    if (lightboxIndex === null || !lightboxAutoPlay || lightboxHoverPaused) return;
    const interval = setInterval(() => {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredItems.length : null
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [lightboxIndex, lightboxAutoPlay, lightboxHoverPaused, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF5EB] via-[#F6EFE2] to-[#FAF5EB] text-[#1A211D] relative border-t border-[#DFBE85]/30 overflow-hidden">
      {/* Background Ambience */}
      <div className="ambient-warm-glow w-96 h-96 bg-[#DFBE85]/15 top-20 right-10 pointer-events-none" />
      <div className="ambient-warm-glow w-96 h-96 bg-[#14382C]/10 bottom-20 left-10 pointer-events-none" />

      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4F0E8] border border-[#9E7E46]/30 mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#9E7E46]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#9E7E46] font-bold">
              Visual Architecture Showcase
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#14382C] mb-3">
            A Glimpse into <span className="gold-gradient-text font-serif italic">Life at Laksh Enclave</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#59665E] font-light leading-relaxed max-w-3xl mx-auto">
            Authentic architectural 3D renders representing the exact masterplan, clubhouse elevations, and landscaped parks. Where images sell and architecture speaks.
          </p>
        </div>

        {/* 3-Second Auto-Cycling Architectural Showcase Billboard */}
        <div
          className="relative w-full h-80 sm:h-96 md:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden border border-[#DFBE85]/35 shadow-2xl mb-10 bg-[#FAF5EB] group cursor-pointer"
          onMouseEnter={() => setSpotlightPaused(true)}
          onMouseLeave={() => setSpotlightPaused(false)}
          onClick={() => {
            const curItem = GALLERY_ITEMS[spotlightIndex];
            const idxInFiltered = filteredItems.findIndex((it) => it.id === curItem.id);
            setLightboxIndex(idxInFiltered >= 0 ? idxInFiltered : 0);
          }}
        >
          {/* Stacked Images for Slow Graceful Crossfade (1000ms) with Subtle Scale */}
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                idx === spotlightIndex
                  ? "opacity-100 scale-100 z-0"
                  : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}

          {/* Top 3-Second Animated Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-stone-200 z-20 overflow-hidden">
            <motion.div
              key={spotlightIndex}
              initial={{ width: "0%" }}
              animate={{ width: spotlightPaused ? "0%" : "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-full bg-gradient-to-r from-[#DFBE85] via-[#9A7B38] to-[#DFBE85] shadow-[0_0_10px_#DFBE85]"
            />
          </div>

          {/* Top Bar with Category Badge, Counter & 3s Indicator */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#14382C] border border-[#14382C]/10 shadow-md">
                {GALLERY_ITEMS[spotlightIndex].categoryLabel}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/92 backdrop-blur-md text-[#14382C] border border-[#DFBE85]/50 shadow-sm font-semibold">
                {spotlightIndex + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>

            {/* 3s Auto Badge & Play/Pause */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF1DC]/95 backdrop-blur-md text-[#7A5C22] border border-[#DFBE85]/60 text-[10px] sm:text-xs font-bold shadow-md">
                <span className={`w-1.5 h-1.5 rounded-full bg-[#8C6D34] ${!spotlightPaused ? "animate-ping" : "opacity-50"}`} />
                <span className="tracking-wide">⏱ 3s Auto</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSpotlightPaused((prev) => !prev);
                }}
                className="p-1.5 rounded-full bg-white/92 hover:bg-white text-[#14382C] backdrop-blur-md border border-[#DFBE85]/50 shadow-sm transition-all cursor-pointer"
                aria-label={spotlightPaused ? "Play" : "Pause"}
              >
                {spotlightPaused ? <Play className="w-3.5 h-3.5 text-[#8C6D34]" /> : <Pause className="w-3.5 h-3.5 text-[#14382C]" />}
              </button>
            </div>
          </div>

          {/* Scrim Gradient for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#14382C]/85 via-[#14382C]/25 to-transparent pointer-events-none z-10" />

          {/* Quick Inspect Floating Badge on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#14382C]/10 backdrop-blur-[2px] pointer-events-none z-10">
            <span className="px-4 py-2 rounded-full bg-white/95 text-[#14382C] text-xs font-bold shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <ZoomIn className="w-4 h-4 text-[#9E7E46]" />
              <span>Click for Full Resolution &amp; Lightbox</span>
            </span>
          </div>

          {/* Bottom Overlay Info & Controls */}
          <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-widest text-[#DFBE85] font-semibold block mb-1">
                Featured 3D Architectural Perspective
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                {GALLERY_ITEMS[spotlightIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#EADDC7] line-clamp-1 mt-1 font-light drop-shadow-sm">
                {GALLERY_ITEMS[spotlightIndex].caption}
              </p>
            </div>

            {/* Quick Dot Controls */}
            <div className="flex items-center gap-1.5 bg-white/92 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#DFBE85]/50 shadow-sm w-fit text-[#14382C]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSpotlightIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
                }}
                className="text-[#14382C]/70 hover:text-[#14382C] p-0.5"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1 mx-1">
                {GALLERY_ITEMS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSpotlightIndex(dotIdx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === spotlightIndex ? "w-5 bg-[#9A7B38]" : "w-1.5 bg-stone-300 hover:bg-stone-400"
                    }`}
                    aria-label={`Jump to render ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSpotlightIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
                }}
                className="text-[#14382C]/70 hover:text-[#14382C] p-0.5"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-[#14382C]/10">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === "all"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((item) => item.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-white shadow-sm"
                    : "text-[#59665E] bg-white hover:text-[#14382C] hover:bg-[#F4F0E8] border border-[#14382C]/10"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryTab"
                    className="absolute inset-0 bg-[#14382C] rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                <span
                  className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full font-sans ${
                    isActive
                      ? "bg-[#9E7E46] text-white"
                      : "bg-[#FAF8F5] text-[#59665E] border border-[#14382C]/10"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grand Architectural Visual Grid: IMAGES DOMINATE & SELL */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              const isHero = item.featured && (idx === 0 || idx === 3);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setLightboxIndex(idx)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-stone-100 border border-[#14382C]/15 shadow-md hover:shadow-2xl transition-all duration-500 ${
                    isHero
                      ? "sm:col-span-2 h-80 sm:h-96 lg:h-[440px] xl:h-[480px] 2xl:h-[520px]"
                      : "col-span-1 h-72 sm:h-80 lg:h-88 xl:h-[400px] 2xl:h-[440px]"
                  }`}
                >
                  {/* Full-Bleed Expansive Image */}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    priority={idx < 3}
                  />

                  {/* Minimal Bottom Scrim so text is readable without darkening the image */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                  {/* Top Category Badge & Zoom Trigger */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#14382C] border border-[#14382C]/10 shadow-md">
                      {item.categoryLabel}
                    </span>
                    <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-lg text-[#14382C] border border-[#14382C]/10 shadow-md opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Hover Floating Zoom Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#14382C]/10 backdrop-blur-[2px] pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white/95 text-[#14382C] text-xs font-bold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4 text-[#9E7E46]" />
                      <span>View Full Resolution</span>
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white pointer-events-none">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-white drop-shadow-md leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#EADDC7] line-clamp-1 mt-0.5 font-light drop-shadow-sm">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal with Fullscreen Zoom & Filmstrip */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredItems[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#FAF5EB]/96 backdrop-blur-xl text-[#14382C] flex flex-col items-center justify-between p-3 sm:p-6"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Top 3s Animated Progress Line */}
              {lightboxAutoPlay && (
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-stone-200 z-30 overflow-hidden">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: lightboxHoverPaused ? "0%" : "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-[#DFBE85] via-[#D4AF37] to-[#DFBE85] shadow-[0_0_8px_#DFBE85]"
                  />
                </div>
              )}

              {/* Lightbox Top Bar */}
              <div
                className="w-full max-w-[1750px] flex items-center justify-between text-[#14382C] pb-3 border-b border-[#DFBE85]/40 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#14382C] text-[#DFBE85] shadow-xs">
                    {filteredItems[lightboxIndex].categoryLabel}
                  </span>
                  <span className="text-xs text-[#59665E] font-sans font-medium">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>

                  {/* 3s Auto Badge & Play/Pause */}
                  <div className="flex items-center gap-1.5 ml-2">
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF1DC]/95 border border-[#DFBE85]/60 text-[#7A5C22] text-[10px] font-bold shadow-xs">
                      <span className={`w-1.5 h-1.5 rounded-full bg-[#8C6D34] ${lightboxAutoPlay && !lightboxHoverPaused ? "animate-ping" : "opacity-40"}`} />
                      <span>⏱ 3s Auto</span>
                    </div>

                    <button
                      onClick={() => setLightboxAutoPlay((prev) => !prev)}
                      className="p-1 rounded-full bg-white/90 hover:bg-white text-[#14382C] border border-[#DFBE85]/50 shadow-xs transition-all cursor-pointer"
                      aria-label={lightboxAutoPlay ? "Pause 3s Slideshow" : "Start 3s Slideshow"}
                    >
                      {lightboxAutoPlay ? <Pause className="w-3.5 h-3.5 text-[#14382C]" /> : <Play className="w-3.5 h-3.5 text-[#8C6D34]" />}
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-white/90 hover:bg-white text-[#14382C] border border-[#DFBE85]/50 shadow-md transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-[#8C6D34]" />
                </button>
              </div>

              {/* Main Lightbox Image Stage with Previous / Next Buttons */}
              <div
                className="relative w-full max-w-[1750px] flex-1 flex items-center justify-center my-3 min-h-0"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setLightboxHoverPaused(true)}
                onMouseLeave={() => setLightboxHoverPaused(false)}
              >
                {/* Previous Button */}
                <button
                  onClick={() =>
                    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)
                  }
                  className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-white/92 hover:bg-white text-[#14382C] backdrop-blur-md border border-[#DFBE85]/50 shadow-md transition-all cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-[#8C6D34]" />
                </button>

                {/* Lightbox Image */}
                <div className="relative w-full h-full max-h-[70vh] sm:max-h-[74vh] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={filteredItems[lightboxIndex].id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={filteredItems[lightboxIndex].src}
                        alt={filteredItems[lightboxIndex].title}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                  }
                  className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-white/92 hover:bg-white text-[#14382C] backdrop-blur-md border border-[#DFBE85]/50 shadow-md transition-all cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-[#8C6D34]" />
                </button>
              </div>

              {/* Lightbox Bottom Info & Filmstrip */}
              <div
                className="w-full max-w-[1750px] text-[#14382C] pt-2 z-10 flex flex-col gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#14382C]">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-[#59665E] max-w-2xl mx-auto mt-0.5 line-clamp-2 font-light">
                    {filteredItems[lightboxIndex].caption}
                  </p>
                </div>

                {/* Filmstrip Thumbnail Strip */}
                <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 max-w-full">
                  {filteredItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setLightboxIndex(idx)}
                      className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        lightboxIndex === idx
                          ? "border-[#9E7E46] scale-105 ring-2 ring-[#9E7E46]/50 shadow-sm"
                          : "border-[#DFBE85]/40 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
