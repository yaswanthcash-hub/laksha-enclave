"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Gauge,
  Navigation2,
  Building2,
  Factory,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Route,
  Zap,
  Globe2,
  ChevronRight,
  Layers,
  Sparkles,
  Maximize2
} from "lucide-react";

interface RevolutionPillar {
  id: string;
  number: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  image: string;
  imageCaption: string;
  icon: any;
  keyChips: string[];
  summary: string;
}

const REVOLUTION_PILLARS: RevolutionPillar[] = [
  {
    id: "expressway-spine",
    number: "01",
    badge: "Megaproject Spine",
    badgeColor: "bg-[#FAF5EB] text-[#8C6D34] border-[#DFBE85]/50",
    title: "10-Lane Greenfield NE7 Expressway",
    subtitle: "Central 18,000+ Cr Infrastructure Corridor",
    image: "/images/6061957682878419874.jpg",
    imageCaption: "Tree-Lined 50ft Arterial Boulevard directly connecting to the 10-Lane NE7 Expressway",
    icon: Route,
    keyChips: [
      "10 Lanes (6 Express + 4 Service)",
      "0 KM Hedaginabele Toll Gate",
      "120 km/h Transit Speed",
      "Direct STRR NH-648 Bypass"
    ],
    summary: "Instant access to the Greenfield NE7 Expressway without village-road bottlenecks, ensuring signal-free transit toward Bengaluru and Chennai."
  },
  {
    id: "industrial-sez",
    number: "02",
    badge: "Economic Engine",
    badgeColor: "bg-[#F0F6F2] text-[#14382C] border-[#14382C]/20",
    title: "Multi-Billion $ Corporate & Industrial SEZ",
    subtitle: "Global Manufacturing, Logistics & High-Tech Belt",
    image: "/images/6061957682878419873.jpg",
    imageCaption: "The Manor Gateway flanked by the rapidly expanding Narasapura and Foxconn corridors",
    icon: Factory,
    keyChips: [
      "1.5+ Lakh Workforce",
      "Narasapura Auto & Aero Hub",
      "Foxconn Apple Supplier Belt",
      "100+ Acre Welspun Mega Park"
    ],
    summary: "Surrounded by Honda, Scania, Mahindra Aerospace, and Apple supplier ecosystems driving sustained executive residential demand."
  },
  {
    id: "rapid-transit",
    number: "03",
    badge: "Rapid Transit",
    badgeColor: "bg-[#F0F5F9] text-[#0369A1] border-[#BAE6FD]",
    title: "Everything Within Reach",
    subtitle: "Signal-Free High-Speed Commute to Prime Hubs",
    image: "/images/6061957682878419879.jpg",
    imageCaption: "Expansive wide avenues designed for smooth ingress and egress during peak hours",
    icon: Clock,
    keyChips: [
      "25 Mins to Whitefield IT Hub",
      "35 Mins to International Airport",
      "28 Mins to Purple Line Metro",
      "Zero Traffic Choke Points"
    ],
    summary: "Breathe fresh air and enjoy generous open space while remaining 25 minutes from Whitefield IT corridors and Kempegowda International Airport."
  }
];

export default function ExpresswayRevolutionSection() {
  const [activePillarIdx, setActivePillarIdx] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const activePillar = REVOLUTION_PILLARS[activePillarIdx];

  return (
    <section
      id="expressway-revolution"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF5EB] via-[#FAF1DC] to-[#FAF5EB] text-[#1A211D] relative overflow-hidden border-t border-[#DFBE85]/40"
    >
      {/* Soft Ambient Luxury Glow */}
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-[#DFBE85]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#E8F2EC]/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 relative z-10">
        
        {/* =========================================================================
            SECTION EDITORIAL HEADER (CONCISE & IMPACTFUL)
           ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#DFBE85]/70 shadow-xs mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#8C6D34]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8C6D34] font-bold">
              The Bengaluru–Chennai Expressway Revolution
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#14382C] tracking-tight leading-[1.15] mb-4">
            Why the NE7 Corridor is the{" "}
            <span className="italic font-normal text-[#8C6D34]">Smartest Land Investment</span> Today.
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#59665E] font-light max-w-2xl mx-auto leading-relaxed">
            Directly fronting the 18,000+ Cr Greenfield Expressway, an engineered wealth corridor transforming East Bengaluru.
          </p>
        </div>

        {/* =========================================================================
            KEY METRICS STRIP (4 RICH LIGHT SECONDARY CARDS)
           ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-10 sm:mb-14">
          {/* 1. Warm Champagne Sand Light */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF1DC] border border-[#DFBE85]/70 shadow-xs hover:border-[#7A5C22]/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#6E5019] bg-white/80 px-2 py-0.5 rounded border border-[#DFBE85]/70">
                Corridor Investment
              </span>
              <Gauge className="w-4 h-4 text-[#6E5019]" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#6E5019] mb-0.5">
              18,000+ <span className="text-xs font-sans font-semibold text-[#6E5019]">Cr</span>
            </div>
            <div className="text-xs text-[#6E5019] font-medium">Central Bharat Mala Project</div>
          </div>

          {/* 2. Soft Celadon Sage Light */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#E2F0E6] border border-[#C5E2CD] shadow-xs hover:border-[#1E4D3B]/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#1E4D3B] bg-white/80 px-2 py-0.5 rounded border border-[#C5E2CD]">
                Access-Controlled
              </span>
              <Route className="w-4 h-4 text-[#1E4D3B]" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1E4D3B] mb-0.5">
              10 <span className="text-xs font-sans font-semibold text-[#1E4D3B]">Lanes</span>
            </div>
            <div className="text-xs text-[#1E4D3B] font-medium">6 Express + 4 Service Arterials</div>
          </div>

          {/* 3. Soft Sky Breeze Light */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#E4F1F9] border border-[#C7E3F5] shadow-xs hover:border-[#18527A]/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#18527A] bg-white/80 px-2 py-0.5 rounded border border-[#C7E3F5]">
                Zero Detours
              </span>
              <Navigation2 className="w-4 h-4 text-[#18527A]" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#18527A] mb-0.5">
              0 <span className="text-xs font-sans font-semibold text-[#18527A]">KM</span>
            </div>
            <div className="text-xs text-[#18527A] font-medium">Hedaginabele Toll Plaza Adjacent</div>
          </div>

          {/* 4. Soft Terracotta Peach Light */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FCECE3] border border-[#F5D1C0] shadow-xs hover:border-[#83371D]/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#83371D] bg-white/80 px-2 py-0.5 rounded border border-[#F5D1C0]">
                Tech Corridor
              </span>
              <Clock className="w-4 h-4 text-[#83371D]" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#83371D] mb-0.5">
              25 <span className="text-xs font-sans font-semibold text-[#83371D]">Mins</span>
            </div>
            <div className="text-xs text-[#83371D] font-medium">Direct Run to Whitefield IT Hub</div>
          </div>
        </div>

        {/* =========================================================================
            GIANT SPLIT-CANVAS / FULL-WIDTH RENDER SHOWCASE (85%+ VISUAL DOMINANCE)
           ========================================================================= */}
        <div className="mb-14 sm:mb-18">
          
          {/* Pillar Selector Tabs */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-6 overflow-x-auto pb-2 scrollbar-none">
            {REVOLUTION_PILLARS.map((pillar, idx) => {
              const isActive = idx === activePillarIdx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarIdx(idx)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center space-x-2 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#14382C] text-[#DFBE85] shadow-lg scale-102 border border-[#DFBE85]/50"
                      : "bg-white text-[#2D3A33] hover:bg-white border border-[#DFBE85]/50 shadow-xs"
                  }`}
                >
                  <span className={`font-serif text-xs font-bold ${isActive ? "text-[#DFBE85]" : "text-[#6E5019]"}`}>
                    {pillar.number}
                  </span>
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Main Giant Visual Canvas */}
          <div className="relative h-[520px] sm:h-[580px] lg:h-[660px] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#DFBE85]/40 group select-none">
            
            {/* Background High-Resolution Photography */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activePillar.image}
                  alt={activePillar.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Natural Vignette for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

            {/* Top Left Header Badge */}
            <div className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 z-20 flex items-center space-x-2 sm:space-x-2.5">
              <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-[#DFBE85]/80 text-[11px] sm:text-xs font-bold text-[#14382C] shadow-md flex items-center space-x-2">
                <span className="font-serif text-[#6E5019] font-bold">{activePillar.number}</span>
                <span>{activePillar.badge}</span>
              </span>
              <span className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FAF1DC] text-[#6E5019] border border-[#DFBE85]/70 text-xs font-bold shadow-xs">
                <span>{activePillar.subtitle}</span>
              </span>
            </div>

            {/* Top Right Fullscreen Button */}
            <button
              type="button"
              onClick={() => setLightboxImage(activePillar.image)}
              className="absolute top-3.5 right-3.5 sm:top-6 sm:right-6 z-20 p-2 sm:p-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#14382C] border border-[#DFBE85]/70 shadow-lg transition-transform hover:scale-110 cursor-pointer"
              title="Expand Render Full Screen"
            >
              <Maximize2 className="w-4 h-4 text-[#6E5019]" />
            </button>

            {/* HIGH-CONTRAST 100% OPAQUE LIGHT LUXURY SPEC CARD (WCAG AAA RAZOR-SHARP READABILITY) */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-20">
              <div className="p-3.5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border-2 border-[#DFBE85] shadow-[0_16px_50px_rgba(0,0,0,0.35)] max-w-3xl">
                
                {/* Title & Description */}
                <div className="mb-2 sm:mb-3">
                  <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6E5019] mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#6E5019]" />
                    <span>Pillar {activePillar.number} · {activePillar.badge}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl font-bold text-[#14382C] leading-snug">
                    {activePillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-[15px] text-[#2D3A33] font-medium leading-relaxed mt-1 sm:mt-1.5">
                    {activePillar.summary}
                  </p>
                </div>

                {/* Razor-Sharp Spec Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2.5 sm:pt-3 border-t border-[#14382C]/15">
                  {activePillar.keyChips.map((chip, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-white text-[#14382C] border border-[#DFBE85]/80 text-[11px] sm:text-xs font-bold shadow-2xs flex items-center space-x-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                      <span>{chip}</span>
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            COMPACT 10-LANE ROADWAY CROSS-SECTION (LUMINOUS LIGHT LUXURY & SAGE)
           ========================================================================= */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white via-[#FAF5EB] to-[#F3ECE0] text-[#14382C] p-6 sm:p-8 shadow-xl relative border border-[#DFBE85]/60">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-5 border-b border-[#DFBE85]/40">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E2F0E6] text-[#1E4D3B] border border-[#C5E2CD] text-xs font-bold uppercase tracking-wider mb-1.5 shadow-2xs">
                <Route className="w-3.5 h-3.5 text-[#1E4D3B]" />
                <span>Expressway Cross-Section Architecture</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#14382C]">
                Engineered for <span className="font-semibold text-[#6E5019]">Speed, Safety &amp; Zero Congestion</span>
              </h3>
            </div>

            <div className="flex items-center space-x-4 text-xs">
              <div>
                <span className="text-[#3F4F46]">NHAI Standard: </span>
                <span className="font-bold text-[#14382C]">Access-Controlled</span>
              </div>
              <div className="h-4 w-px bg-[#DFBE85]/60" />
              <div>
                <span className="text-[#3F4F46]">Design Speed: </span>
                <span className="font-bold text-[#6E5019]">120 km/h</span>
              </div>
            </div>
          </div>

          {/* Compact 3-Column Diagram */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 text-center mb-5">
            <div className="p-3.5 rounded-xl bg-white border border-[#DFBE85]/50 shadow-xs">
              <div className="text-[10px] uppercase tracking-widest text-[#6E5019] font-bold mb-0.5">
                Westbound Lanes
              </div>
              <div className="font-serif text-base font-bold text-[#14382C] mb-0.5">
                Bengaluru &amp; Whitefield
              </div>
              <div className="text-[11px] text-[#3F4F46]">
                3 High-Speed + 2 Service Lanes
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF1DC] border border-[#C8A251]/60 shadow-xs text-[#14382C]">
              <div className="text-[10px] uppercase tracking-widest text-[#6E5019] font-bold mb-0.5">
                Private Enclave Gateway
              </div>
              <div className="font-serif text-base font-bold text-[#6E5019] mb-0.5">
                Laksha Enclave Boulevard
              </div>
              <div className="text-[11px] text-[#1E4D3B] font-bold">
                0 KM Toll Plaza Dedicated Slip Entry
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DFBE85]/50 shadow-xs">
              <div className="text-[10px] uppercase tracking-widest text-[#6E5019] font-bold mb-0.5">
                Eastbound Lanes
              </div>
              <div className="font-serif text-base font-bold text-[#14382C] mb-0.5">
                Chennai &amp; Ports
              </div>
              <div className="text-[11px] text-[#3F4F46]">
                3 High-Speed + 2 Service Lanes
              </div>
            </div>
          </div>

          {/* Compact Lane Division Strip */}
          <div className="relative z-10 h-8 w-full rounded-lg bg-[#E2EBE5] border border-[#B8D7C2] flex items-center justify-between px-3 overflow-hidden text-[9px] uppercase tracking-wider font-mono shadow-inner">
            <span className="text-[#3F4F46] font-semibold">← 2 SERVICE</span>
            <span className="text-[#6E5019] font-bold">← 3 EXPRESS (120 KM/H) →</span>
            <span className="text-[#14382C] font-bold">✦ BOULEVARD GATE ✦</span>
            <span className="text-[#6E5019] font-bold">← 3 EXPRESS (120 KM/H) →</span>
            <span className="text-[#3F4F46] font-semibold">2 SERVICE →</span>
          </div>

          {/* Bottom Trust Tag */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#3F4F46] mt-5 pt-4 border-t border-[#DFBE85]/40">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#6E5019]" />
              <span>100% Freehold Plotted Land with generational appreciation along India&apos;s premier economic corridor.</span>
            </div>
            <a
              href="#masterplan"
              className="inline-flex items-center space-x-1.5 font-bold text-[#14382C] hover:text-[#6E5019] transition-colors"
            >
              <span>Explore Plot Allocation Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#6E5019]" />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#FAF5EB]/96 backdrop-blur-xl text-[#14382C] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative w-full max-w-6xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-[#DFBE85]/40"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Expressway Render Full View"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setLightboxImage(null)}
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
