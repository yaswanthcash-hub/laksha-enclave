/**
 * ============================================================================
 * LAKSH ENCLAVE · AUTHENTIC LUXURY WEBSITE COPY SYSTEM (`websiteCopy.ts`)
 * ============================================================================
 * 
 * Tone: Warm, human, evocative, serene, transparent, and high-converting.
 * Inspired by: Assetz City of Palms & Total Environment.
 * Completely free of robotic jargon (no "sovereign ground", "arbitrage hegemony", etc.)
 * 
 * Designed for light luxury aesthetic (warm alabaster, soft terracotta, emerald green, warm beige).
 */

export interface AmenityCopyItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: "Wellness & Leisure" | "Sports & Fitness" | "Community & Family" | "Nature & Outdoors";
  description: string;
  highlights: string[];
  image: string;
  badge: string;
}

export interface PlotConfigCopyItem {
  id: string;
  name: string;
  sizeSqFt: number;
  dimensions: string;
  startingPrice: string;
  pricePerSqFt: string;
  idealFor: string;
  builtUpArea: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface VillaConceptCopyItem {
  id: string;
  unitCode?: string;
  name: string;
  tagline: string;
  bedrooms: number;
  bathrooms: number;
  builtUpAreaSqFt: number;
  recommendedPlot: string;
  description: string;
  architecturalHighlights: string[];
  image: string;
  cadPlanImage?: string;
}

export interface LocationPointCopyItem {
  name: string;
  category: "Connectivity" | "Tech Hubs" | "Education" | "Healthcare" | "Industry & Retail";
  distance: string;
  driveTime: string;
  description: string;
  iconName: string;
}

export interface FaqCopyItem {
  question: string;
  answer: string;
  category: string;
}

export interface InfrastructureCopyItem {
  id: string;
  category: "Road Hierarchy" | "Underground Utilities" | "Water & Drainage" | "Sanitation & Environment" | "Security & Safety";
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  badge: string;
  iconName: string;
}

export interface BankApprovalCopyItem {
  id: string;
  bankName: string;
  shortName: string;
  loanPercentage: string;
  maxTenure: string;
  approvalType: string;
  badge: string;
  highlights: string[];
}

export interface SizingMatrixCopyItem {
  id: string;
  dimensions: string;
  sizeSqFt: number;
  title: string;
  category: string;
  roadWidth: string;
  startingPrice: string;
  pricePerSqFt: string;
  builtUpArea: string;
  idealFor: string;
  badge: string;
  highlights: string[];
}

// ----------------------------------------------------------------------------
// 1. BRAND & METADATA
// ----------------------------------------------------------------------------
export const BRAND_COPY = {
  name: "Laksh Enclave",
  tagline: "Where Peaceful Living Meets Seamless Connectivity",
  subTagline: "150 Premium Villa Plots in Greater Whitefield, Bangalore East",
  address: "Kondarahalli, on Bengaluru–Chennai Expressway (NE7), Hoskote–Malur Road, Bangalore East / Greater Whitefield, Karnataka 563130",
  googleMapsUrl: "https://maps.app.goo.gl/uGzfD6JXXC4TmfgD7?g_st=awb",
  phoneDisplay: "+91 98800 52574",
  phoneRaw: "+919880052574",
  whatsappUrl: "https://wa.me/919880052574?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Laksh%20Enclave%20villa%20plots.",
  email: "connect@lakshenclave.com",
  seo: {
    title: "Laksh Enclave | Premium Villa Plots on Bengaluru-Chennai Expressway (NE7)",
    description: "Discover Laksh Enclave: A tranquil gated community of 150 luxury villa plots at Kondarahalli on the Bengaluru-Chennai Expressway (NE7), 25 mins from Whitefield. Clear titles, 100% Vaastu, brick clubhouse, and 800+ royal palms.",
    keywords: [
      "Laksh Enclave",
      "Villa plots Bangalore Chennai Expressway",
      "Plots in Hoskote Malur Road",
      "Villa plots near Whitefield",
      "Gated community villa plots Bangalore East",
      "Kondarahalli plots",
      "Clear title villa plots Bangalore",
      "Assetz City of Palms alternative"
    ]
  }
};

// ----------------------------------------------------------------------------
// 2. HERO SECTION COPY
// ----------------------------------------------------------------------------
export const HERO_COPY = {
  badge: "Bengaluru–Chennai Expressway (NE7) • Greater Whitefield",
  titleMain: "Where Peaceful Living Meets",
  titleAccent: "Seamless Connectivity.",
  subtitle: "A Benchmark Plotted Sanctuary of 150 Luxury Villa Plots",
  description: "Experience the pinnacle of plotted living across 25 masterplanned acres. Wake up to fresh morning air and 800+ royal palms, with 50ft & 40ft wide boulevards, 100% underground cabling, and direct Bengaluru–Chennai Expressway frontage, just 25 minutes from Whitefield.",
  stats: [
    { value: "150", label: "Luxury Villa Plots", subtext: "1,200 to 4,000+ sq.ft" },
    { value: "Price on Request", label: "Founding Allocation", subtext: "Up to 80% Bank Loan Approved" },
    { value: "50 & 40 Ft", label: "Wide Boulevards", subtext: "100% Underground Cables" },
    { value: "25 Mins", label: "To Whitefield", subtext: "Direct NE7 Expressway" }
  ],
  ctaPrimary: "Schedule a Free Site Visit",
  ctaSecondary: "Download Project Brochure",
  ctaMasterplan: "Explore Plot Masterplan",
  whatsappButton: "Chat on WhatsApp",
  trustPill: "100% Vaastu Compliant • Clear Freehold Titles • Pre-Approved by SBI, HDFC, ICICI & Axis Bank"
};

// ----------------------------------------------------------------------------
// 3. ABOUT & PHILOSOPHY (WHY LAKSH ENCLAVE?)
// ----------------------------------------------------------------------------
export const ABOUT_COPY = {
  eyebrow: "The Benchmark in Plotted Living",
  headline: "Wake Up to Fresh Air, Open Skies, and 800+ Palms",
  leadParagraph: "Plotted living at Laksh Enclave represents the pinnacle of residential freedom. Set across 25 masterplanned acres on the 10-lane Bengaluru–Chennai Expressway, this is an exclusive plotted enclave designed for just 150 families who refuse to compromise between space, nature, and rapid city access.",
  secondParagraph: "Benchmarked against South India's finest plotted developments, Laksh Enclave combines a monumental 50ft Grand Entrance Royal Palm Boulevard, 40ft tree-lined residential streets, 100% concealed underground utilities, and an authentic 18,500 sq.ft brick clubhouse. Here, children cycle safely along paved sidewalks, elders stroll peaceful garden avenues, and you have complete freedom to construct your bespoke luxury villa.",
  thirdParagraph: "With individual clear freehold titles, 100% Vaastu-compliant geometry, project loan approvals from SBI, HDFC, ICICI, and Axis Bank, and world-class underground civil infrastructure, Laksh Enclave delivers institutional trust and timeless appreciation.",
  pillars: [
    {
      title: "The Freedom of Land",
      subtitle: "100% Freehold Villa Plots",
      description: "Own the ground beneath your feet. Build at your own pace from 1,200 to 4,000+ sq.ft with 100% Vaastu compliance, private gardens, and zero shared high-rise walls.",
      icon: "Home"
    },
    {
      title: "50ft & 40ft Grand Boulevards",
      subtitle: "100% Underground Utilities",
      description: "50ft main arterial palm boulevard and 40ft internal streets with paved sidewalks, saucer drainage, and 100% concealed power, water, and optical fiber lines.",
      icon: "Trees"
    },
    {
      title: "The Manor Clubhouse (18,500 Sq.Ft)",
      subtitle: "365 Days of Resort Living",
      description: "An 18,500 sq.ft 2-storey exposed brick clubhouse featuring a panoramic glass fitness center, resort swimming pool, banquet hall, and championship sports arena.",
      icon: "Building"
    },
    {
      title: "Strategic Expressway Advantage",
      subtitle: "Direct NE7 Access · 25 Mins to Whitefield",
      description: "Direct frontage on the 10-lane Bengaluru–Chennai Expressway (NE7) at Kondarahalli / BCE Hedaginabele Toll Plaza: 25 mins to Whitefield, 18 mins to STRR, 35 mins to Airport.",
      icon: "Compass"
    }
  ],
  quote: {
    text: "The greatest luxury today is not more square feet in an apartment tower; it is open skies, fresh air, and your own piece of land where your family can flourish.",
    author: "Laksh Enclave Community Vision"
  }
};

// ----------------------------------------------------------------------------
// 4. MASTERPLAN & PLOT CONFIGURATIONS
// ----------------------------------------------------------------------------
export const MASTERPLAN_COPY = {
  eyebrow: "Transparent Layout & Sizing Matrix",
  headline: "Find the Perfect Plot for Your Dream Home",
  subtitle: "Carefully planned with wide 50ft & 40ft palm boulevards, 100% Vaastu compliance, and underground utilities ready for immediate construction.",
  configurations: [
    {
      id: "garden-plot",
      name: "Starter Luxury Villa Plot",
      sizeSqFt: 1200,
      dimensions: "30' × 40'",
      startingPrice: "Price on Request",
      pricePerSqFt: "Price on Request",
      idealFor: "3 BHK Contemporary Garden Villa with Private Terrace",
      builtUpArea: "Up to 2,200 sq.ft across G+2 floors",
      description: "An intelligently engineered footprint designed for young families and forward-thinking investors. Offers ample space for a stylish 3 BHK villa with private parking, garden setbacks, and quick access to community amenities.",
      features: [
        "100% Vaastu Compliant Layout",
        "Frontage onto 40ft Tree-Lined Residential Street",
        "Concealed Water, Power & Optical Fiber at Plot Boundary",
        "Clear Freehold Title · Pre-Approved by SBI, HDFC, ICICI, Axis Bank"
      ],
      badge: "Starter Luxury"
    },
    {
      id: "classic-plot",
      name: "Premium Family Villa Plot",
      sizeSqFt: 1500,
      dimensions: "30' × 50'",
      startingPrice: "Price on Request",
      pricePerSqFt: "Price on Request",
      idealFor: "3 & 4 BHK Luxury Family Villa with Courtyard",
      builtUpArea: "Up to 2,800 sq.ft across G+2 floors",
      description: "Our most versatile and popular size, offering generous setbacks. Perfectly accommodates an internal sunlit courtyard, ground-floor bedroom for elders, private terrace garden, and spacious landscaped grounds.",
      features: [
        "Auspicious East & North Facing Options",
        "Walking Distance to The Manor Clubhouse & Resort Pool",
        "100% Underground Cabling & Pressurized Water Supply",
        "Wide 40ft Curbed Street Access with Paved Sidewalk"
      ],
      badge: "Most Popular Family Size"
    },
    {
      id: "estate-plot",
      name: "Grand Executive Villa Plot",
      sizeSqFt: 2400,
      dimensions: "40' × 60'",
      startingPrice: "Price on Request",
      pricePerSqFt: "Price on Request",
      idealFor: "4 & 5 BHK Grand Luxury Manor with Private Lawns",
      builtUpArea: "Up to 4,200 sq.ft across G+2 floors",
      description: "An expansive plot for spacious luxury living. Accommodates two-car covered portico, expansive wrap-around private gardens, swimming plunge pool, double-height living salons, and entertainment suites.",
      features: [
        "Direct Frontage on 50ft Grand Royal Palm Boulevard",
        "Space for Private Swimming Plunge Pool & Manicured Lawns",
        "Double-Height Living Spaces & 2-Car Covered Portico",
        "Pre-Approved for up to 80% Bank Financing"
      ],
      badge: "Grand Executive"
    },
    {
      id: "corner-plot",
      name: "Palatial Estate Villa Plot",
      sizeSqFt: 4000,
      dimensions: "50' × 80' / Corner",
      startingPrice: "Price on Request",
      pricePerSqFt: "Price on Request",
      idealFor: "Bespoke Palatial Manor with Expansive Private Lawns",
      builtUpArea: "Up to 6,500 sq.ft across G+2 floors",
      description: "The crown jewels of the masterplan. Premium corner plots with dual-road frontages, providing unmatched cross-ventilation, abundant natural sunlight, central park vistas, and complete privacy.",
      features: [
        "Dual Road Frontage (50ft Palm Boulevard & 40ft Cross Street)",
        "Unobstructed Central Park & Sunburst Gazebo Views",
        "Maximum Natural Light, Airflow & Complete Privacy",
        "Strictly Limited Inventory for Signature Residences"
      ],
      badge: "Palatial Signature Collection"
    }
  ],
  filterLabels: {
    all: "All 150 Plots",
    size1200: "1,200 sq.ft (30x40)",
    size1500: "1,500 sq.ft (30x50)",
    size2400: "2,400 sq.ft (40x60)",
    size4000: "4,000+ sq.ft (Corners)",
    eastFacing: "East Facing (Sunrise)",
    northFacing: "North Facing (Prosperity)",
    parkFacing: "Park & Clubhouse Facing"
  },
  statusLegend: {
    available: { label: "Available", desc: "Ready for immediate booking" },
    inBooking: { label: "Booking in Progress", desc: "Under reservation paperwork" },
    sold: { label: "Reserved", desc: "Allocated to founding family" }
  },
  ctaCheckAvailability: "Check Plot Availability & Pricing",
  ctaDownloadLayout: "Download Masterplan Layout (PDF)"
};

// ----------------------------------------------------------------------------
// 5. THE CLUBHOUSE & 8 SIGNATURE AMENITIES
// ----------------------------------------------------------------------------
export const AMENITIES_COPY = {
  eyebrow: "Life at Laksh Enclave",
  headline: "Every Day Feels Like a Weekend Retreat",
  subtitle: "A resort-inspired lifestyle where morning workouts, afternoon swims, and evening tea with neighbors come together effortlessly.",
  clubhouseStory: {
    title: "The Manor Clubhouse (18,500 Sq.Ft) & Colonial Veranda",
    subtitle: "The Warm, Beating Heart of the Enclave",
    description: "Designed with timeless exposed red brick, traditional Mangalore clay tiles, and deep shaded verandas, our 18,500 sq.ft Manor Clubhouse is built to bring people together. Sip your morning filter coffee overlooking the gardens, work out in the sunlit glass gym, or host unforgettable family birthday celebrations in the banquet hall.",
    amenitiesList: [
      "Upper-Floor Panoramic Glass Gym",
      "Spacious Banquet & Multipurpose Hall",
      "Colonial Veranda & Covered Porches",
      "Indoor Games Lounge (Table Tennis, Billiards, Carrom)",
      "Quiet Library & Co-Working Reading Corner"
    ]
  },
  items: [
    {
      id: "clubhouse",
      number: "01",
      name: "The Manor Brick Clubhouse (18,500 Sq.Ft)",
      tagline: "Warm Red Brick Architecture & Colonial Verandas",
      category: "Community & Family",
      badge: "Community Hub",
      description: "An authentic architectural centerpiece crafted with hand-selected exposed red brick and classic clay tiles. Features an upper-level fully glazed gym overlooking the pool, a celebration banquet hall, indoor games, and shaded verandas.",
      highlights: [
        "18,500 sq.ft two-storey exposed brick clubhouse with colonial arches",
        "Upper-floor fitness center with panoramic glass walls overlooking the pool",
        "Multipurpose community banquet hall with party pantry",
        "Shaded colonial verandas for quiet reading and evening tea"
      ],
      image: "/images/6061957682878419873.jpg"
    },
    {
      id: "pool",
      number: "02",
      name: "Resort Swimming Pool & Kids' Splash Pool",
      tagline: "Cool Off Under Open Blue Skies",
      category: "Wellness & Leisure",
      badge: "Resort Living",
      description: "A crystal-clear azure swimming pool designed for relaxed weekend laps, complete with a natural timber sun deck, poolside loungers, shaded cabanas, and a dedicated shallow splash pool for kids.",
      highlights: [
        "Spacious resort-style swimming pool with crystal filtration",
        "Dedicated safe children's splash pool with gentle depth",
        "Sun deck with comfortable poolside loungers and umbrellas",
        "Private shaded cabanas for peaceful family afternoons"
      ],
      image: "/images/6061957682878419877.jpg"
    },
    {
      id: "gazebo-park",
      number: "03",
      name: "Sunburst Radial Park & Central Gazebo",
      tagline: "The Peaceful Center of the Neighborhood",
      category: "Nature & Outdoors",
      badge: "Green Oasis",
      description: "A beautifully landscaped circular green park with flower-lined radial pathways. At its center stands an elegant gazebo pavilion, surrounded by stepped amphitheater lawns for evening get-togethers.",
      highlights: [
        "Landscaped radial walking paths with flowering shrubs",
        "Central ornamental gazebo for morning yoga or quiet chats",
        "Stepped amphitheater seating for community gatherings",
        "Lush green open lawns under the shade of mature trees"
      ],
      image: "/images/6061957682878419871.jpg"
    },
    {
      id: "sports-arena",
      number: "04",
      name: "Multi-Sport Championship Arena",
      tagline: "Energize Your Health with Every Game",
      category: "Sports & Fitness",
      badge: "Active Living",
      description: "A floodlit, multi-purpose outdoor sports compound with pro-cushioned surfaces for basketball, badminton, pickleball, and volleyball, keeping kids, parents, and friends active and energized.",
      highlights: [
        "Dedicated Basketball half-court with regulation hoops",
        "All-weather Badminton & Pickleball play area",
        "Volleyball court with non-abrasive shock-absorbing turf",
        "Bright LED floodlighting for enjoyable evening matches"
      ],
      image: "/images/6061957682878419869.jpg"
    },
    {
      id: "kids-playground",
      number: "05",
      name: "Children's Adventure Playground",
      tagline: "Nature-Inspired Outdoors for Happy Childhoods",
      category: "Community & Family",
      badge: "Kids' Paradise",
      description: "A safe, joyous play environment crafted from natural timber and eco-friendly materials. Features climbing nets, wooden rope bridge, swings, slides, and sand mounds where children can explore freely.",
      highlights: [
        "Timber adventure play equipment and rope bridge walk",
        "Safe swings, slides, and sensory sand play pits",
        "Soft-fall protective flooring and child-safe perimeter hedges",
        "Comfortable shaded benches for parents and grandparents"
      ],
      image: "/images/6061957682878419866.jpg"
    },
    {
      id: "skate-arena",
      number: "06",
      name: "Youth Skate Arena & Roller Park",
      tagline: "Dynamic Outdoor Thrills for Energetic Kids",
      category: "Sports & Fitness",
      badge: "Youth Zone",
      description: "A smooth, custom-poured concrete skate plaza and roller track designed for skateboarding, rollerblading, and scooters, giving teenagers and active kids their own dedicated recreational haven.",
      highlights: [
        "Precision-smoothed concrete ramps and gentle curves",
        "Safe perimeter handrails and viewing boundary",
        "Dedicated space away from pedestrian walking tracks",
        "Encourages active outdoor fitness and balance skills"
      ],
      image: "/images/6061957682878419870.jpg"
    },
    {
      id: "palm-boulevard",
      number: "07",
      name: "50ft Royal Palm Boulevard & 40ft Internal Streets",
      tagline: "A Grand Homecoming Every Single Day",
      category: "Nature & Outdoors",
      badge: "Iconic Landscape",
      description: "Extra-wide 50-foot main entrance boulevard and 40-foot cross avenues, lined on both sides with towering royal palms, vintage street lamps, blacktop asphalt roads, and 100% concealed underground utilities.",
      highlights: [
        "Grand 50ft main entrance boulevard (arterial spine) and 40ft wide residential streets",
        "Lined with over 800 graceful royal palms and flowering shade trees",
        "Continuous paved pedestrian sidewalks and concrete kerb edging",
        "100% underground power, water, and fiber cables with zero overhead hanging wires"
      ],
      image: "/images/6061957682878419874.jpg"
    },
    {
      id: "entrance-gate",
      number: "08",
      name: "Monumental Entrance Gate & 24/7 Security",
      tagline: "Warm Welcome, Complete Peace of Mind",
      category: "Community & Family",
      badge: "Safe Sanctuary",
      description: "A stately double-portal architectural entry gate with manned security cabins, automated boom barriers, CCTV surveillance, and a dedicated visitor bay ensuring your family's continuous safety.",
      highlights: [
        "Impressive double-arch entry and exit portal with security cabins",
        "Round-the-clock trained security personnel, boom barriers, and RFID access",
        "Comprehensive HD CCTV surveillance along all perimeter walls",
        "Dedicated visitor registration bay for smooth guest arrival"
      ],
      image: "/images/6061957682878419879.jpg"
    }
  ]
};

// ----------------------------------------------------------------------------
// 6. LOCATION & CONNECTIVITY
// ----------------------------------------------------------------------------
export const LOCATION_COPY = {
  eyebrow: "Strategic Location Advantage • Bangalore East",
  headline: "Where Peaceful Living Meets Seamless Connectivity",
  subtitle: "Direct frontage on the 10-lane Bengaluru–Chennai Expressway (NE7) at Kondarahalli / BCE Hedaginabele Toll Plaza: 25 minutes to Whitefield, 18 minutes to STRR, and 35 minutes to the International Airport.",
  leadStory: "Location is about how easily you move between your sanctuary and your work. At Laksh Enclave, you don't face narrow rural roads or frustrating daily bottlenecks; you step right onto India's world-class 10-lane expressway.",
  expresswayPillars: [
    {
      title: "Direct Access to NE7 Expressway",
      time: "0 Mins",
      description: "The enclave directly abuts the 10-lane Bengaluru–Chennai Expressway right at Kondarahalli, adjacent to BCE Hedaginabele Toll Plaza, ensuring instantaneous entry and exit with zero traffic friction."
    },
    {
      title: "25 Mins to Whitefield Tech Hub",
      time: "25 Mins",
      description: "Drive smoothly to ITPL, Hope Farm, EPIP Zone, and leading IT corridors via the signal-free expressway corridor without having to navigate congested inner-city crossroads."
    },
    {
      title: "18 Mins to STRR (NH-648)",
      time: "18 Mins",
      description: "Fast 12 km drive to the Satellite Town Ring Road (STRR / NH-648) interchange at Hoskote, seamlessly connecting to North Bangalore, Devanahalli, and Sarjapur."
    },
    {
      title: "8-10 Mins to Welspun & ITC Malur",
      time: "8-10 Mins",
      description: "Immediate proximity to Welspun Mega Logistics Park (5 km / 8 mins) and ITC ICML Malur Campus (6.5 km / 10 mins), south India's leading industrial and employment hubs."
    },
    {
      title: "35 Mins to International Airport (BLR)",
      time: "35 Mins",
      description: "Quick, signal-free transit to Kempegowda International Airport via the STRR expressway corridor without entering city traffic bottlenecks."
    }
  ],
  landmarksTable: [
    {
      name: "Bengaluru–Chennai Expressway (NE7)",
      distance: "0.0 km",
      time: "0 Mins",
      category: "Connectivity",
      detail: "Direct frontage on India's premier 10-lane access-controlled expressway at Kondarahalli."
    },
    {
      name: "BCE Hedaginabele Toll Plaza",
      distance: "1.5 km",
      time: "2 Mins",
      category: "Connectivity",
      detail: "Immediate expressway entry and exit interchange loop."
    },
    {
      name: "Kondarahalli Village & Civic Hub",
      distance: "0.5 km",
      time: "1 Min",
      category: "Connectivity",
      detail: "Immediate local civic amenities, fresh farm produce, and tranquil neighborhood surrounds."
    },
    {
      name: "Welspun Mega Logistics & Industrial Park",
      distance: "5.0 km",
      time: "8 Mins",
      category: "Industry & Retail",
      detail: "Grade-A mega warehousing and logistics hub attracting Fortune 500 corporate operators."
    },
    {
      name: "ITC ICML Mega Plant, Malur",
      distance: "6.5 km",
      time: "10 Mins",
      category: "Industry & Retail",
      detail: "One of South India's largest and most technologically advanced consumer goods manufacturing campuses."
    },
    {
      name: "Malur Town & Railway Station",
      distance: "6.0 km",
      time: "8 Mins",
      category: "Connectivity",
      detail: "Daily shopping, markets, banks, healthcare, and suburban rail connection to Bangalore Cantt."
    },
    {
      name: "Hoskote Junction & STRR (NH-648)",
      distance: "12.0 km",
      time: "18 Mins",
      category: "Connectivity",
      detail: "6-lane Satellite Town Ring Road interchange connecting directly to Airport and Devanahalli."
    },
    {
      name: "Whitefield IT Hub (ITPL / EPIP / Hope Farm)",
      distance: "22.0 km",
      time: "25 Mins",
      category: "Tech Hubs",
      detail: "Major tech parks (Microsoft, SAP, Google, Mercedes-Benz R&D) via signal-free corridor."
    },
    {
      name: "Delhi Public School & Chrysalis High",
      distance: "14.0 km",
      time: "15 Mins",
      category: "Education",
      detail: "Top-ranked CBSE & ICSE schools for your children's future."
    },
    {
      name: "Manipal Hospital & Vydehi Super Specialty",
      distance: "24.0 km",
      time: "26 Mins",
      category: "Healthcare",
      detail: "Leading multi-specialty quaternary care hospitals."
    },
    {
      name: "Kempegowda International Airport (BLR)",
      distance: "38.0 km",
      time: "35 Mins",
      category: "Connectivity",
      detail: "High-speed transit via STRR expressway bypass without entering city jams."
    }
  ]
};

// ----------------------------------------------------------------------------
// 8. FAQS & TRUST FACTORS
// ----------------------------------------------------------------------------
export const FAQS_COPY: FaqCopyItem[] = [
  {
    category: "Legality & Approvals",
    question: "Is the land freehold with clear, unencumbered titles?",
    answer: "Yes, 100%. Every plot in Laksh Enclave comes with clear, unencumbered freehold title and individual deed registration. All legal paperwork, mother deeds, and title opinions from top legal panels are completely transparent and available for your legal advisor's verification prior to booking."
  },
  {
    category: "Home Loans & Financing",
    question: "Are home and plot loans available from major banks?",
    answer: "Yes. Laksh Enclave has been pre-approved by India's leading financial institutions: State Bank of India (SBI), HDFC Bank, ICICI Bank, and Axis Bank. You can secure up to 80% financing covering both plot acquisition and villa construction, supported by dedicated on-site loan officers."
  },
  {
    category: "Vastu & Layout",
    question: "Are all the plots Vaastu compliant?",
    answer: "Yes, every single plot in Laksh Enclave has been carefully surveyed and aligned with authentic Vaastu principles. Both East-facing (sunrise energy) and North-facing (prosperity energy) plots are available across all size categories: 30x40, 30x50, 40x60, and 50x80 corners."
  },
  {
    category: "Infrastructure & Utilities",
    question: "What physical infrastructure is provided inside the gated enclave?",
    answer: "The project comes with complete plug-and-play ready infrastructure: 50ft wide Grand Entrance Royal Palm Boulevard (main arterial spine) and 40ft wide internal tree-lined streets with paved sidewalks, 100% concealed underground electricity cabling (zero overhead wires), dedicated water connections to each plot, underground stormwater drainage, sewage treatment plant (STP), and rainwater harvesting."
  },
  {
    category: "Villa Construction Freedom",
    question: "Can I design and build my own villa, or do I have to use your designs?",
    answer: "You have complete freedom. You can hire your own architect and contractor to construct your bespoke dream home at your own pace whenever you wish, adhering to basic community aesthetic guidelines. Alternatively, you can opt for developer-assisted construction advisory."
  },
  {
    category: "Location & Commute Times",
    question: "How long does it take to commute to Whitefield and the International Airport?",
    answer: "With direct frontage on the 10-lane Bengaluru–Chennai Expressway (NE7) at Kondarahalli / BCE Hedaginabele Toll Plaza, Whitefield is just 25 minutes away via a signal-free corridor. Hoskote Junction & STRR (NH-648) is 18 minutes away, and Kempegowda International Airport is reachable in 35 minutes via the STRR bypass."
  },
  {
    category: "Site Visits & Assistance",
    question: "How can I visit Laksh Enclave in person?",
    answer: "We welcome you and your family for a complimentary guided site tour any day between 9:00 AM and 6:00 PM. We can even arrange complimentary chauffeur-driven pickup and drop-off from Whitefield, Hoskote, or Central Bangalore so you can experience the scenic drive and fresh countryside air firsthand."
  }
];

// ----------------------------------------------------------------------------
// 9. LEAD MODAL & CONVERSION FUNNEL
// ----------------------------------------------------------------------------
export const LEAD_MODAL_COPY = {
  header: "Experience Laksh Enclave",
  title: "Schedule Your Free Site Visit",
  subtitle: "Take a relaxed walk through the palm avenues, visit the clubhouse, and select your preferred plot in person.",
  plotPreselectPrefix: "You are inquiring about",
  villaPreselectPrefix: "Requesting floor plans for",
  form: {
    nameLabel: "Your Full Name",
    namePlaceholder: "e.g. Anand Sharma",
    phoneLabel: "Phone Number (WhatsApp)",
    phonePlaceholder: "+91 98765 43210",
    emailLabel: "Email Address",
    emailPlaceholder: "anand.sharma@example.com",
    plotPreferenceLabel: "Preferred Plot Size",
    plotOptions: [
      { id: "1200", label: "1,200 sq.ft (30' × 40') · Starter Villa Plot" },
      { id: "1500", label: "1,500 sq.ft (30' × 50') · Executive Villa Plot" },
      { id: "2400", label: "2,400 sq.ft (40' × 60') · Premium Villa Plot" },
      { id: "4000", label: "4,000+ sq.ft · Royal Estate & Corner Plots" },
      { id: "general", label: "General Inquiry / Need Guidance" }
    ],
    visitPreferenceLabel: "When Would You Like to Visit?",
    visitOptions: [
      { id: "weekend", label: "This Upcoming Weekend (Sat / Sun)" },
      { id: "weekday", label: "During the Week (Mon – Fri)" },
      { id: "cab", label: "Request Free Cab Pick-up from Whitefield" },
      { id: "virtual", label: "Schedule a Virtual Video Call First" }
    ],
    submitButton: "Confirm Free Site Visit",
    submitting: "Submitting Your Request...",
    privacyAssurance: "We respect your privacy. No spam, no high-pressure calls: only helpful, friendly assistance."
  },
  success: {
    title: "Thank You! We Look Forward to Welcoming You.",
    message: "Our senior relationship manager will call you within 2 business hours to confirm your convenient timing and send the location pin directly to your WhatsApp.",
    whatsappPrompt: "Want immediate assistance?",
    whatsappCta: "Chat with Us on WhatsApp Now",
    closeButton: "Close Window"
  }
};

// ----------------------------------------------------------------------------
// 10. CTAS AND CALLOUTS THROUGHOUT
// ----------------------------------------------------------------------------
export const CTA_COPY = {
  brochureDownload: {
    title: "Download the Official Laksh Enclave Brochure",
    subtitle: "Get complete floor plans, plot layouts, pricing sheets, and high-resolution clubhouse renders in one comprehensive PDF.",
    button: "Download Project Brochure (PDF)"
  },
  siteVisitBanner: {
    title: "Visit Us This Weekend · Feel the Fresh Countryside Air",
    subtitle: "Just 25 scenic minutes from Whitefield. Walk the palm boulevards, tour the brick clubhouse, and pick your favorite plot.",
    button: "Book Free Site Tour",
    whatsappButton: "Chat on WhatsApp"
  },
  pricingBanner: {
    title: "Exclusive Founding Allocation Now Open",
    subtitle: "Clear-title villa plots with bank loan pre-approvals and immediate registration. Founding phase plots now open.",
    button: "Request Complete Pricing Sheet"
  }
};

// ----------------------------------------------------------------------------
// 11. STRUCTURED INFRASTRUCTURE SPECIFICATIONS
// ----------------------------------------------------------------------------
export const INFRASTRUCTURE_COPY = {
  eyebrow: "Engineered Plotted Infrastructure",
  headline: "50ft Boulevards, 100% Underground Utilities & Plug-and-Play Readiness",
  subtitle: "Designed to premier institutional plotted development benchmarks, completely free of overhead wires, with 50ft & 40ft asphalt roads, dedicated water connections, and centralized eco-systems.",
  roadHierarchy: {
    mainBoulevard: {
      width: "50 Feet",
      name: "Grand Entrance Royal Palm Boulevard",
      surface: "Heavy-Duty All-Weather Bituminous Asphalt with Precast Concrete Kerbs",
      description: "The commanding central arterial spine of Laksh Enclave, welcoming residents through the monumental double-portal gate with towering royal palms and vintage street illumination.",
      specs: [
        "50ft wide dual-carriage corridor for unobstructed two-way vehicular flow",
        "Flanked on both flanks by 800+ mature royal palm trees and landscaped bioswales",
        "Dedicated paved pedestrian walkways segregated from vehicular circulation",
        "Concealed underground utility ducts beneath walkway verge for zero road cutting"
      ]
    },
    internalStreets: {
      width: "40 Feet",
      name: "Tree-Lined Residential Streets",
      surface: "Asphalt Blacktop with Interlocking Paver Borders & Integrated Drain Gutters",
      description: "Generously proportioned 40ft internal residential avenues connecting every individual plot with wide turning radiuses, speed-calming design, and shaded verges.",
      specs: [
        "40ft wide internal street network ensuring effortless villa driveway access",
        "Tree-lined borders with flowering shade species and vintage cast-iron lampposts",
        "Integrated saucer drains connected directly to underground RCC storm networks",
        "Individual plot utility feeder chambers at every plot threshold"
      ]
    },
    pedestrianWalkways: {
      width: "Paved Pedestrian Walkways",
      name: "Continuous Paved Walkways & Jogging Loops",
      surface: "Heavy-Duty Interlocking Concrete Paver Tiles with Tactile Edging",
      description: "Safe, barrier-free continuous walking tracks connecting homes to The Manor Clubhouse, Sunburst Gazebo, and sports arenas.",
      specs: [
        "Continuous non-slip paved surface safe for children bicycles and senior evening walks",
        "Tactile paving guides and gentle ramp transitions at street intersections",
        "Night illumination via warm LED bollards and tree uplighting"
      ]
    }
  },
  items: [
    {
      id: "road-hierarchy",
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
      iconName: "Route"
    },
    {
      id: "underground-utilities",
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
      iconName: "Zap"
    },
    {
      id: "water-drainage",
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
      iconName: "Droplets"
    },
    {
      id: "sanitation-eco",
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
      iconName: "Trees"
    },
    {
      id: "security-surveillance",
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
      iconName: "ShieldCheck"
    }
  ] as InfrastructureCopyItem[]
};

// ----------------------------------------------------------------------------
// 12. BANK APPROVALS & FINANCIAL TRUST
// ----------------------------------------------------------------------------
export const BANK_APPROVALS_COPY = {
  eyebrow: "Verified Legal & Financial Trust",
  headline: "Pre-Approved by India's Leading Banks",
  subtitle: "100% clear freehold titles with pre-approved project loans (up to 80% financing) and expedited doorstep sanctioning.",
  financingBanner: "Finance up to 80% of your plot purchase & villa construction with India's most trusted nationalized and private banking partners.",
  partners: [
    {
      id: "sbi",
      bankName: "State Bank of India",
      shortName: "SBI",
      loanPercentage: "Up to 80%",
      maxTenure: "30 Years",
      approvalType: "Project Approved (APF)",
      badge: "India's #1 Nationalized Bank",
      highlights: [
        "Lowest sovereign interest rates with zero hidden charges",
        "Composite plot purchase + villa construction loan facility",
        "Dedicated on-site SBI loan counselor for Laksh Enclave",
        "Transparent title verification pre-vetted by SBI legal panel"
      ]
    },
    {
      id: "hdfc",
      bankName: "HDFC Bank",
      shortName: "HDFC Bank",
      loanPercentage: "Up to 80%",
      maxTenure: "30 Years",
      approvalType: "Approved Project Financial (APF)",
      badge: "Premier Private Housing Lender",
      highlights: [
        "Express digital loan sanctioning within 48-72 hours",
        "Flexible step-up and structured EMI repayment options",
        "Pre-verified property legal documentation",
        "Special rates for corporate & salaried professionals"
      ]
    },
    {
      id: "icici",
      bankName: "ICICI Bank",
      shortName: "ICICI Bank",
      loanPercentage: "Up to 80%",
      maxTenure: "30 Years",
      approvalType: "Pre-Approved Project File",
      badge: "Leading Private Sector Bank",
      highlights: [
        "Instant pre-approved loan sanctions for existing ICICI customers",
        "Doorstep document pickup and dedicated relationship executive",
        "Attractive interest rate brackets linked to repo rate",
        "High loan amounts with flexible tenure up to 30 years"
      ]
    },
    {
      id: "axis",
      bankName: "Axis Bank",
      shortName: "Axis Bank",
      loanPercentage: "Up to 80%",
      maxTenure: "30 Years",
      approvalType: "Approved Project Status",
      badge: "Top Private Bank Partner",
      highlights: [
        "Competitive plot loan interest rates with zero prepayment penalties",
        "Quick sanction turnarounds and hassle-free processing",
        "Comprehensive financing covering plot acquisition & construction",
        "Exclusive banking privileges for Enclave homeowners"
      ]
    }
  ] as BankApprovalCopyItem[],
  trustChecklist: [
    "100% Freehold clear title ready for immediate individual registration",
    "Pre-approved project files (APF) with all 4 major banking institutions",
    "Single-window composite financing: Plot acquisition + Turnkey villa construction",
    "Doorstep banking assistance and complimentary legal opinion verification"
  ]
};

// ----------------------------------------------------------------------------
// 13. STANDARDIZED PLOT SIZING MATRIX
// ----------------------------------------------------------------------------
export const SIZING_MATRIX_COPY = {
  eyebrow: "Dimension Matrix & Specifications",
  headline: "Standardized Plot Sizing Matrix",
  subtitle: "From 1,200 sq.ft Starter Luxury plots to 4,000+ sq.ft Palatial Estates, engineered with 100% Vaastu compliance and wide boulevard frontages.",
  items: [
    {
      id: "matrix-30x40",
      dimensions: "30' × 40'",
      sizeSqFt: 1200,
      title: "Starter Luxury Villa Plot",
      category: "Starter Luxury",
      roadWidth: "40ft Wide Tree-Lined Residential Street",
      startingPrice: "Price on Request",
      pricePerSqFt: "Price on Request",
      builtUpArea: "Up to 2,200 sq.ft across G+2 floors",
      idealFor: "3 BHK Contemporary Garden Villa with Private Terrace",
      badge: "Starter Luxury",
      highlights: [
        "100% Vaastu compliant footprint with East & North facing options",
        "Frontage onto wide 40ft internal residential street with paved walkway",
        "Engineered for 3 BHK neoclassical duplex with private garden and portico",
        "Approved for up to 80% financing from SBI, HDFC, ICICI, and Axis Bank"
      ]
    },
    {
      id: "matrix-30x50",
      dimensions: "30' × 50'",
      sizeSqFt: 1500,
      title: "Premium Family Villa Plot",
      category: "Premium Family",
      roadWidth: "40ft Wide Tree-Lined Residential Street",
      startingPrice: "Price on Request",
      pricePerSqFt: "Price on Request",
      builtUpArea: "Up to 2,800 sq.ft across G+2 floors",
      idealFor: "3 & 4 BHK Family Villa with Landscaped Courtyard",
      badge: "Most Popular Family Size",
      highlights: [
        "Spacious proportions accommodating 3 & 4 BHK luxury residences",
        "Generous setbacks for private garden, courtyard, and covered car porch",
        "Walking distance to The Manor 18,500 sq.ft Clubhouse & Resort Pool",
        "Concealed underground utilities and dedicated water connection ready"
      ]
    },
    {
      id: "matrix-40x60",
      dimensions: "40' × 60'",
      sizeSqFt: 2400,
      title: "Grand Executive Villa Plot",
      category: "Grand Executive",
      roadWidth: "50ft Grand Royal Palm Boulevard or 40ft Avenue",
      startingPrice: "Price on Request",
      pricePerSqFt: "Price on Request",
      builtUpArea: "Up to 4,200 sq.ft across G+2 floors",
      idealFor: "4 & 5 BHK Grand Luxury Manor with Private Lawns",
      badge: "Grand Executive",
      highlights: [
        "Direct frontage options on the 50ft Grand Entrance Royal Palm Boulevard",
        "Generous 40-foot frontage permitting grand neoclassical portico and two-car bay",
        "Ample setback allowances for private swimming plunge pool and gazebo lawn",
        "Outstanding long-term appreciation potential along the NE7 expressway growth axis"
      ]
    },
    {
      id: "matrix-50x80",
      dimensions: "50' × 80' / Corner",
      sizeSqFt: 4000,
      title: "Palatial Estate Villa Plot",
      category: "Palatial Estate",
      roadWidth: "Dual Road Frontage (50ft Boulevard & 40ft Cross Street)",
      startingPrice: "Price on Request",
      pricePerSqFt: "Price on Request",
      builtUpArea: "Up to 6,500 sq.ft across G+2 floors",
      idealFor: "Bespoke Palatial Manor with Expansive Private Lawns",
      badge: "Palatial Signature Collection",
      highlights: [
        "Dual road frontage (50ft Grand Boulevard & 40ft Cross Avenue) for maximum prestige",
        "Unobstructed panoramic vistas overlooking Central Park and landscaped gardens",
        "Abundant 360-degree cross-ventilation, daylighting, and spatial independence",
        "Strictly limited founding allocation for elite signature residences"
      ]
    }
  ] as SizingMatrixCopyItem[]
};
