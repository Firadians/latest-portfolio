import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Github,
  Layers,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const PLAY_STORE = (packageId: string) =>
  `https://play.google.com/store/apps/details?id=${packageId}`;

/** Static artwork paths match https://firadians-portfolio.vercel.app/work */
const WORK_SITE_ASSETS = "https://firadians-portfolio.vercel.app/assets";

const localAsset = (pathFromPublicRoot: string) =>
  `${import.meta.env.BASE_URL}${pathFromPublicRoot.replace(/^\//, "")}`;

export interface PortfolioProject {
  id: string;
  featured: boolean;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  technologies: string[];
  stats: { label: string; value: string; icon: LucideIcon }[];
  highlights: string[];
  gradient: string;
  links?: { github?: string; live?: string };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "rolling-loud",
    featured: true,
    title: "Rolling Loud Application",
    subtitle: "Rolling Loud festival experience—maps, purchases, and queues",
    category: "Event Technology",
    description:
      "Cross-platform Rolling Loud experience with live maps, purchases, and on-site services",
    longDescription:
      "Built the Rolling Loud mobile application using Flutter with Mapbox 3D live location updates, in-app purchases for food and merchandise, and queue management for tattoos, haircuts, and high-traffic festival flows.",
    problem:
      "Rolling Loud attendees need reliable maps, commerce, and coordination inside massive, congested venues.",
    solution:
      "Ship a cross-platform app with Mapbox 3D live location, in-app purchases, and online queue management for on-site services.",
    impact:
      "Delivered live coordination, commerce, and service flows tuned for Rolling Loud-scale crowds.",
    image: `${WORK_SITE_ASSETS}/banner/kisum_banner.png`,
    technologies: [
      "Flutter",
      "Mapbox 3D",
      "Realtime Location APIs",
      "In-App Purchases",
    ],
    stats: [
      { label: "Platform", value: "Cross-Platform", icon: Users },
      { label: "Core Feature", value: "Live Tracking", icon: TrendingUp },
      { label: "Brand", value: "Rolling Loud", icon: Sparkles },
    ],
    highlights: [
      "Real-time friend tracking with Mapbox 3D",
      "In-app purchases for food and merchandise",
      "Online queue management features",
      "Built for large-scale festival operations",
    ],
    gradient: "from-orange-500/20 to-pink-500/20",
  },
  {
    id: "mynanny",
    featured: true,
    title: "MyNanny Babysitter Finder",
    subtitle: "AI-powered babysitter finder",
    category: "AI Matching Platform",
    description:
      "AI-powered babysitter matching and real-time nearby recommendation app",
    longDescription:
      "Implemented LLM + vector similarity matching to improve recommendation relevance, plus real-time geolocation to enable instant nearby sitter matching with dual app architecture.",
    problem:
      "Parents waste hours browsing profiles to find compatible babysitters.",
    solution:
      "Match families with sitters using LLM plus vector similarity, preferences, schedules, and compatibility signals.",
    impact:
      "Reduced manual search effort by more than 60% with automated and personalized sitter matching.",
    image: localAsset("assets/projects/mynanny/mynanny.png"),
    technologies: [
      "Flutter",
      "LLM",
      "Vector Similarity",
      "Realtime Geolocation",
      "Firebase",
    ],
    stats: [
      { label: "Efficiency", value: ">60%", icon: TrendingUp },
      { label: "Core", value: "AI Matching", icon: Layers },
      { label: "Architecture", value: "Dual App", icon: Zap },
    ],
    highlights: [
      "LLM-based recommendation system",
      "Vector similarity for compatibility scoring",
      "Real-time nearby matching",
      "Live worker availability updates",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "pclub",
    featured: true,
    title: "P·CLUB",
    subtitle: "Ticketing platform for live events",
    category: "Ticketing Platform",
    description:
      "Digital ticketing platform for concerts, dance, ballet, and other live events",
    longDescription:
      "Built a product that helps users discover events, buy tickets, and manage digital tickets, including support for modern digital and NFT-style ticketing flows.",
    problem:
      "Users and event organizers need a seamless platform to discover events, buy tickets, and manage entry.",
    solution:
      "Create a ticketing product with digital and NFT-based ticket support, payments, and operational tooling.",
    impact:
      "Improved end-to-end ticket purchase and management flow for concerts, dance, ballet, and live events.",
    image: `${WORK_SITE_ASSETS}/projects/pclub/1.png`,
    technologies: ["Flutter", "Stripe", "Xendit", "REST APIs", "PostgreSQL"],
    stats: [
      { label: "Domain", value: "Live Events", icon: Sparkles },
      { label: "Payments", value: "Stripe/Xendit", icon: Users },
      { label: "Store", value: "Google Play", icon: TrendingUp },
    ],
    highlights: [
      "Event discovery and purchase flow",
      "Digital ticket management",
      "Modern event operations support",
      "Built for high-volume event traffic",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    links: { live: PLAY_STORE("com.primuse.pclub") },
  },
  {
    id: "segments",
    featured: false,
    title: "Segments",
    subtitle: "Internal HR & attendance on Google Play",
    category: "Enterprise HR",
    description:
      "Attendance, overtime, leave requests, and performance appraisals for internal teams",
    longDescription:
      "Internal HR mobile app for employee attendance management, overtime and leave workflows, real-time request status, and structured performance appraisals—with role-based access and secure data handling.",
    problem:
      "Organizations need one place for attendance, overtime, leave requests, and appraisals without slow manual paperwork.",
    solution:
      "Ship a secure internal mobile suite with real-time status, structured appraisals, and role-based access.",
    impact:
      "Streamlined HR workflows so employees and management handle attendance and reviews digitally.",
    image: `${WORK_SITE_ASSETS}/banner/segments_banner.png`,
    technologies: ["Flutter", "Firebase", "REST APIs", "PostgreSQL"],
    stats: [
      { label: "Focus", value: "HR Ops", icon: Users },
      { label: "Modules", value: "4+", icon: Layers },
      { label: "Store", value: "Google Play", icon: TrendingUp },
    ],
    highlights: [
      "Attendance and overtime workflows",
      "Leave requests with live status",
      "Performance appraisal module",
      "Built for organizational internal use",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    links: { live: PLAY_STORE("com.keamananpg.segments") },
  },
  {
    id: "pclub-scanner",
    featured: false,
    title: "P·Club Scanner",
    subtitle: "Door-side ticket scanning on Google Play",
    category: "Event Operations",
    description: "Ticket scanning companion app for P·Club events",
    longDescription:
      "Dedicated scanning application for validating P·Club tickets at the door, including scan history for operational visibility during events.",
    problem:
      "Venues need fast, reliable validation of digital tickets during peak entry times.",
    solution:
      "Build a focused scanner app for P·Club with quick scans and history for operational visibility.",
    impact:
      "Reduced friction at entry with a dedicated scanning flow tied to P·Club ticketing.",
    image: `${WORK_SITE_ASSETS}/projects/pclub_scanner/1.png`,
    technologies: ["Flutter", "REST APIs"],
    stats: [
      { label: "Role", value: "Scanner", icon: Zap },
      { label: "Pairing", value: "P·Club", icon: Sparkles },
      { label: "Store", value: "Google Play", icon: TrendingUp },
    ],
    highlights: [
      "Fast on-site ticket validation",
      "Scan history for staff",
      "Updated UI for venue workflows",
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
    links: { live: PLAY_STORE("com.primuse.pclub_scanner") },
  },
  {
    id: "primuse-touring",
    featured: false,
    title: "KISUM",
    subtitle: "Primuse Touring on Google Play — artist & event intelligence",
    category: "Music & Entertainment",
    description:
      "KISUM unifies operations, finance, and business intelligence for live music and events; the mobile companion ships as Primuse Touring on Google Play.",
    longDescription:
      "KISUM is Primuse Group’s platform for touring and event teams: secure web access for company-wide visibility plus a Flutter mobile experience for artist discovery and multi-platform streaming analytics (e.g. YouTube, Spotify) to support booking and touring decisions.",
    problem:
      "Touring and event teams need one place for operational insight and credible artist performance signals across markets.",
    solution:
      "Deliver KISUM as the unified hub—web console for secure operations, finance, and BI, with Primuse Touring as the focused mobile surface for artist intelligence.",
    impact:
      "Strengthened decision-making with consolidated platform visibility and faster access to multi-platform artist metrics.",
    image: localAsset("assets/projects/kisum/login-screen.png"),
    technologies: ["Flutter", "REST APIs", "Analytics APIs", "Web platform"],
    stats: [
      { label: "Product", value: "KISUM", icon: Sparkles },
      { label: "Mobile", value: "Primuse Touring", icon: TrendingUp },
      { label: "Store", value: "Google Play", icon: Users },
    ],
    highlights: [
      "Web platform: operations, finance, and BI in one session",
      "Mobile: artist profiles with YouTube and Spotify-oriented signals",
      "Built for touring, booking, and event operations",
    ],
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    links: { live: PLAY_STORE("com.primuse.artist_app") },
  },
  {
    id: "finflow",
    featured: false,
    title: "Finflow: Money Manager",
    subtitle: "Personal finance on Google Play",
    category: "Personal Finance",
    description:
      "Track spending, budgets, and insights—cloud sync and savings goals",
    longDescription:
      "Personal finance manager for expenses and income, smart budgeting, charts for habits and trends, reminders, encrypted storage, optional cloud sync across devices, and exportable reports.",
    problem:
      "Users need a simple way to track income, expenses, and month-to-month financial changes.",
    solution:
      "Build an app with category-based tracking, visual analytics, budgets, goals, and exportable reports.",
    impact:
      "Enabled clearer spending insights with monthly comparisons, trend graphs, and savings recommendations.",
    image: `${WORK_SITE_ASSETS}/projects/finflow/1.png`,
    technologies: ["Flutter", "REST APIs", "Firebase", "Charts"],
    stats: [
      { label: "Tracking", value: "Income/Expense", icon: Users },
      { label: "Features", value: "Budget + Goals", icon: Code2 },
      { label: "Store", value: "Google Play", icon: Zap },
    ],
    highlights: [
      "Category-based transactions",
      "Budget alerts and savings goals",
      "Charts for spending habits",
      "Cloud sync and report export",
    ],
    gradient: "from-green-500/20 to-teal-500/20",
    links: { live: PLAY_STORE("com.firadians.financial_projection") },
  },
  {
    id: "accessflow",
    featured: false,
    title: "Accessflow",
    subtitle: "RFID barrier access for enterprise gates",
    category: "Enterprise IoT",
    description:
      "RFID mobile access for automatic barrier gates and facility entry",
    longDescription:
      "Mobile solution developed for PT Petrokimia Gresik to bridge RFID access cards with automatic barrier gates—streamlining secure vehicle and personnel entry workflows.",
    problem:
      "Industrial sites need frictionless yet secure vehicle entry tied to RFID credentials.",
    solution:
      "Ship a Flutter app that bridges RFID cards with automatic barrier hardware for audited gate throughput.",
    impact:
      "Modernized gate operations for enterprise deployment contexts.",
    image: `${WORK_SITE_ASSETS}/banner/accessflow_banner.png`,
    technologies: ["Flutter", "Dart", "RFID integration", "REST APIs"],
    stats: [
      { label: "Domain", value: "Access control", icon: Zap },
      { label: "Client", value: "Enterprise", icon: Users },
      { label: "Open Source", value: "GitHub", icon: Github },
    ],
    highlights: [
      "RFID-based gate workflows",
      "Mobile-first operational UX",
      "Built for real industrial deployment context",
    ],
    gradient: "from-slate-500/20 to-cyan-500/20",
    links: { github: "https://github.com/Firadians/Accessflow" },
  },
  {
    id: "batik-capstone",
    featured: false,
    title: "BatikCapstone",
    subtitle: "Bangkit Academy — Batik pattern recognition",
    category: "ML & Heritage Tech",
    description:
      "Image recognition for Indonesian Batik patterns (Bangkit Academy capstone)",
    longDescription:
      "Team capstone applying ML and mobile UX to classify Batik motifs—supporting cultural heritage preservation through accessible pattern recognition.",
    problem:
      "Heritage Batik patterns are hard for newcomers to identify consistently without expert guidance.",
    solution:
      "Deliver an Android experience with ML-driven classification tuned for Batik motif families.",
    impact:
      "Demonstrated practical ML plus UX for preserving and promoting Indonesian cultural heritage.",
    image: `${WORK_SITE_ASSETS}/banner/dewangga_banner.png`,
    technologies: ["Kotlin", "Android", "Machine Learning"],
    stats: [
      { label: "Program", value: "Bangkit", icon: Sparkles },
      { label: "Focus", value: "Vision / ML", icon: Code2 },
      { label: "Open Source", value: "GitHub", icon: Github },
    ],
    highlights: [
      "Pattern-focused recognition pipeline",
      "Android-first delivery",
      "Heritage-oriented product storytelling",
    ],
    gradient: "from-amber-600/20 to-rose-500/20",
    links: { github: "https://github.com/Firadians/BatikCapstoneProject" },
  },
  {
    id: "widenworld",
    featured: false,
    title: "WidenWorld",
    subtitle: "Pixel-art mobile RPG — AQW-inspired worlds",
    category: "Mobile Game",
    description:
      "Top-down fantasy RPG with classes, skills, and exploration tuned for touch-first combat",
    longDescription:
      "WidenWorld channels AdventureQuest Worlds-style progression on mobile: overworld exploration, monsters and NPCs, HP/MP stats, EXP leveling, skill-bar combat, and inventory-minded UX built for landscape sessions.",
    problem:
      "Fans of classic browser MMO RPGs want comparable depth on phones without cluttered controls.",
    solution:
      "Ship a Flutter pixel-art RPG loop—movement, encounters, abilities, and progression readable on small screens.",
    impact:
      "Delivered immersive RPG UX with responsive touch navigation and scalable exploration layouts.",
    image: localAsset("assets/projects/widenworld/widenworld.jpg"),
    technologies: ["Flutter", "Dart", "Game UX", "Pixel art"],
    stats: [
      { label: "Genre", value: "Fantasy RPG", icon: Sparkles },
      { label: "Camera", value: "Top-down", icon: Layers },
      { label: "Feel", value: "AQW-inspired", icon: Zap },
    ],
    highlights: [
      "Class-based stats (Warrior track and expandable roles)",
      "Skill slots and combat-oriented HUD",
      "Pixel overworld with NPCs and hostile encounters",
      "Landscape-first layout for RPG sessions",
    ],
    gradient: "from-emerald-600/20 to-lime-500/20",
  },
  {
    id: "letsfix",
    featured: false,
    title: "Letsfix",
    subtitle: "On-demand home services booking app",
    category: "Service Marketplace",
    description:
      "Mobile app for booking trusted service providers, tracking jobs, and managing appointments.",
    longDescription:
      "Letsfix is an on-demand services platform similar to Yoojo, helping users discover nearby professionals, schedule service visits, confirm bookings, and monitor job progress in a single mobile flow.",
    problem:
      "Customers struggle to quickly find reliable service providers with clear pricing and convenient scheduling.",
    solution:
      "Provide a booking-first mobile experience with provider discovery, appointment slots, and transparent service workflow tracking.",
    impact:
      "Improved service booking convenience with faster provider matching and streamlined appointment handling.",
    image: localAsset("assets/projects/letsfix/letsfix.png"),
    technologies: ["Flutter", "REST APIs", "Geolocation", "Firebase"],
    stats: [
      { label: "Model", value: "On-demand", icon: Zap },
      { label: "Use Case", value: "Book Services", icon: Users },
      { label: "Category", value: "Marketplace", icon: Layers },
    ],
    highlights: [
      "Find and compare nearby service providers",
      "Book services with selected time slots",
      "Track booking and job status in-app",
      "Designed for smooth customer-service coordination",
    ],
    gradient: "from-sky-500/20 to-indigo-500/20",
  },
];

export const featuredProjects = portfolioProjects.filter((p) => p.featured);
