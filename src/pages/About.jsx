import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaAtom,
  FaCode,
  FaBolt,
  FaBrain,
  FaTrophy,
  FaCamera,
  FaGamepad,
  FaMountain,
  FaBookOpen,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import cognizantLogo from "../assets/cognizant.svg";
import cgcLogo from "../assets/cgc.png";

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-16 font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto">
        {/* ───────────────────────── HERO ───────────────────────── */}

        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Identity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 glass-card p-8 md:p-10"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400/80 font-semibold mb-3">
                About Me
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                I'm <span className="text-gradient">Mridul Narula</span>
              </h1>

              <p className="text-xl text-cyan-300 font-medium mb-4">
                Software Engineer focused on AI & GenAI
              </p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
                I enjoy building intelligent software that sits at the
                intersection of
                <span className="text-cyan-400"> AI</span>, software
                engineering, and cloud infrastructure. My work spans LLM-powered
                applications, RAG systems, recommendation engines, backend
                development, and AWS.
              </p>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-7 flex flex-col justify-center bg-gradient-to-br from-cyan-900/20 to-slate-900/20"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-5">
                <FaCode size={22} />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                Current Focus
              </p>

              <h2 className="text-2xl font-bold text-white mb-3">
                Building intelligent systems
              </h2>

              <p className="text-sm text-gray-400 leading-relaxed">
                Exploring LLM applications, agentic workflows, retrieval
                systems, machine learning, and the engineering required to turn
                them into useful software.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ───────────────────────── WHAT I DO ───────────────────────── */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              What I Do
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-7 bg-gradient-to-br from-purple-900/20 to-slate-900/20"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/15 flex items-center justify-center text-purple-400 mb-5">
                <FaBrain size={23} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">AI & GenAI</h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Building LLM-powered applications, RAG pipelines, semantic
                search systems, recommendation engines, and agentic workflows.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-7 bg-gradient-to-br from-cyan-900/20 to-slate-900/20"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/15 flex items-center justify-center text-cyan-400 mb-5">
                <FaCode size={23} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Software Engineering
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Designing backend services, REST APIs, full-stack applications,
                data workflows, and practical software around real-world use
                cases.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-7 bg-gradient-to-br from-blue-900/20 to-slate-900/20"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/15 flex items-center justify-center text-blue-400 mb-5">
                <FaBriefcase size={22} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Cloud & DevOps
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Working with AWS infrastructure, containerization, CI/CD,
                infrastructure as code, and cloud-native deployment workflows.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ───────────────────────── EXPERIENCE ───────────────────────── */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Experience
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <motion.div whileHover={{ y: -3 }} className="glass-panel p-7 md:p-9">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-7">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                  <img
                    src={cognizantLogo}
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Programmer Analyst Trainee
                  </h3>

                  <p className="text-cyan-400 font-medium mt-1">
                    Cognizant Technology Solutions
                  </p>

                  <p className="text-sm text-gray-500 mt-1">Bengaluru</p>
                </div>
              </div>

              <div className="md:text-right">
                <p className="text-sm text-gray-300 font-medium">
                  Mar 17, 2026 — Jun 26, 2026
                </p>

                <span className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  Internship completed
                  <span className="text-cyan-400">✓</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l border-cyan-400/20 pl-5">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Automated cloud infrastructure provisioning and CI/CD
                  workflows using Terraform, Docker, Kubernetes, and Jenkins,
                  enabling repeatable deployments across environments.
                </p>
              </div>

              <div className="border-l border-purple-400/20 pl-5">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Built and configured AWS infrastructure across EC2, S3, VPC,
                  RDS, Lambda, IAM, CloudWatch, and Route 53 for deployment,
                  access management, monitoring, networking, and service
                  availability.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ───────────────────────── EDUCATION ───────────────────────── */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Education
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <motion.div whileHover={{ y: -3 }} className="glass-panel p-7 md:p-9">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={cgcLogo}
                    alt="Chandigarh Group of Colleges logo"
                    className="h-12 w-auto max-w-none object-contain object-top"
                  />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Bachelor of Technology
                  </h3>

                  <p className="text-cyan-400 font-medium mt-1">
                    Artificial Intelligence & Machine Learning
                  </p>

                  <p className="text-gray-300 mt-3">
                    Chandigarh Group of Colleges, Landran
                  </p>

                  <p className="text-sm text-gray-500 mt-1">2022 — 2026</p>
                </div>
              </div>

              <div className="md:text-right">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                    CGPA
                  </p>

                  <p className="text-2xl font-bold text-white mt-1">
                    8.31<span className="text-gray-500 text-base">/10</span>
                  </p>
                </div>

                <a
                  href="https://www.ptuexam.com/Verify/Degree/?773EA9F3-FF84-45AD-A328-A3441119A706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/30 transition duration-200"
                >
                  Verify Degree
                  <FaArrowUpRightFromSquare size={11} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ─────────────────────── ACHIEVEMENTS ─────────────────────── */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Achievements & Recognition
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1st Prize */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-7 relative overflow-hidden bg-gradient-to-br from-yellow-900/20 via-slate-900/20 to-slate-950"
            >
              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
                    <FaTrophy size={21} />
                  </div>

                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-400/20 text-xs font-medium text-yellow-400">
                    1st Prize
                  </span>
                </div>

                <p className="text-xs uppercase tracking-[0.18em] text-yellow-400/70 mb-2">
                  AI Competition
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  AI Vision Quest
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Won 1st Prize in the AI Vision Quest competition at
                  <span className="text-gray-300"> Eminence 2K25</span>.
                </p>
              </div>
            </motion.div>

            {/* Wireless Power Transmission */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-7 relative overflow-hidden bg-gradient-to-br from-cyan-900/20 via-slate-900/20 to-slate-950"
            >
              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6">
                  <FaBolt size={20} />
                </div>

                <p className="text-xs uppercase tracking-[0.18em] text-cyan-400/70 mb-2">
                  Science Exhibition
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Wireless Power Transmission
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Built a working model showing wireless power
                  transmission for Science Day 2K23.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ───────────────────────── BEYOND CODE ───────────────────────── */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Beyond Code
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* ──────────────── INTRO + PHYSICS ──────────────── */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            {/* Main intro */}
            <motion.div
              whileHover={{ y: -4 }}
              className="lg:col-span-2 glass-panel p-7 md:p-9 relative overflow-hidden"
            >
              {/* Decorative glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 min-h-full flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-400/80 font-semibold mb-4">
                    Curiosity beyond engineering
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-2xl">
                    I like building things.
                    <br />
                    <span className="text-gradient">
                      I also like wondering how the universe works.
                    </span>
                  </h3>

                  <p className="text-gray-400 leading-relaxed mt-5 max-w-2xl">
                    When I'm not working with software, I tend to disappear into
                    astrophysics, quantum physics, books, games, photography, or
                    somewhere in the mountains.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  {[
                    "Astrophysics",
                    "Quantum Physics",
                    "Photography",
                    "Travel",
                    "Gaming",
                    "Anime & Novels",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Physics */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 relative overflow-hidden bg-gradient-to-br from-yellow-900/20 via-slate-900/20 to-slate-950"
            >
              <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-yellow-500/10 blur-2xl" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-400/10 flex items-center justify-center text-yellow-400 mb-5">
                  <FaAtom size={21} />
                </div>

                <p className="text-xs uppercase tracking-[0.18em] text-yellow-400/70 mb-2">
                  Curiosity
                </p>

                <h3 className="text-xl font-bold text-white mb-2">Physics</h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Astrophysics, quantum mechanics, and the deeper questions
                  behind complex systems and reality.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ──────────────── OTHER INTERESTS ──────────────── */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Mountains */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 bg-gradient-to-br from-cyan-900/20 to-slate-900/20"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4">
                <FaMountain size={20} />
              </div>

              <h3 className="font-bold text-white text-lg mb-2">
                Mountains & Travel
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Exploring new places, chasing mountain views, and collecting
                stories along the way.
              </p>
            </motion.div>

            {/* Photography */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 bg-gradient-to-br from-purple-900/20 to-slate-900/20"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-400/10 flex items-center justify-center text-purple-400 mb-4">
                <FaCamera size={20} />
              </div>

              <h3 className="font-bold text-white text-lg mb-2">Photography</h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Mostly landscapes, nature, and the occasional moment that
                deserves to be remembered.
              </p>
            </motion.div>

            {/* Gaming */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 bg-gradient-to-br from-blue-900/20 to-slate-900/20"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-400/10 flex items-center justify-center text-blue-400 mb-4">
                <FaGamepad size={20} />
              </div>

              <h3 className="font-bold text-white text-lg mb-2">Gaming</h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Games are another way I explore worlds, systems, stories, and
                ideas.
              </p>
            </motion.div>

            {/* Anime & Reading */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 bg-gradient-to-br from-pink-900/15 to-slate-900/20"
            >
              <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-400/10 flex items-center justify-center text-pink-400 mb-4">
                <FaBookOpen size={20} />
              </div>

              <h3 className="font-bold text-white text-lg mb-2">
                Anime & Reading
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Long stories, strange worlds, ambitious ideas, and characters
                worth getting invested in.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ───────────────────────── CLOSING CTA ───────────────────────── */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-4"
        >
          <div className="glass-panel px-7 py-8 md:px-10 md:py-9 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400/80 mb-3">
              Keep Exploring
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Want to see the engineering side?
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Explore the projects, technologies, and credentials behind the
              work.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/projects"
                className="px-5 py-2.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-400/40 transition duration-200"
              >
                Explore Projects
              </Link>

              <Link
                to="/social"
                className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition duration-200"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
