import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Check, Sparkles, Zap, Crown, Star, ArrowRight } from "lucide-react";

interface PricingTier {
  name: string;
  icon: any;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  gradient: string;
}

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      icon: Sparkles,
      price: "$1,500",
      period: "per project",
      description: "Perfect for small projects and MVPs",
      features: [
        "Single mobile app (iOS or Android)",
        "Up to 5 screens/features",
        "Basic UI/UX design",
        "2 rounds of revisions",
        "1 month of bug fixes",
        "Basic documentation",
      ],
      cta: "Start Building",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      name: "Professional",
      icon: Zap,
      price: "$3,500",
      period: "per project",
      description: "Ideal for established businesses",
      features: [
        "Cross-platform app (iOS & Android)",
        "Up to 15 screens/features",
        "Custom UI/UX design",
        "API integration",
        "5 rounds of revisions",
        "3 months of support",
        "App store submission",
        "Complete documentation",
      ],
      popular: true,
      cta: "Get Started",
      gradient: "from-cyan-400/30 to-purple-500/30",
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "$7,000+",
      period: "per project",
      description: "Complete solution for complex needs",
      features: [
        "Full-stack mobile app",
        "Unlimited screens/features",
        "Premium UI/UX design",
        "Backend development",
        "Third-party integrations",
        "Unlimited revisions",
        "6 months of support",
        "App store optimization",
        "Analytics setup",
        "Team training",
        "Priority support",
      ],
      cta: "Contact Sales",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-zinc-900 to-black"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #06b6d4 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Orbiting particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
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
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Transparent Pricing</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Flexible pricing options to match your project needs. All plans include
            quality code and dedicated support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
                  >
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-xs font-bold text-white shadow-lg">
                      MOST POPULAR
                    </div>
                  </motion.div>
                )}

                {/* Card */}
                <motion.div
                  className={`relative h-full rounded-2xl bg-zinc-900/50 backdrop-blur-xl border overflow-hidden ${
                    tier.popular
                      ? "border-cyan-500/50"
                      : "border-zinc-800 hover:border-cyan-500/30"
                  } transition-colors duration-300`}
                  animate={{
                    boxShadow:
                      hoveredIndex === index
                        ? [
                            "0 0 0px rgba(6, 182, 212, 0)",
                            "0 0 40px rgba(6, 182, 212, 0.3)",
                          ]
                        : "0 0 0px rgba(6, 182, 212, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Animated border glow */}
                  {tier.popular && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.5), transparent)",
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}

                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <motion.div
                      className="mb-6"
                      animate={{
                        rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-zinc-400 mb-6">
                      {tier.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <motion.div
                        className="flex items-baseline gap-2"
                        animate={{
                          scale: hoveredIndex === index ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {tier.price}
                        </span>
                        <span className="text-zinc-500">{tier.period}</span>
                      </motion.div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView ? { opacity: 1, x: 0 } : {}
                          }
                          transition={{
                            delay: 0.8 + index * 0.2 + featureIndex * 0.05,
                          }}
                        >
                          <motion.div
                            className="mt-0.5"
                            animate={{
                              scale:
                                hoveredIndex === index
                                  ? [1, 1.2, 1]
                                  : 1,
                            }}
                            transition={{
                              delay: featureIndex * 0.05,
                              duration: 0.3,
                            }}
                          >
                            <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm text-zinc-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                        tier.popular
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"
                          : "bg-zinc-800 text-white hover:bg-zinc-700"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{tier.cta}</span>
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? [0, 5, 0] : 0,
                        }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Corner accents */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(6, 182, 212, 0.2), transparent)",
                  }}
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                    opacity: hoveredIndex === index ? [0.5, 1, 0.5] : 0.5,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-zinc-500 text-sm">
            All prices are starting estimates. Final quote depends on project
            complexity.
            <br />
            <span className="text-cyan-400">Contact me</span> for custom
            requirements or long-term partnerships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
