"use client";

import React, { useState } from "react";
import { FAQS_COPY } from "@/data/websiteCopy";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-gradient-to-b from-[#F5EFE6] via-[#EFE6D8] to-[#F5EFE6] text-[#1A211D] relative border-t border-[#DFBE85]/40">
      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#9E7E46] font-bold mb-3 block">
            Clear Answers &amp; Transparency
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#14382C] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#59665E] font-light leading-relaxed">
            Everything you need to know about titles, bank approvals, infrastructure, and building your villa at Laksh Enclave.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto space-y-3.5">
          {FAQS_COPY.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#DFBE85]/40 hover:border-[#DFBE85]/80 bg-white shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-serif text-base sm:text-lg font-medium text-[#14382C] hover:text-[#9E7E46] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9E7E46] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#59665E] leading-relaxed font-light border-t border-[#DFBE85]/20">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl 2xl:max-w-6xl mx-auto mt-10 p-6 sm:p-7 rounded-2xl bg-[#FAF5EB] border border-[#DFBE85]/60 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-sm">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-full bg-[#E2F0E6] text-[#1E4D3B] border border-[#C5E2CD] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-semibold text-[#14382C]">Have a question not listed here?</h4>
              <p className="text-xs sm:text-sm text-[#59665E] font-light">Our project advisory team is available to share title legalities and cost sheets.</p>
            </div>
          </div>
          <a
            href="tel:+919880052574"
            className="bg-[#14382C] hover:bg-[#1D4E3E] text-white px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 shadow-sm"
          >
            Call Advisory Desk
          </a>
        </div>
      </div>
    </section>
  );
}
