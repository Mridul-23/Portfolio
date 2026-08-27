import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaArrowRight,
  FaEnvelope,
  FaAws,
  FaBriefcase,
  FaBrain,
  FaCode,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import {
  SiPython,
  SiLangchain,
  SiLanggraph,
  SiDjango,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiPostgresql,
} from "react-icons/si";
import { FaXTwitter, FaArrowUpRightFromSquare } from "react-icons/fa6";

import profileImg from "../assets/profile.png";
import aniverseImg from "/gallery/ani-verse/preview.png";
import ekaImg from "/gallery/eka/preview.png";

const BentoItem = ({ children, className = "", delay = 0, hover = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.45, delay }}
    whileHover={hover ? { y: -3 } : undefined}
    className={`glass-panel border border-white/10 rounded-3xl overflow-hidden shadow-xl ${
      hover ? "hover:border-cyan-400/30 transition-all duration-300" : ""
    } ${className}`}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ children }) => (
  <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-400/80 font-semibold mb-3">
    {children}
  </div>
);

const Metric = ({ value, label, source }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const numericValue = parseInt(value.replace(/,/g, ""), 10);
  const suffix = value.includes("+") ? "+" : "";

  useEffect(() => {
    if (!isInView) return;

    const duration = 800;
    const start = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - start) / duration, 1);

      // Ease out for a fast but smooth finish
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {count.toLocaleString()}
        {suffix}
      </div>

      <div className="mt-1 text-xs text-gray-400 uppercase tracking-wider">
        {label}
      </div>

      {source && (
        <div className="mt-1 text-[10px] text-cyan-400/60">{source}</div>
      )}
    </div>
  );
};

const TechPill = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-gray-300">
    <Icon className="text-cyan-300" />
    <span>{children}</span>
  </div>
);

const LiveTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-xs font-mono text-cyan-400/80 mt-1">
      {time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      })}{" "}
      IST
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-20 pb-16 px-4 md:px-8 font-['Space_Grotesk'] text-white relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.16] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-4">
        {/* =========================================================
            HERO
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <BentoItem
            className="lg:col-span-3 min-h-[470px] p-7 md:p-10 relative bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-cyan-950/20"
            hover={false}
          >
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Open to Work
              </span>
            </div>

            {/* ambient glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative h-full flex flex-col justify-center">
              <div className="flex flex-col md:flex-row md:items-center gap-7">
                {/* Profile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative shrink-0"
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />

                  <img
                    src={profileImg}
                    alt="Mridul Narula"
                    className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                  />
                </motion.div>

                {/* Identity */}
                <div>
                  <SectionLabel>Who I Am</SectionLabel>

                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Mridul Narula
                  </h1>

                  <h2 className="mt-2 text-lg md:text-xl text-cyan-300 font-medium">
                    AI Engineer
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-gray-400">
                    Building LLM-powered applications, RAG systems,
                    recommendation engines, and practical AI solutions with
                    strong backend and cloud foundations.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-cyan-50 transition-colors"
                    >
                      More About Me
                      <FaArrowRight size={12} />
                    </Link>

                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/10 text-sm font-medium transition-colors"
                    >
                      Resume
                      <FaArrowUpRightFromSquare size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Focus row */}
              <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    Focus
                  </div>
                  <div className="mt-1 text-sm text-gray-200">AI / GenAI</div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    Building
                  </div>
                  <div className="mt-1 text-sm text-gray-200">
                    RAG & Agentic AI
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    Engineering
                  </div>
                  <div className="mt-1 text-sm text-gray-200">
                    Backend & Cloud Systems
                  </div>
                </div>
              </div>
            </div>
          </BentoItem>

          {/* Right rail */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <BentoItem className="p-6 min-h-[180px] flex flex-col justify-between bg-slate-800/30">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center text-indigo-300">
                  <FaMapMarkerAlt size={19} />
                </div>
                <LiveTime />
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-widest text-gray-500">
                  Based In
                </div>
                <div className="mt-1 text-xl font-bold">Bengaluru</div>
                <div className="text-xs text-gray-400 mt-1">
                  Karnataka, India
                </div>
              </div>
            </BentoItem>

            {/* Compact Experience */}
            <BentoItem className="p-6 min-h-[180px] flex flex-col justify-between bg-gradient-to-br from-indigo-900/30 to-purple-900/30">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-purple-300">
                <FaBriefcase size={18} />
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-widest text-gray-500">
                  Experience
                </div>

                <div className="mt-1 text-lg font-bold">Cognizant</div>

                <div className="text-sm text-cyan-300 mt-1">
                  Programmer Analyst Trainee
                </div>

                <div className="text-xs text-gray-400 mt-1">
                  Internship • Bengaluru
                </div>

                <div className="text-[11px] text-gray-500 mt-0.5">
                  Mar 2026 – Jun 2026
                </div>
              </div>
            </BentoItem>
          </div>
        </div>

        {/* =========================================================
            WHAT I BUILD
        ========================================================== */}
        <BentoItem className="p-7 md:p-8" hover={false}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <SectionLabel>Engineering Focus</SectionLabel>

              <h2 className="text-2xl md:text-3xl font-bold">What I Build</h2>

              <p className="mt-2 text-sm text-gray-400 max-w-2xl">
                From intelligent applications to the infrastructure that helps
                them run reliably.
              </p>
            </div>

            <Link
              to="/projects"
              className="text-sm text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2"
            >
              Explore my projects
              <FaArrowRight size={11} />
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <FaBrain className="text-2xl text-cyan-300 mb-4" />
              <h3 className="font-semibold">Generative AI</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                LLM applications, RAG pipelines, agentic workflows, embeddings
                and prompt engineering.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <FaDatabase className="text-2xl text-indigo-300 mb-4" />
              <h3 className="font-semibold">Intelligent Retrieval</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Semantic search, vector databases, FAISS, ChromaDB, BERT and
                grounded generation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <FaCode className="text-2xl text-purple-300 mb-4" />
              <h3 className="font-semibold">Software Systems</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Python backends, Django, Flask, React, REST APIs and
                maintainable application architecture.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <FaCloud className="text-2xl text-sky-300 mb-4" />
              <h3 className="font-semibold">Cloud & DevOps</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                AWS infrastructure, Docker, Kubernetes, Terraform, Jenkins and
                CI/CD workflows.
              </p>
            </div>
          </div>
        </BentoItem>

        {/* =========================================================
            ENGINEERING PROOF
        ========================================================== */}
        <BentoItem
          className="p-7 md:p-8 bg-gradient-to-br from-slate-900/50 to-cyan-950/10"
          hover={false}
        >
          <div className="text-center">
            <SectionLabel>Built, Not Claimed</SectionLabel>

            <h2 className="text-2xl md:text-3xl font-bold">
              Engineering at a Glance
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              A few numbers pulled directly from systems I've built.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
            <Metric
              value="851"
              label="Documents indexed"
              source="Enterprise Knowledge Assistant"
            />

            <Metric
              value="6,187"
              label="Text chunks"
              source="Enterprise Knowledge Assistant"
            />

            <Metric value="14,000+" label="Anime records" source="Ani-verse" />

            <Metric value="27" label="Signs classified" source="SignSpeak" />
          </div>
        </BentoItem>

        {/* =========================================================
            FEATURED WORK
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Enterprise Knowledge Assistant */}
          <BentoItem
            className="lg:col-span-1 min-h-[440px] relative bg-gradient-to-br from-indigo-950/50 via-slate-900/70 to-cyan-950/30"
            hover={true}
          >
            <img
              src={ekaImg}
              alt="Enterprise Knowledge Assistant placeholder"
              className="absolute object-left w-full h-full object-cover opacity-25 "
            />

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/85 via-slate-900/45 to-cyan-950/40" />

            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative h-full p-7 md:p-9 flex flex-col justify-between">
              <div className="flex items-start justify-between ">
                <div>
                  <SectionLabel>Featured AI System</SectionLabel>

                  <h2 className="text-2xl font-bold mt-2">
                    Enterprise Knowledge Assistant
                  </h2>
                </div>
                <div className="hidden sm:flex px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-[10px] uppercase tracking-wider text-cyan-300">
                  Agentic RAG
                </div>
              </div>

              <div className="max-w-2xl">
                <p className="text-sm leading-relaxed text-gray-300">
                  Enterprise documentation assistant built around agentic RAG,
                  semantic retrieval, multi-turn conversations, and grounded
                  responses.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "LangChain",
                    "LangGraph",
                    "ChromaDB",
                    "Gemini",
                    "Flask",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/projects"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Explore project
                  <FaArrowRight size={11} />
                </Link>
              </div>
            </div>
          </BentoItem>

          {/* Ani-verse featured card */}
          <BentoItem
            className="lg:col-span-1 min-h-[440px] relative group overflow-hidden"
            hover={true}
          >
            <img
              src={aniverseImg}
              alt="Ani-verse anime recommendation platform"
              className="absolute object-left w-full h-full object-cover opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-950/80 to-transparent" />

            <div className="relative z-10 h-full p-7 flex flex-col justify-end">
              <div className="inline-flex self-start px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-[10px] uppercase tracking-wider text-cyan-300 mb-3">
                Featured Project
              </div>

              <h2 className="text-2xl font-bold">Ani-verse</h2>

              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Deployed AI recommendation platform combining BERT, FAISS, and
                LinUCB for personalized recommendations.
              </p>

              <div className="mt-5 flex items-center gap-4">
                <a
                  href="https://ani-verse-amber.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Live Demo
                  <FaExternalLinkAlt size={10} />
                </a>

                <Link
                  to="/projects"
                  className="text-sm text-white hover:text-gray-300"
                >
                  Details →
                </Link>
              </div>
            </div>
          </BentoItem>
        </div>

        {/* =========================================================
            TECHNICAL DNA
        ========================================================== */}
        <BentoItem className="p-7 md:p-8" hover={false}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionLabel>Technical DNA</SectionLabel>

              <h2 className="text-xl md:text-2xl font-bold">
                Core Technologies
              </h2>
            </div>

            <FaCode className="text-cyan-400 text-xl" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 lg:flex lg:flex-row justify-evenly">
            <TechPill icon={SiPython}>Python</TechPill>
            <TechPill icon={SiLangchain}>LangChain</TechPill>
            <TechPill icon={SiLanggraph}>LangGraph</TechPill>
            <TechPill icon={SiDjango}>Django</TechPill>
            <TechPill icon={SiReact}>React</TechPill>
            <TechPill icon={SiPostgresql}>PostgreSQL</TechPill>
            <TechPill icon={SiDocker}>Docker</TechPill>
            <TechPill icon={SiKubernetes}>Kubernetes</TechPill>
            <TechPill icon={SiTerraform}>Terraform</TechPill>
            <TechPill icon={FaAws}>AWS</TechPill>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-row items-center justify-between gap-3">
            <Link
              to="/credentials"
              className="text-xs text-gray-400 inline-flex hover:text-gray-300 transition duration-75 items-center gap-1.5 font-medium"
            >
              <FaAws className="text-white text-sm" />
              AWS Certified
              <FaArrowUpRightFromSquare size={10} />
            </Link>

            <Link
              to="/tech-stack"
              className="text-xs text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1 self-end sm:self-auto"
            >
              Explore tech stack
              <FaArrowRight size={9} />
            </Link>
          </div>
        </BentoItem>

        {/* =========================================================
            SOCIAL + PERSONAL / CTA
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoItem
            className="md:col-span-2 p-7 md:p-8 bg-gradient-to-br from-slate-900/50 to-indigo-950/20"
            hover={false}
          >
            <SectionLabel>Beyond Code</SectionLabel>

            <h2 className="text-2xl md:text-3xl font-bold">
              Curiosity doesn't stop at software.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
              I’m drawn to the questions behind intelligent systems, machine
              learning and fundamental physics, with a particular interest in
              understanding how complex systems work.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "AI",
                "Machine Learning",
                "Physics",
                "Astrophysics",
                "Quantum Physics",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-gray-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </BentoItem>

          <BentoItem
            className="p-7 md:p-8 bg-gradient-to-br from-indigo-900/40 to-purple-900/40"
            hover={false}
          >
            <SectionLabel>Let's Connect</SectionLabel>

            <h2 className="text-xl font-bold">Find me online.</h2>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <a
                href="https://github.com/Mridul-23"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 transition-colors"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mridul-narula-55338524b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 transition-colors"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/mridulnarula_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 transition-colors"
              >
                <FaXTwitter />
              </a>
            </div>

            <a
              href="mailto:mridulnarula23@gmail.com"
              className="mt-3 w-full h-11 rounded-xl bg-white text-black flex items-center justify-center gap-2 text-sm font-bold hover:bg-cyan-50 transition-colors"
            >
              <FaEnvelope size={13} />
              Get in touch
            </a>
          </BentoItem>
        </div>

        {/* =========================================================
            FOOTER CTA
        ========================================================== */}
        <BentoItem
          className="p-8 md:p-10 text-center bg-gradient-to-r from-cyan-950/20 via-indigo-950/20 to-purple-950/20"
          hover={false}
        >
          <SectionLabel>Open to possibilities</SectionLabel>

          <h2 className="text-2xl md:text-4xl font-bold">
            Building intelligent systems,
            <span className="text-cyan-300"> one idea at a time.</span>
          </h2>

          <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
            Explore the work, dig into the technical details, or reach out if
            you want to build something interesting.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/projects"
              className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-cyan-50 transition-colors"
            >
              Explore Projects
            </Link>

            <a
              href="mailto:mridulnarula23@gmail.com"
              className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </BentoItem>
      </div>
    </main>
  );
}
