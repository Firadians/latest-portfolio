import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Search,
  Users,
  Target,
  FileText,
  TrendingUp,
  Lightbulb,
  Layout,
  Code,
  TestTube,
  Rocket,
  BarChart,
  RefreshCw,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

interface ProcessPhase {
  id: string;
  role: "PM" | "Dev" | "Both";
  title: string;
  description: string;
  icon: any;
  activities: string[];
  deliverables: string[];
  image: string;
  gradient: string;
}

export function WorkProcessSection() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activePhase, setActivePhase] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const processPhases: ProcessPhase[] = [
    {
      id: "discovery",
      role: "PM",
      title: "Discovery & Research",
      description: "Understanding the market and user needs",
      icon: Search,
      activities: [
        "Market analysis & competitive research",
        "User interviews & surveys",
        "Identify pain points & opportunities",
        "Stakeholder alignment sessions",
      ],
      deliverables: [
        "Market research report",
        "Competitive analysis matrix",
        "User persona documents",
        "Problem statement",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: "strategy",
      role: "PM",
      title: "Product Strategy",
      description: "Defining vision and roadmap",
      icon: Target,
      activities: [
        "Define product vision & goals",
        "Create product roadmap",
        "Prioritize features (MoSCoW method)",
        "Define success metrics & KPIs",
      ],
      deliverables: [
        "Product vision document",
        "Quarterly roadmap",
        "Feature priority matrix",
        "Success metrics dashboard",
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      id: "requirements",
      role: "PM",
      title: "Requirements & User Stories",
      description: "Translating needs into actionable specs",
      icon: FileText,
      activities: [
        "Write detailed user stories",
        "Create acceptance criteria",
        "Technical requirements documentation",
        "User flow mapping",
      ],
      deliverables: [
        "User story backlog",
        "Technical specifications",
        "User flow diagrams",
        "Acceptance criteria docs",
      ],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      id: "design",
      role: "Both",
      title: "Design & Prototyping",
      description: "Creating intuitive user experiences",
      icon: Layout,
      activities: [
        "Wireframing & mockups",
        "Interactive prototypes",
        "Design system creation",
        "Usability testing",
      ],
      deliverables: [
        "High-fidelity mockups",
        "Interactive prototypes",
        "Design system library",
        "Usability test results",
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      id: "development",
      role: "Dev",
      title: "Mobile Development",
      description: "Building scalable & robust applications",
      icon: Code,
      activities: [
        "Architecture planning & setup",
        "Feature implementation (sprints)",
        "API integration & backend setup",
        "Code reviews & pair programming",
      ],
      deliverables: [
        "Production-ready code",
        "Technical documentation",
        "API integration",
        "Unit & integration tests",
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: "testing",
      role: "Both",
      title: "Quality Assurance",
      description: "Ensuring quality and performance",
      icon: TestTube,
      activities: [
        "Functional & regression testing",
        "Performance optimization",
        "Bug tracking & resolution",
        "Beta testing with users",
      ],
      deliverables: [
        "Test coverage reports",
        "Bug fix documentation",
        "Performance metrics",
        "Beta feedback analysis",
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      id: "launch",
      role: "Both",
      title: "Launch & Release",
      description: "Shipping to production",
      icon: Rocket,
      activities: [
        "App store submission & review",
        "Release planning & staging",
        "Marketing & communication plan",
        "Launch monitoring & support",
      ],
      deliverables: [
        "App store listings",
        "Release notes",
        "Marketing materials",
        "Launch checklist",
      ],
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
      gradient: "from-cyan-500/20 to-teal-500/20",
    },
    {
      id: "analytics",
      role: "PM",
      title: "Measure & Iterate",
      description: "Data-driven improvements",
      icon: BarChart,
      activities: [
        "Analytics setup & monitoring",
        "User feedback collection",
        "A/B testing experiments",
        "Performance review meetings",
      ],
      deliverables: [
        "Analytics dashboards",
        "User feedback reports",
        "A/B test results",
        "Iteration roadmap",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      {/* Parallax background layers */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:50px_50px]" />
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <RefreshCw className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">My Work Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              How I Build Products
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            As both a Product Manager and Mobile Developer, I handle the complete
            product lifecycle from discovery to deployment and beyond
          </p>

          {/* Role badges */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.div
              className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-400 text-sm font-semibold">
                🎯 Product Manager
              </span>
            </motion.div>
            <motion.div
              className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-green-400 text-sm font-semibold">
                💻 Mobile Developer
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <div className="space-y-12">
          {processPhases.map((phase, index) => {
            const Icon = phase.icon;
            const isActive = activePhase === index;

            return (
              <motion.div
                key={phase.id}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onViewportEnter={() => setActivePhase(index)}
                viewport={{ amount: 0.5 }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content side */}
                  <motion.div
                    className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-1"}`}
                    animate={{
                      x: isActive ? 0 : index % 2 === 0 ? -20 : 20,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative">
                      {/* Phase number */}
                      <motion.div
                        className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/50"
                        animate={{
                          scale: isActive ? [1, 1.1, 1] : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {index + 1}
                      </motion.div>

                      {/* Role badge */}
                      <div className="mb-4 ml-10">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            phase.role === "PM"
                              ? "bg-purple-500/10 border border-purple-500/30 text-purple-400"
                              : phase.role === "Dev"
                              ? "bg-green-500/10 border border-green-500/30 text-green-400"
                              : "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                          }`}
                        >
                          {phase.role === "PM"
                            ? "Product Manager"
                            : phase.role === "Dev"
                            ? "Developer"
                            : "PM + Developer"}
                        </span>
                      </div>

                      <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500">
                        {/* Title */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                            <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {phase.title}
                          </h3>
                        </div>

                        <p className="text-zinc-400 mb-6">{phase.description}</p>

                        {/* Activities */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Key Activities
                          </h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, actIndex) => (
                              <motion.li
                                key={actIndex}
                                className="flex items-start gap-2 text-sm text-zinc-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                  isActive ? { opacity: 1, x: 0 } : {}
                                }
                                transition={{ delay: actIndex * 0.1 }}
                              >
                                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span>{activity}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Deliverables
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.deliverables.map((deliverable, delIndex) => (
                              <motion.span
                                key={delIndex}
                                className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                  isActive ? { opacity: 1, scale: 1 } : {}
                                }
                                transition={{ delay: delIndex * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {deliverable}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image side */}
                  <motion.div
                    className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-2"}`}
                    animate={{
                      x: isActive ? 0 : index % 2 === 0 ? 20 : -20,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative group">
                      <motion.div
                        className="relative rounded-2xl overflow-hidden border border-zinc-800"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={phase.image}
                          alt={phase.title}
                          className="w-full h-64 lg:h-80 object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-60`}
                        />
                        
                        {/* Overlay icon */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-md border border-cyan-500/50 flex items-center justify-center">
                            <Icon className="w-10 h-10 text-cyan-400" />
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to bottom right, rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.3))`,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Connecting line */}
                {index < processPhases.length - 1 && (
                  <motion.div
                    className="absolute left-1/2 -bottom-6 w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-transparent transform -translate-x-1/2 hidden lg:block"
                    initial={{ scaleY: 0 }}
                    animate={isActive ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom summary */}
        <motion.div
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            End-to-End Product Ownership
          </h3>
          <p className="text-zinc-300 text-center max-w-3xl mx-auto">
            By combining product management expertise with hands-on development skills,
            I ensure seamless execution from strategy to implementation. This dual
            perspective helps me build products that are not only technically sound but
            also truly meet user needs and business goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}