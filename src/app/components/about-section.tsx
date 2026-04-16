import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Lightbulb, Users, Rocket, Award, Heart } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const strengths = [
    {
      icon: Code2,
      title: "Flutter Expert",
      description:
        "3+ years building production-ready mobile apps with Flutter. Deep understanding of state management, performance optimization, and platform-specific implementations.",
    },
    {
      icon: Lightbulb,
      title: "Product Thinking",
      description:
        "I don't just write code—I solve problems. Every technical decision is driven by user needs and business goals, ensuring maximum impact.",
    },
    {
      icon: Users,
      title: "Full-Stack Mindset",
      description:
        "Comfortable working across the entire stack—from mobile UI to backend APIs, databases, and cloud infrastructure. I build complete solutions, not just components.",
    },
    {
      icon: Rocket,
      title: "Ship Fast, Iterate Faster",
      description:
        "Believer in rapid prototyping and continuous improvement. I launch MVPs quickly, gather feedback, and iterate based on real user data.",
    },
  ];

  const achievements = [
    { label: "Active Users Across Apps", value: "10,000+" },
    { label: "Projects Delivered", value: "15+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Code Review Score", value: "4.9/5" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
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
            <Heart className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">About Me</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Building Products That Matter
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  I'm <span className="text-cyan-400 font-semibold">Muhammad Firdaus Ardiansyah</span>, a mobile developer and product-minded engineer who believes technology should solve real problems, not create complexity.
                </p>
                <p>
                  With over 3 years of experience building production apps, I've worked across industries—from blockchain-based ticketing systems to healthcare platforms—always focusing on one thing:{" "}
                  <span className="text-white font-semibold">creating solutions that users actually love</span>.
                </p>
                <p>
                  I wear multiple hats: developer, product manager, designer, and problem solver. This allows me to see the full picture and build products that are technically sound AND deliver real business value.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
              <div className="space-y-3 text-zinc-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="text-white font-semibold">User-First Development:</span>{" "}
                    Every line of code I write is driven by real user needs, not just technical requirements.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="text-white font-semibold">Data-Driven Decisions:</span>{" "}
                    I rely on analytics, A/B testing, and user feedback to guide product iterations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="text-white font-semibold">Scalable Architecture:</span>{" "}
                    I build systems designed to grow—clean code, modular design, and future-proof infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Strengths */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Strengths</h3>
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur-xl rounded-xl p-6 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {strength.title}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-8 justify-center">
            <Award className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">By The Numbers</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-zinc-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <blockquote className="text-xl md:text-2xl text-zinc-300 italic max-w-3xl mx-auto">
            "I don't just build apps—I build{" "}
            <span className="text-cyan-400 font-semibold not-italic">
              solutions that solve real problems
            </span>{" "}
            and deliver{" "}
            <span className="text-cyan-400 font-semibold not-italic">
              measurable business value
            </span>."
          </blockquote>
          <div className="mt-6 text-zinc-500">— Muhammad Firdaus Ardiansyah</div>
        </motion.div>
      </div>
    </section>
  );
}
