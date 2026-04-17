import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

const techCategories = [
  {
    name: "Mobile",
    tech: ["Flutter", "Dart", "Android (Kotlin)", "iOS"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Backend",
    tech: ["REST APIs", "Express.js", "Next.js", "PHP"],
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "AI & Automation",
    tech: ["LLM Integration", "ChatGPT API", "Vector Similarity", "Prompt Engineering"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Payments & Analytics",
    tech: ["Stripe", "Xendit", "Firebase Analytics", "Crashlytics"],
    color: "from-pink-500 to-red-500",
  },
  {
    name: "Cloud & Data",
    tech: ["Firebase", "AWS", "PostgreSQL", "MongoDB", "Auth0"],
    color: "from-red-500 to-orange-500",
  },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Tech Stack <span className="text-cyan-400">Ecosystem</span>
          </motion.h2>
          <motion.p
            className="text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The tools and technologies I use to bring ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color}`}
                animate={{
                  opacity: hoveredCategory === index ? 0.15 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Rotating gradient border effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl`}
                style={{ padding: "1px" }}
                animate={{
                  opacity: hoveredCategory === index ? 0.3 : 0,
                  rotate: hoveredCategory === index ? 360 : 0,
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                    animate={{
                      scale: hoveredCategory === index ? [1, 1.5, 1] : 1,
                      boxShadow: hoveredCategory === index
                        ? "0 0 20px rgba(34, 211, 238, 0.8)"
                        : "0 0 0px rgba(34, 211, 238, 0)",
                    }}
                    transition={{
                      duration: 1,
                      repeat: hoveredCategory === index ? Infinity : 0,
                    }}
                  />
                  <motion.h3
                    className="text-lg text-white"
                    animate={{
                      x: hoveredCategory === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.name}
                  </motion.h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + index * 0.1 + techIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                        backgroundColor: "rgba(34, 211, 238, 0.2)",
                      }}
                      className="px-3 py-1 rounded-lg bg-zinc-800/50 text-zinc-300 text-sm border border-zinc-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Particle effect on hover */}
              {hoveredCategory === index && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${category.color}`}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-20, -60],
                        opacity: [1, 0],
                        scale: [1, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Floating tech particles */}
        <div className="relative mt-16 h-32 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-500/30"
              style={{
                width: `${4 + Math.random() * 4}px`,
                height: `${4 + Math.random() * 4}px`,
                left: `${(i * 5) % 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}