"use client";

import React, { useState } from "react";
import { X, ShieldCheck, Check, Sparkles, Send, Phone, MessageSquare } from "lucide-react";
import { LEAD_MODAL_COPY } from "@/data/websiteCopy";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedPlotId?: string;
  preSelectedVillaName?: string;
}

export default function LeadModal({
  isOpen,
  onClose,
  preSelectedPlotId,
  preSelectedVillaName,
}: LeadModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [plotPreference, setPlotPreference] = useState(preSelectedPlotId || "1200_SQFT");
  const [timing, setTiming] = useState("THIS_WEEKEND");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          plotPreference: preSelectedPlotId
            ? `Plot ${preSelectedPlotId}`
            : preSelectedVillaName || plotPreference,
          timing,
          source: preSelectedPlotId
            ? "plot_matrix_lead_modal"
            : preSelectedVillaName
            ? "villa_design_lead_modal"
            : "general_lead_modal",
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#14382C]/35 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white border border-[#DFBE85]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-fade-in text-[#1A211D]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#59665E] hover:text-[#1A211D] rounded-full bg-[#FAF8F5] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7E46] font-bold block mb-1">
                Direct Developer Booking
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#14382C]">
                {LEAD_MODAL_COPY.title}
              </h3>
              <p className="font-sans text-xs text-[#59665E] mt-2 leading-relaxed">
                {preSelectedPlotId
                  ? `Inquiring for Plot ${preSelectedPlotId}. Complete the details below to receive the title deed and complete cost breakdown.`
                  : preSelectedVillaName
                  ? `Requesting architectural floor plans for ${preSelectedVillaName}.`
                  : LEAD_MODAL_COPY.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1A211D] block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#14382C]/15 rounded-lg px-3.5 py-2.5 text-xs text-[#1A211D] placeholder-[#59665E]/40 focus:outline-none focus:border-[#14382C]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1A211D] block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98800 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#14382C]/15 rounded-lg px-3.5 py-2.5 text-xs text-[#1A211D] placeholder-[#59665E]/40 focus:outline-none focus:border-[#14382C]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1A211D] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="anand@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#14382C]/15 rounded-lg px-3.5 py-2.5 text-xs text-[#1A211D] placeholder-[#59665E]/40 focus:outline-none focus:border-[#14382C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1A211D] block mb-1">
                    Plot Size Preference
                  </label>
                  <select
                    value={plotPreference}
                    onChange={(e) => setPlotPreference(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#14382C]/15 rounded-lg px-3 py-2.5 text-xs text-[#1A211D] focus:outline-none focus:border-[#14382C]"
                  >
                    <option value="1200_SQFT">1,200 sq.ft (30&apos; × 40&apos;) · Starter Villa Plot</option>
                    <option value="1500_SQFT">1,500 sq.ft (30&apos; × 50&apos;) · Executive Villa Plot</option>
                    <option value="2400_SQFT">2,400 sq.ft (40&apos; × 60&apos;) · Premium Villa Plot</option>
                    <option value="4000_SQFT">4,000+ sq.ft · Royal Estate &amp; Corner Plots</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1A211D] block mb-1">
                    Preferred Visit Day
                  </label>
                  <select
                    value={timing}
                    onChange={(e) => setTiming(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#14382C]/15 rounded-lg px-3 py-2.5 text-xs text-[#1A211D] focus:outline-none focus:border-[#14382C]"
                  >
                    <option value="THIS_WEEKEND">This Weekend (Sat / Sun)</option>
                    <option value="WEEKDAY">Upcoming Weekday</option>
                    <option value="NEED_CAB">Request Free Pick-Up from Whitefield</option>
                    <option value="VIRTUAL_TOUR">Request Live Video Call Tour</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#14382C] hover:bg-[#1D4E3E] disabled:opacity-75 text-white py-3.5 rounded-lg font-sans text-xs uppercase tracking-[0.14em] font-bold transition-all shadow-[0_4px_16px_rgba(20,56,44,0.25)] flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? "Submitting Inquiry..." : LEAD_MODAL_COPY.form.submitButton}</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-[#59665E] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{LEAD_MODAL_COPY.form.privacyAssurance}</span>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#E8F0EC] text-[#14382C] border border-[#14382C]/20 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-serif text-2xl text-[#14382C] font-semibold">
              Site Visit Requested!
            </h3>
            <p className="font-sans text-xs text-[#59665E] max-w-sm mx-auto leading-relaxed">
              Thank you, {name}. Our project advisor has received your request and will call you shortly to confirm your preferred timing and directions.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/919880052574"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#14382C] border border-[#14382C]/20 bg-[#FAF8F5] px-4 py-2.5 rounded-lg hover:border-[#14382C]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
