export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  image: string;
}

export interface StatisticItem {
  number: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

export interface TeamMember {
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  image?: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  snippet: string;
  fullText: string[];
  image: string;
  featured?: boolean;
}

export const STUDIO_DATA = {
  name: "Redefining Design Studio",
  shortName: "RDS",
  tagline: "Buildings shaped by climate, city, and the people who use them.",
  subtagline: "Architecture, interiors, landscape, vaastu, and green-building consultancy with statutory sanction approvals across Eastern India.",
  transparencyNote: "Projects shown were executed while working for real estate developers and premier design consultancies.",
  founder: {
    title: "Principal Architect",
    credentials: "B.Arch (NIT Calicut) · M.Arch (Urban Development)",
    registrations: "Registered with Council of Architecture (COA), KMC, BDA, CDA",
    experience: "Over 20 years of architectural leadership in India and the Gulf",
    languages: "English, Hindi, Odia, Bengali",
  },
  offices: [
    {
      city: "Kolkata",
      title: "Kolkata Studio",
      address: "Blob Studio, 5th Floor, Yamuna Building, 86, Golaghata Rd, Sreebhumi, Lake Town, Kolkata, West Bengal 700048",
      phone: "+91 98364 21375",
      email: "kolkata@redefiningarchitecture.com",
    },
    {
      city: "Bhubaneswar",
      title: "Bhubaneswar Studio",
      address: "Bhubaneswar, Odisha 751006",
      phone: "+91 98364 21375",
      email: "bhubaneswar@redefiningarchitecture.com",
    },
  ],
  generalEmail: "info@redefinedesignstudio.in",
  phone: "+91 98364 21375",
  socials: [
    { name: "Instagram", href: "https://www.instagram.com/redefinedesignstudio15/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sinu-rao-architectnit/" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61596319233680" },
  ],
};

export const STATISTICS: StatisticItem[] = [
  {
    number: 20,
    suffix: "+",
    label: "Years of Experience",
    sublabel: "Practice in India & the Gulf",
  },
  {
    number: 2,
    suffix: "",
    label: "Studio Cities",
    sublabel: "Kolkata & Bhubaneswar",
  },
  {
    number: 11,
    suffix: "",
    label: "Core Services",
    sublabel: "Concept to Commissioning",
  },
  {
    number: 20,
    suffix: "+ Lakh",
    label: "Sq. Ft. Designed",
    sublabel: "Summing up completed work",
  },
  {
    number: 100,
    suffix: "%",
    label: "Statutory Approval Track",
    sublabel: "KMC, NKDA, BMC, BDA, CDA",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "architecture",
    number: "01",
    title: "Architecture",
    shortDesc: "Concept to detailed drawings for residential, commercial, healthcare and hospitality projects.",
    fullDesc:
      "Comprehensive architectural design that merges site climatology, functional efficiency, and tectonic elegance. We oversee every stage from initial massing diagrams and structural coordination to working drawings and construction oversight.",
    deliverables: [
      "Conceptual massing and space planning",
      "Comprehensive working drawings (GFCs)",
      "Structural & facade coordination",
      "Statutory sanction documentation"
    ],
    image: "/images/hero/slide-1-duet.jpg"
  },
  {
    id: "interior-design",
    number: "02",
    title: "Interior Design",
    shortDesc: "Layouts, materials, joinery and bespoke lighting for homes, offices and hospitality suites.",
    fullDesc:
      "Interior spatial design with deep consideration of ergonomics, acoustics, lighting choreography, and material honesty. We tailor high-touch finishes for luxury residences, corporate boardrooms, and clubhouses.",
    deliverables: [
      "Custom millwork & joinery details",
      "Lighting choreography & electrical schedules",
      "Acoustic and material specifications",
      "Procurement & BOQ management"
    ],
    image: "/images/projects/luxury-interiors/cover.jpg"
  },
  {
    id: "landscape-design",
    number: "03",
    title: "Landscape Design",
    shortDesc: "Gardens, terraces and site landscaping planned organically with the building.",
    fullDesc:
      "Landscapes designed as living ecological buffers. We integrate indigenous plant species, porous pavements, bio-swales, and microclimate water features to naturally cool adjoining building facades.",
    deliverables: [
      "Site grading & microclimate planting plans",
      "Hardscape & water-feature detailing",
      "Irrigation & rainwater retention layouts",
      "Exterior lighting design"
    ],
    image: "/images/nature/nature-hero.jpg"
  },
  {
    id: "building-sanction",
    number: "04",
    title: "Building Sanction",
    shortDesc: "Sanction drawings and submissions for KMC, NKDA, BMC, BDA, and CDA.",
    fullDesc:
      "Navigating intricate statutory building bye-laws across West Bengal and Odisha. We prepare rigorous sanction drawings that balance regulatory compliance with optimal floor area ratio (FAR/FSI) utilization.",
    deliverables: [
      "Statutory municipal sanction drawings",
      "FAR, ground coverage, and setback optimizations",
      "Fire NOC and stair pressurization coordination",
      "Occupancy certificate (OC) liaising"
    ],
    image: "/images/all-images/img-1.jpg"
  },
  {
    id: "master-plan-approval",
    number: "05",
    title: "Master Plan Approval",
    shortDesc: "Master plans and layouts prepared and taken through approval, backed by an M.Arch in Urban Development.",
    fullDesc:
      "Large-scale township, industrial park, and institutional campus planning informed by urban economics and infrastructural resilience. Led by an architect holding a Master’s degree in Urban Development.",
    deliverables: [
      "Zoning, land-use allocation, and circulation grids",
      "Master plan statutory submissions",
      "Infrastructure utility networks (water, power, drainage)",
      "Traffic impact and mobility analysis"
    ],
    image: "/images/all-images/img-8.jpg"
  },
  {
    id: "green-building",
    number: "06",
    title: "IGBC Green Building",
    shortDesc: "Design guidance, energy simulation, and documentation for IGBC certification.",
    fullDesc:
      "Transforming sustainability from a marketing buzzword into measurable thermodynamic performance. We guide projects to achieve Silver, Gold, and Platinum certifications under the Indian Green Building Council (IGBC).",
    deliverables: [
      "Building energy performance modeling",
      "Daylight & solar heat gain coefficient (SHGC) analysis",
      "Water conservation & waste recycling strategies",
      "Full IGBC accreditation audit filings"
    ],
    image: "/images/all-images/img-28.jpg"
  },
  {
    id: "vaastu-consultation",
    number: "07",
    title: "Vaastu Consultation",
    shortDesc: "Vaastu-aligned planning that harmonizes energy flows with contemporary architectural briefs.",
    fullDesc:
      "Authentic integration of Vedic geometry and directional energies without compromising modern open-plan spatial ergonomics. We guide orientation, room placements, and circulation from day one.",
    deliverables: [
      "Cardinal orientation & grid analysis",
      "Energy flow & zoning harmonizations",
      "Structural element and water placement alignment",
      "Pre-construction plot energy assessments"
    ],
    image: "/images/all-images/img-7.jpg"
  },
  {
    id: "pcb-ec-clearances",
    number: "08",
    title: "PCB & EC Clearances",
    shortDesc: "Pollution Control Board consents and Environmental Clearance (EC) applications with supporting technical dossiers.",
    fullDesc:
      "Rigorous environmental clearance management for large-scale developments. We prepare technical documentation for Consent to Establish (CTE), Consent to Operate (CTO), and state environmental impact authorities.",
    deliverables: [
      "Environmental Management Plans (EMP)",
      "State Pollution Control Board filings",
      "Effluent treatment and air emission modeling",
      "Statutory expert committee hearings support"
    ],
    image: "/images/all-images/img-18.jpg"
  },
  {
    id: "dpr-feasibility",
    number: "09",
    title: "DPR & Feasibility Studies",
    shortDesc: "Detailed project reports and design feasibility studies covering scope, drawings, and financial estimates.",
    fullDesc:
      "Sound decision-making blueprints for real estate developers and institutional promoters. We assess site constraints, regulatory yield, phasing, CAPEX estimates, and construction schedules.",
    deliverables: [
      "Site suitability & regulatory yield audits",
      "Preliminary architectural concept drawings",
      "Cost estimations & bill of quantities (BOQ)",
      "Project execution timeline blueprints"
    ],
    image: "/images/all-images/img-8.jpg"
  },
  {
    id: "design-management",
    number: "10",
    title: "Design Management",
    shortDesc: "MEPF coordination, BOQs, material specifications, and consultant input kept consistent with design intent.",
    fullDesc:
      "Bridging the critical gap between concept design and technical execution. We align structural, electrical, plumbing, HVAC, and fire-fighting systems into a clash-free BIM environment.",
    deliverables: [
      "Comprehensive multi-consultant clash resolution",
      "Precision material specifications & schedules",
      "Detailed bills of quantities (BOQs)",
      "Tender document preparation & evaluation"
    ],
    image: "/images/all-images/img-26.jpg"
  },
  {
    id: "pmc",
    number: "11",
    title: "Project Management Consultancy (PMC)",
    shortDesc: "Coordination of consultants and contractors, cost and schedule monitoring, and site quality control.",
    fullDesc:
      "On-site stewardship ensuring what is drawn is built to the highest caliber. We monitor milestones, verify contractor bills, supervise pour-by-pour quality checks, and maintain safety standards.",
    deliverables: [
      "Milestone-based project scheduling (PERT/CPM)",
      "Continuous site quality inspection & testing",
      "Contractor certification & payment verification",
      "Snag lists & final handover commissioning"
    ],
    image: "/images/all-images/img-7.jpg"
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-01",
    slug: "architectural-accolade-design-leadership",
    title: "RECENT ACCOLADE: RECOGNISED FOR ARCHITECTURAL LEADERSHIP & DESIGN EXCELLENCE",
    category: "Recognition & Accolades",
    date: "October 2024",
    snippet:
      "Recognised for its path-breaking work across Eastern India, the practice continues to set benchmarks in climate-responsive high-rise residential towers and healthcare architecture.",
    fullText: [
      "In recognition of rigorous design integrity and pioneering regional contextualism, the studio has been commended among leading architectural practices in the region.",
      "The citation highlights the firm's successful completion of over 20 lakh sq.ft of built environments, spanning high-end residential towers, tertiary healthcare institutions, and industrial master plans.",
      "By unifying design conception, municipal approvals, and rigorous site project management under one roof, the practice ensures that initial architectural clarity remains uncompromised through construction."
    ],
    image: "/images/all-images/img-10.jpg",
    featured: true
  },
  {
    id: "news-02",
    slug: "bhubaneswar-super-specialty-teaching-hospital-commissioned",
    title: "850-BED TEACHING HOSPITAL & MEDICAL CAMPUS MILESTONE IN ODISHA",
    category: "Healthcare Infrastructure",
    date: "August 2024",
    snippet:
      "The multi-phased healthcare and academic campus in Bhubaneswar successfully completes structural commissioning, featuring natural light wells and infection-controlled airflow.",
    fullText: [
      "A monumental milestone for public health infrastructure in Eastern India: the 850-bed medical college and teaching hospital campus in Bhubaneswar has reached operational readiness.",
      "Conceived around therapeutic central gardens and segregated patient and visitor circulation spines, the campus stands as an exemplar of how massive clinical programs can feel luminous, human, and comforting.",
      "Full BDA sanctions, biomedical waste systems, and environmental clearances were orchestrated to align with international healthcare guidelines."
    ],
    image: "/images/all-images/img-18.jpg",
    featured: false
  },
  {
    id: "news-03",
    slug: "kolkata-civic-exhibition-convention-centre-inaugurated",
    title: "CIVIC MONUMENT: INTERNATIONAL EXHIBITION & CONVENTION CENTRE COMPLETED",
    category: "Civic & Hospitality",
    date: "June 2024",
    snippet:
      "Engineered with 72-meter column-free structural spans and sweeping monumental canopies, the Kolkata Exhibition Centre hosts its inaugural international trade summit.",
    fullText: [
      "The International Exhibition Centre has welcomed its first wave of international delegates, establishing a vibrant new civic anchor in Kolkata.",
      "Featuring column-free halls engineered with state-of-the-art long-span steel trusses, the complex accommodates up to 10,000 visitors simultaneously with effortless pedestrian dispersion.",
      "Extensive shaded colonnades shield visitors from heat and monsoon rainfall, while lower-level logistics docks allow seamless freight movement without interfering with civic spaces."
    ],
    image: "/images/all-images/img-1.jpg",
    featured: false
  }
];

export const NATURE_PILLARS = [
  {
    number: "01",
    keyword: "RETAIN",
    title: "Retain the Living Ecology",
    description: "Every building footprint must preserve mature trees, natural water tables, and existing topographical contours rather than razing the earth flat.",
    quote: "He who protects trees is protected by them.",
    image: "/images/nature/retain.jpg"
  },
  {
    number: "02",
    keyword: "REVERE",
    title: "Revere Cosmic Rhythms",
    description: "Honoring sunlight, rainfall cycles, and natural wind orientations through passive solar shading, thermal massing, and evaporative cooling.",
    quote: "Mother Earth, may whatever we take from you grow back quickly.",
    image: "/images/nature/revere.jpg"
  },
  {
    number: "03",
    keyword: "REGENERATE",
    title: "Regenerate Natural Resources",
    description: "Closed-loop wastewater treatment, rainwater recharging aquifers, and rooftop photovoltaics transforming buildings into net-positive producers.",
    quote: "Sarvam Khalvidam Brahma: There is no separation between life and nature.",
    image: "/images/nature/nature-hero.jpg"
  },
  {
    number: "04",
    keyword: "REJOICE",
    title: "Rejoice in Biophilic Harmony",
    description: "Crafting built environments that elevate the human spirit through natural light, living vegetation, unadorned stone, and cross-breezes.",
    quote: "The built sanctuary exists to nurture life in motion.",
    image: "/images/projects/the-duet/cover.jpg"
  }
];

export const INDIA_PILLARS = [
  {
    id: "pattern",
    title: "PATTERN",
    subhead: "The Geometry of Continuity",
    description:
      "From South India's intricate Kolams to Bengal's delicate terracotta jalis, Indian patterns embody sacred mathematical proportions, mandalas, and eternal cosmic rhythms.",
    image: "/images/all-images/img-1.jpg"
  },
  {
    id: "belief",
    title: "BELIEF",
    subhead: "Spiritual Harmony with Space",
    description:
      "Vedic architecture and Vaastu Shastra treat space not as void, but as a living field of energy. Aligning cardinal directions brings tranquility and vitality to inhabitants.",
    image: "/images/all-images/img-7.jpg"
  },
  {
    id: "codes",
    title: "CODES",
    subhead: "Vernacular Wisdom Decoded",
    description:
      "Centuries of indigenous building practices—deep shaded verandas, thick lime plaster walls, central courtyards—offer the most resilient answers to modern climatic challenges.",
    image: "/images/all-images/img-8.jpg"
  },
  {
    id: "people",
    title: "PEOPLE",
    subhead: "Men Build Buildings, Then Buildings Build Men",
    description:
      "Architecture is fundamentally sociological. Our spaces cultivate human dignity, family togetherness, and collective communal warmth.",
    image: "/images/all-images/img-18.jpg"
  },
  {
    id: "biome",
    title: "BIOME",
    subhead: "Rooted in Regional Microclimates",
    description:
      "A building in humid coastal Puri requires an entirely distinct material and ventilation strategy from one in the delta plains of Bengal or the arid plateaus.",
    image: "/images/all-images/img-26.jpg"
  },
  {
    id: "planet",
    title: "PLANET",
    subhead: "We Are Nature",
    description:
      "Embracing planetary stewardship as an immutable ethical responsibility. Carbon awareness, localized sourcing, and waste elimination guide every drawing.",
    image: "/images/all-images/img-28.jpg"
  }
];
