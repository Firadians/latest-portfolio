import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Lightbulb, Target, Palette, Code, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description: "Identify real problems worth solving",
  },
  {
    icon: Target,
    title: "Product Thinking",
    description: "Define user needs and product strategy",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Create intuitive and beautiful interfaces",
  },
  {
    icon: Code,
    title: "Development",
    description: "Build robust, scalable solutions",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Ship to users and gather feedback",
  },
  {
    icon: RefreshCw,
    title: "Iteration",
    description: "Continuously improve based on data",
  },
];

export function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden"
    >
      {/* Animated connections between steps */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"
            style={{
              left: `${10 + i * 10}%`,
              top: "30%",
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
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
            How I Build <span className="text-cyan-400">Products</span>
          </motion.h2>
          <motion.p
            className="text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My process combines technical excellence with product thinking at every stage.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  onHoverStart={() => setActiveStep(index)}
                  onHoverEnd={() => setActiveStep(null)}
                  className="relative"
                >
                  <motion.div
                    className="flex flex-col items-center text-center"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="relative mb-4"
                      animate={{
                        scale: activeStep === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Pulsing glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl"
                        animate={{
                          scale: activeStep === index ? [1, 1.5, 1] : 1,
                          opacity: activeStep === index ? [0.5, 0.8, 0.5] : 0.3,
                        }}
                        transition={{
                          duration: 2,
                          repeat: activeStep === index ? Infinity : 0,
                        }}
                      />

                      {/* Orbiting particles */}
                      {activeStep === index && (
                        <>
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                              style={{
                                top: "50%",
                                left: "50%",
                              }}
                              animate={{
                                rotate: [0, 360],
                                x: [0, 40 * Math.cos((i * 120 * Math.PI) / 180)],
                                y: [0, 40 * Math.sin((i * 120 * Math.PI) / 180)],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          ))}
                        </>
                      )}

                      <motion.div
                        className="relative p-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                        animate={{
                          borderColor: activeStep === index ? "rgba(34, 211, 238, 0.8)" : "rgba(34, 211, 238, 0.3)",
                          boxShadow: activeStep === index
                            ? "0 0 30px rgba(34, 211, 238, 0.5)"
                            : "0 0 0px rgba(34, 211, 238, 0)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          animate={{
                            rotate: activeStep === index ? [0, 360] : 0,
                          }}
                          transition={{
                            duration: 1,
                            repeat: activeStep === index ? Infinity : 0,
                            ease: "linear",
                          }}
                        >
                          <Icon className="w-8 h-8 text-cyan-400" />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    <motion.h3
                      className="text-xl mb-2 text-white"
                      animate={{
                        color: activeStep === index ? "#22d3ee" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      className="text-zinc-500 text-sm"
                      animate={{
                        color: activeStep === index ? "#a1a1aa" : "#71717a",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.description}
                    </motion.p>

                    {/* Step number indicator */}
                    <motion.div
                      className="mt-4 w-8 h-8 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>

                  {/* Connecting arrows */}
                  {index < steps.length - 1 && index % 3 !== 2 && (
                    <motion.div
                      className="hidden md:block absolute top-1/4 -right-4 z-20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 0.5, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <motion.svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <path
                          d="M5 15 L20 15 M15 10 L20 15 L15 20"
                          stroke="#22d3ee"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Completion circle animation */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="283"
                initial={{ strokeDashoffset: 283 }}
                animate={isInView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 2, delay: 2.5 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}