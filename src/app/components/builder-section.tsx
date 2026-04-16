import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Smartphone, Brain, Zap, Repeat } from "lucide-react";

const skills = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Expert in Flutter and cross-platform mobile apps",
    level: 95,
  },
  {
    icon: Brain,
    title: "Product Thinking",
    description: "Building solutions that solve real problems",
    level: 90,
  },
  {
    icon: Zap,
    title: "AI Integrations",
    description: "Leveraging LLMs and AI to enhance user experiences",
    level: 85,
  },
  {
    icon: Repeat,
    title: "Full App Lifecycle",
    description: "From ideation to launch and beyond",
    level: 92,
  },
];

export function BuilderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
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

      <div className="max-w-6xl mx-auto relative z-10">
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
            The <span className="text-cyan-400">Builder</span>
          </motion.h2>
          <motion.p
            className="text-zinc-400 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I don't just write code — I craft experiences. Here's what drives my
            work.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0"
                  animate={{
                    opacity: hoveredIndex === index ? 0.1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-bl-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <motion.div
                    className="p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors"
                    animate={
                      hoveredIndex === index
                        ? { rotate: [0, -10, 10, -10, 0] }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">{skill.title}</h3>
                    <p className="text-zinc-500 text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Animated progress bar */}
                <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="absolute h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Percentage indicator */}
                <motion.div
                  className="absolute top-8 right-8 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {skill.level}%
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}