import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, MessageCircle, Phone, FileText } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "mfirdausa30@gmail.com",
    href: "mailto:mfirdausa30@gmail.com",
    description: "Best for detailed project discussions",
  },
  {
    icon: MessageCircle,
    label: "Phone / WhatsApp",
    value: "+62 878-5921-8995",
    href: "https://wa.me/6287859218995",
    description: "Quick questions? Let's chat!",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-firdausa",
    href: "https://www.linkedin.com/in/muhammad-firdausa/",
    description: "Connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Firadians",
    href: "https://github.com/Firadians",
    description: "Check out my code",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl mb-6 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's build something{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              meaningful
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, rotateX: 90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                onHoverStart={() => setHoveredContact(index)}
                onHoverEnd={() => setHoveredContact(null)}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0"
                  animate={{
                    opacity: hoveredContact === index ? 0.1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{
                    x: hoveredContact === index ? "100%" : "-100%",
                  }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative flex flex-col items-center gap-3">
                  <motion.div
                    className="p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors"
                    animate={{
                      scale: hoveredContact === index ? [1, 1.2, 1] : 1,
                      rotate: hoveredContact === index ? [0, 360] : 0,
                    }}
                    transition={{
                      scale: { duration: 0.5 },
                      rotate: { duration: 0.8 },
                    }}
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">{contact.label}</p>
                    <motion.div
                      className="flex items-center justify-center gap-1"
                      animate={{
                        x: hoveredContact === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white group-hover:text-cyan-400 transition-colors text-sm">
                        {contact.value}
                      </span>
                      <motion.div
                        animate={{
                          x: hoveredContact === index ? 5 : 0,
                          y: hoveredContact === index ? -5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                      </motion.div>
                    </motion.div>
                    <p className="text-zinc-500 text-xs mt-1">{contact.description}</p>
                  </div>
                </div>

                {/* Corner decoration */}
                <motion.div
                  className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/0"
                  animate={{
                    borderColor: hoveredContact === index ? "rgba(34, 211, 238, 0.5)" : "rgba(34, 211, 238, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/0"
                  animate={{
                    borderColor: hoveredContact === index ? "rgba(34, 211, 238, 0.5)" : "rgba(34, 211, 238, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-12 border-t border-zinc-800"
        >
          <motion.p
            className="text-zinc-500"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            © 2026 Muhammad Firdaus Ardiansyah. Built with passion and code.
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/2 left-10 w-20 h-20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="text-cyan-500"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="text-blue-500"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}