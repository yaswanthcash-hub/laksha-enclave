"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExpresswayRevolutionSection from "@/components/ExpresswayRevolutionSection";
import StorySection from "@/components/StorySection";
import InfrastructureSection from "@/components/InfrastructureSection";
import MasterplanSection from "@/components/MasterplanSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import FaqSection from "@/components/FaqSection";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";
import { MasterplanPlot } from "@/data/project";

export default function Home() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedPlotForLead, setSelectedPlotForLead] = useState<string | undefined>(undefined);

  const handleOpenLeadModal = () => {
    setSelectedPlotForLead(undefined);
    setLeadModalOpen(true);
  };

  const handleSelectPlotForEnquiry = (plot?: MasterplanPlot) => {
    setSelectedPlotForLead(plot ? plot.plotNumber : undefined);
    setLeadModalOpen(true);
  };

  const handleExploreMasterplan = () => {
    const el = document.getElementById("masterplan");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF5EB] text-[#1A211D]">
      {/* 1. Light Luxury Sticky Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenLeadModal()} />

      {/* 2. Benchmark Hero Section */}
      <Hero
        onOpenEnquiry={() => handleOpenLeadModal()}
        onExploreMasterplan={handleExploreMasterplan}
      />

      {/* 3. A Legacy that Grows with Time & Space · The Essence of Stature: 4 Living Enclaves */}
      <StorySection />

      {/* 4. The Bengaluru–Chennai Expressway Revolution: Why the NE7 Corridor is the Smartest Land Investment Today */}
      <ExpresswayRevolutionSection />

      {/* 5. Infrastructure & Road Hierarchy ("A Community Ready Before Your Home Is") */}
      <InfrastructureSection />

      {/* 6. 25-Acre Master Layout Plan & Visual Plot Legend */}
      <MasterplanSection onSelectPlotForEnquiry={handleSelectPlotForEnquiry} />

      {/* 7. Zoned Lifestyle Amenities (4 Signature Zones) */}
      <AmenitiesSection />

      {/* 8. At the Epicenter of Global Connectivity: Radial Drive-Time Infographic */}
      <LocationSection />

      {/* 9. Photographic Gallery */}
      <GallerySection />

      {/* 11. Trust & FAQ Section */}
      <FaqSection />

      {/* 12. Footer */}
      <Footer onOpenEnquiry={() => handleOpenLeadModal()} />

      {/* 13. Lead Generation & Site Visit Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        preSelectedPlotId={selectedPlotForLead}
      />
    </main>
  );
}
