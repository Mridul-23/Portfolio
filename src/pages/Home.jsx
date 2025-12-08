import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaExternalLinkAlt, FaCode, FaDownload, FaEnvelope } from 'react-icons/fa';
import { SiPython, SiReact, SiTensorflow, SiDjango, SiPytorch, SiTailwindcss, SiCplusplus } from 'react-icons/si';
import aniverseImg from '../assets/ani-verse snapshot.png';

const BentoItem = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.15 }}
    whileHover={{ scale: 1.01 }}
    className={`glass-panel border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

const LiveTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-xs font-mono text-cyan-400/80 mt-1">
      {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })} IST
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen w-full pt-20 pb-10 px-4 md:px-8 font-['Space_Grotesk'] text-white relative">
      <div className="absolute inset-0 bg-grid-white opacity-[0.2] pointer-events-none z-0" />
      
      {/* Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 md:h-[800px]">

        {/* 1. Profile / Hero Tile (Large: 2x2) */}
        <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-center p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 relative group">
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </span>
             <span className="text-xs font-medium text-emerald-400">Open to Work</span>
          </div>

          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 rounded-full bg-cyan-500/20 mb-6 flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
             <span className="text-4xl">👨‍💻</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Mridul Narula
          </h1>
          <h2 className="text-xl text-cyan-300 font-medium mb-4">
            AI/ML Engineer & Full Stack Dev
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Crafting intelligent systems and seamless web experiences. 
            Obsessed with <span className="text-white">Neural Networks</span>, <span className="text-white">WebDev</span>, and <span className="text-white">Physics</span>.
          </p>
          <div className="mt-6 flex gap-3">
             <Link to="/about" className="px-5 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-cyan-50">
               More About Me
             </Link>
             <Link to="/social" className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 text-sm font-medium">
               Contact
             </Link>
          </div>
        </BentoItem>

        <BentoItem delay={0.1} className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between items-start bg-slate-800/40 group cursor-default relative overflow-hidden">
           <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
           <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform shadow-inner border border-indigo-500/30">
             <FaMapMarkerAlt size={20} />
           </div>
           <div>
             <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Based In</div>
             <div className="text-xl font-bold text-white">India</div>
             <LiveTime />
           </div>
        </BentoItem>

        <BentoItem delay={0.2} className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: FaGithub, link: "https://github.com/Mridul-23", bg: "hover:bg-gray-700" },
               { icon: FaLinkedin, link: "https://www.linkedin.com/in/mridul-narula-55338524b/", bg: "hover:bg-blue-600" },
               { icon: FaTwitter, link: "https://x.com/mridulnarula_", bg: "hover:bg-sky-500" },
               { icon: FaExternalLinkAlt, link: "/social", bg: "hover:bg-green-600" } // Link to social page
             ].map((s, i) => (
               <a 
                 key={i} 
                 href={s.link.startsWith('http') ? s.link : undefined}
                 title={s.link} // Simple tooltip
                 className={`h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl transition-all ${s.bg} text-white`}
               >
                 <s.icon />
               </a>
             ))}
          </div>
        </BentoItem>

        {/* 4. Tech Stack Marquee (Wide: 2x1) */}
        <BentoItem delay={0.3} className="md:col-span-2 md:row-span-1 flex flex-col justify-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-transparent to-slate-900/90 z-10 pointer-events-none" />
           
           <div className="flex animate-marquee whitespace-nowrap gap-8 items-center px-4">
              {[SiPython, SiReact, SiTensorflow, SiDjango, SiPytorch, SiTailwindcss, SiCplusplus, SiPython, SiReact, SiTensorflow].map((Icon, i) => (
                <div key={i} className="text-4xl text-gray-500 hover:text-cyan-300 transition-colors cursor-pointer">
                  <Icon />
                </div>
              ))}
           </div>
           
           <div className="absolute bottom-2 right-4 z-20">
              <Link to="/tech-stack" className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1 hover:underline">
                 All Tech <FaCode />
              </Link>
           </div>
        </BentoItem>

        {/* 5. Featured Project (Large: 2x2) */}
        <BentoItem delay={0.4} className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
           {/* Background Image Effect */}
           <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 opacity-40 group-hover:opacity-60"
              style={{ backgroundImage: `url('${aniverseImg}')` }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/80 to-transparent z-10" />
           
           <div className="relative z-20 h-full p-8 flex flex-col justify-end">
              <div className="inline-block px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full mb-3 w-max">
                FEATURED
              </div>
              <h3 className="text-3xl font-bold mb-2">Ani-verse</h3>
              <p className="text-gray-300 text-sm mb-4 max-w-md">
                AI-powered recommendation platform using FAISS vector search and BERT embeddings.
              </p>
              
              <div className="flex gap-4">
                 <a href="https://ani-verse-amber.vercel.app/" target="_blank" className="text-cyan-300 font-bold hover:underline flex items-center gap-2">
                   Live Demo <FaExternalLinkAlt size={12} />
                 </a>
                 <Link to="/projects" className="text-white hover:text-gray-200 text-sm flex items-center mt-1">
                   View all projects →
                 </Link>
              </div>
           </div>
        </BentoItem>

        {/* 6. Stats / Impact (Tall: 1x2) */}
        <BentoItem delay={0.5} className="md:col-span-1 md:row-span-2 p-6 flex flex-col justify-around bg-gradient-to-b from-slate-800/20 to-cyan-900/10">
           {[
             { label: "Repositories", val: "15+" },
             { label: "Kaggle Views", val: "700+" },
             { label: "Hours Coding", val: "∞" }
           ].map((stat, i) => (
             <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.val}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
             </div>
           ))}
        </BentoItem>
        
        {/* 7. Resume / CTA (Small: 1x1) */}
        <BentoItem delay={0.6} className="md:col-span-1 md:row-span-1 border-dashed border-2 border-white/20 hover:border-cyan-400 transition-colors bg-white/5">
           <a href="/resume.pdf" download="Mridul_Narula_Resume.pdf" className="flex flex-col justify-center items-center text-center w-full h-full p-6 group">
             <div className="w-12 h-12 mb-3 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-black transition-colors">
               <FaDownload size={20} />
             </div>
             <div className="font-bold text-sm text-gray-300 group-hover:text-white">Download Resume</div>
           </a>
        </BentoItem>

        {/* 8. Quick Contact (Small: 1x1) - Fills the last spot */}
        <BentoItem delay={0.7} className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 hover:from-indigo-900/60 hover:to-purple-900/60">
           <a href="mailto:mridulnarula23@gmail.com" className="flex flex-col justify-center items-center text-center w-full h-full p-6 group">
             <div className="text-4xl mb-2 text-purple-300 group-hover:scale-110 transition-transform">
               <FaEnvelope />
             </div>
             <div className="font-bold text-sm text-gray-200 group-hover:text-white">Hire Me</div>
             <div className="text-xs text-gray-400 mt-1">mridulnarula23@gmail.com</div>
           </a>
        </BentoItem>

      </div>
    </div>
  );
}
