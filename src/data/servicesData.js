// 10 Deskab Projects services with realistic topic-matched imagery for dedicated pages
export const services = [
  {
    id: 'painting',
    slug: 'service-painting',
    title: 'Painting',
    shortDesc: 'Interior & exterior painting that transforms every surface with precision, durability, and colour that lasts.',
    desc: 'From a single room refresh to full exterior repaints — we prepare, prime, and finish to the highest standards.',
    features: ['Interior & Exterior', 'Waterproofing coats', 'Free colour consult'],
    details: 'Professional painting that goes far beyond a brush and a tin. We assess surfaces, repair cracks, apply correct primers, and finish with premium quality paints. Whether it\'s a new build, a rental property, or a heritage home — every surface gets the attention it deserves.',
    bullets: [
      'Interior walls, ceilings, and feature walls',
      'Exterior repaints and weatherproofing systems',
      'Damp and waterproofing treatment coatings',
      'Epoxy floors and garage floor finishes',
      'Free colour consultation and test patches',
      'Plascon, Dulux, and top-brand materials used'
    ],
    process: [
      { step: '01', title: 'Site Assessment', desc: 'We inspect surfaces for cracks, damp, and peeling before recommending products.' },
      { step: '02', title: 'Surface Preparation', desc: 'Sanding, patching, priming — the prep is everything. We never skip this stage.' },
      { step: '03', title: 'Application', desc: 'Two to three coats of premium paint applied by our skilled team for perfect coverage.' },
      { step: '04', title: 'Final Inspection', desc: 'We walk through with you and touch up anything that isn\'t perfect before we leave.' }
    ],
    image: '/images/service_painting.jpg',
    gallery: [
      '/images/WhatsApp Image 2026-07-30 at 11.35.11 AM (1).jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.11 AM.jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.13 AM (1).jpeg'
    ],
    timeframe: '1–5 days depending on size',
    icon: 'Brush'
  },
  {
    id: 'tiling',
    slug: 'service-tiling',
    title: 'Tiling',
    shortDesc: 'Precision tiling for kitchens, bathrooms, patios, and commercial spaces — every tile laser-level perfect.',
    desc: 'Ceramic, porcelain, slate, and large-format tiles laid with precision — floors, walls, and outdoor spaces.',
    features: ['Floor & Wall Tiles', 'Outdoor Porcelain', 'Mosaic & Feature Walls'],
    details: 'Tiling is equal parts craft and engineering. Poorly laid tiles crack, lift, and look amateurish within years. Our tiling teams are specialists — they work to laser levels, use the correct adhesives for every substrate, and produce results that are visually stunning and built to last decades.',
    bullets: [
      'Kitchen floor and wall tiling',
      'Bathroom and wet room waterproofing & tiling',
      'Outdoor and patio porcelain tiling',
      'Feature walls and mosaic tile work',
      'Large-format tile installation (up to 1200x2400mm)',
      'Commercial and retail floor tiling'
    ],
    process: [
      { step: '01', title: 'Layout Planning', desc: 'We plan the tile layout on paper first, ensuring patterns, cuts, and joints look perfect.' },
      { step: '02', title: 'Substrate Preparation', desc: 'Floors levelled, walls waterproofed where required, existing tiles removed cleanly.' },
      { step: '03', title: 'Precision Laying', desc: 'Every tile set to laser level with the correct adhesive for the application.' },
      { step: '04', title: 'Grouting & Sealing', desc: 'Professional grouting, edge trims, and sealing for longevity and easy maintenance.' }
    ],
    image: '/images/WhatsApp Image 2026-07-30 at 11.35.13 AM.jpeg',
    gallery: [
      '/images/WhatsApp Image 2026-07-30 at 11.35.16 AM (1).jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.16 AM.jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.20 AM (1).jpeg'
    ],
    timeframe: '2–7 days depending on area',
    icon: 'Grid3x3'
  },
  {
    id: 'wooden-floors',
    slug: 'service-wooden-floors',
    title: 'Wooden Floors',
    shortDesc: 'Hardwood, engineered, and laminate floors installed, sanded, and sealed to a showroom finish.',
    desc: 'Solid hardwood, engineered timber, laminate, and vinyl plank floors — supplied, installed, and finished to perfection.',
    features: ['Solid Hardwood', 'Sanding & Sealing', 'Decking & Cladding'],
    details: 'There is nothing like the warmth and beauty of a real wooden floor. We source, supply, and install a wide range of timber floor options — from affordable laminate to premium solid hardwood — and we sand and seal existing floors back to new condition.',
    bullets: [
      'Solid hardwood floor installation (Saligna, Oak, Kiaat)',
      'Engineered timber floating floor systems',
      'Laminate and luxury vinyl plank (LVP) installation',
      'Existing floor sanding, staining, and resealing',
      'Outdoor timber decking and installation',
      'Timber wall cladding and feature walls'
    ],
    process: [
      { step: '01', title: 'Product Selection', desc: 'We help you choose the right floor type for your lifestyle, budget, and aesthetic.' },
      { step: '02', title: 'Subfloor Prep', desc: 'Subfloor levelled and moisture-tested — critical for long-term floor performance.' },
      { step: '03', title: 'Installation', desc: 'Expert installation with precision cuts, expansion gaps, and proper acclimatisation.' },
      { step: '04', title: 'Sanding & Finishing', desc: 'Three-pass sanding and premium sealant or oil finish applied for a flawless result.' }
    ],
    image: '/images/WhatsApp Image 2026-07-30 at 11.35.20 AM.jpeg',
    gallery: [
      '/images/WhatsApp Image 2026-07-30 at 11.35.23 AM (1).jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.23 AM (2).jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.23 AM.jpeg'
    ],
    timeframe: '3–7 days depending on size',
    icon: 'Layers'
  },
  {
    id: 'ceilings-cornices',
    slug: 'service-ceilings-cornices',
    title: 'Ceilings & Cornices',
    shortDesc: 'Rhinoboard, PVC, and feature bulkhead ceilings installed with seamless cornices and LED cove lighting.',
    desc: 'Rhinoboard, Nutec, PVC strip, and feature ceilings — new installations, repairs, and decorative cornice work.',
    features: ['Rhinoboard & PVC', 'Bulkhead Ceilings', 'Cornice & Coving'],
    details: 'A quality ceiling transforms the feel of any room. We install all ceiling types — from standard Rhinoboard for new homes to decorative coffered ceilings and LED bulkheads for a premium finish. Our cornice work is precise and clean — the sign of a truly professional finish.',
    bullets: [
      'Rhinoboard (gypsum board) ceiling installations',
      'PVC strip ceiling systems for kitchens and bathrooms',
      'Bulkhead ceilings with LED strip light integration',
      'Coffered and dropped feature ceiling designs',
      'Decorative cornice installation (plaster and PVC)',
      'Ceiling repairs, skim coat, and repaints'
    ],
    process: [
      { step: '01', title: 'Design & Planning', desc: 'We discuss ceiling heights, feature elements, lighting, and cornices before starting.' },
      { step: '02', title: 'Framework', desc: 'Steel or timber ceiling grid erected to exact specifications and levels.' },
      { step: '03', title: 'Boarding & Plastering', desc: 'Rhinoboard fitted, joints skimmed, and surface prepared for paint or texture.' },
      { step: '04', title: 'Cornices & Details', desc: 'Cornices fitted and finished, LED housings installed, ready for painting.' }
    ],
    image: '/images/WhatsApp Image 2026-07-30 at 11.35.24 AM.jpeg',
    gallery: [
      '/images/WhatsApp Image 2026-07-30 at 11.35.33 AM.jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.34 AM (1).jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.34 AM.jpeg'
    ],
    timeframe: '2–5 days per area',
    icon: 'Square'
  },
  {
    id: 'drywalling',
    slug: 'service-drywalling',
    title: 'Drywalling',
    shortDesc: 'Steel stud partition walls, soundproofing, and office cubicle systems — fast, clean, and versatile.',
    desc: 'Light steel frame partitions for homes and offices — subdivide spaces, create sound barriers, and add insulation quickly.',
    features: ['Steel Stud Partitions', 'Soundproofing', 'Office Cubicles'],
    details: 'Drywalling is the fastest, cleanest way to add or change rooms without major structural demolition. We use galvanised steel stud frames with Rhinoboard cladding for walls that are straight, durable, and ready to paint or tile. Perfect for new offices, subdivided rentals, and residential redesigns.',
    bullets: [
      'Steel stud partition wall systems (single and double skin)',
      'Acoustic sound-reduction drywalling',
      'Fire-rated partition systems for commercial buildings',
      'Office cubicle and open-plan divider systems',
      'Insulation installation within cavities',
      'Full skim plaster and ready-to-paint finish'
    ],
    process: [
      { step: '01', title: 'Layout Design', desc: 'We plan the partition layout with you — dimensions, door positions, and electrical runs.' },
      { step: '02', title: 'Steel Frame', desc: 'Galvanised steel track and stud frame erected, plumb and true.' },
      { step: '03', title: 'Boarding', desc: 'Rhinoboard fixed, insulation inserted where required, joints taped and skimmed.' },
      { step: '04', title: 'Finishing', desc: 'Final skim coat applied and sanded smooth, ready for painting or tiling.' }
    ],
    image: '/images/WhatsApp Image 2026-07-30 at 11.35.35 AM (1).jpeg',
    gallery: [
      '/images/WhatsApp Image 2026-07-30 at 11.35.35 AM.jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.36 AM (1).jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.36 AM.jpeg'
    ],
    timeframe: '1–4 days per partition',
    icon: 'PanelLeft'
  },
  {
    id: 'carpentry',
    slug: 'service-carpentry',
    title: 'Carpentry',
    shortDesc: 'Custom built-in cupboards, kitchen cabinetry, doors, frames, and bespoke timber joinery for every space.',
    desc: 'From built-in bedroom cupboards to full custom kitchens — our carpenters craft functional beauty for every space.',
    features: ['Built-in Cupboards', 'Custom Kitchens', 'Doors & Frames'],
    details: 'Carpentry is where the real character of a home is made. Our skilled carpenters design and build custom joinery that fits your exact space and style — sliding doors with soft-close mechanisms, kitchen cabinetry with perfectly aligned drawer pulls, and wardrobes that use every centimetre of space beautifully.',
    bullets: [
      'Custom built-in bedroom cupboards and wardrobes',
      'Kitchen cabinetry — design, manufacture, and installation',
      'Bathroom vanities and feature shelving units',
      'Solid wood door hanging and new frame installation',
      'TV feature walls and entertainment unit builds',
      'Skirting boards, architraves, and trim carpentry'
    ],
    process: [
      { step: '01', title: 'Design Session', desc: 'We measure your space and design to the millimetre — materials, finishes, handles, all chosen.' },
      { step: '02', title: 'Manufacturing', desc: 'Your joinery is custom manufactured in our workshop to exact specifications.' },
      { step: '03', title: 'Installation', desc: 'Our carpenters install with precision — level, plumb, and perfectly finished.' },
      { step: '04', title: 'Handover', desc: 'We adjust, test, and demonstrate before signing off on a defect-free installation.' }
    ],
    image: '/images/Screenshot 2026-07-30 062601.png',
    gallery: [
      '/images/Screenshot 2026-07-30 062752.png',
      '/images/WhatsApp Image 2026-07-30 at 11.35.00 AM.jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.02 AM (1).jpeg'
    ],
    timeframe: '1–3 weeks from design approval',
    icon: 'Hammer'
  },
  {
    id: 'plumbing',
    slug: 'service-plumbing',
    title: 'Plumbing',
    shortDesc: 'Geysers, new installations, bathroom renovations, and 24-hour emergency leak response across Centurion.',
    desc: 'Registered plumbers for geyser installations, bathroom renovations, burst pipes, and complete new plumbing systems.',
    features: ['Geyser Installations', 'Bathroom Renovations', 'Emergency Response'],
    details: 'Our registered plumbers handle everything from a dripping tap to a complete new bathroom installation. We work with all pipe materials — copper, CPVC, and PEX — and carry the parts to handle most emergencies on the first call-out.',
    bullets: [
      'Geyser installation, replacement, and solar geyser retrofits',
      'Full bathroom renovations (strip out to tile and fit)',
      'Hot and cold water pipe replacement and rerouting',
      'Burst pipe emergency repairs — same-day response',
      'Drain cleaning, unblocking, and camera inspection',
      'Water meter and isolation valve installation'
    ],
    process: [
      { step: '01', title: 'Assessment', desc: 'We inspect your plumbing system, identify issues, and provide a clear written quote.' },
      { step: '02', title: 'Planning', desc: 'For renovations, we map pipe routes, drain falls, and geyser positioning.' },
      { step: '03', title: 'Installation', desc: 'Registered plumbers carry out all work to SANS standards with quality materials.' },
      { step: '04', title: 'Pressure Test', desc: 'All new pipework is pressure tested before walls are closed up.' }
    ],
    image: '/images/WhatsApp Image 2026-07-30 at 11.35.02 AM.jpeg',
    gallery: [
      '/images/WhatsApp Image 2026-07-30 at 11.35.03 AM.jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.04 AM.jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.06 AM.jpeg'
    ],
    timeframe: 'Emergency same-day; renovations 3–10 days',
    icon: 'Droplets'
  },
  {
    id: 'electrical',
    slug: 'service-electrical',
    title: 'Electrical',
    shortDesc: 'COC-certified electrical work — DB boards, wiring, lighting design, and solar backup system interfacing.',
    desc: 'Registered electricians for new wiring, DB board upgrades, COC certificates, and solar inverter connections.',
    features: ['DB Boards & COC', 'Wiring & Lighting', 'Solar Integration'],
    details: 'All our electrical work is carried out by registered electricians and backed by a Certificate of Compliance (COC) — essential for insurance and property transfer. From a new power point to a full house rewire and solar inverter integration, we do it right.',
    bullets: [
      'New home and renovation electrical installations',
      'Distribution board (DB board) upgrades and replacements',
      'Certificate of Compliance (COC) for property transfers',
      'Lighting design and installation (LED, downlights, pendants)',
      'Solar inverter and battery backup system wiring',
      'CCTV, intercom, and gate motor electrical connections'
    ],
    process: [
      { step: '01', title: 'Load Assessment', desc: 'We assess your existing load, future requirements, and solar compatibility upfront.' },
      { step: '02', title: 'Design & Quote', desc: 'Written quote detailing all materials, cable routes, and compliance items.' },
      { step: '03', title: 'Certified Installation', desc: 'Registered electricians carry out all work to SANS 10142 standards.' },
      { step: '04', title: 'COC Issued', desc: 'Certificate of Compliance issued on completion — every time, no exceptions.' }
    ],
    image: '/images/WhatsApp Image 2026-07-30 at 11.35.07 AM.jpeg',
    gallery: [
      '/images/WhatsApp Image 2026-07-30 at 11.35.10 AM.jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.11 AM (1).jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.11 AM.jpeg'
    ],
    timeframe: '1 day (repairs) to 2 weeks (full install)',
    icon: 'Zap'
  },
  {
    id: 'building',
    slug: 'service-building',
    title: 'Building',
    shortDesc: 'Extensions, boundary walls, new rooms, and complete turnkey construction — from foundations to finishes.',
    desc: 'Structural brickwork, extensions, boundary walls, and complete new builds — foundation to final paint coat.',
    features: ['Extensions & Additions', 'Boundary Walls', 'Turnkey Construction'],
    details: 'Whether you need an extra bedroom, a new garage, a boundary wall, or a complete new structure, our building team handles all structural work. We manage the full process — plans, council approval, foundations, superstructure, and finishing — under one roof.',
    bullets: [
      'Home extensions and additional room construction',
      'Boundary walls, retaining walls, and precast',
      'Garage and carport construction',
      'Complete new home construction (turnkey)',
      'Structural alterations and load-bearing wall removal',
      'Council plan submission and approval management'
    ],
    process: [
      { step: '01', title: 'Design & Plans', desc: 'We work with your architect or draw up basic plans — then submit for council approval.' },
      { step: '02', title: 'Foundation', desc: 'Strip or pad foundations cast to engineering specs and local soil conditions.' },
      { step: '03', title: 'Superstructure', desc: 'Brickwork, lintels, roof structure, and all wet trades completed in sequence.' },
      { step: '04', title: 'Finishes', desc: 'Plastering, screed, ceilings, tiling, painting — full turnkey finish if required.' }
    ],
    image: '/images/service_building.jpg',
    gallery: [
      '/images/service_building.jpg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.13 AM (1).jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.13 AM.jpeg'
    ],
    timeframe: '2 weeks to 6 months depending on scope',
    icon: 'Building2'
  },
  {
    id: 'solar-installation',
    slug: 'service-solar-installation',
    title: 'Solar Installation',
    shortDesc: 'Grid-tied and off-grid solar PV, inverter, and lithium battery systems — designed for South African load shedding.',
    desc: 'Rooftop solar PV panels, hybrid inverters, and lithium battery storage — fully designed, installed, and commissioned.',
    features: ['Solar PV Panels', 'Lithium Batteries', 'Hybrid Inverters'],
    details: 'South Africa\'s energy landscape demands a reliable solar solution. We design and install complete solar power systems — from a simple 5kW loadshedding backup to full off-grid solutions for farms and rural properties. All systems are NERSA-compliant and fully insured.',
    bullets: [
      'Grid-tied, hybrid, and off-grid solar system design',
      'High-efficiency monocrystalline solar panel installation',
      'Lithium iron phosphate (LiFePO4) battery systems',
      'Victron, Deye, Sunsynk, and SolarEdge inverters',
      'NERSA-compliant installations with utility notification',
      'System monitoring setup and app configuration'
    ],
    process: [
      { step: '01', title: 'Energy Audit', desc: 'We analyse your bills and usage profile to size your system correctly — no overselling.' },
      { step: '02', title: 'System Design', desc: 'Panel layout, inverter selection, battery sizing, and cable routing all designed and quoted.' },
      { step: '03', title: 'Installation', desc: 'Panels mounted, DC and AC cabling run, inverter and battery bank installed by certified techs.' },
      { step: '04', title: 'Commission & Monitor', desc: 'System tested under load, monitoring app configured, and full handover to you.' }
    ],
    image: '/images/service_solar.jpg',
    gallery: [
      '/images/WhatsApp Image 2026-07-30 at 11.35.16 AM (1).jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.16 AM.jpeg',
      '/images/WhatsApp Image 2026-07-30 at 11.35.20 AM (1).jpeg'
    ],
    timeframe: '1–3 days for residential systems',
    icon: 'Sun'
  }
];
