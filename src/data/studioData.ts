export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Residential' | 'Luxury Villas' | 'Hospitality' | 'Commercial';
  location: string;
  year: string;
  area: string;
  scope: string;
  photographer: string;
  coverImage: string;
  heroImage: string;
  description: string;
  challenge: string;
  approach: string;
  result: string;
  beforeImage?: string;
  afterImage?: string;
  materials: { name: string; type: string; color: string }[];
  gallery: { url: string; caption: string; aspect?: string }[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

export interface Service {
  number: string;
  title: string;
  tagline: string;
  scope: string[];
  deliverables: string[];
  idealFor: string;
  pricingEstimate: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  stage: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: {
    lead: string;
    paragraphs: string[];
    pullQuote?: string;
    sectionTitle?: string;
    subParagraphs?: string[];
  };
}

export const STUDIO_PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'villa-saint-germain',
    title: 'Villa Saint-Germain',
    category: 'Residential',
    location: 'Paris, 7th Arrondissement',
    year: '2025',
    area: '480 m² / 5,160 sq ft',
    scope: 'Complete architectural gut-renovation, spatial reconfiguration, bespoke joinery, art curation',
    photographer: 'François Halard Studio',
    coverImage: '/images/project_paris_apartment.jpg',
    heroImage: '/images/project_paris_apartment.jpg',
    description: 'A 19th-century Haussmannian grand residence restored with quiet monastic restraint, honoring original gilded mouldings while establishing seamless contemporary flow through monumental travertine portals.',
    challenge: 'The original layout suffered from rigid compartmentalization typical of 1880s Parisian hôtel particuliers: dark secondary corridors, divided salons, and acoustically compromised floorboards that stifled modern family life.',
    approach: 'We stripped subsequent mid-century partitions, re-established an axis of natural light from the courtyard to the boulevard, preserved the original chevron oak parquet, and introduced monolithic elements in Calacatta Viola and brushed unlacquered brass.',
    result: 'A calm, light-bathed urban sanctuary where historic French classical proportions converse harmoniously with sculptural Scandinavian seating and custom acoustic linen wall panels.',
    beforeImage: '/images/project_before_renovation.jpg',
    afterImage: '/images/project_paris_apartment.jpg',
    materials: [
      { name: 'Calacatta Viola Marble', type: 'Slab Stone', color: '#E8DED8' },
      { name: 'Restored French Oak', type: 'Parquet Chevron', color: '#C8A878' },
      { name: 'Unlacquered Aged Brass', type: 'Architectural Hardware', color: '#B08D57' },
      { name: 'Oatmeal Bouclé & Raw Linen', type: 'Upholstery', color: '#ECE5DB' }
    ],
    gallery: [
      { url: '/images/project_paris_apartment.jpg', caption: 'The grand salon featuring restored boiseries and custom Calacatta Viola plinth table.' },
      { url: '/images/materials_swatches.jpg', caption: 'Tactile material study: natural stone, fluted white oak, aged brass and raw linen.' },
      { url: '/images/hero_interior_villa.jpg', caption: 'Courtyard lightwell filtering through double-height sheer linen drapery.' }
    ],
    testimonial: {
      quote: 'Hélène and her team did not merely redesign our home; they distilled how we wish to live. Every morning light pattern feels intentionally orchestrated.',
      author: 'Éléonore & Marc de Valois',
      title: 'Private Homeowners, Paris'
    }
  },
  {
    id: '2',
    slug: 'kyoto-pavilions',
    title: 'The Kyoto Pavilions',
    category: 'Luxury Villas',
    location: 'Higashiyama, Kyoto',
    year: '2024',
    area: '620 m² / 6,670 sq ft',
    scope: 'Ground-up interior architecture, courtyard integration, bespoke hinoki joinery, tearoom curation',
    photographer: 'Kenji Takahashi',
    coverImage: '/images/project_kyoto_pavilion.jpg',
    heroImage: '/images/project_kyoto_pavilion.jpg',
    description: 'A contemporary dialogue between Japanese wabi-sabi philosophy and European brutalist warmth. Interlocking cedar pavilions framed around moss-and-granite meditation gardens.',
    challenge: 'Integrating modern climate envelope specifications and discreet acoustic isolation without disrupting the delicate wood joinery and continuous indoor-outdoor flow required by the client.',
    approach: 'We developed custom concealed acoustic ceiling baffles veneered in local Hinoki cedar, paired with seamless micro-terrazzo floors that extend past the floor-to-ceiling glass line into private moss gardens.',
    result: 'A meditative residential retreat of absolute serenity, calibrated for changing seasons, shifting shadows, and the quiet ritual of daily tea.',
    beforeImage: '/images/project_before_renovation.jpg',
    afterImage: '/images/project_kyoto_pavilion.jpg',
    materials: [
      { name: 'Hinoki Cypress', type: 'Architectural Millwork', color: '#D9C4A6' },
      { name: 'Warm Charcoal Micro-Cement', type: 'Flooring', color: '#8E867E' },
      { name: 'Cast Bronze Hardware', type: 'Custom Details', color: '#5C4A3A' },
      { name: 'Handmade Washi Paper', type: 'Luminous Partitions', color: '#F4EFE6' }
    ],
    gallery: [
      { url: '/images/project_kyoto_pavilion.jpg', caption: 'The main pavilion looking out to the private Japanese maple courtyard.' },
      { url: '/images/editorial_journal_cover.jpg', caption: 'Monolithic carved limestone display plinth with handmade Tokoname stoneware.' },
      { url: '/images/materials_swatches.jpg', caption: 'Curated architectural finish palette selected for tactile calm.' }
    ],
    testimonial: {
      quote: 'Studio Vauquelin possessed an innate understanding of Ma (the space between). The house breathes with stillness.',
      author: 'Takeshi Morimoto',
      title: 'Architectural Collector & Client'
    }
  },
  {
    id: '3',
    slug: 'cape-d-antibes-residence',
    title: 'Cap d’Antibes Residence',
    category: 'Luxury Villas',
    location: 'Côte d’Azur, France',
    year: '2024',
    area: '750 m² / 8,070 sq ft',
    scope: 'Full interior architecture, exterior terrace living, custom furniture commission',
    photographer: 'Romain Laprade',
    coverImage: '/images/project_coastal_residence.jpg',
    heroImage: '/images/project_coastal_residence.jpg',
    description: 'A cliffside Mediterranean villa where textured lime-washed surfaces, raw travertine slabs, and sweeping sea vistas form an understated seaside sanctuary.',
    challenge: 'Intense coastal maritime UV and salt-air exposure required materials that patina gracefully rather than deteriorate.',
    approach: 'We specified solid unsealed Roman travertine, marine-grade solid teak, custom lime plaster, and Belgian linen fabrics treated with non-chemical natural repellents.',
    result: 'A timeless coastal residence bathed in golden hour light, celebrated in Architectural Digest for its unhurried Riviera luxury.',
    materials: [
      { name: 'Roman Travertine Chiaro', type: 'Slab Table & Flooring', color: '#E5D6C3' },
      { name: 'Artisan Lime Wash', type: 'Wall Treatment', color: '#F2EDE4' },
      { name: 'Solid Aged Teak', type: 'Joinery & Exterior', color: '#8F6F4E' },
      { name: 'Woven Abaca & Hemp', type: 'Lampshades & Rugs', color: '#C5B59D' }
    ],
    gallery: [
      { url: '/images/project_coastal_residence.jpg', caption: 'The sea-facing dining loggia with monumental monolithic travertine table.' },
      { url: '/images/hero_interior_villa.jpg', caption: 'Living volume transitioning to outdoor limestone terrace and reflection pool.' }
    ],
    testimonial: {
      quote: 'The house feels as though it was hewn directly from the Mediterranean rock, yet offers the ultimate comfort.',
      author: 'Claire & Julian Sterling',
      title: 'Villa Owners'
    }
  },
  {
    id: '4',
    slug: 'le-bar-vauquelin-lounge',
    title: 'The Montmartre Social Club',
    category: 'Hospitality',
    location: 'Paris, 18th Arrondissement',
    year: '2024',
    area: '340 m² / 3,660 sq ft',
    scope: 'Boutique cocktail lounge, acoustic design, custom curved leather banquettes, lighting design',
    photographer: 'Adrien Dirand',
    coverImage: '/images/project_commercial_hotel.jpg',
    heroImage: '/images/project_commercial_hotel.jpg',
    description: 'An intimate, dimly lit hospitality destination pairing fluted plaster columns, caramel saddle leather, and warm brass sconces for lingering evenings.',
    challenge: 'A subterranean space with limited natural light that required warmth, spatial rhythm, and flawless acoustic attenuation.',
    approach: 'We embraced the nocturnal atmosphere with deeply coffered walnut ceilings, indirect 2200K dimmable brass wash-lighting, and sculpted banquette alcoves.',
    result: 'Winner of the 2024 International Hospitality Interior of the Year, revered by Parisian patrons for its discreet luxury.',
    materials: [
      { name: 'Patinated Cognac Saddle Leather', type: 'Banquettes', color: '#8D522C' },
      { name: 'Fluted Acoustic Plaster', type: 'Columns & Ceilings', color: '#E0D6C8' },
      { name: 'American Walnut', type: 'Coffered Ceilings', color: '#4B382A' },
      { name: 'Brushed Solid Brass', type: 'Custom Sconces', color: '#B08D57' }
    ],
    gallery: [
      { url: '/images/project_commercial_hotel.jpg', caption: 'The main lounge salon with curved cognac leather seating and fluted architectural columns.' }
    ]
  },
  {
    id: '5',
    slug: 'tribeca-loft-residence',
    title: 'Tribeca Cast-Iron Loft',
    category: 'Residential',
    location: 'New York City, Tribeca',
    year: '2023',
    area: '410 m² / 4,410 sq ft',
    scope: 'Full interior architecture, historic preservation, custom art gallery lighting, bespoke furniture',
    photographer: 'Joe Fletcher',
    coverImage: '/images/hero_interior_villa.jpg',
    heroImage: '/images/hero_interior_villa.jpg',
    description: 'A 1902 cast-iron warehouse floor transformed into an expansive private sanctuary featuring a monumental travertine hearth and curated contemporary sculpture.',
    challenge: 'Balancing the industrial scale and cavernous acoustics of an open loft with human-scaled intimacy for family living.',
    approach: 'Constructing micro-architectural volumes within the envelope—a monolithic freestanding travertine fireplace that divides the formal gallery from the family salon.',
    result: 'An iconic Manhattan residence featured as the cover story for Elle Decor US 2024.',
    materials: [
      { name: 'Filled Roman Travertine', type: 'Double-Height Fireplace', color: '#DFD3C3' },
      { name: 'Wide Plank White Oak', type: 'Flooring (300mm)', color: '#CDB99C' },
      { name: 'Raw Blackened Steel', type: 'Architectural Glazing', color: '#2B2927' }
    ],
    gallery: [
      { url: '/images/hero_interior_villa.jpg', caption: 'The soaring living volume with double-height travertine chimney breast.' }
    ]
  },
  {
    id: '6',
    slug: 'mayfair-private-gallery-residence',
    title: 'Mayfair Townhouse',
    category: 'Residential',
    location: 'London, Mayfair',
    year: '2023',
    area: '520 m² / 5,600 sq ft',
    scope: 'Grade-II listed restoration, subterranean wellness pavilion, private collection gallery',
    photographer: 'Simon Upton',
    coverImage: '/images/project_paris_apartment.jpg',
    heroImage: '/images/project_paris_apartment.jpg',
    description: 'A Georgian townhouse restored with exacting historical precision on its formal upper floors, giving way to an unexpected minimalist travertine sanctuary below.',
    challenge: 'Strict English Heritage preservation regulations on chimneypieces, historic cornicing, and sash windows.',
    approach: 'Invisible modern infrastructure: sub-floor radiant heating under reclaimed boards, concealed architectural linear ventilation, and museum-grade lighting.',
    result: 'A harmonious bridge between London architectural heritage and contemporary understated calm.',
    materials: [
      { name: 'Portland Stone', type: 'Staircase & Fireplaces', color: '#DCD4C6' },
      { name: 'Smoked English Oak', type: 'Joinery & Library', color: '#4E3E33' }
    ],
    gallery: [
      { url: '/images/project_paris_apartment.jpg', caption: 'Drawing room with historic plaster restoration and modern Italian minimalist seating.' }
    ]
  },
  {
    id: '7',
    slug: 'geneva-lakefront-villa',
    title: 'Lake Geneva Estate',
    category: 'Luxury Villas',
    location: 'Cologny, Geneva',
    year: '2025',
    area: '890 m² / 9,580 sq ft',
    scope: 'Complete interior design, spa & indoor infinity pool, wine cellar vault, custom lighting',
    photographer: 'Fernando Guerra',
    coverImage: '/images/project_coastal_residence.jpg',
    heroImage: '/images/project_coastal_residence.jpg',
    description: 'An architectural villa nestled on the slopes of Lake Geneva, framed in Swiss Vals quartzite, dark stained larch, and seamless panoramic glazing.',
    challenge: 'Creating thermal and sensory warmth in an expansively glazed alpine lakefront residence.',
    approach: 'Layered natural wool textures, cashmere drapery, double-sided bronze fire hearths, and tactile hand-scraped timber surfaces.',
    result: 'A calm, enveloping sanctuary that captures the reflection of the lake while cocooning its inhabitants.',
    materials: [
      { name: 'Vals Quartzite Stone', type: 'Monolithic Slabs', color: '#686D70' },
      { name: 'Swiss Alpine Larch', type: 'Slatting & Paneling', color: '#A08060' }
    ],
    gallery: [
      { url: '/images/project_coastal_residence.jpg', caption: 'Dining salon framing the Swiss lake vista.' }
    ]
  },
  {
    id: '8',
    slug: 'hotel-particulier-headquarters',
    title: 'Maison de Haute Horlogerie',
    category: 'Commercial',
    location: 'Geneva / Paris',
    year: '2024',
    area: '450 m² / 4,840 sq ft',
    scope: 'VIP salon suites, client reception chambers, private exhibition vault',
    photographer: 'Adrien Dirand',
    coverImage: '/images/project_commercial_hotel.jpg',
    heroImage: '/images/project_commercial_hotel.jpg',
    description: 'Discreet private client chambers for an independent Swiss high-watchmaking manufacture, designed as an intimate residential atelier rather than a retail store.',
    challenge: 'Ensuring maximum physical security and vault acoustic privacy while maintaining the atmosphere of an aristocratic Parisian apartment.',
    approach: 'Concealed ballistic steel core panels hidden beneath hand-combed lime plaster and upholstered acoustic velvet boiserie.',
    result: 'An ultra-private destination where time slows down, mirroring the meticulous craftsmanship of grand complication timepieces.',
    materials: [
      { name: 'Dark Walnut Joinery', type: 'Watch Display Cabinets', color: '#3A2C21' },
      { name: 'Beige Mohair Velvet', type: 'Acoustic Wall Panels', color: '#C8BEAE' }
    ],
    gallery: [
      { url: '/images/project_commercial_hotel.jpg', caption: 'Private consultation salon with custom brass display Vitrines.' }
    ]
  }
];

export const STUDIO_SERVICES: Service[] = [
  {
    number: '01',
    title: 'Residential Architecture & Full Interior Design',
    tagline: 'Comprehensive, end-to-end transformation of high-value private residences and estates.',
    scope: [
      'Complete spatial planning, structural reconfiguration, and partition redesign',
      'Architectural lighting schemes and technical electrical layouts',
      'Custom millwork, bespoke kitchen design, and primary bathroom architecture',
      'Coordination with local heritage authorities and structural engineers'
    ],
    deliverables: [
      'Detailed 2D CAD architectural plans, sections, and elevation booklets',
      'Photorealistic 3D spatial renderings and lighting studies',
      'Comprehensive material specification schedules and technical finishes index',
      'Tender-ready construction documentation package'
    ],
    idealFor: 'Affluent homeowners acquiring historic properties, penthouses, or undertaking ground-up architectural renovations.',
    pricingEstimate: 'From €180 / m² (Minimum project scope €75,000)',
    image: '/images/project_paris_apartment.jpg'
  },
  {
    number: '02',
    title: 'Luxury Villas & Coastal Estates',
    tagline: 'Bespoke indoor-outdoor residential architecture calibrated to dramatic landscapes.',
    scope: [
      'Site microclimate analysis, orientation, and sightline optimization',
      'Seamless terrace, loggia, and exterior living room integration',
      'Specialized maritime-durable material palettes and UV-stable finishes',
      'Full wellness suites, private spas, infinity pools, and wine sanctuaries'
    ],
    deliverables: [
      'Master interior architectural concept dossier',
      'Bespoke exterior-interior transition detailing',
      'Complete mechanical and lighting integration blueprints',
      'Curated outdoor furniture and lighting curation schedule'
    ],
    idealFor: 'High-net-worth clients building or remodeling villas in the Côte d’Azur, Balearics, Swiss Alps, or California.',
    pricingEstimate: 'From €220 / m² (Minimum project scope €120,000)',
    image: '/images/project_coastal_residence.jpg'
  },
  {
    number: '03',
    title: 'Boutique Hospitality & Private Member Clubs',
    tagline: 'Atmospheric destinations designed to captivate guests and establish lasting prestige.',
    scope: [
      'Concept narrative, brand spatial identity, and guest journey sequencing',
      'Front-of-house lounge, dining, bar, and guest suite interior design',
      'High-durability commercial material specification meeting fire and egress codes',
      'Acoustic attenuation and nocturnal scene-setting lighting design'
    ],
    deliverables: [
      'Comprehensive hospitality design manual and FF&E specification catalogue',
      'Custom seating, bar, and lighting fabrication drawings',
      'Operational workflow layout and server circulation optimization',
      'Sample boards and mock-up room oversight'
    ],
    idealFor: 'Independent luxury hotel owners, Michelin-caliber restaurateurs, and private members clubs.',
    pricingEstimate: 'Custom proposal based on key count & public F&B area (From €95,000)',
    image: '/images/project_commercial_hotel.jpg'
  },
  {
    number: '04',
    title: 'Curated FF&E, Bespoke Furniture & Art Advisory',
    tagline: 'Sourcing collectible 20th-century design, rare stones, and commissioning one-of-a-kind art.',
    scope: [
      'Global sourcing of vintage collectible design (Perriand, Royère, Jeanneret, Nakashima)',
      'Commissioning contemporary sculptural artisans for site-specific works',
      'Custom upholstery, hand-knotted organic rugs, and tactile drapery curation',
      'Art framing, museum lighting, and white-glove curation'
    ],
    deliverables: [
      'Visual FF&E lookbooks organized room-by-room with physical material trays',
      'Trade discount passing and procurement budget management spreadsheet',
      'Consolidated logistics, white-glove storage, and custom shipping handling',
      'On-site installation, styling, and art hanging supervision'
    ],
    idealFor: 'Homeowners who have completed structural work or desire a museum-grade aesthetic overhaul.',
    pricingEstimate: 'Percentage of procurement volume (18% - 22%) or flat curation retainer',
    image: '/images/materials_swatches.jpg'
  },
  {
    number: '05',
    title: 'Turnkey Architectural Execution & Site Direction',
    tagline: 'Complete peace of mind: single-source accountability from demolition to the first night.',
    scope: [
      'Tendering to trusted elite general contractors and master artisans',
      'Bi-weekly on-site architectural inspections and defect rectification logs',
      'Subcontractor coordination (cabinetmakers, stonemasons, plasterers, domotics)',
      'Final deep cleaning, linen steaming, scented candle staging, and key handover'
    ],
    deliverables: [
      'Weekly photographic site progress reports and budget reconciliations',
      'As-built architectural revision drawings and maintenance warranties binder',
      'White-glove move-in readiness with all systems tested and calibrated'
    ],
    idealFor: 'International clients and busy executives who demand an effortless, flawless outcome.',
    pricingEstimate: '12% - 15% of total construction & millwork expenditure',
    image: '/images/hero_interior_villa.jpg'
  }
];

export const STUDIO_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    stage: 'Phase I',
    title: 'Discovery, Spatial Audit & Architectural Brief',
    duration: 'Weeks 1 – 3',
    description: 'We begin by listening deeply. We audit the site’s natural light patterns, structural conditions, and acoustic characteristics while documenting your personal lifestyle rituals—from morning coffee routines to private entertaining.',
    deliverables: [
      'In-depth lifestyle and aesthetic questionnaire',
      'Laser-scanned 3D site survey and photographic baseline',
      'Spatial programming matrix and preliminary project budget framework'
    ],
    image: '/images/founder_portrait.jpg'
  },
  {
    number: '02',
    stage: 'Phase II',
    title: 'Spatial Architecture & Concept Vision',
    duration: 'Weeks 4 – 7',
    description: 'We establish the spatial poetry. We test layout alternatives to eliminate wasted circulation and bring natural light into core living areas. We curate the overarching material moodboard of raw stones, woods, and metals.',
    deliverables: [
      'Conceptual floor plans with circulation flow studies',
      'Curated physical materials box delivered to your door (stone, wood, linen, metal)',
      'Atmospheric 3D perspective sketches and lighting intent boards'
    ],
    image: '/images/materials_swatches.jpg'
  },
  {
    number: '03',
    stage: 'Phase III',
    title: 'Design Development & Technical Blueprinting',
    duration: 'Weeks 8 – 14',
    description: 'Every millimetre is resolved. We generate complete construction documentation packages: custom joinery blueprints, stone cutting sheets, bathroom elevations, and technical lighting integration schedules.',
    deliverables: [
      'Tender-ready construction drawing set (1:50 & 1:20 scale details)',
      'Custom millwork & cabinetmaking fabrication specifications',
      'Complete electrical, domotics, and HVAC integration blueprints',
      'Line-item tender budget breakdown for contractor competitive bidding'
    ],
    image: '/images/project_paris_apartment.jpg'
  },
  {
    number: '04',
    stage: 'Phase IV',
    title: 'FF&E Procurement & Artisan Commissioning',
    duration: 'Weeks 15 – 22 (Parallel with site work)',
    description: 'We coordinate the bespoke commissions: our trusted stonemasons in Verona, timber artisans in the Black Forest, and bronze casters in Paris begin handcrafting your bespoke tables, credenzas, and light fixtures.',
    deliverables: [
      'Purchase order management and manufacturer quality tracking',
      'Prototype reviews and finish approvals with workshop visits',
      'Consolidated climate-controlled warehousing in our Paris or New York facilities',
      'White-glove insured shipping and customs logistics handling'
    ],
    image: '/images/editorial_journal_cover.jpg'
  },
  {
    number: '05',
    stage: 'Phase V',
    title: 'Site Execution & Construction Direction',
    duration: 'Months 5 – 12 (Depending on scale)',
    description: 'We stand on site as your uncompromising guardians of quality. Regular site meetings ensure that alignments, reveals, and plaster finishes execute exactly as drafted, solving unforeseen hurdles with swift precision.',
    deliverables: [
      'Bi-weekly detailed photographic progress memos with budget tracking',
      'Snagging and defect rectification audits with general contractors',
      'Coordination of specialist domotics and audio-visual technicians'
    ],
    image: '/images/hero_interior_villa.jpg'
  },
  {
    number: '06',
    stage: 'Phase VI',
    title: 'White-Glove Styling & Sanctuary Handover',
    duration: 'Final 2 Weeks',
    description: 'The moment of quiet magic. We place every piece of custom furniture, hang the art, steam the Belgian linen drapery, and set up your personal books and ceramics. When you turn the brass key, the space feels instantly like home.',
    deliverables: [
      'Complete furniture uncrating, placement, and art positioning',
      'Homeowner Operations Manual for stone, timber, and domotics care',
      'Celebratory private welcome with our creative directors'
    ],
    image: '/images/project_kyoto_pavilion.jpg'
  }
];

export const STUDIO_TEAM = [
  {
    name: 'Hélène Vauquelin',
    role: 'Founder & Creative Director',
    bio: 'Educated at École Camondo and the Architectural Association London. 18 years creating refined residences across Paris, Tokyo, and New York. Known for sculptural stone plinths and calming restraint.',
    image: '/images/founder_portrait.jpg'
  },
  {
    name: 'Alexandre Roche',
    role: 'Partner & Head of Architecture',
    bio: 'Former senior associate at Studio KO. Alexandre oversees structural engineering, heritage permits, and technical detailing for complex historic estates and ground-up villas.',
    image: '/images/project_kyoto_pavilion.jpg'
  },
  {
    name: 'Camille Saint-Laurent',
    role: 'Director of FF&E & Collectible Art',
    bio: 'Specialist in 20th-century French, Italian, and Scandinavian collectible design. Camille travels between Paris, Milan, and Copenhagen sourcing museum-grade furniture pieces.',
    image: '/images/materials_swatches.jpg'
  },
  {
    name: 'Kenzo Miyamoto',
    role: 'Senior Project Architect (Asia-Pacific)',
    bio: 'Kyoto-trained architect specializing in joinery traditions, micro-climate integration, and minimalist garden courtyards for our private villa commissions.',
    image: '/images/project_coastal_residence.jpg'
  }
];

export const STUDIO_PRESS = [
  { name: 'Architectural Digest', quote: 'Studio Vauquelin crafts sanctuaries that whisper rather than shout—masterclasses in tactile luxury.' },
  { name: 'Elle Decor France', quote: 'A rare vision where historic French classical volume and monastic stillness coexist in pure balance.' },
  { name: 'Wallpaper* Magazine', quote: 'One of Europe’s most compelling boutique interior architecture practices to watch.' },
  { name: 'Dezeen', quote: 'Exceptional restraint: how Studio Vauquelin uses monolithic stone to anchor modern residential life.' },
  { name: 'Dwell', quote: 'Spaces that breathe: thoughtful natural light and honest materiality.' }
];

export const STUDIO_AWARDS = [
  { year: '2025', title: 'Winner, Residential Architecture of the Year', body: 'European Interior Architecture Awards' },
  { year: '2024', title: 'AD100 Best New Interior Design Studio', body: 'Architectural Digest International' },
  { year: '2024', title: 'Gold Medal, Best Hospitality Sanctuary', body: 'International Hospitality Design Forum' },
  { year: '2023', title: 'Excellence in Historic Restoration', body: 'Fondation du Patrimoine Français' }
];

export const STUDIO_ARTICLES: JournalArticle[] = [
  {
    id: '1',
    slug: 'the-tactile-sanctuary',
    title: 'The Tactile Sanctuary: Why Natural Stone and Unlacquered Brass Endure',
    subtitle: 'On the emotional resonance of materials that age with grace instead of decaying into obsolescence.',
    category: 'Material Philosophy',
    readTime: '6 min read',
    date: 'February 2025',
    image: '/images/editorial_journal_cover.jpg',
    excerpt: 'In an era dominated by synthetic perfection and digital surfaces, the human soul craves the grounding honesty of materials touched by geological time and skilled artisan hands.',
    content: {
      lead: 'When entering a room crafted with unsealed Italian travertine, hand-planed French oak, and raw unlacquered brass, the body responds before the intellect has time to formulate an opinion. The heart rate slows. Shoulders drop.',
      paragraphs: [
        'Modern luxury has long been misunderstood as excessive ornamentation, polished gloss, or ostentatious brand logos. At Studio Vauquelin, we practice an opposing discipline: calm luxury rooted in geological honesty and quiet proportion.',
        'Consider unlacquered brass. Commercial interiors frequently seal metal with synthetic polyurethane clearcoats to freeze it in an artificial, shiny state of perpetual novelty. Yet when touched by human hands over months and years, untreated brass oxidizes gently, creating deeper amber lowlights where shadows pool and luminous highlights along the edges that receive frequent touch. It becomes a living record of human touch.'
      ],
      pullQuote: 'A home should not be a static showroom; it must be a sanctuary that records the passage of gentle hours, welcoming the marks of life with quiet grace.',
      sectionTitle: 'The Monolithic Travertine Counterweight',
      subParagraphs: [
        'Travertine carries an ancient, porous dignity. Whether quarried from Tivoli or Navona, its cellular cavities remind us of subterranean mineral waters. In the Villa Saint-Germain salon, we designed a single 900kg monolithic coffee table that anchors the soaring 4.2-meter ceiling.',
        'Surrounded by natural linen drapery and soft morning sunlight, the stone provides an immovable sense of psychological shelter. In uncertain times, our homes must anchor us to the earth.'
      ]
    }
  },
  {
    id: '2',
    slug: 'the-architecture-of-light',
    title: 'The Architecture of Light: Choreographing Shadows in Haussmannian Volumes',
    subtitle: 'How intentional lightwell interventions and translucent linen drapery transform classical French apartments.',
    category: 'Spatial Design',
    readTime: '5 min read',
    date: 'January 2025',
    image: '/images/hero_interior_villa.jpg',
    excerpt: 'Light is not merely illumination; it is our primary building material. Understanding how morning winter light behaves against textured lime plaster is the secret to enduring serenity.',
    content: {
      lead: 'A grand room without deliberate shadow is merely a brightly lit warehouse. True spatial atmosphere arises from the delicate gradation between high luminance and quiet, velvety shade.',
      paragraphs: [
        'In historic European apartments, ceiling mouldings and deep window embrasures were designed specifically to catch raking sunlight. When we strip back inappropriate heavy Victorian drapes and replace them with triple-weave unbleached Belgian linen, the quality of light softens exponentially.',
        'We also eliminate aggressive recessed ceiling downlights that create harsh, unflattering facial shadows. Instead, we wash vertical walls from floor level, illuminate ceiling plaster with warm 2200K indirect coves, and position low-level task lamps at conversational heights.'
      ]
    }
  },
  {
    id: '3',
    slug: 'collecting-for-eternity',
    title: 'Collecting for Eternity: Sourcing 20th-Century Design Icons That Never Depreciate',
    subtitle: 'A strategic guide for design collectors seeking timeless furniture investment alongside daily comfort.',
    category: 'Collectible Design',
    readTime: '8 min read',
    date: 'November 2024',
    image: '/images/materials_swatches.jpg',
    excerpt: 'Why original 1950s Charlotte Perriand stools and Pierre Jeanneret Chandigarh armchairs provide far greater sensory and financial returns than disposable designer trends.',
    content: {
      lead: 'When furnishing an architectural estate, nothing compares to the soul of genuine patina. Vintage collectible furniture possesses an irreplaceable aura of historical intention.',
      paragraphs: [
        'We advise our clients to assemble collections with the patience of an art museum. Rather than ordering thirty matching chairs from a catalog, we curate bespoke dialogues: pairing a 1968 Brazilian rosewood lounge chair by Sergio Rodrigues with a custom-cast bronze table by contemporary Parisian artisans.',
        'The result is a residence that is entirely unrepeatable—immune to fleeting seasonal Pinterest fads and deeply invested with enduring market value.'
      ]
    }
  }
];

export const STUDIO_FAQS = [
  {
    question: 'What is the studio’s typical project timeline from concept to move-in?',
    answer: 'A comprehensive residential renovation typically spans 8 to 14 months, depending on spatial scale and whether structural changes or historic heritage approvals are required. Villa and ground-up architectural projects generally require 14 to 24 months. We furnish clients with a detailed, week-by-week Gantt chart during our initial Discovery phase.'
  },
  {
    question: 'What is your minimum project engagement budget?',
    answer: 'To ensure our senior directors can devote obsessive attention to detailing and bespoke artisan execution, our full interior design commissions typically commence at €75,000 in professional design fees, with typical construction and furnishing budgets starting at €250,000. For targeted initial architectural consultations, we offer focused half-day dossiers starting at €3,500.'
  },
  {
    question: 'Do you work internationally outside of France?',
    answer: 'Yes. Studio Vauquelin maintains active projects across London, New York, Geneva, Tokyo, and the Mediterranean. We employ sophisticated 3D laser-scanning, BIM coordination, and localized contractor vetting protocols, accompanied by monthly on-site director visits to ensure flawless execution worldwide.'
  },
  {
    question: 'How do you handle contractor selection and pricing transparency?',
    answer: 'We operate with 100% financial transparency. Studio Vauquelin does not take hidden contractor kickbacks or unapproved markup markups. We produce comprehensive tender documentation packages and solicit competitive bids from three vetted elite contractors, assisting you in selecting the best team on merit, timeline, and value.'
  },
  {
    question: 'Can you work with our existing art collection or favorite family heirlooms?',
    answer: 'Absolutely. Some of our most poetically layered projects begin with a client’s cherished painting, sculpture, or ancestral credenza. We design specific architectural niches, calibrated museum lighting, and harmonious material palettes specifically to elevate and honor your existing collection.'
  },
  {
    question: 'What distinguishes Studio Vauquelin from traditional interior decorators?',
    answer: 'We are interior architects, not merely surface decorators. We reimagine the fundamental structure of space: moving load-bearing walls with structural engineers, recalculating natural light corridors, designing custom millwork down to the millimetre, and selecting materials meant to patina over centuries.'
  },
  {
    question: 'How do we get started with an initial consultation?',
    answer: 'You can begin by submitting our 2-minute project briefing form on our Contact page or scheduling an exploratory video call. We will review your property blueprints, discuss your vision and budget feasibility, and outline whether our studio is the ideal partner for your home.'
  },
  {
    question: 'What happens if unforeseen structural surprises arise on site?',
    answer: 'Historic and luxury residences often hold surprises beneath old floors and plaster. With our Turnkey Execution service, our team is on site resolving engineering nuances immediately with trusted structural engineers. We maintain a recommended 10% contingency allocation in all budgets to absorb adjustments seamlessly without halting progress.'
  }
];
