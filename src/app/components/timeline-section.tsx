import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2024 - Present",
    title: "Product Manager & Mobile Developer",
    company: "Tech Startup",
    description:
      "Leading product strategy while building cross-platform mobile apps. Managing full product lifecycle from conception to launch.",
    icon: Briefcase,
  },
  {
    year: "2023 - 2024",
    title: "Flutter Developer",
    company: "Freelance / Contract",
    description:
      "Delivered multiple mobile apps for clients, specializing in AI integrations, payment systems, and real-time features.",
    icon: Briefcase,
  },
  {
    year: "2022 - 2023",
    title: "Full Stack Mobile Developer",
    company: "Enterprise Solutions",
    description:
      "Built internal enterprise mobile applications with Firebase, AWS, and REST APIs. Focused on scalability and performance.",
    icon: Briefcase,
  },
  {
    year: "2018 - 2022",
    title: "Computer Science",
    company: "University",
    description:
      "Studied software engineering, algorithms, and mobile development. Built foundational knowledge in product thinking.",
    icon: GraduationCap,
  },
];

export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Animated background particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${10 + i * 7}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-4 text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Experience <span className="text-cyan-400">Timeline</span>
          </motion.h2>
          <motion.p
            className="text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My journey from student to product-minded developer.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent overflow-hidden"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          >
            {/* Moving glow along the line */}
            <motion.div
              className="absolute w-full h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              animate={{
                y: ["-100%", "400%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.7 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative pl-20"
                >
                  {/* Animated Icon */}
                  <motion.div
                    className="absolute left-0 top-0"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.9 + index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="relative">
                      {/* Pulsing glow */}
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md"
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                          opacity: hoveredIndex === index ? [0.5, 0.8, 0.5] : 0.3,
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredIndex === index ? Infinity : 0,
                        }}
                      />

                      {/* Orbiting ring */}
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 border-2 border-cyan-400/50 rounded-full"
                          animate={{
                            scale: [1, 1.5],
                            opacity: [0.8, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        />
                      )}

                      <motion.div
                        className="relative p-3 rounded-full bg-zinc-900 border-2 border-cyan-500"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{
                        x: hoveredIndex === index ? "100%" : "-100%",
                      }}
                      transition={{ duration: 0.8 }}
                    />

                    <motion.span
                      className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm mb-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.year}
                    </motion.span>

                    <motion.h3
                      className="text-xl text-white mb-1"
                      animate={{
                        color: hoveredIndex === index ? "#22d3ee" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.title}
                    </motion.h3>

                    <motion.p
                      className="text-cyan-400 mb-3 text-sm"
                      animate={{
                        x: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.company}
                    </motion.p>

                    <p className="text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Decorative corner */}
                    <motion.div
                      className="absolute bottom-0 right-0 w-16 h-16"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 0.3 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M 100 0 L 100 100 L 0 100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-cyan-500"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Connecting line animation */}
                  {index < experiences.length - 1 && (
                    <motion.div
                      className="absolute left-8 top-20 w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      style={{ originY: 0 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* End marker */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-cyan-500"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 0px rgba(34, 211, 238, 0.5)",
                "0 0 20px rgba(34, 211, 238, 0.8)",
                "0 0 0px rgba(34, 211, 238, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}