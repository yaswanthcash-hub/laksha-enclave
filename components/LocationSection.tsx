"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  Compass,
  Plane,
  Truck,
  Route,
  Train,
  ShoppingBag,
  HeartPulse,
  Briefcase,
  Radio
} from "lucide-react";

interface DestinationChip {
  id: string;
  name: string;
  ring: "10" | "20" | "30";
  timeBadge: string;
  distanceKm: string;
  category: "Expressway" | "Industrial" | "Tech & Transit" | "Lifestyle & Civic";
  route: string;
  icon: any;
}

const DESTINATION_CHIPS: DestinationChip[] = [
  // ✦ WITHIN 10 MINS (Immediate Radius)
  {
    id: "ne7-gate",
    name: "Bengaluru–Chennai Expressway (NE7)",
    ring: "10",
    timeBadge: "0 Min",
    distanceKm: "0 KM",
    category: "Expressway",
    route: "Direct Private Frontage Gate",
    icon: Route
  },
  {
    id: "bce-toll",
    name: "BCE Hedaginabele Toll Plaza",
    ring: "10",
    timeBadge: "2 Mins",
    distanceKm: "1.5 KM",
    category: "Expressway",
    route: "Interchange Slip Road",
    icon: Navigation
  },
  {
    id: "kondarahalli-junction",
    name: "Kondarahalli Junction & Local Market",
    ring: "10",
    timeBadge: "5 Mins",
    distanceKm: "0.5 KM",
    category: "Lifestyle & Civic",
    route: "Boulevard Arterial",
    icon: MapPin
  },
  {
    id: "malur-junction",
    name: "Malur Suburban Railway Junction",
    ring: "10",
    timeBadge: "8 Mins",
    distanceKm: "6 KM",
    category: "Tech & Transit",
    route: "Via Malur-Hosur Main Road",
    icon: Train
  },

  // ✦ WITHIN 20 MINS (Economic Growth Ring)
  {
    id: "welspun-itc",
    name: "Welspun & ITC Mega Logistics Parks",
    ring: "20",
    timeBadge: "12 Mins",
    distanceKm: "7 KM",
    category: "Industrial",
    route: "Via Malur Industrial Highway",
    icon: Truck
  },
  {
    id: "narasapura-hub",
    name: "Narasapura Auto & Aerospace Hub",
    ring: "20",
    timeBadge: "15 Mins",
    distanceKm: "14 KM",
    category: "Industrial",
    route: "Via Malur-Kolar Road / NE7",
    icon: FactoryIcon
  },
  {
    id: "strr-interchange",
    name: "STRR NH-648 Interchange (Hoskote)",
    ring: "20",
    timeBadge: "18 Mins",
    distanceKm: "12 KM",
    category: "Expressway",
    route: "Via NE7 Expressway Westbound",
    icon: Compass
  },
  {
    id: "mvj-medical",
    name: "MVJ Medical College & Research Hospital",
    ring: "20",
    timeBadge: "20 Mins",
    distanceKm: "16 KM",
    category: "Lifestyle & Civic",
    route: "Via NH-75 Arterial",
    icon: HeartPulse
  },

  // ✦ WITHIN 30 MINS (Metropolitan Transit Ring)
  {
    id: "whitefield-itpb",
    name: "Whitefield IT Hub & ITPB / EPIP",
    ring: "30",
    timeBadge: "25 Mins",
    distanceKm: "22 KM",
    category: "Tech & Transit",
    route: "Via Hoskote-Whitefield Highway",
    icon: Briefcase
  },
  {
    id: "kadugodi-metro",
    name: "Kadugodi / Whitefield Purple Line Metro",
    ring: "30",
    timeBadge: "28 Mins",
    distanceKm: "23 KM",
    category: "Tech & Transit",
    route: "Via SH-35 Corridor",
    icon: Train
  },
  {
    id: "orion-uptown",
    name: "Orion Uptown Mall & Retail Hub",
    ring: "30",
    timeBadge: "25 Mins",
    distanceKm: "21 KM",
    category: "Lifestyle & Civic",
    route: "Via Old Madras Road",
    icon: ShoppingBag
  },
  {
    id: "kempegowda-airport",
    name: "Kempegowda Int'l Airport (via STRR)",
    ring: "30",
    timeBadge: "35 Mins",
    distanceKm: "38 KM",
    category: "Tech & Transit",
    route: "Via 6-Lane STRR (NH-648) Bypass",
    icon: Plane
  }
];

function FactoryIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H2v18Z" />
      <path d="M18 18h.01" />
      <path d="M14 18h.01" />
      <path d="M10 18h.01" />
      <path d="M6 18h.01" />
    </svg>
  );
}

export default function LocationSection() {
  const [selectedRing, setSelectedRing] = useState<string>("all");
  const [isMapLightboxOpen, setIsMapLightboxOpen] = useState(false);
  const [lightboxZoom, setLightboxZoom] = useState(1);

  const filteredChips = DESTINATION_CHIPS.filter(
    (item) => selectedRing === "all" || item.ring === selectedRing
  );

  return (
    <section
      id="location"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#F0F5F9] via-[#EAF2F7] to-[#F0F5F9] text-[#1A211D] relative border-t border-[#D2E2EE] overflow-hidden"
    >
      {/* Soft Sky Mist / Azure Breeze Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#DFBE85]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[450px] h-[450px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 relative z-10">
        
        {/* =========================================================================
            SECTION EDITORIAL HEADER
           ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-sky-200/80 shadow-xs mb-4">
            <Radio className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-sky-700 font-bold">
              Radial Drive-Time Infographic
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#14382C] tracking-tight leading-[1.15] mb-4">
            At the Epicenter of{" "}
            <span className="italic font-normal text-sky-700">Global Connectivity.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#475569] font-light max-w-3xl mx-auto leading-relaxed">
            Positioned directly at the Bengaluru–Chennai Expressway (NE7) Hedaginabele Toll Plaza interchange. Rapid, signal-free radial access to industrial parks, purple line metro, tech campuses, and Kempegowda Airport.
          </p>
        </div>

        {/* =========================================================================
            RADIAL RING CONTROLLER (Tabs: All / 10 Mins / 20 Mins / 30 Mins)
           ========================================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <button
            onClick={() => setSelectedRing("all")}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs ${
              selectedRing === "all"
                ? "bg-[#14382C] text-white shadow-md ring-2 ring-sky-300/60 scale-105"
                : "bg-white/85 text-[#475569] hover:text-[#14382C] hover:bg-white border border-sky-100"
            }`}
          >
            All Drive-Time Rings ({DESTINATION_CHIPS.length})
          </button>

          <button
            onClick={() => setSelectedRing("10")}
            className={`inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs ${
              selectedRing === "10"
                ? "bg-emerald-800 text-white shadow-md ring-2 ring-emerald-400/50 scale-105"
                : "bg-white/85 text-[#475569] hover:text-emerald-800 hover:bg-white border border-emerald-100"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>✦ Within 10 Mins (Immediate Radius)</span>
          </button>

          <button
            onClick={() => setSelectedRing("20")}
            className={`inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs ${
              selectedRing === "20"
                ? "bg-[#8C6D34] text-white shadow-md ring-2 ring-[#DFBE85]/60 scale-105"
                : "bg-white/85 text-[#475569] hover:text-[#8C6D34] hover:bg-white border border-amber-100"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#DFBE85] animate-ping" />
            <span>✦ Within 20 Mins (Economic Growth Ring)</span>
          </button>

          <button
            onClick={() => setSelectedRing("30")}
            className={`inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs ${
              selectedRing === "30"
                ? "bg-sky-700 text-white shadow-md ring-2 ring-sky-400/50 scale-105"
                : "bg-white/85 text-[#475569] hover:text-sky-800 hover:bg-white border border-sky-100"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span>✦ Within 30 Mins (Metropolitan Transit)</span>
          </button>
        </div>

        {/* =========================================================================
            STREAMLINED DESTINATION RIBBON / COMPACT VISUAL CHIPS (Zero Dense Text)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          <AnimatePresence>
            {filteredChips.map((dest) => {
              const Icon = dest.icon;
              const isRing10 = dest.ring === "10";
              const isRing20 = dest.ring === "20";

              const badgeColor = isRing10
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : isRing20
                ? "bg-amber-50 text-amber-900 border-amber-300"
                : "bg-sky-50 text-sky-800 border-sky-300";

              const iconBg = isRing10
                ? "bg-emerald-100/70 text-emerald-800"
                : isRing20
                ? "bg-amber-100/70 text-[#8C6D34]"
                : "bg-sky-100/70 text-sky-700";

              return (
                <motion.div
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl bg-white/95 backdrop-blur-sm border border-sky-900/10 p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="flex items-center space-x-2.5">
                      <div className={`w-8 h-8 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block">
                          {dest.category}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-[#14382C] leading-snug line-clamp-1">
                          {dest.name}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Line: Route Info & Badges */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500 truncate max-w-[150px]">
                      {dest.route}
                    </span>
                    <div className="flex items-center space-x-1.5 shrink-0">
                      <span className="text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                        {dest.distanceKm}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${badgeColor}`}>
                        {dest.timeBadge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* =========================================================================
            GIANT VISUAL CARD: OFFICIAL GENUINE NE7 LOCATION MAP SHOWCASE
           ========================================================================= */}
        <div className="rounded-3xl sm:rounded-[32px] bg-white border border-sky-900/15 overflow-hidden shadow-2xl mb-12 max-w-[1600px] mx-auto">
          
          {/* Card Header Bar */}
          <div className="p-5 sm:p-7 border-b border-sky-100 bg-white/80 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#14382C] text-[#DFBE85] flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-[#DFBE85]" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-2xl font-light text-[#14382C] leading-tight">
                  Official Bengaluru–Chennai Expressway (NE7) Location Blueprint
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Adjacent to BCE Hedaginabele Toll Plaza, Kondarahalli · Direct Expressway Service Road Frontage
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={() => setIsMapLightboxOpen(true)}
                className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold shadow-xs transition-all w-full sm:w-auto"
              >
                <Maximize2 className="w-3.5 h-3.5 text-sky-700" />
                <span>Expand Full Map</span>
              </button>
            </div>
          </div>

          {/* GIANT HIGH-RESOLUTION MAP CONTAINER */}
          <div
            onClick={() => setIsMapLightboxOpen(true)}
            className="relative h-[420px] sm:h-[540px] lg:h-[660px] xl:h-[740px] w-full bg-slate-50 cursor-zoom-in group overflow-hidden"
          >
            <Image
              src="/images/location-map.jpg"
              alt="Laksh Enclave Official Location Map on Bengaluru–Chennai Expressway NE7"
              fill
              priority
              className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Edge Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Top GPS Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 p-3 sm:p-4 rounded-2xl bg-white border border-sky-900/20 shadow-xl flex items-center space-x-3 pointer-events-none">
              <span className="w-3 h-3 rounded-full bg-emerald-600 animate-ping" />
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#14382C] block">
                  Laksha Enclave Site · 0 KM from Toll Gate
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 font-medium block">
                  Kondarahalli, Malur Taluk, Karnataka 563130
                </span>
              </div>
            </div>

            {/* Floating Bottom Prompt */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-2.5 sm:p-3 rounded-xl bg-white border border-sky-900/20 text-xs font-bold text-[#14382C] flex items-center space-x-2 shadow-xl">
              <ZoomIn className="w-4 h-4 text-sky-700" />
              <span>Click to Zoom &amp; Inspect Map Nodes</span>
            </div>
          </div>

          {/* Card Bottom GPS & Navigation Bar */}
          <div className="p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-sky-100 bg-white">
            <div className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              <span className="text-[#14382C] font-bold block mb-0.5">Exact Verified Geo-Coordinates:</span>
              Adjacent to BCE Hedaginabele Toll Plaza, Bengaluru–Chennai Expressway (NE7), Kondarahalli, Karnataka 563130.
            </div>

            <a
              href="https://maps.app.goo.gl/uGzfD6JXXC4TmfgD7?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#14382C] hover:bg-[#1D4E3E] text-white px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-md shrink-0"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#DFBE85]" />
            </a>
          </div>

        </div>

        {/* =========================================================================
            MAP LIGHTBOX MODAL (Full Resolution Inspection)
           ========================================================================= */}
        <AnimatePresence>
          {isMapLightboxOpen && (
            <div className="fixed inset-0 z-50 bg-[#FAF5EB]/96 backdrop-blur-xl text-[#14382C] flex flex-col p-4 sm:p-6">
              <div className="flex items-center justify-between text-[#14382C] pb-3 border-b border-[#DFBE85]/40">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#8C6D34]" />
                  <span className="font-serif text-base sm:text-lg font-semibold">
                    Laksh Enclave Official Location Map (High-Resolution Blueprint)
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
                      setIsMapLightboxOpen(false);
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
                  className="relative w-full max-w-[1700px] aspect-[4/3] transition-transform duration-200"
                  style={{ transform: `scale(${lightboxZoom})`, transformOrigin: "center center" }}
                >
                  <Image
                    src="/images/location-map.jpg"
                    alt="Laksh Enclave High-Res Location Map"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}