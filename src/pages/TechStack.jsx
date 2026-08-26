import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaCode,
  FaServer,
  FaTools,
  FaGithub,
  FaJs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiScikitlearn,
  SiDjango,
  SiFlask,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiPostgresql,
  SiMysql,
  SiLangchain,
  SiHuggingface,
  SiTailwindcss,
  SiScrapy,
  SiPostman,
  SiDatacamp,
  SiNumpy,
  SiPandas,
  SiLanggraph,
} from "react-icons/si";
import { VscHubot, VscLayers, VscSettingsGear } from "react-icons/vsc";
import { BsDatabaseFillGear, BsServer, BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";

const techCategories = [
  {
    id: "ai",
    name: "AI & GenAI",
    description:
      "Building intelligent systems, retrieval pipelines, and ML-powered applications.",
    icon: FaBrain,
    accent: "cyan",
    featured: true,
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "LLMs", icon: VscHubot },
      { name: "RAG", icon: VscLayers },
      { name: "LangChain", icon: SiLangchain },
      { name: "LangGraph", icon: SiLanggraph },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "NLP", icon: BsStars },
      { name: "BERT", icon: FaBrain },
      { name: "FAISS", icon: BsServer },
      { name: "ChromaDB", icon: BsDatabaseFillGear },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
    certification: "Claude Certified Architect - Foundations",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    description:
      "Infrastructure, containerization, automation, and cloud deployment.",
    icon: FaCloud,
    accent: "blue",
    technologies: [
      { name: "AWS", icon: FaAws, featured: true },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "CI/CD", icon: VscSettingsGear },
      { name: "Linux", icon: FaLinux },
    ],
    certification: "AWS Certified Cloud Practitioner",
  },
  {
    id: "backend",
    name: "Backend, API & Data",
    description:
      "Designing APIs and application backends that connect intelligence to real products.",
    icon: FaServer,
    accent: "purple",
    technologies: [
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "Django REST Framework", icon: SiDjango },
      { name: "REST APIs", icon: FaCode },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "ChromaDB", icon: BsDatabaseFillGear },
      { name: "FAISS", icon: BsServer },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    description:
      "Building responsive interfaces and experiences around backend and AI systems.",
    icon: FaReact,
    accent: "cyan",
    technologies: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "tools",
    name: "Tools & Engineering",
    description:
      "The everyday tooling behind development, automation, and experimentation.",
    icon: FaTools,
    accent: "blue",
    technologies: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Scrapy", icon: SiScrapy },
      { name: "Postman", icon: SiPostman },
      { name: "DSA", icon: SiDatacamp },
    ],
  },
];

const accentStyles = {
  cyan: {
    icon: "text-cyan-300",
    border: "hover:border-cyan-400/30",
    glow: "group-hover:shadow-cyan-500/10",
    badge: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300",
  },
  purple: {
    icon: "text-purple-300",
    border: "hover:border-purple-400/30",
    glow: "group-hover:shadow-purple-500/10",
    badge: "bg-purple-400/10 border-purple-400/20 text-purple-300",
  },
  blue: {
    icon: "text-blue-300",
    border: "hover:border-blue-400/30",
    glow: "group-hover:shadow-blue-500/10",
    badge: "bg-blue-400/10 border-blue-400/20 text-blue-300",
  },
};

const TechPill = ({ technology, highlighted }) => {
  const Icon = technology.icon;

  return (
    <motion.div
      layout
      whileHover={{ y: -2, scale: 1.03 }}
      className={`
        inline-flex items-center gap-2
        px-3 py-2
        rounded-xl
        border
        transition-all duration-200 
        bg-white/[0.035] border-white/[0.08] 
        text-gray-300 
        hover:bg-white/[0.07] hover:text-white
        
      `}
    >
      {Icon && <Icon className="text-sm opacity-80" />}
      <span className="text-sm font-medium whitespace-nowrap">
        {technology.name}
      </span>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* ───────────────────────── HERO ───────────────────────── */}

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
            TECHNICAL STACK
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gradient font-['Space_Grotesk']">
            How I Build
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-gray-400 leading-relaxed">
            Technologies I use across AI, software engineering, and cloud
            infrastructure to turn ideas into working systems.
          </p>
        </motion.section>

        {/* ──────────────────────── CORE STACK ──────────────────────── */}

        <section className="mb-12">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                Engineering Domains
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white">
                My technical landscape
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              const accent = accentStyles[category.accent];

              return (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className={`
                    group relative overflow-hidden
                    glass-panel rounded-3xl p-6 md:p-7
                    border border-white/[0.07]
                    ${accent.border}
                    ${accent.glow}
                    transition-all duration-300
                    ${category.featured ? "lg:col-span-2" : ""}
                  `}
                >
                  {/* ambient glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-400/[0.035] blur-3xl pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5 mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`
                          w-12 h-12 rounded-2xl p-3
                          flex items-center justify-center
                          bg-white/[0.045]
                          border border-white/[0.08]
                          ${accent.icon}
                        `}
                        >
                          <Icon className="text-xl" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-xl font-semibold text-white">
                              {category.name}
                            </h3>

                            {category.featured && (
                              <span
                                className={`
                                px-2 py-0.5 rounded-md
                                text-[10px] uppercase tracking-wider
                                border
                                ${accent.badge}
                              `}
                              >
                                Core
                              </span>
                            )}
                          </div>

                          <p className="text-sm text-gray-500 mt-1 max-w-xl">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {category.technologies.map((technology) => (
                        <button
                          key={technology.name}
                          onClick={() => handleTechClick(technology.name)}
                          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-xl"
                          aria-label={`Select ${technology.name}`}
                        >
                          <TechPill technology={technology} />
                        </button>
                      ))}
                    </div>

                    {category.certification && (
                      <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                            Credential
                          </p>
                          <p className="text-sm text-gray-300 mt-1">
                            {category.certification}
                          </p>
                        </div>

                        <Link to="/credentials" className="text-xs text-cyan-300">
                          View credentials ↗
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ──────────────────────── ENGINEERING PRINCIPLE ──────────────────────── */}

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div
            className="
            relative overflow-hidden
            rounded-3xl
            border border-white/[0.08]
            bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-purple-400/[0.06]
            p-8 md:p-10
          "
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-400/[0.04] blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/70 mb-4">
                Engineering Philosophy
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Tools are only useful when they solve the right problem.
              </h2>

              <p className="mt-4 text-gray-400 leading-relaxed">
                My stack spans AI, backend engineering, and cloud infrastructure
                because real systems rarely fit neatly inside one technology
                category.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TechStack;
