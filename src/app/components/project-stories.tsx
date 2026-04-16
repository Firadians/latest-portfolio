import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Festival Companion",
    subtitle: "Real-time friend tracking at events",
    image: "https://images.unsplash.com/photo-1768053921740-f645ebbe68c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmZXN0aXZhbCUyMGNvbmNlcnQlMjBjcm93ZHxlbnwxfHx8fDE3NzI4NTczMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    problem: "Festival-goers struggle to coordinate with friends in crowded venues with poor cell service.",
    idea: "Create a real-time location sharing app optimized for low-bandwidth environments.",
    tech: ["Flutter", "Firebase Realtime Database", "Geolocation APIs"],
    impact: "Used by 5,000+ attendees across multiple festivals, reducing 'lost friend' calls by 70%.",
  },
  {
    id: 2,
    title: "Smart Sitter Match",
    subtitle: "AI-powered babysitter matching",
    image: "https://images.unsplash.com/photo-1771169204703-ecc04c27a564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5c2l0dGVyJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3Mjg1NzM0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    problem: "Parents waste hours browsing profiles to find compatible babysitters.",
    idea: "Use AI to match families with sitters based on preferences, schedules, and compatibility.",
    tech: ["Flutter", "OpenAI API", "Firebase", "Stripe"],
    impact: "Reduced average search time from 3 hours to 10 minutes, with 92% match satisfaction.",
  },
  {
    id: 3,
    title: "EventPass",
    subtitle: "Seamless event ticketing platform",
    image: "https://images.unsplash.com/photo-1758263995648-222571672475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHRpY2tldHMlMjBjb25jZXJ0fGVufDF8fHx8MTc3Mjg1NzM0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    problem: "Event organizers need a white-label solution for ticket sales and attendee management.",
    idea: "Build a comprehensive platform with QR code scanning, analytics, and payment processing.",
    tech: ["Flutter", "AWS Lambda", "Stripe", "PostgreSQL"],
    impact: "Processed 50,000+ tickets for 200+ events with 99.9% uptime.",
  },
  {
    id: 4,
    title: "FinanceFlow",
    subtitle: "Personal finance tracking made simple",
    image: "https://images.unsplash.com/photo-1707779491435-000c45820db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwbW9uZXklMjBjYWxjdWxhdG9yfGVufDF8fHx8MTc3Mjg1NzM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    problem: "Most finance apps are overcomplicated or require manual entry.",
    idea: "Create an intuitive app that automatically categorizes expenses and provides actionable insights.",
    tech: ["Flutter", "ML Kit", "Firebase", "REST APIs"],
    impact: "Helped 10,000+ users save an average of $200/month through better spending awareness.",
  },
];

export function ProjectStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const selectedData = projects.find((p) => p.id === selectedProject);

  return (
    <section ref={ref} className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Floating background elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-4 text-white"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Project <span className="text-cyan-400">Stories</span>
          </motion.h2>
          <motion.p
            className="text-zinc-400 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every project tells a story. Here are some problems I've solved.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(project.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project.id)}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <motion.div
                animate={{
                  scale: hoveredCard === project.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>

              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                animate={{
                  opacity: hoveredCard === project.id ? 0.9 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{
                  x: hoveredCard === project.id ? "100%" : "-100%",
                }}
                transition={{ duration: 0.8 }}
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <motion.h3
                    className="text-2xl mb-2 text-white"
                    animate={{
                      x: hoveredCard === project.id ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-cyan-400 mb-4">{project.subtitle}</p>

                  <motion.div
                    className="flex items-center gap-2"
                    animate={{
                      x: hoveredCard === project.id ? 10 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <span className="text-zinc-400 text-sm group-hover:text-cyan-400 transition-colors">
                      Read story
                    </span>
                    <motion.svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{
                        x: hoveredCard === project.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </motion.div>
                </motion.div>
              </div>

              {/* Corner decoration */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300"
                animate={{
                  scale: hoveredCard === project.id ? 1.2 : 1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-2xl border border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={selectedData.image}
                alt={selectedData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
            </div>

            <div className="p-8">
              <motion.h3
                className="text-3xl mb-2 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {selectedData.title}
              </motion.h3>
              <motion.p
                className="text-cyan-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {selectedData.subtitle}
              </motion.p>

              <div className="space-y-6">
                {[
                  { label: "Problem", content: selectedData.problem },
                  { label: "Solution", content: selectedData.idea },
                  { label: "Technology", content: null },
                  { label: "Impact", content: selectedData.impact },
                ].map((section, i) => (
                  <motion.div
                    key={section.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <h4 className="text-lg text-cyan-400 mb-2">{section.label}</h4>
                    {section.label === "Technology" ? (
                      <div className="flex flex-wrap gap-2">
                        {selectedData.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-zinc-300">{section.content}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}