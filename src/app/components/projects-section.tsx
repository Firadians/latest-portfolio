import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Smartphone,
  Users,
  TrendingUp,
  Sparkles,
  Code2,
  Layers,
  Zap,
} from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  stats: { label: string; value: string; icon: any }[];
  links?: { github?: string; live?: string; case?: string };
  gradient: string;
  highlights: string[];
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "FitTrack Pro",
      category: "Fitness & Health",
      description:
        "A comprehensive fitness tracking app with AI-powered workout recommendations",
      longDescription:
        "Built a complete fitness ecosystem with real-time workout tracking, nutrition planning, and social features. Integrated ML models for personalized recommendations.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      technologies: [
        "React Native",
        "TypeScript",
        "Firebase",
        "TensorFlow",
        "Redux",
      ],
      stats: [
        { label: "Users", value: "50K+", icon: Users },
        { label: "Downloads", value: "100K+", icon: TrendingUp },
        { label: "Rating", value: "4.8/5", icon: Sparkles },
      ],
      gradient: "from-orange-500/20 to-pink-500/20",
      highlights: [
        "Real-time workout tracking",
        "AI workout recommendations",
        "Social fitness challenges",
        "Nutrition database with 500K+ foods",
      ],
    },
    {
      title: "ShopHub",
      category: "E-Commerce",
      description:
        "Modern e-commerce platform with AR product preview and seamless checkout",
      longDescription:
        "Developed a full-featured shopping app with augmented reality product visualization, one-tap checkout, and personalized shopping experiences.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      technologies: [
        "Flutter",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "ARKit",
      ],
      stats: [
        { label: "Revenue", value: "$2M+", icon: TrendingUp },
        { label: "Products", value: "10K+", icon: Layers },
        { label: "Conversion", value: "12%", icon: Zap },
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      highlights: [
        "AR product visualization",
        "One-tap checkout flow",
        "Smart product recommendations",
        "Real-time inventory sync",
      ],
    },
    {
      title: "MindSpace",
      category: "Mental Wellness",
      description:
        "Meditation and mindfulness app with guided sessions and mood tracking",
      longDescription:
        "Created a peaceful digital space for mental wellness with curated meditation sessions, breathing exercises, and mood journaling features.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
      technologies: ["React Native", "Redux", "MongoDB", "AWS", "WebRTC"],
      stats: [
        { label: "Sessions", value: "1M+", icon: Sparkles },
        { label: "Users", value: "75K+", icon: Users },
        { label: "Rating", value: "4.9/5", icon: TrendingUp },
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      highlights: [
        "Guided meditation library",
        "Mood tracking analytics",
        "Live group sessions",
        "Personalized wellness plans",
      ],
    },
    {
      title: "CodeCollab",
      category: "Developer Tools",
      description:
        "Real-time collaborative coding platform for remote development teams",
      longDescription:
        "Built a powerful collaboration tool enabling developers to code together in real-time with voice chat, screen sharing, and integrated version control.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: [
        "Electron",
        "React",
        "WebSocket",
        "Docker",
        "Git",
      ],
      stats: [
        { label: "Teams", value: "5K+", icon: Users },
        { label: "Sessions", value: "50K+", icon: Code2 },
        { label: "Uptime", value: "99.9%", icon: Zap },
      ],
      gradient: "from-green-500/20 to-teal-500/20",
      highlights: [
        "Real-time code collaboration",
        "Integrated voice & video",
        "Version control sync",
        "Cross-platform support",
      ],
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-20 overflow-hidden bg-black"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${200 + Math.random() * 200}px`,
            height: `${200 + Math.random() * 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? "rgba(6, 182, 212, 0.1)" : "rgba(168, 85, 247, 0.1)"
            }, transparent)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

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
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Featured Projects</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Building Digital Experiences
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A showcase of mobile applications that solve real problems and delight
            users
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setSelectedProject(index)}
              onHoverEnd={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500"
                whileHover={{ y: -10 }}
                animate={{
                  boxShadow:
                    selectedProject === index
                      ? "0 20px 60px rgba(6, 182, 212, 0.3)"
                      : "0 0 0 rgba(6, 182, 212, 0)",
                }}
              >
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: selectedProject === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}
                  />
                  
                  {/* Animated shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: selectedProject === index ? ["0%", "200%"] : "0%",
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <motion.div
                      className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-cyan-500/30 text-xs text-cyan-400"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.div>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                    {project.stats.map((stat, statIndex) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={statIndex}
                          className="flex-1 bg-black/70 backdrop-blur-md rounded-lg px-3 py-2 border border-cyan-500/20"
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            selectedProject === index
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{ delay: statIndex * 0.1 }}
                        >
                          <div className="flex items-center gap-2">
                            <StatIcon className="w-4 h-4 text-cyan-400" />
                            <div>
                              <div className="text-xs text-cyan-400 font-bold">
                                {stat.value}
                              </div>
                              <div className="text-xs text-zinc-400">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>

                  {/* Highlights */}
                  <div className="mb-4 space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        className="flex items-center gap-2 text-sm text-zinc-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          selectedProject === index
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: hIndex * 0.05 }}
                      >
                        <motion.div
                          className="w-1 h-1 bg-cyan-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: hIndex * 0.2,
                          }}
                        />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView ? { opacity: 1, scale: 1 } : {}
                        }
                        transition={{
                          delay: 0.8 + index * 0.2 + techIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.links?.live && (
                      <motion.a
                        href={project.links.live}
                        className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </motion.a>
                    )}
                    {project.links?.github && (
                      <motion.a
                        href={project.links.github}
                        className="py-2 px-4 rounded-lg bg-zinc-800 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(6, 182, 212, 0.1), transparent 70%)",
                  }}
                  animate={{
                    opacity: selectedProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating particles around card */}
              {selectedProject === index &&
                [...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      y: [0, -30],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="px-8 py-4 rounded-xl bg-zinc-900 border border-cyan-500/30 text-white font-semibold hover:bg-zinc-800 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              View All Projects
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
