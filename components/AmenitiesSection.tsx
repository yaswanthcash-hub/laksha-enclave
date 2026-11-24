"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Waves,
  Trophy,
  Trees,
  Building2,
  Maximize2,
  X,
  CheckCircle2,
  ArrowRight,
  ZoomIn
} from "lucide-react";

interface AmenityItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  images: string[];
  footprint: string;
  description: string;
  highlights: string[];
}

interface LifestyleZone {
  id: string;
  zoneNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: any;
  leadDescription: string;
  theme: {
    accentColor: string;
    secondaryColor: string;
    taglineColor: string;
    eyebrowColor: string;
    pillBadge: string;
    tabActiveBg: string;
    iconActiveBg: string;
    showcaseBg: string;
    ambientGlowPrimary: string;
    ambientGlowSecondary: string;
    cardBorderHover: string;
    checkIconColor: string;
    buttonClass: string;
    ringColor: string;
  };
  items: AmenityItem[];
}

const LIFESTYLE_ZONES: LifestyleZone[] = [
  {
    id: "zone-1",
    zoneNumber: "Zone 01",
    title: "The Manor Clubhouse & Social Hub",
    subtitle: "18,500 Sq.Ft Historic Brick Architectural Landmark",
    badge: "18,500 Sq.Ft Landmark",
    icon: Building2,
    leadDescription:
      "Crafted with hand-selected exposed red brick and classic terracotta clay tiles. Houses an upper-floor panoramic glass gym overlooking the pool, a grand banquet hall, private café, and quiet colonial verandas.",
    theme: {
      accentColor: "#B8583B",
      secondaryColor: "#DFBE85",
      taglineColor: "text-[#B8583B]",
      eyebrowColor: "text-[#B8583B]",
      pillBadge: "bg-[#FFF3EB] text-[#B8583B] border border-[#B8583B]/30",
      tabActiveBg: "bg-gradient-to-br from-[#FFF9F5] via-[#FFF3EB] to-[#FDF0E6] border-[#B8583B] shadow-[0_10px_25px_-5px_rgba(184,88,59,0.22)] ring-2 ring-[#B8583B]/20",
      iconActiveBg: "bg-gradient-to-br from-[#B8583B] to-[#8E3B22] text-white shadow-md shadow-[#B8583B]/30",
      showcaseBg: "bg-gradient-to-br from-[#FFFDFC] via-[#FFF8F3] to-[#FAF4EC] border-[#B8583B]/25",
      ambientGlowPrimary: "bg-[#B8583B]/15",
      ambientGlowSecondary: "bg-[#DFBE85]/20",
      cardBorderHover: "hover:border-[#B8583B]/50 hover:shadow-[0_20px_40px_-12px_rgba(184,88,59,0.2)]",
      checkIconColor: "text-[#B8583B]",
      buttonClass: "border-[#B8583B]/30 text-[#B8583B] hover:bg-[#B8583B] hover:text-white hover:border-[#B8583B]",
      ringColor: "ring-[#B8583B]/20"
    },
    items: [
      {
        id: "manor-clubhouse",
        name: "The Manor 2-Storey Brick Clubhouse",
        tagline: "The Warm, Beating Heart of the Enclave",
        image: "/images/6061957682878419873.jpg",
        images: [
          "/images/6061957682878419873.jpg",
          "/images/6061957682878419866.jpg",
          "/images/6061957682878419879.jpg"
        ],
        footprint: "18,500 Sq.Ft Built-Up",
        description: "Two storeys of red brick arches, colonial verandas, and panoramic glass fitness spaces designed for neighborhood celebrations and daily fitness.",
        highlights: [
          "Upper-floor fitness center with panoramic glass walls overlooking the pool",
          "Grand multipurpose banquet celebration hall with party pantry"
        ]
      },
      {
        id: "panoramic-gym-hall",
        name: "Upper-Floor Panoramic Glass Gym",
        tagline: "Elevated Fitness Overlooking Azure Waters",
        image: "/images/6061957682878419866.jpg",
        images: [
          "/images/6061957682878419866.jpg",
          "/images/6061957682878419873.jpg",
          "/images/6061957682878419877.jpg"
        ],
        footprint: "Air-Conditioned Fitness Studio",
        description: "A fully equipped modern gym enclosed by floor-to-ceiling glass, offering inspiring panoramic views over the pool gardens and royal palm avenues during workouts.",
        highlights: [
          "State-of-the-art cardio and resistance weight training equipment",
          "Floor-to-ceiling insulated glass with tranquil resort vistas"
        ]
      }
    ]
  },
  {
    id: "zone-2",
    zoneNumber: "Zone 02",
    title: "Aqua & Wellness Retreat",
    subtitle: "Resort Lap Pool, Sunken Decks & Kids' Splash Zone",
    badge: "Aqua Sanctuary",
    icon: Waves,
    leadDescription:
      "A serene aquatic oasis designed for weekend relaxation and morning laps, surrounded by natural timber sun-decks, private shaded cabanas, and fragrant tropical frangipani trees.",
    theme: {
      accentColor: "#0284C7",
      secondaryColor: "#0D9488",
      taglineColor: "text-[#0284C7]",
      eyebrowColor: "text-[#0369A1]",
      pillBadge: "bg-[#F0F9FF] text-[#0284C7] border border-[#0284C7]/30",
      tabActiveBg: "bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#DDF4FF] border-[#0284C7] shadow-[0_10px_25px_-5px_rgba(2,132,199,0.22)] ring-2 ring-[#0284C7]/20",
      iconActiveBg: "bg-gradient-to-br from-[#0284C7] to-[#0D9488] text-white shadow-md shadow-[#0284C7]/30",
      showcaseBg: "bg-gradient-to-br from-[#F8FCFF] via-[#F0F9FF] to-[#EBF6FC] border-[#0284C7]/25",
      ambientGlowPrimary: "bg-[#0284C7]/15",
      ambientGlowSecondary: "bg-[#0D9488]/15",
      cardBorderHover: "hover:border-[#0284C7]/50 hover:shadow-[0_20px_40px_-12px_rgba(2,132,199,0.2)]",
      checkIconColor: "text-[#0284C7]",
      buttonClass: "border-[#0284C7]/30 text-[#0284C7] hover:bg-[#0284C7] hover:text-white hover:border-[#0284C7]",
      ringColor: "ring-[#0284C7]/20"
    },
    items: [
      {
        id: "resort-pool",
        name: "Resort Swimming Pool & Splash Zone",
        tagline: "Cool Off Under Open Blue Skies",
        image: "/images/6061957682878419877.jpg",
        images: [
          "/images/6061957682878419877.jpg",
          "/images/6061957682878419875.jpg",
          "/images/6061957682878419873.jpg"
        ],
        footprint: "4,500 Sq.Ft Water Footprint",
        description: "Crystal-clear azure pool with sunken timber decks, private shaded cabanas, poolside loungers, and a safe, shallow splash zone for kids.",
        highlights: [
          "Crystal-clear swimming pool with continuous circulation filtration",
          "Dedicated safe children's splash pool with gentle depth"
        ]
      },
      {
        id: "sunken-decks",
        name: "Sunken Timber Sun Decks & Pergolas",
        tagline: "Relaxation by the Shimmering Waters",
        image: "/images/6061957682878419875.jpg",
        images: [
          "/images/6061957682878419875.jpg",
          "/images/6061957682878419877.jpg",
          "/images/6061957682878419871.jpg"
        ],
        footprint: "Hardwood Poolside Promenade",
        description: "Premium teak-treated poolside sun decks with shaded timber pergolas, outdoor showers, and lush tropical frangipani planters for serene weekend sunbathing.",
        highlights: [
          "Flush-mounted anti-slip hardwood decking along water line",
          "Private cabanas with comfortable all-weather loungers"
        ]
      }
    ]
  },
  {
    id: "zone-3",
    zoneNumber: "Zone 03",
    title: "Championship Sports Arena",
    subtitle: "Basketball, Badminton & Youth Skate Park",
    badge: "Active Sports Turf",
    icon: Trophy,
    leadDescription:
      "All-weather, floodlit multi-sport courts equipped with professional non-abrasive turf and a dedicated youth skate plaza to keep adults, teenagers, and kids fit and energized.",
    theme: {
      accentColor: "#16A34A",
      secondaryColor: "#F59E0B",
      taglineColor: "text-[#D97706]",
      eyebrowColor: "text-[#15803D]",
      pillBadge: "bg-[#F0FDF4] text-[#16A34A] border border-[#16A34A]/30",
      tabActiveBg: "bg-gradient-to-br from-[#F0FDF4] via-[#DCFCE7] to-[#E7F8EE] border-[#16A34A] shadow-[0_10px_25px_-5px_rgba(22,163,74,0.22)] ring-2 ring-[#16A34A]/20",
      iconActiveBg: "bg-gradient-to-br from-[#16A34A] to-[#D97706] text-white shadow-md shadow-[#16A34A]/30",
      showcaseBg: "bg-gradient-to-br from-[#F8FDF9] via-[#F2FBF5] to-[#ECF8F0] border-[#16A34A]/25",
      ambientGlowPrimary: "bg-[#16A34A]/15",
      ambientGlowSecondary: "bg-[#F59E0B]/15",
      cardBorderHover: "hover:border-[#16A34A]/50 hover:shadow-[0_20px_40px_-12px_rgba(22,163,74,0.2)]",
      checkIconColor: "text-[#16A34A]",
      buttonClass: "border-[#16A34A]/30 text-[#15803D] hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A]",
      ringColor: "ring-[#16A34A]/20"
    },
    items: [
      {
        id: "sports-court",
        name: "Multi-Sport Championship Arena",
        tagline: "Energize Your Health with Every Game",
        image: "/images/6061957682878419869.jpg",
        images: [
          "/images/6061957682878419869.jpg",
          "/images/6061957682878419870.jpg",
          "/images/6061957682878419868.jpg"
        ],
        footprint: "12,000 Sq.Ft Sports Area",
        description: "Regulation half-court basketball, all-weather badminton, pickleball, and volleyball courts with high-mast LED evening lighting.",
        highlights: [
          "Dedicated Basketball half-court with regulation hoops",
          "All-weather shock-absorbing turf with floodlit evening lighting"
        ]
      },
      {
        id: "skate-arena",
        name: "Youth Skate Arena & Roller Park",
        tagline: "Dynamic Outdoor Thrills for Energetic Kids",
        image: "/images/6061957682878419870.jpg",
        images: [
          "/images/6061957682878419870.jpg",
          "/images/6061957682878419869.jpg",
          "/images/6061957682878419876.jpg"
        ],
        footprint: "3,500 Sq.Ft Skate Plaza",
        description: "Custom-poured smooth concrete ramps and gentle banked turns for skateboarding, rollerblading, and scooters with perimeter safety rails.",
        highlights: [
          "Precision-smoothed concrete ramps and gentle banked turns",
          "Dedicated space away from pedestrian walking tracks"
        ]
      }
    ]
  },
  {
    id: "zone-4",
    zoneNumber: "Zone 04",
    title: "Nature, Parks & Promenades",
    subtitle: "Sunburst Radial Gazebo, Palm Avenues & Adventure Play",
    badge: "800+ Palms Oasis",
    icon: Trees,
    leadDescription:
      "Over 800 mature royal palms, landscaped gardens, sensory flowering trees, radial walking loops, and natural timber adventure playgrounds for joyous outdoor childhoods.",
    theme: {
      accentColor: "#14382C",
      secondaryColor: "#10B981",
      taglineColor: "text-[#10B981]",
      eyebrowColor: "text-[#14382C]",
      pillBadge: "bg-[#E8F4EC] text-[#14382C] border border-[#14382C]/30",
      tabActiveBg: "bg-gradient-to-br from-[#FAFBF9] via-[#E8F4EC] to-[#E0EFE6] border-[#14382C] shadow-[0_10px_25px_-5px_rgba(20,56,44,0.22)] ring-2 ring-[#14382C]/20",
      iconActiveBg: "bg-gradient-to-br from-[#14382C] to-[#10B981] text-white shadow-md shadow-[#14382C]/30",
      showcaseBg: "bg-gradient-to-br from-[#FAFBF9] via-[#F3F8F5] to-[#EBF3EE] border-[#14382C]/25",
      ambientGlowPrimary: "bg-[#14382C]/15",
      ambientGlowSecondary: "bg-[#10B981]/20",
      cardBorderHover: "hover:border-[#14382C]/50 hover:shadow-[0_20px_40px_-12px_rgba(20,56,44,0.2)]",
      checkIconColor: "text-[#10B981]",
      buttonClass: "border-[#14382C]/30 text-[#14382C] hover:bg-[#14382C] hover:text-white hover:border-[#14382C]",
      ringColor: "ring-[#14382C]/20"
    },
    items: [
      {
        id: "sunburst-gazebo",
        name: "Sunburst Radial Park & Central Gazebo",
        tagline: "The Peaceful Center of the Neighborhood",
        image: "/images/6061957682878419871.jpg",
        images: [
          "/images/6061957682878419871.jpg",
          "/images/6061957682878419874.jpg",
          "/images/6061957682878419878.jpg"
        ],
        footprint: "1,800 Sq.Ft Pavilion",
        description: "Circular green park with flower-lined radial pathways and a central ornamental gazebo for yoga and evening community amphitheater gatherings.",
        highlights: [
          "Landscaped radial walking paths with flowering shrubs",
          "Central ornamental gazebo for morning yoga or quiet chats"
        ]
      },
      {
        id: "palm-boulevard",
        name: "50ft & 40ft Royal Palm Avenues",
        tagline: "A Grand Homecoming Every Single Day",
        image: "/images/6061957682878419874.jpg",
        images: [
          "/images/6061957682878419874.jpg",
          "/images/6061957682878419876.jpg",
          "/images/6061957682878419878.jpg"
        ],
        footprint: "32,000 Sq.Ft Arterial Network",
        description: "Extra-wide 50ft main entrance boulevard and 40ft internal avenues lined with 800+ towering royal palms, paved walkways, and zero overhead wires.",
        highlights: [
          "Grand 50ft main boulevard and 40ft wide internal roads",
          "Lined with over 800 graceful royal palms and flowering trees"
        ]
      },
      {
        id: "kids-adventure",
        name: "Children's Adventure Playground",
        tagline: "Nature-Inspired Outdoors for Happy Childhoods",
        image: "/images/6061957682878419868.jpg",
        images: [
          "/images/6061957682878419868.jpg",
          "/images/6061957682878419870.jpg",
          "/images/6061957682878419871.jpg"
        ],
        footprint: "8,000 Sq.Ft Play Zone",
        description: "Natural timber play structures, wooden rope bridge, swings, slides, and sand mounds for creative sensory outdoor exploration.",
        highlights: [
          "Timber adventure play equipment and wooden rope bridge",
          "Safe swings, slides, and sensory sand play pits"
        ]
      }
    ]
  }
];

// Subcomponent for each amenity card with 3-second auto-cycling timer and smooth crossfade
function AmenityCard({
  item,
  activeZone,
  onOpenLightbox
}: {
  item: AmenityItem;
  activeZone: LifestyleZone;
  onOpenLightbox: (item: AmenityItem) => void;
}) {
  const images = item.images && item.images.length > 0 ? item.images : [item.image];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-2xl transition-all duration-400 flex flex-col justify-between group ${activeZone.theme.cardBorderHover}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div>
        {/* EXPANSIVE IMAGE CONTAINER: h-64 sm:h-80 lg:h-96 xl:h-[420px] 2xl:h-[460px] (65-70% of Card Height!) */}
        {/* BRIGHT DAYLIGHT PRESENTATION: No heavy black gradients, crystal-clear render */}
        <div
          className="relative h-64 sm:h-80 lg:h-96 xl:h-[420px] 2xl:h-[460px] w-full cursor-pointer overflow-hidden bg-stone-100"
          onClick={() => onOpenLightbox(item)}
        >
          {/* Stacked Images for Slow Graceful Crossfade (1000ms) with Subtle Scale */}
          {images.map((imgSrc, imgIdx) => (
            <div
              key={imgSrc + imgIdx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                imgIdx === currentIdx
                  ? "opacity-100 scale-100 z-0"
                  : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
            >
              <Image
                src={imgSrc}
                alt={`${item.name} render view ${imgIdx + 1}`}
                fill
                className="object-cover"
                priority={imgIdx === 0}
              />
            </div>
          ))}

          {/* 3-Second Slim Animated Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-stone-200 z-20 overflow-hidden">
            <motion.div
              key={currentIdx}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-full bg-gradient-to-r from-[#DFBE85] via-[#D4AF37] to-[#DFBE85] shadow-[0_0_8px_#DFBE85]"
            />
          </div>

          {/* Top Badges with crisp solid opacity */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
            <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-white text-[#14382C] border border-[#DFBE85]/70 shadow-md">
              {item.footprint}
            </span>

            {/* Small 3s Timer Badge in Warm Sand Light */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF1DC] text-[#6E5019] border border-[#DFBE85]/70 text-[10px] font-bold shadow-md">
              <span className={`w-1.5 h-1.5 rounded-full bg-[#6E5019] ${!isPaused ? "animate-ping" : "opacity-50"}`} />
              <span className="tracking-wide">⏱ 3s AUTO</span>
            </div>
          </div>

          {/* Bottom Left Thumbnail Dots & Count in Solid White */}
          <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full border border-[#DFBE85]/60 text-[#14382C] shadow-md">
            <span className="text-[9px] font-mono text-[#14382C] font-semibold mr-0.5">
              {currentIdx + 1}/{images.length}
            </span>
            <div className="flex items-center gap-1">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIdx(dotIdx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === currentIdx ? "w-4 bg-[#6E5019]" : "w-1.5 bg-stone-300 hover:bg-stone-500"
                  }`}
                  aria-label={`Switch to render ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Right Maximize Button */}
          <div className="absolute bottom-3.5 right-3.5 z-10 bg-white p-1.5 rounded-lg text-[#14382C] border border-[#DFBE85]/60 shadow-md opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
            <Maximize2 className="w-3.5 h-3.5 text-[#6E5019]" />
          </div>

          {/* Quick Inspect Floating Badge on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#14382C]/10 backdrop-blur-[2px] pointer-events-none z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#14382C] text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <ZoomIn className="w-3.5 h-3.5 text-[#9E7E46]" />
              <span>Inspect Full Resolution</span>
            </span>
          </div>
        </div>

        {/* COMPACT PUNCHY CARD TEXT: Occupies ~30-35% of Card Height */}
        <div className="p-4 sm:p-5">
          <div className="mb-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider block ${activeZone.theme.taglineColor}`}>
              {item.tagline}
            </span>
            <h4 className="font-serif text-base sm:text-lg text-[#14382C] font-bold mt-0.5 leading-snug">
              {item.name}
            </h4>
          </div>

          {/* Exactly 2 concise highlights */}
          <div className="space-y-1.5 border-t border-[#14382C]/8 pt-3">
            {item.highlights.slice(0, 2).map((hl, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-[#1F2923]">
                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${activeZone.theme.checkIconColor}`} />
                <span className="font-normal leading-snug text-[11px]">{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 sm:p-5 pt-0">
        <button
          onClick={() => onOpenLightbox(item)}
          className={`w-full py-2.5 px-3 rounded-xl border text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-1.5 ${activeZone.theme.buttonClass}`}
        >
          <span>View Specifications &amp; Gallery</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function AmenitiesSection() {
  const [activeZoneId, setActiveZoneId] = useState<string>("zone-1");
  const [lightboxItem, setLightboxItem] = useState<AmenityItem | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);
  const [lightboxAutoPlay, setLightboxAutoPlay] = useState<boolean>(true);

  const activeZone = LIFESTYLE_ZONES.find((z) => z.id === activeZoneId) || LIFESTYLE_ZONES[0];

  const handleOpenLightbox = (item: AmenityItem) => {
    setLightboxItem(item);
    setLightboxImageIndex(0);
    setLightboxAutoPlay(true);
  };

  // Lightbox 3s auto-play
  useEffect(() => {
    if (!lightboxItem || !lightboxAutoPlay) return;
    const images = lightboxItem.images || [lightboxItem.image];
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setLightboxImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [lightboxItem, lightboxAutoPlay]);

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-gradient-to-b from-[#FBF0E9] via-[#FCECE3] to-[#FBF0E9] text-[#1A211D] relative border-t border-[#B8583B]/25 overflow-hidden scroll-mt-20">
      {/* Target anchor for direct #clubhouse navigation */}
      <div id="clubhouse" className="absolute top-0 left-0 -mt-20 pointer-events-none" />
      
      {/* Background Ambient Orbs */}
      <div className="ambient-warm-glow w-96 h-96 bg-[#DFBE85]/20 top-20 -left-20 pointer-events-none" />
      <div className="ambient-warm-glow w-96 h-96 bg-[#B8583B]/10 bottom-20 -right-20 pointer-events-none" />

      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 relative z-10">
        
        {/* Section Heading with Awards-Winning Gold Styling */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FAF4E8] via-[#F5EFE4] to-[#FAF4E8] border border-[#DFBE85]/40 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B38947]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#8C6D34] font-bold">
              4 Signature Lifestyle Realms
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#14382C] mb-3">
            Zoned Lifestyle <span className="gold-gradient-text font-serif italic">Sanctuaries</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#59665E] font-light leading-relaxed">
            Modeled after South India&apos;s finest resort-plotted benchmarks. Segregated into 4 dedicated, vibrant lifestyle realms for wellness, recreation, social gathering, and botanical tranquility.
          </p>
        </div>

        {/* 4 Lifestyle Zone Tabs with Rich Themed Visuals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8">
          {LIFESTYLE_ZONES.map((zone) => {
            const Icon = zone.icon;
            const isActive = activeZoneId === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? zone.theme.tabActiveBg
                    : "bg-white/80 hover:bg-white border-[#14382C]/10 hover:border-[#14382C]/25 shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] uppercase tracking-widest text-[#8C6D34] font-bold">
                      {zone.zoneNumber}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                        isActive ? zone.theme.pillBadge : "bg-stone-100 text-[#59665E] border border-stone-200"
                      }`}
                    >
                      {zone.badge}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2.5 mb-1.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive ? zone.theme.iconActiveBg : "bg-[#FAF8F5] text-[#14382C] border border-[#14382C]/10 group-hover:scale-105"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-[#14382C] leading-snug">
                      {zone.title}
                    </h3>
                  </div>
                  
                  <p className="text-[11px] text-[#59665E] font-light line-clamp-1 mt-0.5">
                    {zone.subtitle}
                  </p>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8C6D34]">
                    Explore Realm
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? "translate-x-1 text-[#14382C]" : "text-stone-400 group-hover:translate-x-0.5"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Zone Content Showcase with Themed Ambient Glow */}
        <div className={`relative rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl mb-12 overflow-hidden border ${activeZone.theme.showcaseBg}`}>
          
          {/* Ambient Zone Glow Orbs */}
          <div className={`ambient-warm-glow w-80 h-80 ${activeZone.theme.ambientGlowPrimary} -top-20 -right-20 pointer-events-none`} />
          <div className={`ambient-warm-glow w-72 h-72 ${activeZone.theme.ambientGlowSecondary} -bottom-20 -left-20 pointer-events-none`} />

          <div className="relative z-10">
            {/* Zone Header Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-black/8 pb-4 mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`text-xs uppercase tracking-widest font-bold ${activeZone.theme.eyebrowColor}`}>
                    {activeZone.zoneNumber} · Signature Lifestyle Sanctuary
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${activeZone.theme.pillBadge}`}>
                    {activeZone.badge}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#14382C]">
                  {activeZone.title}
                </h3>
              </div>
              <div className="text-xs text-[#4F5D55] max-w-md font-light leading-relaxed bg-white/75 backdrop-blur-sm p-3 rounded-xl border border-black/5 shadow-sm">
                {activeZone.leadDescription}
              </div>
            </div>

            {/* Grid of Amenity Items: IMAGES SELL - Image occupies 65-70% of card height! */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${activeZone.items.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-6`}>
              {activeZone.items.map((item) => (
                <AmenityCard
                  key={item.id}
                  item={item}
                  activeZone={activeZone}
                  onOpenLightbox={handleOpenLightbox}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Amenity Lightbox Modal with Luxury High-Res Display & 3s Slideshow */}
        <AnimatePresence>
          {lightboxItem && (() => {
            const modalImages = lightboxItem.images || [lightboxItem.image];
            return (
              <div
                className="fixed inset-0 z-50 bg-[#FAF5EB]/96 backdrop-blur-xl text-[#14382C] flex items-center justify-center p-3 sm:p-6"
                onClick={() => setLightboxItem(null)}
              >
                <div
                  className="bg-white rounded-3xl max-w-4xl xl:max-w-5xl w-full overflow-hidden shadow-2xl border border-[#DFBE85]/40"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Expansive Daylight Render Viewport in Modal */}
                  <div className="relative h-72 sm:h-96 lg:h-[480px] w-full bg-[#FAF5EB] overflow-hidden">
                    {/* Crossfade Images */}
                    {modalImages.map((src, idx) => (
                      <div
                        key={src + idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          idx === lightboxImageIndex
                            ? "opacity-100 scale-100 z-0"
                            : "opacity-0 scale-105 pointer-events-none z-0"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${lightboxItem.name} modal view ${idx + 1}`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    ))}

                    {/* 3s Progress Line on Top */}
                    {lightboxAutoPlay && modalImages.length > 1 && (
                      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-stone-200 z-30 overflow-hidden">
                        <motion.div
                          key={lightboxImageIndex}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3, ease: "linear" }}
                          className="h-full bg-gradient-to-r from-[#DFBE85] via-[#D4AF37] to-[#DFBE85]"
                        />
                      </div>
                    )}

                    {/* Top Controls: 3s Badge & Close */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/92 backdrop-blur-md text-[#14382C] border border-[#DFBE85]/50 shadow-md">
                          ⏱ 3s Auto-Cycle
                        </span>
                        <span className="text-xs text-[#14382C] bg-white/92 backdrop-blur-md border border-[#DFBE85]/50 shadow-md px-2.5 py-0.5 rounded-full font-mono font-semibold">
                          {lightboxImageIndex + 1} / {modalImages.length}
                        </span>
                      </div>

                      <button
                        onClick={() => setLightboxItem(null)}
                        className="p-2 rounded-full bg-white/95 hover:bg-white text-[#14382C] transition-colors shadow-lg border border-[#DFBE85]/50"
                        aria-label="Close"
                      >
                        <X className="w-5 h-5 text-[#8C6D34]" />
                      </button>
                    </div>

                    {/* Left & Right Chevrons if multi-image */}
                    {modalImages.length > 1 && (
                      <>
                        <button
                          onClick={() => {
                            setLightboxImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/92 hover:bg-white text-[#14382C] backdrop-blur-md border border-[#DFBE85]/50 shadow-md transition-all cursor-pointer"
                          aria-label="Previous image"
                        >
                          <ArrowRight className="w-4 h-4 rotate-180 text-[#8C6D34]" />
                        </button>
                        <button
                          onClick={() => {
                            setLightboxImageIndex((prev) => (prev + 1) % modalImages.length);
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/92 hover:bg-white text-[#14382C] backdrop-blur-md border border-[#DFBE85]/50 shadow-md transition-all cursor-pointer"
                          aria-label="Next image"
                        >
                          <ArrowRight className="w-4 h-4 text-[#8C6D34]" />
                        </button>
                      </>
                    )}

                    {/* Thumbnail dots at bottom */}
                    {modalImages.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-white/92 backdrop-blur-md border border-[#DFBE85]/50 shadow-md px-3 py-1 rounded-full">
                        {modalImages.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => setLightboxImageIndex(dotIdx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              dotIdx === lightboxImageIndex ? "w-5 bg-[#9A7B38]" : "w-1.5 bg-stone-300"
                            }`}
                            aria-label={`Jump to render ${dotIdx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-black/5">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#9E7E46] font-bold block">
                          {lightboxItem.footprint}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14382C]">
                          {lightboxItem.name}
                        </h3>
                      </div>
                      <span className="text-xs text-[#59665E] font-medium">
                        {lightboxItem.tagline}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#59665E] font-light leading-relaxed mb-4">
                      {lightboxItem.description}
                    </p>

                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#14382C] mb-2.5">
                      Architectural &amp; Lifestyle Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {lightboxItem.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-[#14382C] bg-[#FAF8F5] p-2 rounded-lg border border-[#14382C]/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-snug">{hl}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setLightboxItem(null)}
                        className="px-5 py-2.5 rounded-xl bg-[#14382C] hover:bg-[#0D261E] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
}
