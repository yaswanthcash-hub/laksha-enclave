"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  MessageCircle,
  Sparkles
} from "lucide-react";
import { BRAND_COPY } from "@/data/websiteCopy";

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "overview",
        "infrastructure",
        "masterplan",
        "sizing",
        "amenities",
        "location",
        "faqs",
      ];

      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "OVERVIEW", href: "#overview", id: "overview" },
    { label: "INFRASTRUCTURE", href: "#infrastructure", id: "infrastructure" },
    { label: "MASTER PLAN", href: "#masterplan", id: "masterplan" },
    { label: "PLOT SIZING", href: "#sizing", id: "sizing" },
    { label: "CLUBHOUSE", href: "#amenities", id: "amenities" },
    { label: "LOCATION", href: "#location", id: "location" },
    { label: "FAQS", href: "#faqs", id: "faqs" },
  ];

  return (
    <>
      {/* =========================================================================
          FULL-WIDTH EDGE-TO-EDGE LUXURY TOP NAVIGATION BAR
          100% Luminous Light Luxury Glass at all times (scrolled & unscrolled)
          Responsive padding: px-2.5 sm:px-6 lg:px-12 py-2 sm:py-3.5
          ========================================================================= */}
      <header
        className={`top-0 left-0 right-0 w-full fixed z-50 transition-all duration-300 bg-[#FAF5EB]/95 backdrop-blur-md border-b border-[#DFBE85]/40 py-2 sm:py-3.5 text-[#14382C] ${
          scrolled
            ? "shadow-[0_4px_20px_rgba(20,56,44,0.08)]"
            : "shadow-[0_2px_12px_rgba(20,56,44,0.04)]"
        }`}
      >
        <div className="w-full px-2.5 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* -------------------------------------------------------------------
              LEFT: Luxury Brandmark Logo with Gold Crest & Monogram
             ------------------------------------------------------------------- */}
          <a
            href="#overview"
            className="flex items-center space-x-2 sm:space-x-3.5 group shrink-0"
            aria-label="Laksh Enclave Home"
          >
            {/* Geometric Diamond Crest with Gold Lines */}
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center p-1.5 sm:p-2 shrink-0 transition-all group-hover:scale-105 bg-[#14382C]/10 border border-[#DFBE85]/70 group-hover:border-[#C8A251]">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#14382C] group-hover:text-[#9A7B38] transition-colors"
              >
                {/* Outer Diamond */}
                <polygon
                  points="20,2 38,20 20,38 2,20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                />
                {/* Inner Gold Diamond Accent */}
                <polygon
                  points="20,7 33,20 20,33 7,20"
                  stroke="#C8A251"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.9"
                />
                {/* Royal "L" Monogram Path */}
                <path
                  d="M17 13V27H25"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Champagne Gold Center Jewel */}
                <circle cx="20" cy="20" r="1.5" fill="#C8A251" />
              </svg>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="font-serif text-xs sm:text-xl font-medium tracking-[0.14em] uppercase leading-tight text-[#14382C] group-hover:text-[#9A7B38] transition-colors">
                LAKSH ENCLAVE
              </span>
              <span className="hidden sm:block text-[8.5px] sm:text-[9.5px] tracking-[0.24em] uppercase font-sans font-semibold mt-0.5 text-[#9A7B38]">
                BENGALURU-CHENNAI EXPRESSWAY
              </span>
            </div>
          </a>

          {/* -------------------------------------------------------------------
              CENTER/RIGHT: Uppercase Navigation Items
             ------------------------------------------------------------------- */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative text-xs tracking-widest uppercase font-semibold transition-colors py-1 ${
                    isActive
                      ? "text-[#9A7B38] font-bold"
                      : "text-[#14382C]/80 hover:text-[#9A7B38]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#C8A251] shadow-[0_0_8px_rgba(200,162,81,0.6)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* -------------------------------------------------------------------
              FAR RIGHT: Phone Contact & Compact Gold CTA Button & Mobile Toggle
             ------------------------------------------------------------------- */}
          <div className="flex items-center space-x-1.5 sm:space-x-4 shrink-0">
            {/* Phone link on large desktop */}
            <a
              href={`tel:${BRAND_COPY.phoneRaw}`}
              className="hidden xl:inline-flex items-center space-x-2 text-xs font-semibold tracking-wider transition-colors mr-1 text-[#14382C]/80 hover:text-[#9A7B38]"
              title="Call Project Advisor"
            >
              <Phone className="w-3.5 h-3.5 text-[#9A7B38]" />
              <span>{BRAND_COPY.phoneDisplay}</span>
            </a>

            {/* Compact Gold CTA Button */}
            <button
              onClick={onOpenEnquiry}
              className="bg-[#C8A251] hover:bg-[#D4AF37] text-stone-950 font-bold px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-sm text-[10px] sm:text-xs tracking-wider uppercase transition-all shadow-[0_4px_16px_rgba(200,162,81,0.35)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.5)] cursor-pointer active:scale-[0.98] shrink-0"
            >
              ENQUIRE NOW
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[38px] min-h-[38px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center p-1.5 sm:p-2 rounded border border-[#DFBE85]/50 bg-[#FAF5EB]/90 text-[#14382C] hover:bg-[#F5EEDB] transition-colors shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MOBILE DRAWER (LUXURY LIGHT SECONDARY SHADES THEME)
          Upgraded from dark black to luxurious Champagne & Celadon light palette
          ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#FAF5EB]/98 backdrop-blur-2xl p-5 sm:p-6 overflow-y-auto text-[#14382C] border-l border-[#DFBE85]/40 shadow-2xl animate-fade-in">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#DFBE85]/30">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#14382C]/10 border border-[#DFBE85]/70 flex items-center justify-center p-1.5 shadow-xs shrink-0">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-[#14382C]"
                >
                  <polygon
                    points="20,2 38,20 20,38 2,20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                  />
                  <polygon
                    points="20,7 33,20 20,33 7,20"
                    stroke="#C8A251"
                    strokeWidth="1.2"
                    fill="none"
                    opacity="0.9"
                  />
                  <path
                    d="M17 13V27H25"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="20" cy="20" r="1.5" fill="#C8A251" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium tracking-[0.16em] uppercase text-[#14382C]">
                  LAKSH ENCLAVE
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#9A7B38] font-bold">
                  BENGALURU-CHENNAI EXPRESSWAY
                </span>
              </div>
            </div>

            {/* Close button: light glass circle */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#14382C]/5 hover:bg-[#14382C]/10 text-[#14382C] border border-[#DFBE85]/50 shadow-xs transition-colors active:scale-95 cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* RERA & Sanction Trust Ribbon: Soft Celadon Light Green */}
          <div className="my-4 p-3.5 rounded-xl bg-[#E2F0E6] border border-[#C5E2CD] text-[#1E4D3B] shadow-xs flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#14382C]/10 border border-[#C5E2CD] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#1E4D3B]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#14382C] tracking-wide">
                RERA Registered · BIAAPA Sanctioned
              </p>
              <p className="text-[11px] text-[#1E4D3B]/80 font-medium">
                Direct NE7 Expressway Frontage · 25 Mins to Whitefield
              </p>
            </div>
          </div>

          {/* Navigation Links with Soft Champagne Hover */}
          <nav className="flex flex-col space-y-1 my-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-3.5 rounded-lg text-sm tracking-widest uppercase font-semibold transition-all flex items-center justify-between border-b border-[#DFBE85]/20 ${
                    isActive
                      ? "bg-[#F5EEDB] text-[#9A7B38] font-bold shadow-xs"
                      : "text-[#14382C] hover:bg-[#F5EEDB] hover:text-[#9A7B38]"
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A251]" />
                    )}
                    <span>{link.label}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#C8A251]" />
                </a>
              );
            })}
          </nav>

          {/* Bottom Action Suite */}
          <div className="flex flex-col space-y-2.5 pt-4 border-t border-[#DFBE85]/30 mt-auto">
            {/* Full-width Gold CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-[#C8A251] hover:bg-[#D4AF37] text-stone-950 py-3.5 rounded-lg font-sans text-xs uppercase tracking-widest font-bold text-center shadow-[0_4px_20px_rgba(200,162,81,0.35)] flex items-center justify-center space-x-2 cursor-pointer transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-stone-950" />
              <span>ENQUIRE NOW / BOOK SITE VISIT</span>
            </button>

            {/* Direct WhatsApp Concierge Button */}
            <a
              href={BRAND_COPY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-lg font-sans text-xs uppercase tracking-widest font-bold text-center flex items-center justify-center space-x-2 shadow-[0_4px_16px_rgba(37,211,102,0.3)] transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WHATSAPP CONCIERGE</span>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${BRAND_COPY.phoneRaw}`}
              className="w-full bg-white/90 border border-[#DFBE85]/50 hover:bg-white text-[#14382C] py-3 rounded-lg font-sans text-xs uppercase tracking-widest font-semibold text-center flex items-center justify-center space-x-2 shadow-xs hover:border-[#C8A251] transition-all"
            >
              <Phone className="w-4 h-4 text-[#9A7B38]" />
              <span>CALL: {BRAND_COPY.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}

      {/* =========================================================================
          FLOATING CONTACT & ASSISTANCE ELEMENTS (MATCHING REFERENCE IMAGE)
          1. Floating Green WhatsApp Button on Bottom-Left
          2. Floating Relationship Manager Pill on Bottom-Right
          ========================================================================= */}
      {/* 1. Floating WhatsApp Button (Bottom-Left) */}
      <a
        href={BRAND_COPY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Relationship Manager on WhatsApp"
        className="fixed bottom-5 left-4 sm:left-5 z-40 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

      {/* 2a. Floating Relationship Manager Pill (Bottom-Right, Mobile Screen <640px) */}
      <button
        onClick={onOpenEnquiry}
        aria-label="Open Relationship Manager enquiry"
        className="sm:hidden fixed bottom-5 right-4 z-40 flex items-center space-x-2 px-3.5 py-2.5 rounded-full bg-[#FAF5EB]/95 backdrop-blur-md border border-[#DFBE85]/70 shadow-[0_4px_20px_rgba(0,0,0,0.12)] cursor-pointer hover:border-[#D4AF37] active:scale-95 transition-all"
      >
        <div className="relative shrink-0">
          <div className="w-7 h-7 rounded-full bg-[#14382C] flex items-center justify-center text-[#DFBE85] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBE85]" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#FAF5EB] animate-pulse" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-[#14382C] leading-none tracking-wide">
            Enquire Now
          </span>
          <span className="text-[9px] text-[#1E4D3B]/80 font-medium leading-none mt-0.5">
            RM Online
          </span>
        </div>
      </button>

      {/* 2b. Floating Relationship Manager Pill (Bottom-Right, Desktop & Tablet >=640px) */}
      <button
        onClick={onOpenEnquiry}
        aria-label="Open Relationship Manager enquiry"
        className="hidden sm:flex fixed bottom-5 right-5 z-40 items-center space-x-3 px-4 py-2.5 rounded-full bg-[#FAF5EB]/95 backdrop-blur-md border border-[#DFBE85]/60 shadow-[0_4px_24px_rgba(0,0,0,0.12)] cursor-pointer hover:border-[#D4AF37] hover:scale-[1.02] active:scale-98 transition-all group text-left"
      >
        <div className="relative shrink-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#C8A251] to-[#DFBE85] p-0.5 shadow-sm">
            <div className="w-full h-full rounded-full bg-[#14382C] flex items-center justify-center text-[#DFBE85]">
              <Sparkles className="w-4 h-4 text-[#DFBE85]" />
            </div>
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#FAF5EB] animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#14382C] tracking-wide group-hover:text-[#9A7B38] transition-colors leading-tight">
            Welcome to Laksh Enclave
          </span>
          <span className="text-[10px] text-[#1E4D3B]/80 font-medium flex items-center space-x-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span>Relationship Manager Online · Enquire</span>
          </span>
        </div>
      </button>
    </>
  );
}
