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
      subtitle: "NFT-Based Event Ticketing Platform",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      problem:
        "Event organizers faced significant challenges with ticket fraud, scalping, and lack of transparency in ticket authenticity. Traditional ticketing systems couldn't prevent counterfeit tickets, leading to revenue loss and poor user experience.",
      role: "Lead Flutter Developer & Product Designer",
      solution: [
        "Designed and developed a blockchain-based ticketing system using NFT technology",
        "Implemented secure wallet integration for ticket ownership verification",
        "Built real-time QR code scanning with fraud detection algorithms",
        "Created an intuitive UI/UX for seamless ticket purchasing and transfer",
        "Integrated payment gateway with multiple payment methods",
      ],
      techStack: [
        "Flutter",
        "Node.js",
        "MongoDB",
        "Web3",
        "Blockchain",
        "Firebase",
        "Stripe API",
      ],
      impact: [
        {
          metric: "Fraud Reduction",
          value: "95%",
          description: "Eliminated counterfeit tickets through blockchain verification",
        },
        {
          metric: "Active Users",
          value: "5,000+",
          description: "Users successfully purchased and transferred tickets",
        },
        {
          metric: "Events Hosted",
          value: "50+",
          description: "Major events powered by the platform",
        },
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: "analytics",
      title: "Real-Time Analytics Dashboard",
      subtitle: "Data-Driven Business Intelligence Platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      problem:
        "Business stakeholders lacked real-time insights into key metrics, making data-driven decisions difficult. Existing solutions were either too complex or didn't provide mobile accessibility, limiting decision-making speed.",
      role: "Full-Stack Developer & System Architect",
      solution: [
        "Built a responsive dashboard with real-time data visualization",
        "Implemented advanced filtering and custom report generation",
        "Designed scalable backend API to handle high-volume data processing",
        "Created mobile-first interface for on-the-go access",
        "Integrated machine learning for predictive analytics",
      ],
      techStack: [
        "Flutter",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
        "TensorFlow",
      ],
      impact: [
        {
          metric: "Decision Speed",
          value: "70%",
          description: "Faster decision-making with real-time insights",
        },
        {
          metric: "Data Processing",
          value: "1M+",
          description: "Records processed daily with <2s latency",
        },
        {
          metric: "Cost Savings",
          value: "40%",
          description: "Reduced operational costs through automation",
        },
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      id: "ecommerce",
      title: "AI-Powered E-Commerce App",
      subtitle: "Smart Shopping Experience with Personalization",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      problem:
        "Online shoppers experienced low conversion rates due to generic product recommendations and slow checkout processes. The lack of personalization led to cart abandonment rates above 60%.",
      role: "Mobile Developer & AI Integration Specialist",
      solution: [
        "Developed AI-powered recommendation engine using user behavior data",
        "Implemented one-click checkout with secure payment processing",
        "Built image recognition for visual product search",
        "Created personalized user profiles with purchase history analytics",
        "Optimized app performance for smooth 60fps scrolling",
      ],
      techStack: [
        "Flutter",
        "Firebase",
        "TensorFlow Lite",
        "Stripe",
        "GraphQL",
        "Cloud Functions",
      ],
      impact: [
        {
          metric: "Conversion Rate",
          value: "+45%",
          description: "Increased purchases through personalized recommendations",
        },
        {
          metric: "Checkout Speed",
          value: "30% Faster",
          description: "Reduced checkout time from 3min to 2min",
        },
        {
          metric: "Cart Abandonment",
          value: "-35%",
          description: "Significantly reduced cart abandonment rate",
        },
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: "healthcare",
      title: "Telemedicine Mobile Platform",
      subtitle: "Connecting Patients with Healthcare Providers",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      problem:
        "Patients in remote areas struggled to access quality healthcare services. Long wait times and geographical barriers prevented timely medical consultations, affecting health outcomes.",
      role: "Lead Mobile Developer & Product Manager",
      solution: [
        "Built HIPAA-compliant video consultation platform",
        "Implemented secure medical records storage and sharing",
        "Created appointment scheduling system with automated reminders",
        "Developed prescription management and pharmacy integration",
        "Designed offline-first architecture for low-connectivity areas",
      ],
      techStack: [
        "Flutter",
        "WebRTC",
        "Node.js",
        "PostgreSQL",
        "AWS S3",
        "Twilio",
        "FHIR API",
      ],
      impact: [
        {
          metric: "Patients Served",
          value: "10,000+",
          description: "Active patients using the platform monthly",
        },
        {
          metric: "Wait Time",
          value: "-80%",
          description: "Reduced average wait time from 2 weeks to 2 days",
        },
        {
          metric: "Patient Satisfaction",
          value: "4.8/5",
          description: "Average rating from user feedback",
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
