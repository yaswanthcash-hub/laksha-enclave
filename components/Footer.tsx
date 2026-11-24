"use client";

import React from "react";
import {
  ArrowUp,
  Phone,
  MapPin,
  ShieldCheck,
  Compass,
  Car,
  Clock,
  Landmark,
  Building,
  Camera,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  TreePine,
  Waves,
  Layers,
  FileCheck,
  Award,
  Navigation,
  Scale,
  BadgeCheck,
  ChevronRight
} from "lucide-react";
import { BRAND_COPY } from "@/data/websiteCopy";

interface FooterProps {
  onOpenEnquiry?: () => void;
}

export default function Footer({ onOpenEnquiry }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookingClick = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById("masterplan") || document.getElementById("enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#1F2923] pt-12 pb-24 sm:pb-16 border-t border-[#14382C]/15 relative overflow-hidden">
      {/* Subtle Luxury Architectural Ambient Watermark & Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#F4F0E8]/70 via-[#9E7E46]/5 to-transparent pointer-events-none rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#EADDC7]/30 to-transparent pointer-events-none rounded-tr-full -z-10" />

      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        {/* ==================================================================== */}
        {/* 1. PRE-FOOTER VIP EXPERIENCE INVITATION CARD                        */}
        {/* ==================================================================== */}
        <div className="mb-14 relative bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F4F0E8] border border-[#9E7E46]/35 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(20,56,44,0.06)] overflow-hidden">
          {/* Subtle Warm Luxury Corner Glow & Grid Decors */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-radial from-[#9E7E46]/18 to-transparent pointer-events-none rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-radial from-[#14382C]/8 to-transparent pointer-events-none rounded-full blur-xl" />

          <div className="max-w-5xl 2xl:max-w-6xl mx-auto text-center flex flex-col items-center relative z-10">
            {/* VIP Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#E8F0EC] border border-[#14382C]/20 mb-4 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14382C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14382C]"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#9E7E46]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#14382C] font-bold">
                PRIVATE HERITAGE SITE EXPERIENCE · CHAUFFEURED AC CAB INCLUDED
              </span>
            </div>

            {/* Grand Cormorant Garamond Headline */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4.5xl text-[#14382C] font-normal tracking-tight leading-[1.2] mb-3.5">
              Step Into the Next Chapter of Your Family&apos;s Heritage
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#59665E] max-w-2xl leading-relaxed mb-8 font-light">
              Walk the 50ft palm avenues, inspect your Vaastu boundary stones, and review registered legal clearances with our senior project advisor.
            </p>

            {/* 3 High-Intent Action Triggers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 w-full max-w-4xl">
              {/* Action 1: Book Free VIP Site Visit */}
              <button
                type="button"
                onClick={handleBookingClick}
                className="group relative overflow-hidden bg-[#14382C] hover:bg-[#1A4537] text-white px-5 py-4 rounded-xl font-sans text-xs uppercase tracking-[0.14em] font-semibold shadow-[0_6px_20px_rgba(20,56,44,0.22)] hover:shadow-[0_8px_26px_rgba(20,56,44,0.32)] transition-all flex flex-col items-center justify-center space-y-1 text-center cursor-pointer border border-[#14382C]"
              >
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-[#EADDC7] transition-transform group-hover:scale-110" />
                  <span>Book Free VIP Site Visit</span>
                </div>
                <span className="text-[10px] text-[#C4B293] font-normal tracking-normal lowercase">
                  (chauffeured AC cab from Bangalore)
                </span>
              </button>

              {/* Action 2: Direct WhatsApp Advisory */}
              <a
                href={BRAND_COPY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-[#F2FAF5] border border-emerald-600/30 hover:border-emerald-600 text-[#14382C] px-5 py-4 rounded-xl font-sans text-xs uppercase tracking-[0.12em] font-semibold shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center space-y-1 text-center"
              >
                <div className="flex items-center space-x-2 text-emerald-800">
                  <svg className="w-4 h-4 fill-current text-[#25D366] transition-transform group-hover:scale-110 shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.761.882 2.791.882 3.181 0 5.767-2.587 5.768-5.768zm0-2.172c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8a7.96 7.96 0 01-4.062-1.111L2 21l2.003-5.831A7.95 7.95 0 014.031 12c0-4.418 3.582-8 8-8z" />
                  </svg>
                  <span>Direct WhatsApp Advisory</span>
                </div>
                <span className="text-[10px] text-[#59665E] font-normal tracking-normal">
                  +91 98800 52574 (Instant reply)
                </span>
              </a>

              {/* Action 3: Google Maps Driving Directions */}
              <a
                href={BRAND_COPY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-[#FAF8F5] border border-[#14382C]/20 hover:border-[#9E7E46] text-[#14382C] px-5 py-4 rounded-xl font-sans text-xs uppercase tracking-[0.12em] font-semibold shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center space-y-1 text-center"
              >
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-[#9E7E46] transition-transform group-hover:scale-110 shrink-0" />
                  <span>Get Driving Directions</span>
                </div>
                <span className="text-[10px] text-[#59665E] font-normal tracking-normal">
                  Google Maps · 0 KM from Toll
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 2. TRENDING 4-COLUMN DIRECTORY WITH VISUAL HIERARCHY                 */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-14 pb-12 border-b border-[#14382C]/12 text-xs">
          {/* ------------------------------------------------------------------ */}
          {/* Column 1: Brand & Legal Foundation                                 */}
          {/* ------------------------------------------------------------------ */}
          <div className="space-y-4">
            {/* Regal Geometric Gold Crest + Brand Name */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-md bg-white border border-[#9E7E46]/50 flex items-center justify-center shadow-xs p-1">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#14382C]">
                  <polygon points="20,2 38,20 20,38 2,20" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M17 14V26H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="20" r="1.5" fill="#9E7E46" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-lg uppercase tracking-[0.18em] text-[#14382C] font-semibold block leading-tight">
                  LAKSH ENCLAVE
                </span>
                <span className="text-[8.5px] uppercase tracking-[0.22em] text-[#9E7E46] font-bold block">
                  Bangalore East · NE7 Expressway
                </span>
              </div>
            </div>

            {/* Official Summary */}
            <p className="font-sans text-[#59665E] leading-relaxed font-light text-[12px]">
              A private 25-acre gated sanctuary of 150 luxury freehold villa plots with 50ft palm avenues and an 18,500 sq.ft brick clubhouse on the Bengaluru–Chennai Expressway.
            </p>

            {/* Clear Legal Clearances Certificates */}
            <div className="pt-2 space-y-2">
              <div className="p-2.5 rounded-lg bg-white border border-[#14382C]/10 shadow-2xs space-y-1.5">
                <div className="flex items-center space-x-2 text-[#14382C] font-semibold text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-[#9E7E46] shrink-0" />
                  <span>RERA Registered · PRM/KA/RERA/...</span>
                </div>
                <p className="text-[10px] text-[#59665E] pl-6 font-light">
                  Karnataka Real Estate Regulatory Authority sanctioned master development.
                </p>
              </div>

              <div className="space-y-1.5 pt-1 text-[11px]">
                <div className="flex items-center space-x-2 text-[#59665E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>BIAAPA &amp; Gram Panchayat Approved</span>
                </div>
                <div className="flex items-center space-x-2 text-[#59665E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>100% Clear Freehold Titles &amp; E-Khata</span>
                </div>
                <div className="flex items-center space-x-2 text-[#59665E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>100% Vaastu Compliant Alignments</span>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Column 2: Plot Sizing & Architecture                               */}
          {/* ------------------------------------------------------------------ */}
          <div className="space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#9E7E46] font-bold block mb-1">
                Plot Sizing &amp; Architecture
              </span>
              <p className="text-[11px] text-[#59665E] font-light">
                Freehold villa plots &amp; custom turnkey concepts:
              </p>
            </div>

            <ul className="space-y-2 text-[#1F2923]">
              <li>
                <a
                  href="#sizing"
                  className="group block p-2 rounded-lg bg-white/70 hover:bg-white border border-[#14382C]/8 hover:border-[#9E7E46]/40 transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#14382C] group-hover:text-[#9E7E46] transition-colors text-[11.5px]">
                      30&apos; × 40&apos; Starter Luxury
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Price on Request
                    </span>
                  </div>
                  <div className="text-[10.5px] text-[#59665E] mt-0.5">
                    1,200 sq.ft · Perfect 3BHK compact villa
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#sizing"
                  className="group block p-2 rounded-lg bg-white/70 hover:bg-white border border-[#14382C]/8 hover:border-[#9E7E46]/40 transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#14382C] group-hover:text-[#9E7E46] transition-colors text-[11.5px]">
                      30&apos; × 50&apos; Premium Family
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Price on Request
                    </span>
                  </div>
                  <div className="text-[10.5px] text-[#59665E] mt-0.5">
                    1,500 sq.ft · Spacious 3/4BHK family layout
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#sizing"
                  className="group block p-2 rounded-lg bg-white/70 hover:bg-white border border-[#14382C]/8 hover:border-[#9E7E46]/40 transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#14382C] group-hover:text-[#9E7E46] transition-colors text-[11.5px]">
                      40&apos; × 60&apos; Grand Executive
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Price on Request
                    </span>
                  </div>
                  <div className="text-[10.5px] text-[#59665E] mt-0.5">
                    2,400 sq.ft · Signature courtyard residence
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#sizing"
                  className="group block p-2 rounded-lg bg-white/70 hover:bg-white border border-[#14382C]/8 hover:border-[#9E7E46]/40 transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#14382C] group-hover:text-[#9E7E46] transition-colors text-[11.5px]">
                      50&apos; × 80&apos; Palatial Estate
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Price on Request
                    </span>
                  </div>
                  <div className="text-[10.5px] text-[#59665E] mt-0.5">
                    4,000+ sq.ft · Bespoke garden manor estate
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="group flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5] hover:bg-white border border-[#9E7E46]/25 transition-all"
                >
                  <div className="flex items-center space-x-1.5 text-[#14382C] font-semibold text-[11px]">
                    <Camera className="w-3.5 h-3.5 text-[#9E7E46]" />
                    <span>View 15 Architectural Renders &amp; Gallery</span>
                  </div>
                  <ChevronRight className="w-3 h-3 text-[#9E7E46] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Column 3: Master Infrastructure & Club                             */}
          {/* ------------------------------------------------------------------ */}
          <div className="space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#9E7E46] font-bold block mb-1">
                Master Infrastructure &amp; Club
              </span>
              <p className="text-[11px] text-[#59665E] font-light">
                Built to international township specifications:
              </p>
            </div>

            <ul className="space-y-2 text-[#59665E] font-medium text-[11.5px]">
              <li>
                <a
                  href="#infrastructure"
                  className="flex items-start space-x-2 p-1.5 rounded-md hover:bg-white hover:text-[#14382C] transition-colors group"
                >
                  <TreePine className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#14382C] font-semibold block">50ft Grand Entrance Royal Palm Boulevard</span>
                    <span className="text-[10px] text-[#59665E] font-light">With 800+ mature Royal Cuban Palms</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#infrastructure"
                  className="flex items-start space-x-2 p-1.5 rounded-md hover:bg-white hover:text-[#14382C] transition-colors group"
                >
                  <Layers className="w-3.5 h-3.5 text-[#9E7E46] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#14382C] font-semibold block">40ft Internal Tree-Lined Residential Streets</span>
                    <span className="text-[10px] text-[#59665E] font-light">Heavy-duty asphalt with granite curbstones</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#infrastructure"
                  className="flex items-start space-x-2 p-1.5 rounded-md hover:bg-white hover:text-[#14382C] transition-colors group"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#14382C] font-semibold block">100% Underground Concealed Utilities</span>
                    <span className="text-[10px] text-[#59665E] font-light">Power cables, optical fiber, &amp; dual water lines</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#clubhouse"
                  className="flex items-start space-x-2 p-1.5 rounded-md hover:bg-white hover:text-[#14382C] transition-colors group"
                >
                  <Building className="w-3.5 h-3.5 text-[#9E7E46] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#14382C] font-semibold block">18,500 Sq.Ft Manor Historic Brick Clubhouse</span>
                    <span className="text-[10px] text-[#59665E] font-light">Exposed brickwork &amp; double-height lounges</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#amenities"
                  className="flex items-start space-x-2 p-1.5 rounded-md hover:bg-white hover:text-[#14382C] transition-colors group"
                >
                  <Waves className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#14382C] font-semibold block">Resort Lap Swimming Pool &amp; Sunken Deck</span>
                    <span className="text-[10px] text-[#59665E] font-light">Semi-Olympic temperature balanced with cabanas</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#amenities"
                  className="flex items-start space-x-2 p-1.5 rounded-md hover:bg-white hover:text-[#14382C] transition-colors group"
                >
                  <Award className="w-3.5 h-3.5 text-[#9E7E46] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#14382C] font-semibold block">Multi-Sport Championship Arena &amp; Skate Park</span>
                    <span className="text-[10px] text-[#59665E] font-light">Tennis, basketball court &amp; fitness tracks</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Column 4: Experience Center & Transit                              */}
          {/* ------------------------------------------------------------------ */}
          <div className="space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#9E7E46] font-bold block mb-1">
                Experience Center &amp; Transit
              </span>
              <p className="text-[11px] text-[#59665E] font-light">
                Direct expressway access with 0 KM from Toll:
              </p>
            </div>

            <div className="space-y-2.5 text-[#59665E] font-light leading-relaxed text-[11.5px]">
              <div className="p-2.5 rounded-lg bg-white border border-[#14382C]/10 shadow-2xs space-y-1">
                <div className="flex items-center space-x-1.5 text-[#14382C] font-semibold text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#9E7E46] shrink-0" />
                  <span>Physical Site Address</span>
                </div>
                <p className="text-[10.5px] text-[#59665E]">
                  Kondarahalli, Adjacent to BCE Hedaginabele Toll Plaza, Bengaluru–Chennai Expressway (NE7), Malur Taluk, Karnataka 563130.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-[#14382C] font-medium bg-[#FAF8F5] p-2 rounded-md border border-[#14382C]/8">
                <Clock className="w-3.5 h-3.5 text-[#9E7E46] shrink-0" />
                <span>Open 7 Days a Week: 9:00 AM – 7:00 PM</span>
              </div>
            </div>

            <div className="pt-1 space-y-2">
              <a
                href="tel:+919880052574"
                className="flex items-center justify-between p-2 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#14382C]/10 hover:border-[#14382C]/30 text-[#14382C] transition-all shadow-2xs"
              >
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#9E7E46]" />
                  <span className="font-bold text-[12px]">+91 98800 52574</span>
                </div>
                <span className="text-[9.5px] uppercase tracking-wider text-[#9E7E46] font-bold">Direct Hotline</span>
              </a>

              <a
                href={BRAND_COPY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white hover:bg-[#F2FAF5] border border-emerald-600/25 hover:border-emerald-600 text-[#14382C] transition-all shadow-2xs"
              >
                <div className="flex items-center space-x-2 text-emerald-800">
                  <svg className="w-3.5 h-3.5 fill-current text-[#25D366] shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.761.882 2.791.882 3.181 0 5.767-2.587 5.768-5.768zm0-2.172c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8a7.96 7.96 0 01-4.062-1.111L2 21l2.003-5.831A7.95 7.95 0 014.031 12c0-4.418 3.582-8 8-8z" />
                  </svg>
                  <span className="font-semibold text-[11.5px]">+91 98800 52574</span>
                </div>
                <span className="text-[9.5px] uppercase tracking-wider text-emerald-700 font-bold">WhatsApp</span>
              </a>

              <a
                href={BRAND_COPY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#14382C]/10 hover:border-[#9E7E46] text-[#14382C] transition-all shadow-2xs"
              >
                <div className="flex items-center space-x-2 text-[#59665E]">
                  <ExternalLink className="w-3.5 h-3.5 text-[#9E7E46]" />
                  <span className="text-[11.5px]">Google Maps Navigation</span>
                </div>
                <span className="text-[9.5px] uppercase tracking-wider text-[#9E7E46] font-bold">0 KM Toll</span>
              </a>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 4. SUB-FOOTER (LEGAL DISCLAIMER & MAGNETIC BACK TO TOP)              */}
        {/* ==================================================================== */}
        <div className="pt-8 flex flex-col space-y-4">
          {/* Statutory RERA Legal Disclaimer */}
          <div className="p-3.5 rounded-lg bg-white/60 border border-[#14382C]/8">
            <p className="text-[10px] text-[#59665E]/85 leading-relaxed font-light">
              <strong className="text-[#14382C] font-semibold">Statutory Disclaimer &amp; RERA Disclosure:</strong> The information, architectural illustrations, project specifications, plot dimensions, and road profiles presented on this website are conceptual in nature and indicative of the planned development at Laksh Enclave. The developer reserves the unconditional right to make alterations, modifications, additions, or revisions as required by approving government bodies or in accordance with approvals from BIAAPA, Gram Panchayat, and the Karnataka Real Estate Regulatory Authority (K-RERA). This communication does not constitute an offer, contract, legal guarantee, or warranty. All bank loan approvals and financial sanctions are subject to independent credit appraisal and underwriting criteria by the respective banking partners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#59665E] pt-2 border-t border-[#14382C]/8 gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <span>© {new Date().getFullYear()} Laksh Enclave. All rights reserved.</span>
              <span className="hidden sm:inline text-[#14382C]/20">•</span>
              <div className="flex items-center space-x-1.5">
                <Scale className="w-3.5 h-3.5 text-[#9E7E46]" />
                <span>Equal Housing Opportunity</span>
              </div>
              <span className="hidden sm:inline text-[#14382C]/20">•</span>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>RERA Registered Project</span>
              </div>
            </div>

            {/* Magnetic Luxury "Back to Top ↑" Pill Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center space-x-2 text-[#14382C] hover:text-[#9E7E46] transition-all uppercase tracking-[0.16em] text-[11px] font-bold px-4 py-2 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#14382C]/15 hover:border-[#9E7E46] shadow-xs hover:shadow-sm cursor-pointer"
              title="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-[#9E7E46]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
