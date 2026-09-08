/* ── Portfolio Structured Data ─────────────────────────────────────
   Anjana Imesh: Associate Software Engineer × Photographer
   Identity, Engineering Systems, Creative Ventures, Photography & Career
─────────────────────────────────────────────────────────────────── */

import heroPhotoOptimized from '../assets/hero-photo-optimized.jpg'
import heroPhotoWebp from '../assets/hero-photo-optimized.webp'
import travelbudyImg from '../assets/travelbudy.png'
import automotiveImg from '../assets/Automotive.jpeg'

export const personal = {
  name: 'Anjana Imesh',
  title: 'Associate Software Engineer',
  secondaryTitle: 'Photographer / Visual Creative',
  tagline: 'I build systems. I frame stories.',
  manifesto:
    'Designing resilient full-stack systems and APIs by day. Framing light, atmosphere, and human stories through the lens. Two disciplines grounded in deliberate craft and attention to detail.',
  location: 'Colombo, Sri Lanka',
  country: 'Sri Lanka',
  status: 'Open for Select Engineering & Visual Collaborations',
  email: 'anjanaimesh600@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1K55Dfkjg1YrpAgd3m9XFwoLzUeRsp1Kj/view?usp=sharing',
  heroImage: heroPhotoOptimized,
  heroImageWebp: heroPhotoWebp,
}

export const socials = [
  { label: 'GitHub', handle: 'AnjanaImesh', url: 'https://github.com/AnjanaImesh' },
  { label: 'LinkedIn', handle: 'anjanaimesh', url: 'https://www.linkedin.com/in/anjanaimesh' },
  { label: 'Behance', handle: 'anjanaz', url: 'https://www.behance.net/anjanaz' },
  { label: 'Onex Media', handle: 'onexmedia.online', url: 'https://onexmedia.online' },
  { label: 'GradPortraits', handle: 'gradportraitslk', url: 'https://gradportraitslk.vercel.app/' },
]

export const engineeringProjects = [
  {
    id: 'waste-wise',
    index: '01',
    title: 'Waste Wise',
    subtitle: 'Municipal Solid Waste Logistics & Route Management Platform',
    role: 'Full Stack Engineer',
    period: '2024 — 2025',
    category: 'Full-Stack Engineering',
    problem:
      'Municipal solid-waste collection in developing urban centers relies on fragmented schedules and unmonitored bin capacities, resulting in fuel waste, delayed pickups, and citizen frustration.',
    decisions:
      'Architected a high-throughput Spring Boot REST backend with normalized MySQL schemas. Integrated geographic bin coordinates, automated status reporting, and a responsive React client.',
    outcome:
      'Eliminated redundant dispatch trips, provided clear municipal visibility into collection logs, and enabled instant resident issue reporting.',
    tech: ['Spring Boot', 'Java', 'React', 'MySQL', 'REST API', 'CSS'],
    github: 'https://github.com/AnjanaImesh/ITPM',
    live: null,
    featured: true,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'travel-buddy',
    index: '02',
    title: 'Travel Buddy',
    subtitle: 'Community-Driven Travel Itinerary & Exploration Network',
    role: 'Backend & Frontend Architect',
    period: '2024',
    category: 'Full-Stack Web App',
    problem:
      'Independent travelers in Sri Lanka struggle to discover authentic off-the-beaten-track destinations through bloated, commercialized travel portals.',
    decisions:
      'Engineered an interactive social exploration engine with Spring Boot micro-endpoints, community rating algorithms, and optimized image-driven destination directories in React.',
    outcome:
      'Delivered sub-100ms API responses for destination queries and an intuitive, mobile-first community feed.',
    tech: ['Spring Boot', 'React', 'MySQL', 'REST API', 'JavaScript'],
    github: 'https://github.com/AnjanaImesh/Travel_Budy',
    live: null,
    featured: true,
    image: travelbudyImg,
  },
  {
    id: 'mr-automotive',
    index: '03',
    title: 'Mr. Automotive',
    subtitle: 'Enterprise Vehicle Service & Workshop Management System',
    role: 'Full Stack Engineer',
    period: '2024',
    category: 'Enterprise MERN Platform',
    problem:
      'Independent service centers frequently experience billing discrepancies, overlapping maintenance bay schedules, and lost vehicle service histories.',
    decisions:
      'Constructed a robust MERN stack architecture with JWT session authentication, atomic MongoDB updates for booking slots, and a centralized technician workflow dashboard.',
    outcome:
      'Streamlined appointment scheduling, real-time parts requisition, and automated invoice PDF generation.',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT Auth'],
    github: 'https://github.com/AnjanaImesh/mr.Automotive',
    live: null,
    featured: true,
    image: automotiveImg,
  },
  {
    id: 'automotive-ui',
    index: '04',
    title: 'Vehicle Service UX Architecture',
    subtitle: 'Conversion-Focused Automotive Maintenance Interface',
    role: 'Design System & UI Architect',
    period: '2024',
    category: 'Product Design & System',
    problem:
      'Complex automotive technical jargon and opaque repair estimation interfaces cause severe booking abandonment on digital garage platforms.',
    decisions:
      'Crafted a transparent step-by-step diagnostic interface in Figma with accessible high-contrast tokens, progressive disclosure of repair tiers, and clear cost breakdowns.',
    outcome:
      'Reduced simulated booking friction by 40% in user testing; documented a reusable design token library on Behance.',
    tech: ['Figma', 'Design Systems', 'WCAG Accessibility', 'UX Research'],
    github: null,
    live: 'https://www.behance.net/gallery/225928345/Vehicle-Service-Website-UI',
    featured: false,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
  },
]

export const creativeVentures = [
  {
    id: 'onex-media',
    name: 'ONEX MEDIA',
    url: 'https://onexmedia.online',
    tagline: 'Visual Media & Commercial Cinematography',
    role: 'Founder & Visual Director',
    founded: '2023',
    location: 'Sri Lanka',
    description:
      'A full-service creative production house delivering cinematic brand storytelling, high-profile event coverage, commercial photography, and digital visual campaigns.',
    capabilities: [
      'Commercial Photography',
      'Event Visual Coverage',
      'Cinematic Video Production',
      'Brand Identity & Direction',
    ],
    highlightImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'grad-portraits',
    name: 'GRADPORTRAITS LK',
    url: 'https://gradportraitslk.vercel.app/',
    tagline: 'Milestone Graduation Portraiture & Storytelling',
    role: 'Founder & Lead Portrait Photographer',
    founded: '2023',
    location: 'Sri Lanka',
    description:
      'A specialized portraiture brand dedicated to capturing university graduation milestones across Sri Lanka. Built on tailored editorial lighting, genuine human celebration, and archival color craftsmanship.',
    capabilities: [
      'Editorial Convocation Sessions',
      'On-Location Architectural Portraits',
      'Studio Direction & Lighting',
      'Fine-Art Retouching & Color Grading',
    ],
    highlightImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    isInternal: false,
  },
  {
    id: 'moonory',
    name: 'MOONORY',
    url: '/photography/moonory',
    tagline: 'Lifestyle & Wedding Photography',
    role: 'Founder & Photographer',
    founded: '2024',
    location: 'Sri Lanka',
    description:
      'An intimate, documentary-led photography practice dedicated to unscripted life moments, warm environmental lighting, and natural wedding storytelling. Focused on genuine human connection rather than posed clichés.',
    capabilities: [
      'Intimate Lifestyle Sessions',
      'Documentary Wedding Storytelling',
      'Natural Light Portraiture',
      'Atmospheric Couple Sessions',
    ],
    highlightImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    isInternal: true,
  },
]

export const photographyWorks = [
  {
    id: 'photo-1',
    title: 'Convocation Reverie',
    series: 'Graduation & Milestone',
    brand: 'GradPortraits LK',
    location: 'BMICH, Colombo',
    year: '2024',
    aspect: 'portrait',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    caption: 'Quiet reflections after years of rigorous academic pursuit. Natural open-shade illumination.',
  },
  {
    id: 'photo-2',
    title: 'The Electric Stage',
    series: 'Concerts & Events',
    brand: 'Onex Media',
    location: 'Nelum Pokuna, Colombo',
    year: '2024',
    aspect: 'landscape',
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    caption: 'Dynamic stage lighting capture preserving rich shadows and vibrant saturation during live performance.',
  },
  {
    id: 'photo-3',
    title: 'Unscripted Afternoon',
    series: 'Lifestyle & Portrait',
    brand: 'Moonory',
    location: 'Nuwara Eliya, Sri Lanka',
    year: '2024',
    aspect: 'portrait',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
    caption: 'Warm highland golden hour. Candid laughter and natural environmental tones without artificial flash.',
  },
  {
    id: 'photo-4',
    title: 'Ceremony of Ties',
    series: 'Weddings & Celebrations',
    brand: 'Onex Media',
    location: 'Kandy, Sri Lanka',
    year: '2024',
    aspect: 'landscape',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    caption: 'Tradition meets contemporary editorial composition. Documenting intimate familial bonds.',
  },
  {
    id: 'photo-5',
    title: 'Vows in Twilight',
    series: 'Intimate Weddings',
    brand: 'Moonory',
    location: 'Bentota, Sri Lanka',
    year: '2024',
    aspect: 'portrait',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
    caption: 'Soft ocean twilight framing an unspoken promise. Pure documentary wedding photography.',
  },
  {
    id: 'photo-6',
    title: 'Milestone Elegance',
    series: 'Graduation & Milestone',
    brand: 'GradPortraits LK',
    location: 'University of Colombo',
    year: '2024',
    aspect: 'landscape',
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
    caption: 'Framed against heritage campus colonnades. Clean directional backlight and organic emotion.',
  },
]

export const moonoryGallery = [
  {
    id: 'moonory-1',
    title: 'Highland Serenade',
    category: 'Lifestyle',
    location: 'Ella, Sri Lanka',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    caption: 'Golden light cascading through tea country mists. Unhurried, organic human connection.',
  },
  {
    id: 'moonory-2',
    title: 'Whispered Vows',
    category: 'Weddings',
    location: 'Bentota Beach, Sri Lanka',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    caption: 'Quiet intimacy by the Indian Ocean. Documenting emotions as they naturally unfold.',
  },
  {
    id: 'moonory-3',
    title: 'The Linen Morning',
    category: 'Lifestyle',
    location: 'Colombo, Sri Lanka',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    caption: 'Soft diffused morning window light and quiet contemplation.',
  },
  {
    id: 'moonory-4',
    title: 'Colonial Courtyard',
    category: 'Weddings',
    location: 'Galle Fort, Sri Lanka',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop',
    caption: 'Timeless architectural framing with authentic celebration.',
  },
]

export const careerTimeline = [
  {
    period: '2026 — PRESENT',
    role: 'Associate Software Engineer',
    context: 'Enterprise Software Engineering',
    location: 'Sri Lanka',
    description:
      'Engineering robust full-stack web applications, RESTful micro-architectures, and high-performance frontend interfaces. Leading backend feature implementation in Spring Boot and Node.js with strict adherence to clean code and test-driven reliability.',
  },
  {
    period: 'DEC 2025 — JUL 2026',
    role: 'Software Engineering Intern',
    context: 'Product Development & Full-Stack Systems',
    location: 'Sri Lanka',
    description:
      'Engineered production React frontend modules, implemented and documented REST API endpoints in Java/Spring Boot, designed normalized relational database schemas, and actively contributed to agile sprints and code reviews.',
  },
  {
    period: '2023 — 2026',
    role: 'Degree (BSc Hons in Information Technology)',
    context: 'Software Engineering Specialization',
    location: 'Sri Lanka',
    description:
      'Comprehensive study of Distributed Systems, Software Architecture, Object-Oriented Design, Relational Database Engineering, Data Structures, Algorithms, and HCI.',
  },
]

export const capabilities = [
  {
    domain: 'Engineering Systems',
    focus: 'Frontend Architecture & Performance',
    items: ['React & Next.js Ecosystem', 'Modern JavaScript / ESNext', 'Component Design Systems', 'Web Performance & Core Vitals', 'Responsive & Mobile Architecture', 'Accessibility (WCAG 2.1)'],
  },
  {
    domain: 'Backend & APIs',
    focus: 'Resilient Server Architecture',
    items: ['Java / Spring Boot Framework', 'Node.js & Express / NestJS', 'RESTful API Engineering', 'JWT Auth & RBAC Security', 'Microservices Fundamentals', 'Relational & NoSQL Schema Design'],
  },
  {
    domain: 'Data & Infrastructure',
    focus: 'Storage, DevOps & Tooling',
    items: ['MySQL & PostgreSQL Relational DBs', 'MongoDB Document Storage', 'Docker Containerization', 'Git & Branching Workflows', 'CI/CD Pipelines & Cloud Deployments', 'Vite & Modern Build Tools'],
  },
  {
    domain: 'Visual Storytelling',
    focus: 'Photography, Media & Direction',
    items: ['Editorial Portrait Photography', 'Event & Commercial Cinematography', 'Studio & Natural Lighting Direction', 'Color Science & RAW Post-Processing', 'DaVinci Resolve & Lightroom Workflows', 'Brand Visual Positioning'],
  },
]
