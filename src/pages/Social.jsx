import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaKaggle,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';

const socials = [
  {
    name: 'GitHub',
    handle: '@Mridul-23',
    icon: FaGithub,
    color: 'text-white',
    link: 'https://github.com/Mridul-23',
    desc: 'Explore my projects, repositories, and engineering work.',
    featured: true,
  },
  {
    name: 'LinkedIn',
    handle: 'Mridul Narula',
    icon: FaLinkedin,
    color: 'text-blue-400',
    link: 'https://www.linkedin.com/in/mridul-narula-55338524b/',
    desc: 'Connect with me professionally and follow my career journey.',
    featured: true,
  },
  {
    name: 'Email',
    handle: 'mridulnarula23@gmail.com',
    icon: FaEnvelope,
    color: 'text-red-400',
    link: 'mailto:mridulnarula23@gmail.com',
    desc: 'Have an opportunity, idea, or just want to say hello?',
    featured: true,
  },
  {
    name: 'Kaggle',
    handle: '@mridulnarula',
    icon: FaKaggle,
    color: 'text-blue-500',
    link: 'https://kaggle.com/mridulnarula',
    desc: 'Explore my datasets, notebooks, and machine learning work.',
  },
  {
    name: 'Twitter / X',
    handle: '@mridulnarula_',
    icon: FaTwitter,
    color: 'text-sky-400',
    link: 'https://x.com/mridulnarula_',
    desc: 'Follow my thoughts on technology, AI, and things I find interesting.',
  },
];

const Social = () => {
  return (
    <main className="min-h-screen pt-28 px-6 pb-20 flex justify-center">
      <div className="max-w-5xl w-full">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80 mb-3">
            Get in touch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gradient font-['Space_Grotesk']">
            Let's Connect
          </h1>

          <p className="max-w-xl mx-auto mt-4 text-gray-400 leading-relaxed">
            Whether you're interested in my work, have an opportunity to discuss, or simply want to connect, you'll find me here.
          </p>
        </motion.div>

        {/* Primary connections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {socials
            .filter((item) => item.featured)
            .map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.name} href={item.link} target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.45 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl p-7 bg-slate-800/50 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-colors duration-300"
                >
                  {/* Hover sweep */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"/>

                  {/* Top row */}
                  <div className="relative flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-slate-700/40 border border-white/5 flex items-center justify-center group-hover:bg-slate-700/70 transition-colors duration-300">
                      <Icon className={`text-3xl ${item.color} group-hover:scale-110 transition-transform duration-300`}/>
                    </div>

                    <FaArrowUpRightFromSquare className="text-gray-600 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"/>
                  </div>

                  {/* Content */}
                  <div className="relative mt-6">
                    <h2 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {item.name}
                    </h2>

                    <p className="text-xs text-gray-500 mt-1">
                      {item.handle}
                    </p>

                    <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.a>
              );
            })}
        </div>

        {/* Secondary connections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {socials
            .filter((item) => !item.featured)
            .map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.name} href={item.link} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + idx * 0.1, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl p-6 bg-slate-800/30 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors duration-300">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-700/40 flex items-center justify-center group-hover:bg-slate-700/70 transition-colors duration-300">
                      <Icon className={`text-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}/>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {item.name}
                        </h2>

                        <FaArrowUpRightFromSquare className="text-xs text-gray-600 group-hover:text-cyan-300 transition-colors duration-300"/>
                      </div>

                      <p className="text-xs text-gray-500 mt-1 truncate">
                        {item.handle}
                      </p>

                      <p className="text-sm text-gray-400 mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center text-sm text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Prefer email?{' '}
          <a href="mailto:mridulnarula23@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Let's talk.
          </a>
        </motion.p>

      </div>
    </main>
  );
};

export default Social;