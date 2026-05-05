import { motion } from "motion/react";
import { ExternalLink, Github, X } from "lucide-react";
import type { PortfolioProject } from "../data/portfolio-projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black transition-colors border border-zinc-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Close project details"
        >
          <X className="w-6 h-6 text-white" />
        </motion.button>

        <div className="relative h-56 sm:h-64 overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-14 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-xs text-cyan-400">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-xs text-cyan-300">
                Featured
              </span>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-cyan-400 text-lg">{project.subtitle}</p>
            <p className="text-zinc-400 mt-4 leading-relaxed">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl bg-zinc-950/80 border border-zinc-800 px-4 py-3 flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">{stat.value}</div>
                    <div className="text-xs text-zinc-500">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
            <p className="text-zinc-300 leading-relaxed">{project.longDescription}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg text-cyan-400 mb-2">Problem</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-lg text-cyan-400 mb-2">Solution</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <h4 className="text-lg text-cyan-400 mb-2">Impact</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">{project.impact}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Highlights</h4>
            <ul className="space-y-2">
              {project.highlights.map((line) => (
                <li key={line} className="flex gap-2 text-zinc-400 text-sm">
                  <span className="text-cyan-500 mt-1.5 shrink-0">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Technology</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.links?.live || project.links?.github) && (
            <div className="flex flex-wrap gap-3 pt-2 border-t border-zinc-800">
              {project.links.live && (
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.links.live.includes("play.google.com")
                    ? "Google Play"
                    : "View live"}
                </motion.a>
              )}
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 text-white text-sm font-semibold border border-zinc-700 hover:bg-zinc-700"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-4 h-4" />
                  Source code
                </motion.a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
