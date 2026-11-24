"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Award,
  Trees,
  Building2,
  Waves,
  Flower2,
  CheckCircle2,
  Compass,
  ShieldCheck,
  Maximize2,
  ArrowRight,
  Layers,
  Zap,
  Eye,
  Clock
} from "lucide-react";

interface EnclaveCard {
  id: string;
  enclaveNumber: string;
  title: string;
  tagline: string;
  images: string[];
  badge: string;
  icon: any;
  badges: string[];
  caption: string;
}

const MANOR_SHOWCASE_IMAGES = [
  {
    src: "/images/6061957682878419873.jpg",
    caption: "The Manor 2-Storey Exposed Brick Clubhouse & Royal Palm Boulevard",
    tag: "Arterial Spine & Architectural Landmark"
  },
  {
    src: "/images/6061957682878419866.jpg",
    caption: "Upper-Floor Panoramic Glass Fitness Sanctuary & Verandas",
    tag: "18,500 Sq.Ft Historic Brick Wing"
  },
  {
    src: "/images/6061957682878419877.jpg",
    caption: "Sunken Resort Pool & Azure Waters Surrounding The Clubhouse",
    tag: "Aqua Retreat & Shaded Cabanas"
  }
];

const LIVING_ENCLAVES: EnclaveCard[] = [
  {
    id: "royal-palm-boulevard",
    enclaveNumber: "01",
    title: "The Royal Palm Boulevard",
    tagline: "50ft & 40ft Grand Tree-Lined Avenues",
    images: [
      "/images/6061957682878419873.jpg",
      "/images/6061957682878419874.jpg",
      "/images/6061957682878419879.jpg"
    ],
    badge: "Arterial Spine",
    icon: Trees,
    badges: [
      "50ft & 40ft Avenues",
      "800+ Royal Palms",
      "100% Underground Utilities",
      "Cobblestone Walkways"
    ],
    caption: "800+ mature Royal Palms lining wide boulevards with fully concealed underground power, fiber & storm drainage."
  },
  {
    id: "manor-brick-clubhouse",
    enclaveNumber: "02",
    title: "The Manor Brick Clubhouse",
    tagline: "18,500 Sq.Ft Exposed Brick Colonial Icon",
    images: [
      "/images/6061957682878419866.jpg",
      "/images/6061957682878419873.jpg",
      "/images/6061957682878419867.jpg"
    ],
    badge: "Colonial Landmark",
    icon: Building2,
    badges: [
      "18,500 Sq.Ft Footprint",
      "Exposed Wire-Cut Brick",
      "Panoramic Glass Gym",
      "Grand Social Banquet"
    ],
    caption: "Authentic wire-cut terracotta brick architecture with double-height verandas, high-tech wellness, and social halls."
  },
  {
    id: "azure-resort-pool",
    enclaveNumber: "03",
    title: "The Azure Resort Pool & Deck",
    tagline: "Sunken Azure Lap Pool & Private Cabanas",
    images: [
      "/images/6061957682878419868.jpg",
      "/images/6061957682878419877.jpg",
      "/images/6061957682878419876.jpg"
    ],
    badge: "Aqua Sanctuary",
    icon: Waves,
    badges: [
      "Sunken Lap Pool",
      "Private Family Cabanas",
      "Timber Sun Loungers",
      "Frangipani Palm Court"
    ],
    caption: "Crystal-clear azure waters framed by shaded sun decks, private family cabanas, and fragrant poolside gardens."
  },
  {
    id: "central-botanical-sanctuary",
    enclaveNumber: "04",
    title: "The Central Botanical Sanctuary",
    tagline: "Manicured Amphitheatre & Radial Pavilions",
    images: [
      "/images/6061957682878419875.jpg",
      "/images/6061957682878419878.jpg",
      "/images/6061957682878419872.jpg"
    ],
    badge: "Botanical Biosphere",
    icon: Flower2,
    badges: [
      "Radial Amphitheatre",
      "Reflexology Trail",
      "Morning Yoga Lawn",
      "Zero Noise & Pollution"
    ],
    caption: "Geometric open-air amphitheatre, botanical meditation lawns, and sensory reflexology trails under expansive skies."
  }
];

// Independent 3-second auto-rotating visual card (85%+ Visual Dominance)
function VisualEnclaveCard({
  enclave,
  onOpenModal
}: {
  enclave: EnclaveCard;
  onOpenModal: (img: string) => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % enclave.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [enclave.images.length]);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl overflow-hidden bg-white border border-[#DFBE85]/40 shadow-xl hover:shadow-2xl transition-all relative flex flex-col"
    >
      {/* 85%+ IMAGE CANVAS WITH 3S PROGRESS BAR */}
      <div className="relative h-[340px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden bg-[#FAF5EB] select-none">
        
        {/* 3s Auto-Cycle Top Timer Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/20 z-30 overflow-hidden">
          <div
            key={currentIdx}
            className="h-full bg-gradient-to-r from-[#DFBE85] via-[#C8A251] to-[#DFBE85] animate-timer-3s-single"
          />
        </div>

        {/* Crossfading High-Resolution Images (1000ms Crossfade) */}
        {enclave.images.map((imgSrc, imgIndex) => {
          const isActive = imgIndex === currentIdx;
          return (
            <div
              key={imgSrc}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={imgSrc}
                alt={`${enclave.title} perspective ${imgIndex + 1}`}
                fill
                priority={imgIndex === 0}
                className="object-cover group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
              />
            </div>
          );
        })}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30 pointer-events-none z-10" />

        {/* Top Floating Badges & Fullscreen Button */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
          <div className="flex items-center space-x-2">
            <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#DFBE85]/60 shadow-md text-xs font-bold uppercase tracking-wider text-[#14382C]">
              <span className="font-serif text-[#8C6D34] mr-1.5">{enclave.enclaveNumber}</span>
              {enclave.badge}
            </span>
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#FAF1DC]/95 backdrop-blur-md border border-[#DFBE85]/60 text-[10px] font-bold text-[#7A5C22] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D34] animate-ping" />
              <span>⏱ 3s</span>
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(enclave.images[currentIdx]);
            }}
            className="p-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-[#14382C] shadow-md transition-transform hover:scale-110 cursor-pointer"
            title="Expand Full Screen"
          >
            <Maximize2 className="w-4 h-4 text-[#8C6D34]" />
          </button>
        </div>

        {/* RAZOR-SHARP LIGHT SECONDARY FLOATING SPEC CHIPS OVERLAID ON IMAGE */}
        <div className="absolute top-16 left-4 right-4 z-20 flex flex-wrap gap-1.5">
          {enclave.badges.map((badgeText, bIdx) => (
            <span
              key={bIdx}
              className="px-2.5 py-1 rounded-lg bg-white/92 backdrop-blur-md text-[11px] font-semibold text-[#14382C] border border-[#DFBE85]/40 shadow-md flex items-center space-x-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D34]" />
              <span>{badgeText}</span>
            </span>
          ))}
        </div>

        {/* BOTTOM TITLE, 1-LINE CAPTION & SLIDE DOTS OVERLAID DIRECTLY ON PHOTO */}
        <div className="absolute bottom-4 left-4 right-4 text-white z-20 flex flex-col justify-end">
          <div className="flex items-end justify-between gap-3 mb-1.5">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#DFBE85] font-semibold">
                Enclave {enclave.enclaveNumber} · {enclave.tagline}
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
                {enclave.title}
              </h4>
            </div>

            {/* Slide Dot Indicators */}
            <div className="flex items-center space-x-1.5 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30 shrink-0">
              {enclave.images.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`rounded-full transition-all duration-300 ${
                    dotIdx === currentIdx
                      ? "w-4 h-1.5 bg-[#DFBE85]"
                      : "w-1.5 h-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Clean 1-Line Caption */}
          <p className="text-xs sm:text-sm text-white/90 font-light leading-snug line-clamp-2 drop-shadow-sm border-t border-white/20 pt-2">
            {enclave.caption}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default function StorySection() {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);
  const [topShowcaseIdx, setTopShowcaseIdx] = useState(0);

  // Top Manor Showcase 3-Second Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTopShowcaseIdx((prev) => (prev + 1) % MANOR_SHOWCASE_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#F0F6F2] via-[#E8F2EC] to-[#F0F6F2] text-[#1A211D] relative overflow-hidden border-t border-[#14382C]/10"
    >
      {/* Soft Celadon & Gold Ambient Light Accents */}
      <div className="absolute w-[600px] h-[600px] bg-[#DFBE85]/15 rounded-full blur-[140px] -top-48 -right-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-[#14382C]/8 rounded-full blur-[130px] -bottom-40 left-10 pointer-events-none" />

      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 relative z-10">
        
        {/* =========================================================================
            HEADER & BENCHMARK CREST (PRUNED & VISUALLY REFINED)
           ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#DFBE85]/70 shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6D34]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#8C6D34] font-bold">
              Laksh Enclave Bengaluru · Adjacent to BCE Hedaginabele Toll Plaza
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#14382C] tracking-tight leading-[1.15] mb-4">
            A Legacy that Grows with{" "}
            <span className="italic font-normal text-[#8C6D34]">Time &amp; Space.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#3D4D44] font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            25 Masterplanned Acres · 150 Luxury Villa Plots · 100% Freehold Ownership.
          </p>

          {/* 4 Benchmark Credentials Bar in Gorgeous Light Secondary Tones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {/* 1. Soft Celadon Sage Light */}
            <div className="p-4 rounded-2xl bg-[#E2F0E6]/85 backdrop-blur-sm border border-[#C5E2CD] shadow-xs text-center hover:border-[#1E4D3B]/40 transition-all">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1E4D3B] mb-0.5">
                25 <span className="text-xs font-sans font-semibold text-[#1E4D3B]">Acres</span>
              </div>
              <div className="text-xs font-bold text-[#1E4D3B]">Gated Masterpiece</div>
              <div className="text-[10px] text-[#2D5A47]">Direct NE7 Frontage</div>
            </div>

            {/* 2. Warm Champagne Sand Light */}
            <div className="p-4 rounded-2xl bg-[#FAF1DC]/90 backdrop-blur-sm border border-[#DFBE85]/60 shadow-xs text-center hover:border-[#7A5C22]/40 transition-all">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#7A5C22] mb-0.5">
                150 <span className="text-xs font-sans font-semibold text-[#7A5C22]">Plots</span>
              </div>
              <div className="text-xs font-bold text-[#7A5C22]">Low-Density Living</div>
              <div className="text-[10px] text-[#8C6D34]">Generous Villa Frontages</div>
            </div>

            {/* 3. Soft Sky Breeze Light */}
            <div className="p-4 rounded-2xl bg-[#E4F1F9]/90 backdrop-blur-sm border border-[#C7E3F5] shadow-xs text-center hover:border-[#18527A]/40 transition-all">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#18527A] mb-0.5">
                100% <span className="text-xs font-sans font-semibold text-[#18527A]">Freehold</span>
              </div>
              <div className="text-xs font-bold text-[#18527A]">Vaastu Compliant</div>
              <div className="text-[10px] text-[#2B6690]">Clear Bank-Approved Titles</div>
            </div>

            {/* 4. Soft Terracotta Peach Light */}
            <div className="p-4 rounded-2xl bg-[#FCECE3]/90 backdrop-blur-sm border border-[#F5D1C0] shadow-xs text-center hover:border-[#944225]/40 transition-all">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#944225] mb-0.5">
                18,500 <span className="text-xs font-sans font-semibold text-[#944225]">Sq.Ft</span>
              </div>
              <div className="text-xs font-bold text-[#944225]">The Manor Clubhouse</div>
              <div className="text-[10px] text-[#A65335]">Exposed Brick &amp; Glass</div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            TOP MANOR SHOWCASE HERO RENDER: 3-SECOND SMOOTH AUTO-CYCLE
           ========================================================================= */}
        <div className="mb-16 sm:mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-[#FAF5EB] border border-[#DFBE85]/40 shadow-2xl group">
            {/* 3s Auto-Cycle Top Timer Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/20 z-30 overflow-hidden">
              <div
                key={topShowcaseIdx}
                className="h-full bg-gradient-to-r from-[#DFBE85] via-[#D4AF37] to-[#DFBE85] animate-timer-3s-single"
              />
            </div>

            {/* Rotator Images with 1000ms Crossfade */}
            <div className="relative h-[320px] sm:h-[460px] lg:h-[540px] w-full overflow-hidden">
              {MANOR_SHOWCASE_IMAGES.map((item, idx) => {
                const isActive = idx === topShowcaseIdx;
                return (
                  <div
                    key={item.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      isActive ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      priority={idx === 0}
                      className="object-cover transition-transform duration-[4000ms] ease-out scale-100 group-hover:scale-105"
                    />
                  </div>
                );
              })}

              {/* Ambient Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 z-10 pointer-events-none" />

              {/* Top Floating Badge & 3-Second Active Pill */}
              <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between z-20">
                <div className="flex items-center space-x-2 sm:space-x-2.5">
                  <span className="px-3.5 sm:px-4 py-1.5 rounded-full bg-white/92 backdrop-blur-md border border-[#DFBE85]/60 text-xs font-bold text-[#14382C] uppercase tracking-wider flex items-center space-x-2 shadow-md">
                    <Building2 className="w-3.5 h-3.5 text-[#8C6D34]" />
                    <span className="truncate max-w-[140px] sm:max-w-none">The Manor Master Showcase</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#FAF1DC]/95 backdrop-blur-md border border-[#DFBE85]/60 text-xs font-bold text-[#7A5C22] shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#8C6D34] animate-ping" />
                    <span>⏱ 3s</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalImage(MANOR_SHOWCASE_IMAGES[topShowcaseIdx].src)}
                  className="p-2 sm:p-2.5 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-[#14382C] border border-[#DFBE85]/50 transition-transform hover:scale-105 cursor-pointer shadow-md"
                  title="Expand Full Screen"
                >
                  <Maximize2 className="w-4 h-4 text-[#8C6D34]" />
                </button>
              </div>

              {/* Bottom Caption & Interactive Selectors */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
                <div className="max-w-2xl text-white">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#DFBE85] font-semibold mb-1">
                    {MANOR_SHOWCASE_IMAGES[topShowcaseIdx].tag}
                  </div>
                  <h3 className="font-serif text-lg sm:text-2xl md:text-3xl text-white drop-shadow-md">
                    {MANOR_SHOWCASE_IMAGES[topShowcaseIdx].caption}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl border border-white/30 w-fit self-end sm:self-auto">
                  {MANOR_SHOWCASE_IMAGES.map((_, sIdx) => {
                    const isSelected = sIdx === topShowcaseIdx;
                    return (
                      <button
                        key={sIdx}
                        onClick={() => setTopShowcaseIdx(sIdx)}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          isSelected
                            ? "w-7 sm:w-8 h-2 bg-[#DFBE85]"
                            : "w-2 h-2 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`View showcase slide ${sIdx + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            "THE ESSENCE OF STATURE: 4 LIVING ENCLAVES"
            EXPANDED 85% IMAGE DOMINANCE CARDS WITH RAZOR-SHARP GLASS BADGES
           ========================================================================= */}
        <div className="mb-14 sm:mb-18">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#14382C]/10 text-[#14382C] border border-[#14382C]/15 text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5 text-[#8C6D34]" />
                <span>Architectural Heritage</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#14382C] font-light">
                The Essence of Stature: <span className="italic font-normal text-[#8C6D34]">4 Living Enclaves</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#43534B] max-w-md font-light leading-relaxed">
              Expansive visual renders with 3-second autonomous crossfading perspectives celebrating wide palm boulevards and authentic raw materials.
            </p>
          </div>

          {/* 4 EXPANDED VISUAL ENCLAVE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {LIVING_ENCLAVES.map((enclave) => (
              <VisualEnclaveCard
                key={enclave.id}
                enclave={enclave}
                onOpenModal={(img) => setActiveModalImage(img)}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            ARCHITECTURAL PHILOSOPHY BANNER (WARM CELADON & CHAMPAGNE)
           ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden bg-white/95 backdrop-blur-sm border border-[#DFBE85]/50 shadow-lg p-6 sm:p-10 text-[#14382C]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-start space-x-4 sm:space-x-5 max-w-4xl">
              <span className="font-serif text-5xl sm:text-6xl text-[#DFBE85] leading-none select-none font-bold shrink-0">
                “
              </span>
              <div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#14382C] font-light italic leading-relaxed mb-2.5">
                  The greatest luxury today is not more square feet inside an apartment tower; it is open skies, fresh air, and your own piece of land where your family can flourish.
                </p>
                <div className="flex items-center space-x-3">
                  <span className="h-px w-8 bg-[#DFBE85]" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8C6D34] font-bold">
                    Laksh Enclave Community Vision · Bengaluru–Chennai Expressway
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-center md:flex-col justify-start md:items-end gap-1.5 border-t md:border-t-0 md:border-l border-[#DFBE85]/30 pt-4 md:pt-0 md:pl-8">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#14382C] font-bold">
                <Award className="w-4 h-4 text-[#8C6D34]" />
                <span>25 Masterplanned Acres</span>
              </div>
              <span className="text-xs text-[#8C6D34] font-serif italic">
                Exclusively for 150 Families
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#FAF5EB]/96 backdrop-blur-xl text-[#14382C] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveModalImage(null)}
          >
            <div
              className="relative w-full max-w-6xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-[#DFBE85]/40"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeModalImage}
                alt="Enclave Full View"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-[#14382C] border border-[#DFBE85]/60 shadow-lg text-xs font-bold tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
