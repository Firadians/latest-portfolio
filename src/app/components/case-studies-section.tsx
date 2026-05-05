import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  AlertCircle,
  Target,
  Code2,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  problem: string;
  role: string;
  solution: string[];
  techStack: string[];
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  link?: string;
  github?: string;
  gradient: string;
}

export function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const caseStudies: CaseStudy[] = [
    {
      id: "pclub",
      title: "P.CLUB Ticketing System",
      subtitle: "Digital Ticketing Platform for Live Events",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      problem:
        "Event organizers needed a seamless way to manage event discovery, ticket purchasing, and digital access across concerts, dance, ballet, and other live events.",
      role: "Product Manager & Mobile Application Developer",
      solution: [
        "Designed end-to-end ticket purchase and management journeys",
        "Implemented Stripe and Xendit for seamless payment flows",
        "Built product features for digital and NFT-based ticket handling",
        "Improved UX for event discovery and conversion",
        "Aligned backend, web, and mobile product integration",
      ],
      techStack: [
        "Flutter",
        "REST APIs",
        "PostgreSQL",
        "Stripe",
        "Xendit",
      ],
      impact: [
        {
          metric: "Transaction Time",
          value: ">90%",
          description: "Faster payment transaction flow after integration",
        },
        {
          metric: "Transaction Volume",
          value: "$1M+",
          description: "Supported large transaction value in production",
        },
        {
          metric: "Product Build",
          value: "10+",
          description: "Product build",
        },
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: "mynanny",
      title: "MyNanny",
      subtitle: "AI-Powered Babysitter Finder",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      problem:
        "Parents spent too much time manually searching for compatible babysitters, while providers lacked efficient discovery from nearby families.",
      role: "Mobile Developer & AI Integration Engineer",
      solution: [
        "Built LLM-powered matching with vector similarity scoring",
        "Created personalized recommendation flows based on user preferences",
        "Added real-time geolocation for nearby sitter discovery",
        "Designed dual-app architecture for families and babysitters",
        "Implemented live availability updates for faster matching",
      ],
      techStack: [
        "Flutter",
        "LLM",
        "Vector Similarity",
        "Firebase",
        "Realtime Location APIs",
      ],
      impact: [
        {
          metric: "Search Efficiency",
          value: ">60%",
          description: "Reduced manual search effort through automated matching",
        },
        {
          metric: "Recommendation Quality",
          value: "Higher",
          description: "Improved relevance with LLM + vector scoring",
        },
        {
          metric: "Matching Speed",
          value: "Real-time",
          description: "Enabled nearby instant matching with live availability",
        },
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      id: "rolling-loud",
      title: "Rolling Loud Application",
      subtitle: "Official-scale festival coordination on mobile",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      problem:
        "Festival visitors need a faster way to coordinate with friends, buy on-site items, and avoid long service queues in crowded venues.",
      role: "Lead Flutter Developer",
      solution: [
        "Implemented real-time friend tracking on Mapbox 3D",
        "Built in-app purchase flows for food, drinks, and merchandise",
        "Created queue management features for tattoo and haircut services",
        "Designed cross-platform app architecture for event reliability",
        "Optimized key journeys for fast in-event usage",
      ],
      techStack: [
        "Flutter",
        "Mapbox 3D",
        "Realtime APIs",
        "In-App Purchases",
      ],
      impact: [
        {
          metric: "Core Capability",
          value: "Live Tracking",
          description: "Enabled real-time location coordination during events",
        },
        {
          metric: "User Experience",
          value: "Smoother",
          description: "Reduced friction for in-event purchases and services",
        },
        {
          metric: "Delivery Scope",
          value: "End-to-End",
          description: "Shipped end-to-end Rolling Loud mobile application experience",
        },
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: "petrokimia-internal",
      title: "Segments Internal HR App",
      subtitle: "Security Department Mobile Platform",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      problem:
        "Security operations needed an internal tool for attendance, salary/payment tracking, reporting, and updates in one integrated workflow.",
      role: "Full Stack Mobile Developer",
      solution: [
        "Built internal HR application tailored to security operations",
        "Implemented live attendance tracking with area-based location checks",
        "Added salary and payment management modules",
        "Added real-time security reports and company news updates",
        "Ensured stable behavior across Android and iOS devices",
      ],
      techStack: [
        "Flutter",
        "Firebase",
        "REST APIs",
        "PostgreSQL",
      ],
      impact: [
        {
          metric: "UAT Success",
          value: "100%",
          description: "Delivered internal apps that passed full acceptance testing",
        },
        {
          metric: "Usability Score",
          value: "+5%",
          description: "Improved usability score from 90% to 95%",
        },
        {
          metric: "Task Efficiency",
          value: "+50%",
          description: "Improved efficiency from 0.04 to 0.06 goals/sec",
        },
      ],
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-zinc-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.1)",
                "0 0 40px rgba(6, 182, 212, 0.2)",
                "0 0 20px rgba(6, 182, 212, 0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Target className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Case Studies</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Problem → Solution → Impact
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Real projects. Real problems solved. Real measurable results.
          </p>
        </motion.div>

        {/* Case Study Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {caseStudies.map((study, index) => (
            <motion.button
              key={study.id}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCase === index
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-white border border-zinc-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {study.title.split(" ")[0]}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Case Study Display */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Left: Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-96 object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentCase.gradient} opacity-60`}
              />
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-6">
              {currentCase.link && (
                <motion.a
                  href={currentCase.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Live Demo</span>
                </motion.a>
              )}
              {currentCase.github && (
                <motion.a
                  href={currentCase.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 hover:bg-zinc-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Source Code</span>
                </motion.a>
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {currentCase.title}
              </h3>
              <p className="text-cyan-400 text-lg">{currentCase.subtitle}</p>
            </div>

            {/* Problem */}
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl p-6 border border-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <h4 className="text-lg font-semibold text-white">The Problem</h4>
              </div>
              <p className="text-zinc-300 leading-relaxed">{currentCase.problem}</p>
            </div>

            {/* Role */}
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-purple-400" />
                <h4 className="text-lg font-semibold text-white">My Role</h4>
              </div>
              <p className="text-zinc-300 font-semibold">{currentCase.role}</p>
            </div>

            {/* Tech Stack */}
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">Tech Stack</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentCase.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-green-500/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-green-400" />
            <h4 className="text-2xl font-semibold text-white">The Solution</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCase.solution.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 bg-green-500/5 rounded-lg border border-green-500/10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-zinc-300 text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-8 justify-center">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            <h4 className="text-2xl font-semibold text-white">Measurable Impact</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentCase.impact.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-white font-semibold mb-2">{metric.metric}</div>
                <div className="text-sm text-zinc-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
