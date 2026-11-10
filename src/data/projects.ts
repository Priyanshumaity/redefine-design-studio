export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  tagline: string;
  location: string;
  year: string;
  area: string;
  status: string;
  workedFor: string;
  coverImage: string;
  gallery: string[];
  brief: string;
  description: string[];
  disciplines: string[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "the-duet-ballygunge",
    title: "LUXURY 16 STOREY RESIDENCY AT BALLYGUNGE",
    category: "Residential: High-End Luxury",
    categorySlug: "residential-luxury",
    tagline: "Towering elegance sculpted with climate-responsive double skin and panoramic vistas.",
    location: "Ballygunge, Kolkata",
    year: "ON GOING",
    area: "50,000 sq.ft",
    status: "ON GOING",
    workedFor: "Premier Real Estate Developers & Consultancies",
    coverImage: "/images/all-images/img-5.jpg",
    gallery: [
      "/images/all-images/img-5.jpg",
      "/images/all-images/img-6.jpg",
      "/images/all-images/img-3.jpg",
      "/images/all-images/img-4.webp",
    ],
    brief:
      "A flagship luxury residential high-rise situated in Ballygunge, designed to redefine ultra-luxury urban living in Kolkata with climate-adaptive facades and bespoke penthouse duplexes.",
    description: [
      "The Duet stands as a landmark residential statement in Kolkata's historic Ballygunge neighborhood. The architecture balances monumental verticality with delicate solar-responsive shading fins and deep cantilevered balconies.",
      "The tower responds directly to Bengal's seasonal monsoon winds and sun path, allowing abundant natural daylight into living zones while minimizing solar thermal gain. The crown of the building features expansive private sky terraces overlooking the urban skyline.",
      "Integrated design coordination united MEPF engineering, structural articulation, and interior spatial harmony from the earliest conceptual sketches."
    ],
    disciplines: [
      "Architectural Design",
      "Facade Engineering",
      "Building Sanction Coordination (KMC)",
      "IGBC Gold Certification",
      "MEPF Design Management"
    ],
    highlights: [
      "IGBC Gold Certified Sustainable Architecture",
      "Dual-aspect panoramic residences with natural cross-ventilation",
      "Climate-responsive horizontal and vertical louvre systems",
      "Private cantilevered sky terraces and wellness club"
    ]
  },
  {
    id: "02",
    slug: "medical-college-bhubaneswar",
    title: "MEDICAL COLLEGE & TEACHING HOSPITAL",
    category: "Health Care",
    categorySlug: "healthcare",
    tagline: "A state-of-the-art academic medical campus planned for clinical excellence and healing environments.",
    location: "Phulbani & Koraput, Odisha",
    year: "2023",
    area: "9,50,000 sq.ft",
    status: "Completed / Commissioned",
    workedFor: "State Healthcare Corporation & Institutional Consultancies",
    coverImage: "/images/projects/medical-college/view-2.jpg",
    gallery: [
      "/images/projects/medical-college/view-2.jpg",
      "/images/projects/medical-college/view-3.jpg",
      "/images/projects/medical-college/view-4.jpg",
      "/images/projects/medical-college/view-5.jpg"
    ],
    brief:
      "A sprawling super-specialty medical campus comprising academic blocks, teaching hospital, diagnostic wings, and student residences designed with therapeutic landscape courtyards.",
    description: [
      "Designed as a comprehensive tertiary healthcare institution, the campus orchestrates complex clinical workflows into clear, human-scaled circulation spines. Dedicated vehicular segregation separates emergency, OPD, patient transfer, and visitor streams.",
      "Internal courtyards and landscaped light wells penetrate the deep hospital floor plates, bringing daylight and natural greenery deep into recovery wards, nurse stations, and waiting lounges.",
      "The project adheres strictly to statutory hospital norms, biomedical clearances, and environmental sustainability standards."
    ],
    disciplines: [
      "Hospital Architecture",
      "Master Planning & Campus Design",
      "BDA Sanction & Statutory Clearances",
      "PCB & Environmental Clearances",
      "MEPF Healthcare Design Management"
    ],
    highlights: [
      "Dedicated sterile and non-sterile zone separation with infection-control airflow",
      "Therapeutic healing gardens integrated across the OPD and inpatient blocks",
      "High-efficiency central energy plant with wastewater zero-discharge recycling"
    ]
  },
  {
    id: "03",
    slug: "the-curve-residences",
    title: "42 STORIED LUXURY RESIDENCE",
    category: "Residential: High-End Luxury",
    categorySlug: "residential-luxury",
    tagline: "Curvilinear aerodynamic architecture maximizing natural light, garden views, and spatial grandeur.",
    location: "Kolkata",
    year: "ON GOING",
    area: "Approx. 12,40,000 sq.ft",
    status: "ON GOING",
    workedFor: "Leading Real Estate Developers",
    coverImage: "/images/all-images/img-2.jpg",
    gallery: [
      "/images/all-images/img-2.jpg",
      "/images/all-images/img-3.jpg",
      "/images/all-images/img-4.webp",
      "/images/all-images/img-21.jpg"
    ],
    brief:
      "An iconic residential tower defined by fluid geometry, sweeping glass facades, and cantilevered landscaped decks that seamlessly unite the interior sanctuary with sky gardens.",
    description: [
      "The Curve departs from rigid orthogonal residential blocks by embracing organic flowing contours. Its swept perimeter reduces aerodynamic drag while opening wide 180-degree panoramic vantage points for each residence.",
      "Every residence is designed with expansive ceiling heights, private lift vestibules, and deep shading balconies that shield living areas from the intense afternoon sun.",
      "The master planning integrates multi-tiered landscape decks, infinity edge pools, and shaded walking circuits woven directly into the structural podium."
    ],
    disciplines: [
      "Architectural Design",
      "Master Planning",
      "IGBC Platinum Green Certification",
      "Structural & MEPF Coordination",
      "KMC Sanction Compliance",
      "Landscape Architecture"
    ],
    highlights: [
      "IGBC PLATINUM CERTIFIED BUILDING",
      "Dynamic curved continuous balconies providing natural solar shade",
      "Acoustically insulated double-glazed curtain walls",
      "Podium level tropical garden deck with bio-pool"
    ]
  },
  {
    id: "04",
    slug: "dhuliyan-luxury-villa",
    title: "LUXURY WATERFRONT VILLA AT MURSHIDABAD",
    category: "Villas",
    categorySlug: "villas",
    tagline: "A bespoke private sanctuary celebrating vernacular masonry, expansive water bodies, and microclimate breezes.",
    location: "Murshidabad, West Bengal",
    year: "ON GOING",
    area: "28,000 sq.ft",
    status: "ON GOING",
    workedFor: "Private Client",
    coverImage: "/images/projects/dhuliyan-villa/cover.jpg",
    gallery: [
      "/images/projects/dhuliyan-villa/cover.jpg",
      "/images/projects/dhuliyan-villa/exterior-1.jpg",
      "/images/projects/dhuliyan-villa/exterior-2.jpg",
      "/images/all-images/img-24.jpg"
    ],
    brief:
      "A grand riverside estate nestled along the Ganges in Murshidabad, synthesizing classical Nawabi heritage proportions with contemporary tropical minimalism.",
    description: [
      "Commissioned for a distinguished family, the villa draws deep inspiration from Bengal's traditional 'Baganbari' (garden retreat). Water bodies wrap around living pavilions to cool the arriving river breezes before entering shaded verandas.",
      "Locally sourced terracotta bricks, handcrafted stone jalis, and native timber are paired with sleek structural cantilevers. The villa's orientation is tuned to the cardinal axes in accordance with authentic Vaastu principles.",
      "A series of stepped pavilions step down gracefully toward the water's edge, preserving mature native trees that have stood on the property for over four decades."
    ],
    disciplines: [
      "Comprehensive Architectural Design",
      "Landscape Architecture",
      "Interior Architecture",
      "Vaastu Consultation",
      "Project Management Consultancy (PMC)"
    ],
    highlights: [
      "Passive evaporative cooling via surrounding water courtyards",
      "Handcrafted terracotta screens providing privacy and solar modulation",
      "Full off-grid solar and rainwater harvesting infrastructure"
    ]
  },
  {
    id: "05",
    slug: "private-villas-and-farm-house",
    title: "PRIVATE VILLAS AND FARM HOUSE",
    category: "Villas",
    categorySlug: "villas",
    tagline: "Tranquil agrarian sanctuary pairing vernacular sensibilities with contemporary pavilion architecture.",
    location: "Mysore & Bangalore, Karnataka",
    year: "ONGOING",
    area: "35,000 sq.ft",
    status: "ONGOING",
    workedFor: "Private Client",
    coverImage: "/images/all-images/img-13.jpg",
    gallery: [
      "/images/all-images/img-12.jpg",
      "/images/all-images/img-26.jpg",
      "/images/all-images/img-27.jpg",
      "/images/all-images/img-28.jpg"
    ],
    brief:
      "An expansive farm estate and private villa retreat in Karnataka designed with open-air verandas, deep overhangs, and natural landscape integration.",
    description: [
      "Conceived as an escape from urban density, the private villa and farmhouse synthesize traditional courtyard arrangements with modern structural expanses. Earthy materials and generous shaded perimeters provide passive thermal regulation throughout the year.",
      "The estate master plan harmonizes residential pavilions with landscaped orchards, private water bodies, and Vaastu-aligned functional zoning.",
      "Integrated services ensure self-sufficient water catchment, bio-sewage treatment, and climate-resilient estate living."
    ],
    disciplines: [
      "Architectural Design",
      "Master Planning",
      "Landscape Architecture",
      "Vaastu Consultation",
      "PMC Supervision"
    ],
    highlights: [
      "Deep vernacular verandas offering passive evaporative cooling",
      "Master-planned agricultural orchard and landscape integration",
      "Vaastu-aligned spatial distribution with natural light wells"
    ]
  },
  {
    id: "06",
    slug: "interiors-contemporary",
    title: "INTERIORS - EXECUTIVE & RESIDENT SALONS",
    category: "Interiors",
    categorySlug: "interiors",
    tagline: "Bespoke acoustic woodcraft, subtle ambient illumination, and handcrafted executive spaces.",
    location: "Kolkata, West Bengal",
    year: "ONGOING",
    area: "40,000 sq.ft",
    status: "ONGOING",
    workedFor: "Corporate Developers & Hospitality",
    coverImage: "/images/all-images/img-16.jpg",
    gallery: [
      "/images/all-images/img-14.jpg",
      "/images/all-images/img-15.jpg",
      "/images/all-images/img-29.jpg",
      "/images/all-images/img-30.jpg"
    ],
    brief:
      "A bespoke interior architecture suite encompassing executive meeting chambers, resident lounges, and refined hospitality spaces.",
    description: [
      "This interior project explores the dialogue between tactile natural materials and contemporary minimalism. Fluted timber paneling, concealed acoustic baffling, and warm architectural lighting create a serene atmosphere.",
      "Each space is ergonomically crafted to balance high-traffic durability with residential warmth, featuring custom joinery and tailored furniture pieces.",
      "Specialized acoustic engineering ensures speech privacy across meeting zones while maintaining visual transparency through fluted glass partitions."
    ],
    disciplines: [
      "Comprehensive Interior Architecture",
      "Acoustic Engineering & Lighting",
      "Custom Joinery & Millwork Detailing",
      "Material Specifications & BOQ"
    ],
    highlights: [
      "Bespoke fluted acoustic walnut wall cladding",
      "Concealed architectural lighting with scene automation",
      "High-specification executive conference and lounge furnishings"
    ]
  },
  {
    id: "07",
    slug: "interiors-luxury-residences",
    title: "INTERIORS - LUXURY PRIVATE RESIDENCES & LOUNGES",
    category: "Interiors",
    categorySlug: "interiors",
    tagline: "Opulent material palettes, sculptural lighting, and curated living sanctuaries.",
    location: "Kolkata, West Bengal",
    year: "ONGOING",
    area: "25,000 sq.ft",
    status: "ONGOING",
    workedFor: "Private Clients & Developers",
    coverImage: "/images/all-images/img-33.jpg",
    gallery: [
      "/images/all-images/img-31.jpg",
      "/images/all-images/img-32.jpg",
      "/images/all-images/img-34.jpg",
      "/images/all-images/img-35.jpg"
    ],
    brief:
      "High-end residential interior detailing emphasizing bespoke marble masonry, custom lighting installations, and serene bedroom suites.",
    description: [
      "Crafted for discerning homeowners, this interior commission showcases meticulous material selection: Italian marble floors, textured wallpapers, brass accents, and recessed linear lighting.",
      "Living and dining zones flow seamlessly into one another, while private suites provide peaceful sanctuaries with tailored walk-in closets and spa-like bathrooms.",
      "The interior language is timeless yet modern, reflecting an understated luxury where every fixture and joint is engineered to perfection."
    ],
    disciplines: [
      "Residential Interior Architecture",
      "Custom Millwork & Cabinetry Detailing",
      "Lighting Design & Automation",
      "Turnkey PMC & Quality Assurance"
    ],
    highlights: [
      "Book-matched Italian marble feature walls with brass inlay",
      "Custom integrated architectural lighting and false ceilings",
      "Bespoke dressing rooms and spa-grade ensuite bathrooms"
    ]
  },
  {
    id: "08",
    slug: "kolkata-exhibition-centre",
    title: "INTERNATIONAL EXHIBITION & CONVENTION CENTRE",
    category: "Hospitality",
    categorySlug: "hospitality",
    tagline: "A monumental civic venue built with column-free exhibition halls, expansive plazas, and civic presence.",
    location: "Kolkata, West Bengal",
    year: "2023",
    area: "4,60,000 sq.ft",
    status: "Completed",
    workedFor: "Civic Infrastructure Consultancies & Developers",
    coverImage: "/images/all-images/img-8.jpg",
    gallery: [
      "/images/all-images/img-8.jpg",
      "/images/projects/exhibition-centre/view-1.jpg",
      "/images/projects/exhibition-centre/view-2.jpg",
      "/images/all-images/img-22.jpg"
    ],
    brief:
      "A large-scale convention and international trade exhibition hub equipped with long-span column-free halls, grand public plazas, and multi-modal transit connectivity.",
    description: [
      "The Exhibition Centre is engineered to host global trade expos, cultural summits, and multi-thousand delegate conferences. The architectural envelope features bold geometric canopies that shelter arriving delegates from torrential monsoon rains.",
      "Inside, 72-meter long-span steel trusses create unobstructed exhibition volumes capable of flexible repartitioning. Acoustic walls, high-load service trenches, and overhead rigging grids support world-class staging.",
      "Outside, civic plazas accommodate large crowds with shaded gathering groves, water fountains, and dedicated freight logistics access completely segregated from visitors."
    ],
    disciplines: [
      "Civic & Hospitality Architecture",
      "Long-Span Structural Coordination",
      "Urban Transit & Traffic Flow Planning",
      "Building Sanctions & Approvals",
      "Environmental Impact Assessment (EC)"
    ],
    highlights: [
      "72-meter clear-span exhibition pavilions with multi-configurable layouts",
      "High-capacity passive pedestrian shaded colonnades",
      "Dual-level logistics docks with underground heavy vehicle servicing"
    ]
  },
  {
    id: "10",
    slug: "estate-villa-murshidabad",
    title: "RESIDENTIAL ESTATE VILLA & GARDENS",
    category: "Villas",
    categorySlug: "villas",
    tagline: "An understated private residence balancing classical proportions with verdant courtyard gardens.",
    location: "Murshidabad, West Bengal",
    year: "2023",
    area: "14,500 sq.ft",
    status: "Completed",
    workedFor: "Private Client",
    coverImage: "/images/projects/estate-villa/cover.jpg",
    gallery: [
      "/images/projects/estate-villa/cover.jpg",
      "/images/projects/estate-villa/view-1.jpg",
      "/images/projects/estate-villa/view-2.jpg",
      "/images/all-images/img-11.jpg"
    ],
    brief:
      "A custom two-story family villa set on a private agrarian estate, designed to celebrate indoor-outdoor connectivity and cross-breezes.",
    description: [
      "Surrounded by fruit orchards, this villa emphasizes timeless horizontal planes, wide overhanging eaves, and double-height living areas that invite the landscape inside.",
      "Deep verandas shield the brick and plaster facades from driving summer rains, while private upper-level bedroom balconies look out onto the sunset horizon.",
      "Constructed by local artisans under the studio's design guidance, the villa showcases how economical, climate-appropriate construction can achieve luxurious architectural grace.",
    ],
    disciplines: [
      "Architectural Design",
      "Interior Architecture",
      "Vaastu Consultation",
      "Landscape Design",
      "Site Supervision & PMC"
    ],
    highlights: [
      "Deep wrap-around verandas functioning as climate buffers",
      "Double-height living pavilion with exposed timber trusses",
      "Integrated natural rainwater collection pond for estate irrigation"
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Residential: High-End Luxury",
  "Health Care",
  "Hospitality",
  "Interiors",
  "Villas"
];

export interface ProjectImage {
  id: string;
  src: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  projectId: string;
}

export const PROJECT_IMAGES: ProjectImage[] = PROJECTS.flatMap((project) => {
  const images = Array.from(new Set([project.coverImage, ...project.gallery].filter(Boolean)));
  return images.map((src, index) => ({
    id: `${project.id}-${index + 1}`,
    src,
    title: project.title,
    category: project.category,
    categorySlug: project.categorySlug,
    location: project.location,
    projectId: project.id,
  }));
});
