import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Smartphone,
  Sparkles,
} from "lucide-react";
import {
  featuredProjects,
  portfolioProjects,
  type PortfolioProject,
} from "../data/portfolio-projects";
import { ProjectDetailModal } from "./project-detail-modal";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [detailProjectId, setDetailProjectId] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const detailProject =
    detailProjectId === null
      ? null
      : portfolioProjects.find((p) => p.id === detailProjectId) ?? null;

  const otherProjects = portfolioProjects.filter((p) => !p.featured);

  const openDetail = (project: PortfolioProject) => setDetailProjectId(project.id);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-20 overflow-hidden bg-black"
    >
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

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${200 + (i % 3) * 80}px`,
            height: `${200 + (i % 3) * 80}px`,
            left: `${(i * 17) % 85}%`,
            top: `${(i * 23) % 70}%`,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(6, 182, 212, 0.12), transparent)"
                : "radial-gradient(circle, rgba(168, 85, 247, 0.12), transparent)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
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
            <span className="text-sm text-cyan-400">Projects</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Featured work
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Three flagship builds—open any card for the full story, tech stack, and links.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer"
                whileHover={{ y: -8 }}
                animate={{
                  boxShadow:
                    hoveredId === project.id
                      ? "0 20px 60px rgba(6, 182, 212, 0.25)"
                      : "0 0 0 rgba(6, 182, 212, 0)",
                }}
                onClick={() => openDetail(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openDetail(project);
                  }
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredId === project.id ? 1.08 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-55`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-cyan-500/30 text-xs text-cyan-400">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap">
                    {project.stats.slice(0, 2).map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={stat.label}
                          className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-cyan-500/15 text-[11px]"
                        >
                          <Icon className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-cyan-300 font-semibold">{stat.value}</span>
                          <span className="text-zinc-500 hidden sm:inline">{stat.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <Sparkles className="w-5 h-5 text-cyan-500/80 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                    View full details
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center gap-6 mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
        >
          <motion.button
            type="button"
            onClick={() => setShowAllProjects((v) => !v)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-cyan-500/35 text-white font-semibold hover:bg-zinc-800 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {showAllProjects ? (
              <>
                Show less
                <ChevronUp className="w-5 h-5 text-cyan-400" />
              </>
            ) : (
              <>
                See all projects ({otherProjects.length})
                <ChevronDown className="w-5 h-5 text-cyan-400" />
              </>
            )}
          </motion.button>
        </motion.div>

        <AnimatePresence initial={false}>
          {showAllProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center md:text-left">
                More shipped work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-xl overflow-hidden bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/40 transition-colors flex flex-col"
                  >
                    <button
                      type="button"
                      onClick={() => openDetail(project)}
                      className="text-left flex flex-col flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-50`}
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/55 text-[10px] text-cyan-400 border border-cyan-500/25">
                          {project.category}
                        </span>
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                        <p className="text-zinc-500 text-xs mb-3 line-clamp-2">{project.description}</p>
                        <span className="mt-auto text-cyan-400 text-sm font-medium">
                          Open details →
                        </span>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {detailProject && (
          <ProjectDetailModal
            key={detailProject.id}
            project={detailProject}
            onClose={() => setDetailProjectId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
