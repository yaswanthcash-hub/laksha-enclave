"use client";

import React from "react";

interface MobileActionBarProps {
  onOpenEnquiry: () => void;
}

// Deprecated in favor of the clean floating WhatsApp (bottom-left) and
// Relationship Manager Enquiry Pill (bottom-right) matching luxury landing benchmarks.
export default function MobileActionBar({ onOpenEnquiry: _onOpenEnquiry }: MobileActionBarProps) {
  return null;
}
