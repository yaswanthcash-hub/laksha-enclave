/**
 * ============================================================================
 * LAKSH ENCLAVE · MASTER DATA CONFIGURATION & ENTERPRISE SCHEMA (`project.ts`)
 * ============================================================================
 * 
 * Agency Standard: DAMAC Luxury Real Estate + Awwwards Site of the Year Architecture
 * Development: LAKSH ENCLAVE (Kondarahalli, Bengaluru–Chennai Expressway / NE7, Hoskote–Malur Belt, Bengaluru)
 * Acreage: 25 Acres Biophilic Sanctuary | 150 Handcrafted Villa Estates
 * 
 * Normalized Coordinate Space: 0 to 1000 Masterplan Cartesian Canvas
 * 
 * @author Lead Creative Technologist & Senior Next.js Architect
 * @version 1.0.0 Production-Ready
 */

export type PlotCategory = 
  | 'Clubhouse-Facing' 
  | 'Central Park' 
  | 'Boulevard Corner' 
  | 'Serenity Perimeter';

export type PlotFacing = 
  | 'North' 
  | 'East' 
  | 'West' 
  | 'South';

export type PlotStatus = 
  | 'Founding Reserve' 
  | 'Available' 
  | 'In Negotiation' 
  | 'Sold';

export type PriceTier = 
  | 'Founding' 
  | 'Prime' 
  | 'Signature' 
  | 'Estate';

export interface PlotCoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PlotDimensions {
  widthFt: number;
  lengthFt: number;
}

export interface PlotVastuMetadata {
  compliant: boolean;
  score: number;
  description: string;
  dominantElement: 'Water / Jal' | 'Air / Vayu' | 'Fire / Agni' | 'Earth / Prithvi' | 'Space / Akasha';
}

export interface MasterplanPlot {
  id: number;
  plotNumber: string;
  category: PlotCategory;
  facing: PlotFacing;
  status: PlotStatus;
  priceTier: PriceTier;
  areaSqFt: number;
  dimensions: PlotDimensions;
  pricePerSqFt: number;
  totalPrice: number;
  formattedPrice: string;
  coordinates: PlotCoordinates;
  polygonPoints: string;
  vastu: PlotVastuMetadata;
  recommendedVillaType: 'The Sovereign Manor' | 'The Horizon Pavilion' | 'The Verdant Sanctuary';
  features: string[];
}

export interface MasterplanAmenity {
  id: string;
  name: string;
  tagline: string;
  category: 'Retreat & Wellness' | 'Active Sports' | 'Community Core' | 'Nature & Biophilia';
  coordinates: { x: number; y: number };
  hotspotRadius: number;
  footprintAreaSqFt: number;
  description: string;
  highlights: string[];
  icon: string;
  renderImage: string;
}

export type LocationCategory = 
  | 'Aviation & Transit' 
  | 'Global Tech & Enterprise' 
  | 'Elite Education' 
  | 'Wellness & Hospitality' 
  | 'Healthcare'
  | 'Industrial & Logistics Corridor'
  | 'Luxury Enclaves & Residences';

export interface LocationHighlight {
  id: string;
  name: string;
  category: LocationCategory;
  distanceKm: number;
  drivingTimeMins: number;
  routeSummary: string;
  description: string;
  badgeText: string;
  coordinates: { lat: number; lng: number };
}

export interface ProjectLocationDetails {
  area: string;
  taluk: string;
  district: string;
  city: string;
  state: string;
  pincode: string;
  googleMapsUrl: string;
  coordinates: { lat: number; lng: number };
}

export interface ProjectMetadata {
  name: string;
  tagline: string;
  visionStatement: string;
  developer: string;
  location: string;
  locationDetails?: ProjectLocationDetails;
  stats: {
    totalAcreage: number;
    totalPlots: number;
    openGreenSpacePercentage: number;
    clubhouseSqFt: number;
    mainRoadWidthFt?: number;
    internalRoadWidthFt?: number;
    distanceToAirportKm: number;
    satelliteRingRoadDistanceKm: number;
    driveTimeToWhitefieldMins?: number;
    driveTimeToStrrMins?: number;
    driveTimeToAirportMins?: number;
    reraRegistrationNumber: string;
  };
  heroMedia: {
    videoDesktopHls: string;
    videoDesktopMp4: string;
    videoDesktopWebm: string;
    videoMobileMp4: string;
    posterImage: string;
    cinematicFlyoverFramesTotal: number;
    render360PanoUrl: string;
  };
  designTokens: {
    colors: {
      alabaster: string;
      obsidian: string;
      forestEmerald: string;
      sageMist: string;
      champagneGold: string;
      softIvory?: string;
      charcoal?: string;
      porcelainWarm: string;
      basaltStone: string;
    };
    fonts: {
      serifDisplay: string;
      sansGeometric: string;
    };
  };
  seo: {
    title: string;
    metaDescription: string;
    canonicalUrl: string;
    keywords: string[];
    ogType: string;
    ogImage: string;
    twitterCard: string;
    jsonLdSchema: Record<string, unknown>;
  };
}

export type ProjectMeta = ProjectMetadata;

export interface InfrastructureFeature {
  id: string;
  category: "Road Hierarchy" | "Underground Utilities" | "Water & Drainage" | "Sanitation & Environment" | "Security & Safety";
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  badge: string;
  icon: string;
}

export interface RoadHierarchySpec {
  type: "Arterial Spine" | "Residential Street" | "Pedestrian Corridor";
  widthFeet: number;
  widthLabel: string;
  name: string;
  surfaceType: string;
  description: string;
  features: string[];
}

export interface BankApprovalPartner {
  id: string;
  bankName: string;
  shortName: string;
  loanEligibility: string;
  maxFinancingPercentage: number;
  maxTenureYears: number;
  approvalType: string;
  badge: string;
  features: string[];
}

export interface PlotSizingSpec {
  id: string;
  dimensions: string;
  areaSqFt: number;
  title: string;
  category: "Starter Luxury" | "Premium Family" | "Grand Executive" | "Palatial Estate";
  roadFrontage: string;
  typicalBuiltUpSqFt: string;
  facingOptions: ("North" | "East" | "West" | "South")[];
  startingPrice: string;
  pricePerSqFt: string;
  badge: string;
  description: string;
  keyBenefits: string[];
}

// ============================================================================
// 1. PROJECT METADATA & LUXURY BRAND IDENTITY
// ============================================================================

export const PROJECT_METADATA: ProjectMetadata = {
  name: "Laksh Enclave",
  tagline: "Where Peaceful Living Meets Seamless Connectivity",
  visionStatement: "A peaceful sanctuary of 150 luxury villa plots in Kondarahalli on the 10-lane Bengaluru–Chennai Expressway (NE7). Wake up to fresh air, open skies, and 800+ royal palms, just 25 minutes from Whitefield.",
  developer: "Laksh Luxury Enclaves",
  location: "Kondarahalli, Bengaluru–Chennai Expressway (NE7), Hoskote–Malur Road, Bangalore East / Greater Whitefield",
  locationDetails: {
    area: "Kondarahalli",
    taluk: "Malur",
    district: "Hoskote-Malur Growth Corridor, Bangalore East",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "563130",
    googleMapsUrl: "https://maps.app.goo.gl/uGzfD6JXXC4TmfgD7?g_st=awb",
    coordinates: { lat: 13.0444, lng: 77.9174 }
  },
  stats: {
    totalAcreage: 25,
    totalPlots: 150,
    openGreenSpacePercentage: 62,
    clubhouseSqFt: 18500,
    mainRoadWidthFt: 50,
    internalRoadWidthFt: 40,
    distanceToAirportKm: 38,
    satelliteRingRoadDistanceKm: 12,
    driveTimeToWhitefieldMins: 25,
    driveTimeToStrrMins: 18,
    driveTimeToAirportMins: 35,
    reraRegistrationNumber: "PRM/KA/RERA/1250/301/PR/241123/007892"
  },
  heroMedia: {
    videoDesktopHls: "https://stream.lakshenclave.com/cinematic-hero/master.m3u8",
    videoDesktopMp4: "/assets/video/hero-cinematic-4k.mp4",
    videoDesktopWebm: "/assets/video/hero-cinematic-1080p.webm",
    videoMobileMp4: "/assets/video/hero-cinematic-mobile.mp4",
    posterImage: "/images/6061957682878419879.jpg",
    cinematicFlyoverFramesTotal: 180,
    render360PanoUrl: "/images/6061957682878419867.jpg"
  },
  designTokens: {
    colors: {
      alabaster: "#FAF8F5",
      obsidian: "#1F2923",
      forestEmerald: "#14382C",
      sageMist: "#607264",
      champagneGold: "#9E7E46",
      softIvory: "#F4F0E8",
      charcoal: "#1F2923",
      porcelainWarm: "#FFFFFF",
      basaltStone: "#2E3833"
    },
    fonts: {
      serifDisplay: "'Playfair Display', 'Cinzel', serif",
      sansGeometric: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
    }
  },
  seo: {
    title: "Laksh Enclave | Premium Villa Plots on Bengaluru–Chennai Expressway (NE7)",
    metaDescription: "Discover Laksh Enclave: A tranquil gated community of 150 luxury villa plots at Kondarahalli on the Bengaluru–Chennai Expressway (NE7), 25 mins from Whitefield. Clear titles, 100% Vaastu, brick clubhouse, and 800+ royal palms.",
    canonicalUrl: "https://lakshenclave.com",
    keywords: [
      "Laksh Enclave",
      "Villa plots Bangalore Chennai Expressway",
      "Plots in Hoskote Malur Road",
      "Villa plots near Whitefield",
      "Gated community villa plots Bangalore East",
      "Kondarahalli plots",
      "Clear title villa plots Bangalore",
      "Assetz City of Palms alternative"
    ],
    ogType: "website",
    ogImage: "/images/6061957682878419879.jpg",
    twitterCard: "summary_large_image",
    jsonLdSchema: {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": "Laksh Enclave Luxury Villa Plots",
      "description": "Exclusive gated villa community in Kondarahalli, on Bengaluru–Chennai Expressway (NE7 Corridor), Greater Whitefield, with 150 premium residential plots.",
      "url": "https://lakshenclave.com",
      "image": "/images/6061957682878419879.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bengaluru–Chennai Expressway (NE7), adjacent to BCE Hedaginabele Toll Plaza, Kondarahalli",
        "addressLocality": "Kondarahalli, Hoskote-Malur Road",
        "addressRegion": "Karnataka",
        "postalCode": "563130",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0444,
        "longitude": 77.9174
      },
      "priceRange": "Price on Request",
      "telephone": "+91 98800 52574"
    }
  }
};

export const PROJECT_META = PROJECT_METADATA;

// ============================================================================
// 1B. ROAD HIERARCHY & PLOTTED DEVELOPMENT INFRASTRUCTURE SPECIFICATIONS
// ============================================================================

export const ROAD_HIERARCHY: RoadHierarchySpec[] = [
  {
    type: "Arterial Spine",
    widthFeet: 50,
    widthLabel: "50 Feet Wide",
    name: "Grand Entrance Royal Palm Boulevard",
    surfaceType: "Heavy-Duty All-Weather Bituminous Asphalt with Precast Concrete Kerbs",
    description: "The commanding central arterial spine of Laksh Enclave, welcoming residents through the monumental double-portal gate with towering royal palms and vintage street illumination.",
    features: [
      "50ft wide dual-carriage corridor for unobstructed two-way vehicular flow",
      "Flanked on both flanks by 800+ mature royal palm trees and landscaped bioswales",
      "Dedicated paved pedestrian walkways segregated from vehicular circulation",
      "Concealed underground utility ducts beneath walkway verge for zero road cutting"
    ]
  },
  {
    type: "Residential Street",
    widthFeet: 40,
    widthLabel: "40 Feet Wide",
    name: "Tree-Lined Residential Streets",
    surfaceType: "Asphalt Blacktop with Interlocking Paver Borders & Integrated Drain Gutters",
    description: "Generously proportioned 40ft internal residential avenues connecting every individual plot with wide turning radiuses, speed-calming design, and shaded verges.",
    features: [
      "40ft wide internal street network ensuring effortless villa driveway access",
      "Tree-lined borders with flowering shade species and vintage cast-iron lampposts",
      "Integrated saucer drains connected directly to underground RCC storm networks",
      "Individual plot utility feeder chambers at every plot threshold"
    ]
  },
  {
    type: "Pedestrian Corridor",
    widthFeet: 6,
    widthLabel: "6 Feet Wide",
    name: "Paved Pedestrian Walkways & Jogging Loops",
    surfaceType: "Heavy-Duty Interlocking Concrete Paver Tiles with Tactile Edging",
    description: "Safe, barrier-free continuous walking tracks connecting homes to The Manor Clubhouse, Sunburst Gazebo, and sports arenas.",
    features: [
      "Continuous non-slip paved surface safe for children bicycles and senior evening walks",
      "Tactile paving guides and gentle ramp transitions at street intersections",
      "Night illumination via warm LED bollards and tree uplighting"
    ]
  }
];

export const INFRASTRUCTURE_FEATURES: InfrastructureFeature[] = [
  {
    id: "infra-roads",
    category: "Road Hierarchy",
    title: "50ft & 40ft Engineered Road Hierarchy",
    subtitle: "Grand Boulevard Spine & Tree-Lined Residential Streets",
    description: "Engineered to premier plotted development standards, featuring a 50ft wide Grand Entrance Royal Palm Boulevard and 40ft wide internal streets with dedicated paved footpaths, eliminating vehicular congestion.",
    specs: [
      "50ft Grand Entrance Royal Palm Boulevard (Main Arterial Spine)",
      "40ft Wide Internal Residential Streets with concrete kerbs",
      "Paved pedestrian walkways on both sides of every road",
      "Heavy-duty blacktop asphalt with saucer drain borders"
    ],
    badge: "50ft & 40ft Corridors",
    icon: "Route"
  },
  {
    id: "infra-underground",
    category: "Underground Utilities",
    title: "100% Underground Utility Network",
    subtitle: "Zero Overhead Wires · Pristine Open Skies",
    description: "Every essential utility line (high-voltage power, optical fiber broadband, and street lighting conduits) is engineered completely underground in specialized utility trenches, preserving panoramic sky views.",
    specs: [
      "Concealed underground power distribution cables with individual feeder pillars",
      "Pre-laid optical fiber broadband conduits ready for high-speed FTTH connections",
      "Zero unsightly overhead electric cables or sagging telecom wires",
      "Inspection chambers positioned at plot boundaries for maintenance without road-cutting"
    ],
    badge: "100% Concealed",
    icon: "Zap"
  },
  {
    id: "infra-water",
    category: "Water & Drainage",
    title: "Dual Water Supply & Underground Storm Drainage",
    subtitle: "Abundant Potable Water & Flood-Free Campus",
    description: "Engineered hydro-infrastructure with individual metered water connections to each plot, overhead reservoir tanks, and underground RCC stormwater channels that prevent waterlogging under any downpour.",
    specs: [
      "Dedicated potable water supply line terminated at every individual plot boundary",
      "Centralized overhead storage reservoir & pneumatic pressurized pumping system",
      "Engineered underground RCC storm drainage network preventing monsoon water stagnation",
      "Recharge rainwater harvesting (RWH) percolation pits across the 25-acre estate"
    ],
    badge: "Self-Sustaining Water",
    icon: "Droplets"
  },
  {
    id: "infra-eco",
    category: "Sanitation & Environment",
    title: "Centralized STP & Eco-Conscious Landscaping",
    subtitle: "Zero-Discharge Community with 800+ Palms",
    description: "Advanced eco-engineering with a decentralized Sewage Treatment Plant (STP) providing recycled water for landscaping, organic waste composting, and warm LED solar illumination.",
    specs: [
      "Modern Sewage Treatment Plant (STP) with treated water reuse for landscape irrigation",
      "Underground sewage piping connected to each plot threshold",
      "Energy-efficient warm LED street illumination and solar powered common fixtures",
      "Over 800 mature royal palms and native flowering trees creating a natural microclimate"
    ],
    badge: "Eco-Conscious Sanctuary",
    icon: "Trees"
  },
  {
    id: "infra-security",
    category: "Security & Safety",
    title: "Multi-Tier 24/7 Security & Surveillance",
    subtitle: "Complete Peace of Mind for 150 Families",
    description: "A secure gated sanctuary guarded by trained security personnel, automated boom barriers, RFID vehicular authentication, and HD CCTV coverage along all perimeter boundaries.",
    specs: [
      "Monumental double-portal architectural entrance gate with manned security cabins",
      "Automated boom barriers with RFID smart vehicle access control",
      "Continuous HD CCTV perimeter surveillance and internal street monitoring",
      "Reinforced boundary wall with solar security fencing"
    ],
    badge: "24/7 Manned & Monitored",
    icon: "ShieldCheck"
  }
];

// ============================================================================
// 1C. PRE-APPROVED BANK PARTNERS (FINANCING UP TO 80%)
// ============================================================================

export const BANK_APPROVAL_PARTNERS: BankApprovalPartner[] = [
  {
    id: "bank-sbi",
    bankName: "State Bank of India",
    shortName: "SBI",
    loanEligibility: "Up to 80% Plot & Composite Villa Loan",
    maxFinancingPercentage: 80,
    maxTenureYears: 30,
    approvalType: "Project Approved (APF)",
    badge: "India's #1 Nationalized Bank",
    features: [
      "Lowest sovereign interest rates with zero hidden charges",
      "Composite plot purchase + villa construction loan facility",
      "Dedicated on-site SBI loan counselor for Laksh Enclave",
      "Transparent title verification pre-vetted by SBI legal panel"
    ]
  },
  {
    id: "bank-hdfc",
    bankName: "HDFC Bank",
    shortName: "HDFC Bank",
    loanEligibility: "Up to 80% Financing with Express Sanction",
    maxFinancingPercentage: 80,
    maxTenureYears: 30,
    approvalType: "Approved Project Financial (APF)",
    badge: "Premier Private Housing Lender",
    features: [
      "Express digital loan sanctioning within 48-72 hours",
      "Flexible step-up and structured EMI repayment options",
      "Pre-verified property legal documentation",
      "Special rates for corporate & salaried professionals"
    ]
  },
  {
    id: "bank-icici",
    bankName: "ICICI Bank",
    shortName: "ICICI Bank",
    loanEligibility: "Up to 80% Plot & Home Construction Loan",
    maxFinancingPercentage: 80,
    maxTenureYears: 30,
    approvalType: "Pre-Approved Project File",
    badge: "Leading Private Sector Bank",
    features: [
      "Instant pre-approved loan sanctions for existing ICICI customers",
      "Doorstep document pickup and dedicated relationship executive",
      "Attractive interest rate brackets linked to repo rate",
      "High loan amounts with flexible tenure up to 30 years"
    ]
  },
  {
    id: "bank-axis",
    bankName: "Axis Bank",
    shortName: "Axis Bank",
    loanEligibility: "Up to 80% Customized Plot Financing",
    maxFinancingPercentage: 80,
    maxTenureYears: 30,
    approvalType: "Approved Project Status",
    badge: "Top Private Bank Partner",
    features: [
      "Competitive plot loan interest rates with zero prepayment penalties",
      "Quick sanction turnarounds and hassle-free processing",
      "Comprehensive financing covering plot acquisition & construction",
      "Exclusive banking privileges for Enclave homeowners"
    ]
  }
];

// ============================================================================
// 1D. STANDARDIZED PLOT SIZING MATRIX
// ============================================================================

export const PLOT_SIZING_MATRIX: PlotSizingSpec[] = [
  {
    id: "matrix-30x40",
    dimensions: "30' × 40'",
    areaSqFt: 1200,
    title: "Starter Luxury Villa Plot",
    category: "Starter Luxury",
    roadFrontage: "40ft Wide Tree-Lined Residential Street",
    typicalBuiltUpSqFt: "Up to 2,200 sq.ft across G+2 floors",
    facingOptions: ["East", "North", "West"],
    startingPrice: "Price on Request",
    pricePerSqFt: "Price on Request",
    badge: "Starter Luxury",
    description: "An intelligently engineered, high-efficiency footprint tailored for young tech families and discerning investors seeking prime expressway asset ownership at an attractive entry ticket.",
    keyBenefits: [
      "100% Vaastu compliant footprint with auspicious East & North entrance options",
      "Frontage onto wide 40ft internal residential street with paved walkway",
      "Engineered for 3 BHK neoclassical duplex with private garden and portico",
      "Approved for up to 80% financing from SBI, HDFC, ICICI, and Axis Bank"
    ]
  },
  {
    id: "matrix-30x50",
    dimensions: "30' × 50'",
    areaSqFt: 1500,
    title: "Premium Family Villa Plot",
    category: "Premium Family",
    roadFrontage: "40ft Wide Tree-Lined Residential Street",
    typicalBuiltUpSqFt: "Up to 2,800 sq.ft across G+2 floors",
    facingOptions: ["East", "North", "West"],
    startingPrice: "Price on Request",
    pricePerSqFt: "Price on Request",
    badge: "Most Popular Family Size",
    description: "Our most coveted family plot configuration, offering generous setbacks, space for internal courtyard architecture, ground-floor senior bedroom, and serene private terrace gardens.",
    keyBenefits: [
      "Spacious proportions accommodating 3 & 4 BHK luxury residences",
      "Generous setbacks for private garden, courtyard, and covered car porch",
      "Walking distance to The Manor 18,500 sq.ft Clubhouse & Resort Pool",
      "Concealed underground utilities and dedicated water connection ready"
    ]
  },
  {
    id: "matrix-40x60",
    dimensions: "40' × 60'",
    areaSqFt: 2400,
    title: "Grand Executive Villa Plot",
    category: "Grand Executive",
    roadFrontage: "50ft Grand Royal Palm Boulevard or 40ft Avenue",
    typicalBuiltUpSqFt: "Up to 4,200 sq.ft across G+2 floors",
    facingOptions: ["East", "North", "South"],
    startingPrice: "Price on Request",
    pricePerSqFt: "Price on Request",
    badge: "Grand Executive",
    description: "An expansive residential canvas for senior corporate leaders and business families desiring generous space, double-height living salons, private plunge pool, and lush perimeter garden landscaping.",
    keyBenefits: [
      "Direct frontage options on the 50ft Grand Entrance Royal Palm Boulevard",
      "Generous 40-foot frontage permitting grand neoclassical portico and two-car bay",
      "Ample setback allowances for private swimming plunge pool and gazebo lawn",
      "Outstanding long-term appreciation potential along the NE7 expressway growth axis"
    ]
  },
  {
    id: "matrix-50x80",
    dimensions: "50' × 80' / Corner",
    areaSqFt: 4000,
    title: "Palatial Estate Villa Plot",
    category: "Palatial Estate",
    roadFrontage: "Dual Road Frontage (50ft Boulevard & 40ft Cross Street)",
    typicalBuiltUpSqFt: "Up to 6,500 sq.ft across G+2 floors",
    facingOptions: ["East", "North"],
    startingPrice: "Price on Request",
    pricePerSqFt: "Price on Request",
    badge: "Palatial Signature Collection",
    description: "The crown jewels of the masterplan. Ultra-luxury corner estate plots featuring dual-street frontages, direct views of Central Park and the Sunburst Gazebo, and unmatched privacy.",
    keyBenefits: [
      "Dual road frontage (50ft Grand Boulevard & 40ft Cross Avenue) for maximum prestige",
      "Unobstructed panoramic vistas overlooking Central Park and landscaped gardens",
      "Abundant 360-degree cross-ventilation, daylighting, and spatial independence",
      "Strictly limited founding allocation for elite signature residences"
    ]
  }
];

// ============================================================================
// 2. 8 SIGNATURE AMENITIES (FROM OFFICIAL BROCHURE)
// ============================================================================

export const MASTERPLAN_AMENITIES: MasterplanAmenity[] = [
  {
    id: "amenity-entrance-gate",
    name: "Monumental Entrance Gate & 24/7 Security",
    tagline: "Warm Welcome, Complete Peace of Mind",
    category: "Community Core",
    coordinates: { x: 500, y: 70 },
    hotspotRadius: 50,
    footprintAreaSqFt: 6000,
    description: "An impressive double-portal entryway with 24/7 manned security cabins, automated boom barriers, CCTV surveillance, and a dedicated visitor bay ensuring your family's safety and quiet privacy.",
    highlights: [
      "Stately twin-arch entrance portal with elegant wrought-iron gates",
      "24/7 trained security personnel and automated boom barriers",
      "Full perimeter compound wall with CCTV surveillance",
      "Dedicated visitor registration bay for smooth guest arrival"
    ],
    icon: "ShieldCheck",
    renderImage: "/images/6061957682878419879.jpg"
  },
  {
    id: "amenity-clubhouse",
    name: "Grand 2-Storey Brick Clubhouse & Colonial Veranda",
    tagline: "The Warm, Beating Heart of the Enclave",
    category: "Community Core",
    coordinates: { x: 220, y: 340 },
    hotspotRadius: 46,
    footprintAreaSqFt: 18500,
    description: "An authentic architectural centerpiece crafted with hand-selected exposed red brick and classic clay tiles. Features an upper-floor panoramic glass gym overlooking the pool, celebration banquet hall, indoor games, and shaded colonial verandas.",
    highlights: [
      "Upper-floor fitness center with panoramic glass walls overlooking the pool",
      "Multipurpose community banquet hall with party pantry",
      "Shaded colonial verandas for peaceful morning tea and reading",
      "Indoor recreational lounge for table tennis, carrom & chess"
    ],
    icon: "Crown",
    renderImage: "/images/6061957682878419873.jpg"
  },
  {
    id: "amenity-pool",
    name: "Resort Swimming Pool & Kids' Splash Pool",
    tagline: "Cool Off Under Open Blue Skies",
    category: "Retreat & Wellness",
    coordinates: { x: 280, y: 390 },
    hotspotRadius: 36,
    footprintAreaSqFt: 4500,
    description: "A sparkling azure swimming pool designed for relaxed weekend laps, flanked by a natural timber sun deck, comfortable loungers, shaded cabanas, and a dedicated shallow splash pool for kids.",
    highlights: [
      "Spacious resort-style swimming pool with crystal filtration",
      "Dedicated safe children's splash pool with gentle depth",
      "Sun deck with comfortable poolside loungers and umbrellas",
      "Private shaded cabanas for peaceful family afternoons"
    ],
    icon: "Waves",
    renderImage: "/images/6061957682878419877.jpg"
  },
  {
    id: "amenity-gazebo",
    name: "Sunburst Radial Park & Central Gazebo",
    tagline: "The Peaceful Center of the Neighborhood",
    category: "Community Core",
    coordinates: { x: 500, y: 500 },
    hotspotRadius: 40,
    footprintAreaSqFt: 1800,
    description: "A beautifully landscaped circular green park with flower-lined radial pathways. At its center stands an elegant gazebo pavilion, surrounded by stepped amphitheater lawns for evening get-togethers.",
    highlights: [
      "Landscaped radial walking paths with flowering shrubs",
      "Central ornamental gazebo for morning yoga or quiet chats",
      "Stepped amphitheater seating for community gatherings",
      "Lush green open lawns under the shade of mature trees"
    ],
    icon: "Compass",
    renderImage: "/images/6061957682878419871.jpg"
  },
  {
    id: "amenity-sport-arena",
    name: "Multi-Sport Championship Arena",
    tagline: "Energize Your Health with Every Game",
    category: "Active Sports",
    coordinates: { x: 750, y: 720 },
    hotspotRadius: 52,
    footprintAreaSqFt: 12000,
    description: "A floodlit, multi-purpose outdoor sports compound with pro-cushioned surfaces for basketball, badminton, pickleball, and volleyball, keeping kids, parents, and friends active and energized.",
    highlights: [
      "Dedicated Basketball half-court with regulation hoops",
      "All-weather Badminton & Pickleball play area",
      "Volleyball court with non-abrasive shock-absorbing turf",
      "Bright LED floodlighting for enjoyable evening matches"
    ],
    icon: "Trophy",
    renderImage: "/images/6061957682878419869.jpg"
  },
  {
    id: "amenity-adventure-park",
    name: "Children's Adventure Playground",
    tagline: "Nature-Inspired Outdoors for Happy Childhoods",
    category: "Nature & Biophilia",
    coordinates: { x: 620, y: 380 },
    hotspotRadius: 44,
    footprintAreaSqFt: 8000,
    description: "A safe, joyous play environment crafted from natural timber and eco-friendly materials. Features climbing nets, wooden rope bridge, swings, slides, and sand mounds where children can explore freely.",
    highlights: [
      "Timber adventure play equipment and rope bridge walk",
      "Safe swings, slides, and sensory sand play pits",
      "Soft-fall protective flooring and child-safe perimeter hedges",
      "Comfortable shaded benches for parents and grandparents"
    ],
    icon: "TreePine",
    renderImage: "/images/6061957682878419866.jpg"
  },
  {
    id: "amenity-skate-ramp",
    name: "Youth Skate Arena & Roller Park",
    tagline: "Dynamic Outdoor Thrills for Energetic Kids",
    category: "Active Sports",
    coordinates: { x: 820, y: 640 },
    hotspotRadius: 32,
    footprintAreaSqFt: 3500,
    description: "A smooth, custom-poured concrete skate plaza and roller track designed for skateboarding, rollerblading, and scooters, giving teenagers and active kids their own dedicated recreational haven.",
    highlights: [
      "Precision-smoothed concrete ramps and gentle curves",
      "Safe perimeter handrails and viewing boundary",
      "Dedicated space away from pedestrian walking tracks",
      "Encourages active outdoor fitness and balance skills"
    ],
    icon: "Zap",
    renderImage: "/images/6061957682878419870.jpg"
  },
  {
    id: "amenity-palm-boulevard",
    name: "50ft & 40ft Royal Palm-Lined Avenues",
    tagline: "A Grand Homecoming Every Single Day",
    category: "Community Core",
    coordinates: { x: 500, y: 220 },
    hotspotRadius: 65,
    footprintAreaSqFt: 32000,
    description: "Extra-wide 50-foot main entrance boulevard and 40-foot cross avenues, lined on both sides with towering royal palms, vintage street lamps, blacktop asphalt roads, and 100% concealed underground utilities.",
    highlights: [
      "Grand 50ft main boulevard and 40ft wide internal roads",
      "Lined with over 800 graceful royal palms and flowering trees",
      "Vintage warm cast-iron lampposts for enchanting evenings",
      "100% underground power, water, and fiber cables (no hanging wires)"
    ],
    icon: "Trees",
    renderImage: "/images/6061957682878419874.jpg"
  }
];

// ============================================================================
// 3. REAL LOCATION HIGHLIGHTS & STRATEGIC CONNECTIVITY
// ============================================================================

export const LOCATION_HIGHLIGHTS: LocationHighlight[] = [
  {
    id: "loc-ne7-expressway",
    name: "Bengaluru–Chennai Expressway (NE7)",
    category: "Aviation & Transit",
    distanceKm: 0,
    drivingTimeMins: 0,
    routeSummary: "Direct Arterial Frontage at Kondarahalli (0 km on NE7 Corridor)",
    description: "India's transformative 10-lane access-controlled greenfield expressway providing high-speed, signal-free arterial mobility between Bengaluru, Hoskote, and Chennai.",
    badgeText: "0 km / 0 Mins Direct Access",
    coordinates: { lat: 13.0444, lng: 77.9174 }
  },
  {
    id: "loc-hedaginabele-toll",
    name: "BCE Hedaginabele Toll Plaza",
    category: "Aviation & Transit",
    distanceKm: 1.5,
    drivingTimeMins: 2,
    routeSummary: "Via NE7 Main Expressway / Service Corridor",
    description: "Primary high-speed loop interchange on the Bengaluru–Chennai Expressway, ensuring instantaneous, congestion-free arrival and departure.",
    badgeText: "1.5 km / 2 Mins Toll Interchange",
    coordinates: { lat: 13.0444, lng: 77.9174 }
  },
  {
    id: "loc-welspun-logistics",
    name: "Welspun Logistics & Warehousing Park",
    category: "Industrial & Logistics Corridor",
    distanceKm: 5,
    drivingTimeMins: 8,
    routeSummary: "Via Malur–Hoskote Logistics Arterial",
    description: "Grade-A mega warehousing and logistics hub attracting Fortune 500 supply-chain operators and corporate leadership.",
    badgeText: "5 km / 8 Mins Logistics Hub",
    coordinates: { lat: 13.0180, lng: 77.9250 }
  },
  {
    id: "loc-itc-mega-plant",
    name: "ITC ICML Mega Plant, Malur",
    category: "Industrial & Logistics Corridor",
    distanceKm: 6.5,
    drivingTimeMins: 10,
    routeSummary: "Via Malur State Highway Corridor",
    description: "ITC's Integrated Consumer Goods Manufacturing and Logistics facility, one of South India's largest and most technologically advanced industrial complexes.",
    badgeText: "6.5 km / 10 Mins Mega Campus",
    coordinates: { lat: 13.0120, lng: 77.9380 }
  },
  {
    id: "loc-strr-hoskote",
    name: "STRR (NH-648) / Hoskote Interchange",
    category: "Aviation & Transit",
    distanceKm: 12,
    drivingTimeMins: 18,
    routeSummary: "Via Satellite Town Ring Road (STRR / NH-648) & NE7 Junction",
    description: "Crucial multi-lane expressway junction connecting Hoskote's industrial belt with the 280 km 6-lane Satellite Town Ring Road (STRR / NH-648).",
    badgeText: "12 km / 18 Mins STRR Junction",
    coordinates: { lat: 13.0780, lng: 77.8010 }
  },
  {
    id: "loc-whitefield-tech",
    name: "Whitefield Tech Hub (ITPL, EPIP Zone)",
    category: "Global Tech & Enterprise",
    distanceKm: 22,
    drivingTimeMins: 25,
    routeSummary: "Via Hoskote–Whitefield Arterial / SH-35",
    description: "Bengaluru's iconic technology epicentre housing Fortune 500 tech campuses, luxury retail malls, 5-star hotels, and premier international academies.",
    badgeText: "22 km / 25 Mins IT Hub",
    coordinates: { lat: 12.9863, lng: 77.7375 }
  },
  {
    id: "loc-airport-strr",
    name: "Kempegowda International Airport (BLR) via STRR",
    category: "Aviation & Transit",
    distanceKm: 38,
    drivingTimeMins: 35,
    routeSummary: "Via STRR Expressway (NH-648) to Devanahalli Airport Corridor",
    description: "Rapid, congestion-free transit to Terminal 1 & international Terminal 2 via the 6-lane STRR expressway, bypassing all city traffic bottlenecks.",
    badgeText: "38 km / 35 Mins Airport Transit",
    coordinates: { lat: 13.1986, lng: 77.7066 }
  },
  {
    id: "loc-neighbouring-luxury-enclaves",
    name: "Neighbouring Luxury Enclaves",
    category: "Luxury Enclaves & Residences",
    distanceKm: 3,
    drivingTimeMins: 4,
    routeSummary: "Immediate Neighbourhood Corridor along NE7 & Malur Road",
    description: "Flanked by prestigious gated villa communities including Concorde Equity, Geown Casper Tranquil, and Metro Home Lake Side Garden, establishing an exclusive peer enclave.",
    badgeText: "3 km / 4 Mins Luxury Belt",
    coordinates: { lat: 13.0380, lng: 77.9220 }
  },
  {
    id: "loc-concorde-equity",
    name: "Concorde Equity",
    category: "Luxury Enclaves & Residences",
    distanceKm: 2.5,
    drivingTimeMins: 3,
    routeSummary: "Adjacent Gated Enclave Corridor",
    description: "Premier gated villa community establishing the refined architectural character and peer community of this premium expressway belt.",
    badgeText: "Adjacent Luxury Peer",
    coordinates: { lat: 13.0395, lng: 77.9205 }
  },
  {
    id: "loc-geown-casper",
    name: "Geown Casper Tranquil",
    category: "Luxury Enclaves & Residences",
    distanceKm: 3.2,
    drivingTimeMins: 4,
    routeSummary: "Adjacent Gated Enclave Corridor",
    description: "Upscale residential villa sanctuary contributing to the serene lifestyle ecosystem of the Hoskote-Malur growth corridor.",
    badgeText: "Neighbouring Estate",
    coordinates: { lat: 13.0360, lng: 77.9240 }
  },
  {
    id: "loc-metro-home",
    name: "Metro Home Lake Side Garden",
    category: "Luxury Enclaves & Residences",
    distanceKm: 3.5,
    drivingTimeMins: 5,
    routeSummary: "Adjacent Gated Enclave Corridor",
    description: "Serene lakeside villa retreat completing the triad of high-value residential developments in the immediate vicinity.",
    badgeText: "Lakeside Enclave",
    coordinates: { lat: 13.0340, lng: 77.9270 }
  }
];

// ============================================================================
// 5. 150-PLOT COMPLETE MASTERPLAN DATA STRUCTURE
// ============================================================================

export const MASTERPLAN_PLOTS: MasterplanPlot[] = [
  {
    "id": 1,
    "plotNumber": "LK-001",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "Founding Reserve",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6400,
    "totalPrice": 25600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "120,150 170,150 170,178 120,178",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 2,
    "plotNumber": "LK-002",
    "category": "Boulevard Corner",
    "facing": "West",
    "status": "Founding Reserve",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6400,
    "totalPrice": 25600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 178,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "178,150 228,150 228,178 178,178",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset"
    ]
  },
  {
    "id": 3,
    "plotNumber": "LK-003",
    "category": "Clubhouse-Facing",
    "facing": "North",
    "status": "Founding Reserve",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6400,
    "totalPrice": 25600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 236,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "236,150 286,150 286,178 236,178",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 4,
    "plotNumber": "LK-004",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6400,
    "totalPrice": 25600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 294,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "294,150 344,150 344,178 294,178",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 5,
    "plotNumber": "LK-005",
    "category": "Clubhouse-Facing",
    "facing": "West",
    "status": "In Negotiation",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6400,
    "totalPrice": 25600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 352,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "352,150 402,150 402,178 352,178",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge"
    ]
  },
  {
    "id": 6,
    "plotNumber": "LK-006",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6400,
    "totalPrice": 25600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "120,184 170,184 170,212 120,212",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 7,
    "plotNumber": "LK-007",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "Founding Reserve",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6400,
    "totalPrice": 25600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 178,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "178,184 228,184 228,212 178,212",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 8,
    "plotNumber": "LK-008",
    "category": "Boulevard Corner",
    "facing": "West",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6400,
    "totalPrice": 25600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 236,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "236,184 286,184 286,212 236,212",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset"
    ]
  },
  {
    "id": 9,
    "plotNumber": "LK-009",
    "category": "Clubhouse-Facing",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 294,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "294,184 344,184 344,212 294,212",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 10,
    "plotNumber": "LK-010",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 352,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "352,184 402,184 402,212 352,212",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 11,
    "plotNumber": "LK-011",
    "category": "Clubhouse-Facing",
    "facing": "West",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "120,218 170,218 170,246 120,246",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge"
    ]
  },
  {
    "id": 12,
    "plotNumber": "LK-012",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 178,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "178,218 228,218 228,246 178,246",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 13,
    "plotNumber": "LK-013",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 236,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "236,218 286,218 286,246 236,246",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 14,
    "plotNumber": "LK-014",
    "category": "Boulevard Corner",
    "facing": "West",
    "status": "Sold",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 294,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "294,218 344,218 344,246 294,246",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset"
    ]
  },
  {
    "id": 15,
    "plotNumber": "LK-015",
    "category": "Clubhouse-Facing",
    "facing": "North",
    "status": "In Negotiation",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 352,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "352,218 402,218 402,246 352,246",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 16,
    "plotNumber": "LK-016",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "120,252 170,252 170,280 120,280",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 17,
    "plotNumber": "LK-017",
    "category": "Clubhouse-Facing",
    "facing": "West",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 178,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "178,252 228,252 228,280 178,280",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge"
    ]
  },
  {
    "id": 18,
    "plotNumber": "LK-018",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 236,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "236,252 286,252 286,280 236,280",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 19,
    "plotNumber": "LK-019",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5800,
    "totalPrice": 8700000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 294,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "294,252 344,252 344,280 294,280",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 20,
    "plotNumber": "LK-020",
    "category": "Boulevard Corner",
    "facing": "West",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5800,
    "totalPrice": 8700000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 352,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "352,252 402,252 402,280 352,280",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset"
    ]
  },
  {
    "id": 21,
    "plotNumber": "LK-021",
    "category": "Clubhouse-Facing",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5800,
    "totalPrice": 8700000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "120,286 170,286 170,314 120,314",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 22,
    "plotNumber": "LK-022",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5800,
    "totalPrice": 8700000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 178,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "178,286 228,286 228,314 178,314",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 23,
    "plotNumber": "LK-023",
    "category": "Clubhouse-Facing",
    "facing": "West",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5800,
    "totalPrice": 8700000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 236,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "236,286 286,286 286,314 236,314",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge"
    ]
  },
  {
    "id": 24,
    "plotNumber": "LK-024",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5800,
    "totalPrice": 8700000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 294,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "294,286 344,286 344,314 294,314",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 25,
    "plotNumber": "LK-025",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "In Negotiation",
    "priceTier": "Signature",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5800,
    "totalPrice": 8700000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 352,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "352,286 402,286 402,314 352,314",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 26,
    "plotNumber": "LK-026",
    "category": "Central Park",
    "facing": "North",
    "status": "Founding Reserve",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 480,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "480,150 530,150 530,178 480,178",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 27,
    "plotNumber": "LK-027",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Founding Reserve",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 538,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "538,150 588,150 588,178 538,178",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 28,
    "plotNumber": "LK-028",
    "category": "Central Park",
    "facing": "North",
    "status": "Founding Reserve",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 596,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "596,150 646,150 646,178 596,178",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 29,
    "plotNumber": "LK-029",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 654,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "654,150 704,150 704,178 654,178",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 30,
    "plotNumber": "LK-030",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 712,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "712,150 762,150 762,178 712,178",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 31,
    "plotNumber": "LK-031",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 770,
      "y": 150,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "770,150 820,150 820,178 770,178",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 32,
    "plotNumber": "LK-032",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 480,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "480,184 530,184 530,212 480,212",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 33,
    "plotNumber": "LK-033",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 538,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "538,184 588,184 588,212 538,212",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 34,
    "plotNumber": "LK-034",
    "category": "Central Park",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 596,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "596,184 646,184 646,212 596,212",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 35,
    "plotNumber": "LK-035",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "In Negotiation",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6200,
    "totalPrice": 14880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 654,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "654,184 704,184 704,212 654,212",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 36,
    "plotNumber": "LK-036",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 712,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "712,184 762,184 762,212 712,212",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 37,
    "plotNumber": "LK-037",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 770,
      "y": 184,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "770,184 820,184 820,212 770,212",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 38,
    "plotNumber": "LK-038",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 480,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "480,218 530,218 530,246 480,246",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 39,
    "plotNumber": "LK-039",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 538,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "538,218 588,218 588,246 538,246",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 40,
    "plotNumber": "LK-040",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 596,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "596,218 646,218 646,246 596,246",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 41,
    "plotNumber": "LK-041",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 654,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "654,218 704,218 704,246 654,246",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 42,
    "plotNumber": "LK-042",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 712,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "712,218 762,218 762,246 712,246",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 43,
    "plotNumber": "LK-043",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 770,
      "y": 218,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "770,218 820,218 820,246 770,246",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 44,
    "plotNumber": "LK-044",
    "category": "Central Park",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 480,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "480,252 530,252 530,280 480,280",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 45,
    "plotNumber": "LK-045",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "In Negotiation",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 538,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "538,252 588,252 588,280 538,280",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 46,
    "plotNumber": "LK-046",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 596,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "596,252 646,252 646,280 596,280",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 47,
    "plotNumber": "LK-047",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 654,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "654,252 704,252 704,280 654,280",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 48,
    "plotNumber": "LK-048",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 712,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "712,252 762,252 762,280 712,280",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 49,
    "plotNumber": "LK-049",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 770,
      "y": 252,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "770,252 820,252 820,280 770,280",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 50,
    "plotNumber": "LK-050",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 480,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "480,286 530,286 530,314 480,314",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 51,
    "plotNumber": "LK-051",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 538,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "538,286 588,286 588,314 538,314",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 52,
    "plotNumber": "LK-052",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 596,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "596,286 646,286 646,314 596,314",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 53,
    "plotNumber": "LK-053",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 654,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "654,286 704,286 704,314 654,314",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 54,
    "plotNumber": "LK-054",
    "category": "Central Park",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 712,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "712,286 762,286 762,314 712,314",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 55,
    "plotNumber": "LK-055",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "In Negotiation",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5400,
    "totalPrice": 8100000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 770,
      "y": 286,
      "width": 50,
      "height": 28
    },
    "polygonPoints": "770,286 820,286 820,314 770,314",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 56,
    "plotNumber": "LK-056",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "Founding Reserve",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6500,
    "totalPrice": 26000000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 360,
      "y": 550,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "360,550 406,550 406,578 360,578",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 57,
    "plotNumber": "LK-057",
    "category": "Central Park",
    "facing": "North",
    "status": "Founding Reserve",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6500,
    "totalPrice": 26000000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 414,
      "y": 550,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "414,550 460,550 460,578 414,578",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 58,
    "plotNumber": "LK-058",
    "category": "Central Park",
    "facing": "East",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6500,
    "totalPrice": 26000000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 468,
      "y": 550,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "468,550 514,550 514,578 468,578",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 59,
    "plotNumber": "LK-059",
    "category": "Clubhouse-Facing",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6500,
    "totalPrice": 26000000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 522,
      "y": 550,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "522,550 568,550 568,578 522,578",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 60,
    "plotNumber": "LK-060",
    "category": "Central Park",
    "facing": "East",
    "status": "Founding Reserve",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6500,
    "totalPrice": 26000000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 576,
      "y": 550,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "576,550 622,550 622,578 576,578",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 61,
    "plotNumber": "LK-061",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6500,
    "totalPrice": 26000000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 630,
      "y": 550,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "630,550 676,550 676,578 630,578",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 62,
    "plotNumber": "LK-062",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6500,
    "totalPrice": 26000000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 360,
      "y": 584,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "360,584 406,584 406,612 360,612",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 63,
    "plotNumber": "LK-063",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 6500,
    "totalPrice": 26000000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 414,
      "y": 584,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "414,584 460,584 460,612 414,612",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 64,
    "plotNumber": "LK-064",
    "category": "Central Park",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 468,
      "y": 584,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "468,584 514,584 514,612 468,612",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 65,
    "plotNumber": "LK-065",
    "category": "Clubhouse-Facing",
    "facing": "North",
    "status": "In Negotiation",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 522,
      "y": 584,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "522,584 568,584 568,612 522,612",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 66,
    "plotNumber": "LK-066",
    "category": "Central Park",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 576,
      "y": 584,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "576,584 622,584 622,612 576,612",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 67,
    "plotNumber": "LK-067",
    "category": "Central Park",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 630,
      "y": 584,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "630,584 676,584 676,612 630,612",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 68,
    "plotNumber": "LK-068",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 360,
      "y": 618,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "360,618 406,618 406,646 360,646",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 69,
    "plotNumber": "LK-069",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 414,
      "y": 618,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "414,618 460,618 460,646 414,646",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 70,
    "plotNumber": "LK-070",
    "category": "Central Park",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 468,
      "y": 618,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "468,618 514,618 514,646 468,646",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 71,
    "plotNumber": "LK-071",
    "category": "Clubhouse-Facing",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 522,
      "y": 618,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "522,618 568,618 568,646 522,646",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 72,
    "plotNumber": "LK-072",
    "category": "Central Park",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 576,
      "y": 618,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "576,618 622,618 622,646 576,646",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 73,
    "plotNumber": "LK-073",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 630,
      "y": 618,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "630,618 676,618 676,646 630,646",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 74,
    "plotNumber": "LK-074",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 360,
      "y": 652,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "360,652 406,652 406,680 360,680",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 75,
    "plotNumber": "LK-075",
    "category": "Central Park",
    "facing": "North",
    "status": "In Negotiation",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 414,
      "y": 652,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "414,652 460,652 460,680 414,680",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 76,
    "plotNumber": "LK-076",
    "category": "Central Park",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 468,
      "y": 652,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "468,652 514,652 514,680 468,680",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 77,
    "plotNumber": "LK-077",
    "category": "Clubhouse-Facing",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 2400,
    "dimensions": {
      "widthFt": 40,
      "lengthFt": 60
    },
    "pricePerSqFt": 6100,
    "totalPrice": 14640000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 522,
      "y": 652,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "522,652 568,652 568,680 522,680",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Horizon Pavilion",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 78,
    "plotNumber": "LK-078",
    "category": "Central Park",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5500,
    "totalPrice": 8250000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 576,
      "y": 652,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "576,652 622,652 622,680 576,680",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 79,
    "plotNumber": "LK-079",
    "category": "Central Park",
    "facing": "North",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5500,
    "totalPrice": 8250000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 630,
      "y": 652,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "630,652 676,652 676,680 630,680",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 80,
    "plotNumber": "LK-080",
    "category": "Clubhouse-Facing",
    "facing": "East",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5500,
    "totalPrice": 8250000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 360,
      "y": 686,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "360,686 406,686 406,714 360,714",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 81,
    "plotNumber": "LK-081",
    "category": "Central Park",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5500,
    "totalPrice": 8250000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 414,
      "y": 686,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "414,686 460,686 460,714 414,714",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 82,
    "plotNumber": "LK-082",
    "category": "Central Park",
    "facing": "East",
    "status": "Available",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5500,
    "totalPrice": 8250000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 468,
      "y": 686,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "468,686 514,686 514,714 468,714",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 83,
    "plotNumber": "LK-083",
    "category": "Clubhouse-Facing",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5500,
    "totalPrice": 8250000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 522,
      "y": 686,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "522,686 568,686 568,714 522,714",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Unobstructed view of Retreat Clubhouse & Pool",
      "Direct pedestrian promenade access",
      "VIP Priority Clubhouse concierge",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 84,
    "plotNumber": "LK-084",
    "category": "Central Park",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5500,
    "totalPrice": 8250000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 576,
      "y": 686,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "576,686 622,686 622,714 576,714",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 85,
    "plotNumber": "LK-085",
    "category": "Central Park",
    "facing": "North",
    "status": "In Negotiation",
    "priceTier": "Prime",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5500,
    "totalPrice": 8250000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 630,
      "y": 686,
      "width": 46,
      "height": 28
    },
    "polygonPoints": "630,686 676,686 676,714 630,714",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Frontage onto Central Radial Park",
      "Adjacent to Celestial Gazebo",
      "Zero vehicular noise corridor",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 86,
    "plotNumber": "LK-086",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 560,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "120,560 160,560 160,586 120,586",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 87,
    "plotNumber": "LK-087",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 166,
      "y": 560,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "166,560 206,560 206,586 166,586",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 88,
    "plotNumber": "LK-088",
    "category": "Boulevard Corner",
    "facing": "South",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 212,
      "y": 560,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "212,560 252,560 252,586 212,586",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset"
    ]
  },
  {
    "id": 89,
    "plotNumber": "LK-089",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 258,
      "y": 560,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "258,560 298,560 298,586 258,586",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 90,
    "plotNumber": "LK-090",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 304,
      "y": 560,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "304,560 344,560 344,586 304,586",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 91,
    "plotNumber": "LK-091",
    "category": "Serenity Perimeter",
    "facing": "South",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 592,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "120,592 160,592 160,618 120,618",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 92,
    "plotNumber": "LK-092",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 166,
      "y": 592,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "166,592 206,592 206,618 166,618",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 93,
    "plotNumber": "LK-093",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 212,
      "y": 592,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "212,592 252,592 252,618 212,618",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 94,
    "plotNumber": "LK-094",
    "category": "Boulevard Corner",
    "facing": "South",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 258,
      "y": 592,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "258,592 298,592 298,618 258,618",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset"
    ]
  },
  {
    "id": 95,
    "plotNumber": "LK-095",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "In Negotiation",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 304,
      "y": 592,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "304,592 344,592 344,618 304,618",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 96,
    "plotNumber": "LK-096",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 624,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "120,624 160,624 160,650 120,650",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 97,
    "plotNumber": "LK-097",
    "category": "Serenity Perimeter",
    "facing": "South",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 166,
      "y": 624,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "166,624 206,624 206,650 166,650",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 98,
    "plotNumber": "LK-098",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 212,
      "y": 624,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "212,624 252,624 252,650 212,650",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 99,
    "plotNumber": "LK-099",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 258,
      "y": 624,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "258,624 298,624 298,650 258,650",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 100,
    "plotNumber": "LK-100",
    "category": "Boulevard Corner",
    "facing": "South",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 304,
      "y": 624,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "304,624 344,624 344,650 304,650",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset"
    ]
  },
  {
    "id": 101,
    "plotNumber": "LK-101",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 656,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "120,656 160,656 160,682 120,682",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 102,
    "plotNumber": "LK-102",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 166,
      "y": 656,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "166,656 206,656 206,682 166,682",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 103,
    "plotNumber": "LK-103",
    "category": "Serenity Perimeter",
    "facing": "South",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 212,
      "y": 656,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "212,656 252,656 252,682 212,682",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 104,
    "plotNumber": "LK-104",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 258,
      "y": 656,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "258,656 298,656 298,682 258,682",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 105,
    "plotNumber": "LK-105",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "In Negotiation",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 304,
      "y": 656,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "304,656 344,656 344,682 304,682",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 106,
    "plotNumber": "LK-106",
    "category": "Boulevard Corner",
    "facing": "South",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 688,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "120,688 160,688 160,714 120,714",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset"
    ]
  },
  {
    "id": 107,
    "plotNumber": "LK-107",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 166,
      "y": 688,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "166,688 206,688 206,714 166,714",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 108,
    "plotNumber": "LK-108",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 212,
      "y": 688,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "212,688 252,688 252,714 212,714",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 109,
    "plotNumber": "LK-109",
    "category": "Serenity Perimeter",
    "facing": "South",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 258,
      "y": 688,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "258,688 298,688 298,714 258,714",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 110,
    "plotNumber": "LK-110",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 304,
      "y": 688,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "304,688 344,688 344,714 304,714",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 111,
    "plotNumber": "LK-111",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 120,
      "y": 720,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "120,720 160,720 160,746 120,746",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 112,
    "plotNumber": "LK-112",
    "category": "Boulevard Corner",
    "facing": "South",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 166,
      "y": 720,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "166,720 206,720 206,746 166,746",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset"
    ]
  },
  {
    "id": 113,
    "plotNumber": "LK-113",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "Available",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 212,
      "y": 720,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "212,720 252,720 252,746 212,746",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 114,
    "plotNumber": "LK-114",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Founding",
    "areaSqFt": 1500,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 50
    },
    "pricePerSqFt": 5200,
    "totalPrice": 7800000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 258,
      "y": 720,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "258,720 298,720 298,746 258,746",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 115,
    "plotNumber": "LK-115",
    "category": "Serenity Perimeter",
    "facing": "South",
    "status": "In Negotiation",
    "priceTier": "Founding",
    "areaSqFt": 1200,
    "dimensions": {
      "widthFt": 30,
      "lengthFt": 40
    },
    "pricePerSqFt": 4950,
    "totalPrice": 5940000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 304,
      "y": 720,
      "width": 40,
      "height": 26
    },
    "polygonPoints": "304,720 344,720 344,746 304,746",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Yama grounding alignment optimized with southern bio-shield hedgerows",
      "dominantElement": "Earth / Prithvi"
    },
    "recommendedVillaType": "The Verdant Sanctuary",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 116,
    "plotNumber": "LK-116",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Founding Reserve",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6400,
    "totalPrice": 38880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 110,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "110,70 178,70 178,102 110,102",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 117,
    "plotNumber": "LK-117",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "Founding Reserve",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6400,
    "totalPrice": 38880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 188,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "188,70 256,70 256,102 188,102",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 118,
    "plotNumber": "LK-118",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6400,
    "totalPrice": 38880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 266,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "266,70 334,70 334,102 266,102",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 119,
    "plotNumber": "LK-119",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "Available",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6400,
    "totalPrice": 38880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 344,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "344,70 412,70 412,102 344,102",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 120,
    "plotNumber": "LK-120",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6400,
    "totalPrice": 38880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 422,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "422,70 490,70 490,102 422,102",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 121,
    "plotNumber": "LK-121",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "Sold",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6400,
    "totalPrice": 38880000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 500,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "500,70 568,70 568,102 500,102",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 122,
    "plotNumber": "LK-122",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 578,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "578,70 646,70 646,102 578,102",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 123,
    "plotNumber": "LK-123",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 656,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "656,70 724,70 724,102 656,102",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 124,
    "plotNumber": "LK-124",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 734,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "734,70 802,70 802,102 734,102",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 125,
    "plotNumber": "LK-125",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "In Negotiation",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 812,
      "y": 70,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "812,70 880,70 880,102 812,102",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 126,
    "plotNumber": "LK-126",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 110,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "110,108 178,108 178,140 110,140",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 127,
    "plotNumber": "LK-127",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 188,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "188,108 256,108 256,140 188,140",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 128,
    "plotNumber": "LK-128",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 266,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "266,108 334,108 334,140 266,140",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 129,
    "plotNumber": "LK-129",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 344,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "344,108 412,108 412,140 344,140",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 130,
    "plotNumber": "LK-130",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 422,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "422,108 490,108 490,140 422,140",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 131,
    "plotNumber": "LK-131",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 500,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "500,108 568,108 568,140 500,140",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 132,
    "plotNumber": "LK-132",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 578,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "578,108 646,108 646,140 578,140",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 133,
    "plotNumber": "LK-133",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 656,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "656,108 724,108 724,140 656,140",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 134,
    "plotNumber": "LK-134",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 734,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "734,108 802,108 802,140 734,140",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 135,
    "plotNumber": "LK-135",
    "category": "Serenity Perimeter",
    "facing": "West",
    "status": "In Negotiation",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5800,
    "totalPrice": 23200000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 812,
      "y": 108,
      "width": 68,
      "height": 32
    },
    "polygonPoints": "812,108 880,108 880,140 812,140",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Varuna stability alignment with Sunset serenity and private courtyards",
      "dominantElement": "Space / Akasha"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential"
    ]
  },
  {
    "id": 136,
    "plotNumber": "LK-136",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Founding Reserve",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6500,
    "totalPrice": 39487500,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 140,
      "y": 760,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "140,760 218,760 218,798 140,798",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 137,
    "plotNumber": "LK-137",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Founding Reserve",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5900,
    "totalPrice": 23600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 232,
      "y": 760,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "232,760 310,760 310,798 232,798",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 138,
    "plotNumber": "LK-138",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "Available",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6500,
    "totalPrice": 39487500,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 324,
      "y": 760,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "324,760 402,760 402,798 324,798",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 139,
    "plotNumber": "LK-139",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5900,
    "totalPrice": 23600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 416,
      "y": 760,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "416,760 494,760 494,798 416,798",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 140,
    "plotNumber": "LK-140",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "Available",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6500,
    "totalPrice": 39487500,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 508,
      "y": 760,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "508,760 586,760 586,798 508,798",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 141,
    "plotNumber": "LK-141",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5900,
    "totalPrice": 23600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 600,
      "y": 760,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "600,760 678,760 678,798 600,798",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 142,
    "plotNumber": "LK-142",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6500,
    "totalPrice": 39487500,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 692,
      "y": 760,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "692,760 770,760 770,798 692,798",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 143,
    "plotNumber": "LK-143",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5900,
    "totalPrice": 23600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 784,
      "y": 760,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "784,760 862,760 862,798 784,798",
    "vastu": {
      "compliant": true,
      "score": 98,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 144,
    "plotNumber": "LK-144",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "Sold",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6500,
    "totalPrice": 39487500,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 140,
      "y": 804,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "140,804 218,804 218,842 140,842",
    "vastu": {
      "compliant": true,
      "score": 93,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 145,
    "plotNumber": "LK-145",
    "category": "Boulevard Corner",
    "facing": "North",
    "status": "In Negotiation",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5900,
    "totalPrice": 23600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 232,
      "y": 804,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "232,804 310,804 310,842 232,842",
    "vastu": {
      "compliant": true,
      "score": 96,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 146,
    "plotNumber": "LK-146",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "Available",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6500,
    "totalPrice": 39487500,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 324,
      "y": 804,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "324,804 402,804 402,842 324,842",
    "vastu": {
      "compliant": true,
      "score": 99,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 147,
    "plotNumber": "LK-147",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Sold",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5900,
    "totalPrice": 23600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 416,
      "y": 804,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "416,804 494,804 494,842 416,842",
    "vastu": {
      "compliant": true,
      "score": 94,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 148,
    "plotNumber": "LK-148",
    "category": "Boulevard Corner",
    "facing": "East",
    "status": "Available",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6500,
    "totalPrice": 39487500,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 508,
      "y": 804,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "508,804 586,804 586,842 508,842",
    "vastu": {
      "compliant": true,
      "score": 97,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Dual-frontage 50ft & 40ft wide boulevard access",
      "Magnificent royal palm avenue backdrop",
      "Extended corner landscaping offset",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 149,
    "plotNumber": "LK-149",
    "category": "Serenity Perimeter",
    "facing": "North",
    "status": "Available",
    "priceTier": "Signature",
    "areaSqFt": 4000,
    "dimensions": {
      "widthFt": 50,
      "lengthFt": 80
    },
    "pricePerSqFt": 5900,
    "totalPrice": 23600000,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 600,
      "y": 804,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "600,804 678,804 678,842 600,842",
    "vastu": {
      "compliant": true,
      "score": 92,
      "description": "Kubera Prosperity alignment with auspicious Northern entry threshold",
      "dominantElement": "Water / Jal"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  },
  {
    "id": 150,
    "plotNumber": "LK-150",
    "category": "Serenity Perimeter",
    "facing": "East",
    "status": "Founding Reserve",
    "priceTier": "Estate",
    "areaSqFt": 6075,
    "dimensions": {
      "widthFt": 75,
      "lengthFt": 81
    },
    "pricePerSqFt": 6500,
    "totalPrice": 39487500,
    "formattedPrice": "Price on Request",
    "coordinates": {
      "x": 692,
      "y": 804,
      "width": 78,
      "height": 38
    },
    "polygonPoints": "692,804 770,804 770,842 692,842",
    "vastu": {
      "compliant": true,
      "score": 95,
      "description": "Surya Solar alignment with prime Morning Prana and Ishanya harmony",
      "dominantElement": "Air / Vayu"
    },
    "recommendedVillaType": "The Sovereign Manor",
    "features": [
      "Deep woodland seclusion buffer",
      "Maximum architectural privacy",
      "Extended estate footprint with private orchard potential",
      "100% Vastu Ishanya/Kubera compliant orientation"
    ]
  }
];

// ============================================================================
// 6. HIGH-CRO CONVERSION & WHATSAPP VIP CONCIERGE CONFIGURATION
// ============================================================================

export interface CROConfig {
  whatsappConciergeNumber: string;
  vipDeskEmail: string;
  hotlinePhone: string;
  defaultPlotInquiryTemplate: string;
  brochureDownloadPdfUrl: string;
  leadScoringThresholds: {
    hotLeadTimeOnSiteSecs: number;
    plotsInspectedForVipBadge: number;
    scrollDepthForExitIntentTrigger: number;
  };
  analyticsEventNames: {
    heroCtaClick: string;
    masterplanPlotSelect: string;
    masterplanCategoryFilter: string;
    masterplanZoomPan: string;
    amenityHotspotClick: string;
    brochureDownload: string;
    vipWhatsAppInitiated: string;
    siteVisitScheduled: string;
    priceSheetRequested: string;
    exitIntentModalShown: string;
  };
}

export const CRO_CONFIG: CROConfig = {
  whatsappConciergeNumber: "+919880052574",
  vipDeskEmail: "vip.residences@lakshenclave.com",
  hotlinePhone: "+91-80-6922-8000",
  defaultPlotInquiryTemplate: "Hello Laksh Enclave Concierge, I am interested in reserving Plot {plotNumber} ({areaSqFt} sq.ft, {facing} facing, {category}). Please share the master contract, payment milestones, and arrange an executive site inspection.",
  brochureDownloadPdfUrl: "/assets/downloads/Laksh_Enclave_Founding_Brochure.pdf",
  leadScoringThresholds: {
    hotLeadTimeOnSiteSecs: 90,
    plotsInspectedForVipBadge: 3,
    scrollDepthForExitIntentTrigger: 65
  },
  analyticsEventNames: {
    heroCtaClick: "hero_cta_click",
    masterplanPlotSelect: "masterplan_plot_select",
    masterplanCategoryFilter: "masterplan_category_filter",
    masterplanZoomPan: "masterplan_zoom_pan",
    amenityHotspotClick: "amenity_hotspot_click",
    brochureDownload: "brochure_download",
    vipWhatsAppInitiated: "vip_whatsapp_initiated",
    siteVisitScheduled: "site_visit_scheduled",
    priceSheetRequested: "price_sheet_requested",
    exitIntentModalShown: "exit_intent_modal_shown"
  }
};

// ============================================================================
// 7. MASTERPLAN HELPER & QUERY UTILITIES
// ============================================================================

export function getPlotById(id: number): MasterplanPlot | undefined {
  return MASTERPLAN_PLOTS.find(p => p.id === id);
}

export function getPlotByNumber(plotNumber: string): MasterplanPlot | undefined {
  return MASTERPLAN_PLOTS.find(p => p.plotNumber.toUpperCase() === plotNumber.toUpperCase());
}

export function getPlotsByCategory(category: PlotCategory): MasterplanPlot[] {
  return MASTERPLAN_PLOTS.filter(p => p.category === category);
}

export function getPlotsByFacing(facing: PlotFacing): MasterplanPlot[] {
  return MASTERPLAN_PLOTS.filter(p => p.facing === facing);
}

export function getPlotsByStatus(status: PlotStatus): MasterplanPlot[] {
  return MASTERPLAN_PLOTS.filter(p => p.status === status);
}

export function getAvailablePlotCount(): number {
  return MASTERPLAN_PLOTS.filter(p => p.status === 'Available' || p.status === 'Founding Reserve').length;
}

export function getPriceRangeSummary(): { minPrice: number; maxPrice: number; formattedRange: string } {
  const prices = MASTERPLAN_PLOTS.map(p => p.totalPrice);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const minInLakhs = (minPrice / 100000).toFixed(2);
  const maxInCrores = (maxPrice / 10000000).toFixed(2);
  return {
    minPrice,
    maxPrice,
    formattedRange: `₹${minInLakhs} L – ₹${maxInCrores} Cr`
  };
}

export function generateWhatsAppPlotLink(plot: MasterplanPlot): string {
  const message = CRO_CONFIG.defaultPlotInquiryTemplate
    .replace("{plotNumber}", plot.plotNumber)
    .replace("{areaSqFt}", plot.areaSqFt.toLocaleString('en-IN'))
    .replace("{facing}", plot.facing)
    .replace("{category}", plot.category);
    
  return `https://wa.me/${CRO_CONFIG.whatsappConciergeNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
}
