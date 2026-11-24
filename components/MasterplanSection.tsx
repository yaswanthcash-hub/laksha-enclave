"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MASTERPLAN_PLOTS, MasterplanPlot } from "@/data/project";
import { SIZING_MATRIX_COPY } from "@/data/websiteCopy";
import {
  Compass,
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  ShieldCheck,
  Trees,
  Building2,
  Waves,
  Trophy,
  Download,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileText,
  Zap,
  Flower2,
  Navigation
} from "lucide-react";

interface MasterplanSectionProps {
  onSelectPlotForEnquiry?: (plot?: MasterplanPlot) => void;
}

export default function MasterplanSection({ onSelectPlotForEnquiry }: MasterplanSectionProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxZoom, setLightboxZoom] = useState<number>(1);
  const [activeLandmarkId, setActiveLandmarkId] = useState<string | null>(null);

  // Visual Plot Legend & Key Architectural Landmarks with normalized coordinates on the masterplan render (0 to 1000)
  const landmarks = [
    {
      id: "boulevard",
      name: "50ft Arterial Boulevard",
      subtitle: "Grand Royal Palm Spine",
      x: 500,
      y: 220,
      icon: Trees,
      tag: "Main Arterial",
      desc: "50-foot wide primary spine lined with 800+ mature royal palms, illuminated sidewalks, and concealed underground utility ducts."
    },
    {
      id: "avenues",
      name: "40ft Tree-Lined Avenues",
      subtitle: "Internal Residential Streets",
      x: 720,
      y: 350,
      icon: Navigation,
      tag: "Internal Streets",
      desc: "40-foot wide internal avenues with curbed asphalt paving, tree canopies, and smooth turning radii."
    },
    {
      id: "clubhouse",
      name: "18,500 Sq.Ft Clubhouse",
      subtitle: "The Manor Brick Architecture",
      x: 220,
      y: 340,
      icon: Building2,
      tag: "Colonial Landmark",
      desc: "Two-storey exposed red-brick colonial clubhouse housing the upper-floor glass gym, banquet hall, and lounge."
    },
    {
      id: "pool",
      name: "Resort Pool",
      subtitle: "Azure Lap Pool & Cabanas",
      x: 280,
      y: 395,
      icon: Waves,
      tag: "Aqua Leisure",
      desc: "Sunken azure resort pool surrounded by timber sun-decks, family cabanas, and tropical frangipani courtyards."
    },
    {
      id: "central-park",
      name: "Central Park",
      subtitle: "Radial Botanical Amphitheatre",
      x: 500,
      y: 500,
      icon: Flower2,
      tag: "Botanical Sanctuary",
      desc: "Manicured central park lawn featuring an open-air amphitheatre, sunburst pavilion, and reflexology walking track."
    },
    {
      id: "gate",
      name: "24/7 RFID Gate",
      subtitle: "Biometric & Boom Barrier Control",
      x: 500,
      y: 75,
      icon: ShieldCheck,
      tag: "Security Access",
      desc: "Architectural security gateway with dual-lane entry, automated RFID boom barriers, and biometric visitor logging."
    },
    {
      id: "utilities",
      name: "100% Underground Utilities",
      subtitle: "Concealed Power & Fiber Network",
      x: 360,
      y: 650,
      icon: Zap,
      tag: "Concealed Grid",
      desc: "Zero overhead wires. Fully subterranean conduits for high-voltage power lines, fiber-optic broadband, water supply, and drainage."
    }
  ];

  const handleSizingSelect = (item: any) => {
    if (onSelectPlotForEnquiry) {
      const match = MASTERPLAN_PLOTS.find((p) => p.areaSqFt === item.sizeSqFt) || MASTERPLAN_PLOTS[0];
      onSelectPlotForEnquiry({
        ...match,
        plotNumber: `${item.title} (${item.dimensions})`,
        formattedPrice: "Price on Request",
      });
    }
  };

  const handleGeneralTourSelect = () => {
    if (onSelectPlotForEnquiry) {
      onSelectPlotForEnquiry({
        ...MASTERPLAN_PLOTS[0],
        plotNumber: "Master Plan & Plot Sizing Tour",
        formattedPrice: "Price on Request",
      });
    }
  };

  return (
    <section id="masterplan" className="py-20 sm:py-28 bg-gradient-to-b from-[#EBF4EE] via-[#E2EFE6] to-[#EBF4EE] text-[#1A211D] relative border-t border-[#14382C]/10">
      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EC] border border-[#14382C]/15 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#9E7E46]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#14382C] font-bold">
              25-Acre Master Planned Sanctuary
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#14382C] mb-4">
            Master Layout Plan &amp; Visual Plot Legend
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#59665E] font-light leading-relaxed">
            Carefully conceived with wide 50ft &amp; 40ft palm boulevards, 100% Vaastu compliance, and an 18,500 sq.ft brick clubhouse at the community core.
          </p>
        </div>

        {/* High-Resolution Interactive Masterplan Viewer Card */}
        <div className="rounded-3xl overflow-hidden border border-[#14382C]/15 bg-white shadow-xl mb-20">
          
          {/* Viewer Header */}
          <div className="p-4 sm:p-5 border-b border-[#14382C]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#FAF8F5]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#14382C] text-[#EADDC7] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-[#EADDC7]" />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#14382C]">
                  Official 25-Acre Master Layout Plan
                </h3>
                <p className="text-[11px] text-[#59665E]">
                  Featuring 50ft Royal Palm Boulevard, 40ft internal residential streets, 18,500 sq.ft brick clubhouse &amp; landmark nodes
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#14382C]/20 hover:border-[#14382C] text-[#14382C] text-xs font-semibold shadow-sm transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#9E7E46]" />
                <span>Full-Res Master Plan</span>
              </button>
            </div>
          </div>

          {/* Masterplan CAD Image Container with Landmark Hotspots - Expansive Widescreen Luxury */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/9] xl:aspect-[21/9] min-h-[440px] sm:min-h-[560px] lg:min-h-[650px] xl:min-h-[720px] max-h-[820px] bg-stone-100 overflow-hidden select-none">
            {/* Real Masterplan Diagram Image */}
            <Image
              src="/images/6061957682878419872.jpg"
              alt="Laksh Enclave Official 25-Acre Spatial Masterplan"
              fill
              priority
              className="object-contain object-center cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            />

            {/* Interactive SVG Overlay for Landmark Pins */}
            <svg
              viewBox="0 0 1000 1000"
              className="absolute inset-0 w-full h-full pointer-events-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {landmarks.map((lm) => {
                const isActive = activeLandmarkId === lm.id;
                return (
                  <g
                    key={lm.id}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveLandmarkId(lm.id)}
                    onMouseLeave={() => setActiveLandmarkId(null)}
                    onClick={() => setActiveLandmarkId(activeLandmarkId === lm.id ? null : lm.id)}
                  >
                    {/* Pulsing radar ring */}
                    <circle
                      cx={lm.x}
                      cy={lm.y}
                      r={isActive ? "26" : "18"}
                      fill="#9E7E46"
                      opacity={isActive ? "0.4" : "0.22"}
                      className="animate-ping"
                    />

                    {/* Outer landmark circle */}
                    <circle
                      cx={lm.x}
                      cy={lm.y}
                      r={isActive ? "13" : "10"}
                      fill="#14382C"
                      stroke="#EADDC7"
                      strokeWidth={isActive ? "3" : "2"}
                      className="transition-all duration-200"
                    />

                    {/* Landmark Name Label */}
                    <g className="pointer-events-none">
                      <rect
                        x={lm.x - 75}
                        y={lm.y - 40}
                        width="150"
                        height="26"
                        rx="6"
                        fill="#14382C"
                        stroke="#EADDC7"
                        strokeWidth="1"
                        opacity={isActive ? "1" : "0.9"}
                      />
                      <text
                        x={lm.x}
                        y={lm.y - 23}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="10"
                        fontWeight="600"
                        letterSpacing="0.02em"
                      >
                        {lm.name}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Interactive Landmark Tooltip Card */}
            <AnimatePresence>
              {activeLandmarkId && (
                (() => {
                  const landmark = landmarks.find((l) => l.id === activeLandmarkId);
                  if (!landmark) return null;
                  const Icon = landmark.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute bottom-5 left-5 pointer-events-none bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#14382C]/15 shadow-2xl text-xs z-20 max-w-sm"
                    >
                      <div className="flex items-center space-x-2.5 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-[#14382C] text-[#EADDC7] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-serif text-sm font-bold text-[#14382C]">
                            {landmark.name}
                          </div>
                          <div className="text-[10px] text-[#9E7E46] font-semibold">
                            {landmark.subtitle}
                          </div>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#59665E] font-light leading-relaxed">
                        {landmark.desc}
                      </p>
                    </motion.div>
                  );
                })()
              )}
            </AnimatePresence>

            {/* Compass Rose Indicator */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#14382C]/15 shadow-sm hidden sm:flex items-center space-x-2 text-[10px] font-semibold text-[#14382C]">
              <Compass className="w-3.5 h-3.5 text-[#9E7E46]" />
              <span>100% Vaastu Layout • North Oriented</span>
            </div>

            {/* Click to Expand Prompt */}
            <div
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#14382C]/15 shadow-sm hidden sm:flex items-center space-x-1.5 text-[11px] text-[#59665E] hover:text-[#14382C] cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Maximize2 className="w-3 h-3 text-[#9E7E46]" />
              <span>Click image to zoom full-resolution</span>
            </div>
          </div>

          {/* 7 Signature Key Landmarks & Visual Plot Legend Grid */}
          <div className="p-5 sm:p-6 lg:p-7 bg-[#FAF8F5] border-t border-[#14382C]/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#9E7E46] font-bold block">
                  Visual Plot Legend &amp; Masterplan Highlights
                </span>
                <span className="text-[11px] sm:text-xs text-[#59665E]">
                  Click or hover any legend node to reveal details and pin on the layout
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#14382C] bg-white px-2.5 py-1 rounded-md border border-[#14382C]/10 self-start sm:self-auto">
                7 Signature Features
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2.5 sm:gap-3">
              {landmarks.map((lm) => {
                const Icon = lm.icon;
                const isActive = activeLandmarkId === lm.id;
                return (
                  <div
                    key={lm.id}
                    onMouseEnter={() => setActiveLandmarkId(lm.id)}
                    onMouseLeave={() => setActiveLandmarkId(null)}
                    onClick={() => setActiveLandmarkId(activeLandmarkId === lm.id ? null : lm.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? "bg-white border-[#14382C] shadow-md ring-1 ring-[#14382C]"
                        : "bg-white/80 border-[#14382C]/10 hover:border-[#14382C]/30 hover:bg-white hover:shadow-xs"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive ? "bg-[#14382C] text-[#EADDC7]" : "bg-[#E8F0EC] text-[#14382C]"
                        }`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[8px] uppercase tracking-wider font-semibold text-[#8C6D34]">
                          {lm.tag}
                        </span>
                      </div>
                      <h4 className="font-serif text-xs font-bold text-[#14382C] leading-snug">
                        {lm.name}
                      </h4>
                    </div>
                    <p className="text-[10px] text-[#59665E] font-light line-clamp-2 mt-1">
                      {lm.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* SUMADHURA BENCHMARK: PLOT SIZING MATRIX SECTION                    */}
        {/* ------------------------------------------------------------------ */}
        <div id="sizing" className="pt-4 scroll-mt-24">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#9E7E46]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#9E7E46]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#9E7E46] font-bold">
                {SIZING_MATRIX_COPY.eyebrow}
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#14382C] mb-3">
              {SIZING_MATRIX_COPY.headline}
            </h3>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#59665E] font-light leading-relaxed">
              {SIZING_MATRIX_COPY.subtitle}
            </p>
          </div>

          {/* 4 Standardized Sizing Matrix Cards - Widescreen Span */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mb-14">
            {SIZING_MATRIX_COPY.items.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-[#14382C]/10 shadow-[0_4px_20px_rgba(20,56,44,0.04)] hover:shadow-xl hover:border-[#14382C]/25 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#9E7E46] font-bold">
                      {item.category}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider bg-[#FAF8F5] text-[#14382C] border border-[#14382C]/15 font-semibold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  {/* Dimensions & Area */}
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#14382C]">
                      {item.dimensions}
                    </h4>
                    <span className="text-xs font-mono font-semibold text-[#9E7E46]">
                      {item.sizeSqFt.toLocaleString()} sq.ft
                    </span>
                  </div>

                  {/* Title */}
                  <div className="text-xs font-semibold text-[#1A211D] mb-3">
                    {item.title}
                  </div>

                  {/* Pricing on Request Badge */}
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#14382C]/10 mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#14382C]">
                        Price on Request
                      </div>
                      <div className="text-[11px] text-[#59665E] font-medium mt-0.5">
                        100% Freehold · Ready to Register
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9E7E46] bg-[#9E7E46]/10 px-2 py-0.5 rounded">
                      Available
                    </span>
                  </div>

                  {/* Key Specifications */}
                  <div className="space-y-2 mb-5 text-[11px]">
                    <div className="flex items-start space-x-1.5 text-[#14382C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Facing:</strong> 100% Vaastu (East / North Sunrise)</span>
                    </div>
                    <div className="flex items-start space-x-1.5 text-[#14382C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Built-Up Potential:</strong> {item.builtUpArea}</span>
                    </div>
                    <div className="flex items-start space-x-1.5 text-[#59665E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span><strong>Road Corridor:</strong> {item.roadWidth}</span>
                    </div>
                  </div>
                </div>

                {/* Request Cost Sheet CTA */}
                <button
                  onClick={() => handleSizingSelect(item)}
                  className="w-full py-3 px-4 rounded-xl bg-[#14382C] hover:bg-[#1D4E3E] text-white text-xs font-bold uppercase tracking-[0.12em] transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5 text-[#EADDC7]" />
                  <span>Request Cost Sheet</span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Masterplan & Sizing Action Callout */}
          <div className="bg-white border border-[#14382C]/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#8C6D34] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>On-Site Plot Walk &amp; Legal Verification</span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#14382C] mb-1.5">
                Walk Your Future Homesite This Weekend
              </h4>
              <p className="text-xs sm:text-sm text-[#59665E] font-light leading-relaxed">
                Experience the 50ft palm avenues, inspect 100% Vaastu boundary stones, and review verified legal clearances with our senior masterplan advisor.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href="/images/6061957682878419872.jpg"
                download="Laksh-Enclave-Master-Plan.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl border border-[#14382C]/20 hover:border-[#14382C] text-[#14382C] text-xs font-bold uppercase tracking-[0.12em] bg-[#FAF8F5] hover:bg-white transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-[#9E7E46]" />
                <span>Download Master Plan (High-Res)</span>
              </a>

              <button
                onClick={handleGeneralTourSelect}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#14382C] hover:bg-[#1D4E3E] text-white text-xs font-bold uppercase tracking-[0.14em] transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#EADDC7]" />
                <span>Book Private Site Visit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Full-Resolution Masterplan Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && (
            <div className="fixed inset-0 z-50 bg-[#FAF5EB]/96 backdrop-blur-xl text-[#14382C] flex flex-col p-4 sm:p-6 animate-fade-in">
              <div className="flex items-center justify-between text-[#14382C] pb-3 border-b border-[#DFBE85]/40">
                <div className="flex items-center space-x-3">
                  <Compass className="w-5 h-5 text-[#8C6D34]" />
                  <span className="font-serif text-base sm:text-lg font-semibold">
                    Laksh Enclave 25-Acre Master Layout Plan (Full Resolution)
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setLightboxZoom((prev) => Math.max(1, prev - 0.25))}
                    className="p-2 rounded-lg bg-white/90 hover:bg-white text-[#14382C] border border-[#DFBE85]/50 shadow-sm transition-colors"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4 text-[#8C6D34]" />
                  </button>
                  <span className="text-xs font-mono text-[#8C6D34] w-12 text-center font-bold">
                    {Math.round(lightboxZoom * 100)}%
                  </span>
                  <button
                    onClick={() => setLightboxZoom((prev) => Math.min(2.5, prev + 0.25))}
                    className="p-2 rounded-lg bg-white/90 hover:bg-white text-[#14382C] border border-[#DFBE85]/50 shadow-sm transition-colors"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4 text-[#8C6D34]" />
                  </button>
                  <button
                    onClick={() => {
                      setIsLightboxOpen(false);
                      setLightboxZoom(1);
                    }}
                    className="p-2 rounded-lg bg-white/90 hover:bg-white text-[#14382C] border border-[#DFBE85]/50 shadow-sm ml-2 transition-colors"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-5 h-5 text-[#8C6D34]" />
                  </button>
                </div>
              </div>

              <div className="flex-1 relative overflow-auto flex items-center justify-center p-4">
                <div
                  className="relative w-full max-w-[1800px] aspect-[16/10] transition-transform duration-200"
                  style={{ transform: `scale(${lightboxZoom})`, transformOrigin: "center center" }}
                >
                  <Image
                    src="/images/6061957682878419872.jpg"
                    alt="Laksh Enclave Masterplan Blueprint"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="text-center text-[11px] text-[#59665E] pt-2">
                Use controls in the top bar to zoom in/out • Press Escape or Close button to return
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
