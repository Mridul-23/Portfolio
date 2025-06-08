import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarFieldScene from '../components/StarFieldScene';
import useKeySequence from '../hooks/useKeySequence';
import useCountOnView from '../hooks/useCountOnView';
import useFillOnView from '../hooks/useFillOnView';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import HeroTagline from '../components/HeroTagline';

export default function Home() {
  const [hideStars, setHideStars] = useState(false);

  useKeySequence([
    {
      sequence: ['KeyO', 'KeyF', 'KeyF'],
      onMatch: () => setHideStars(true),
      onCancel: () => setHideStars(false),
    },
  ]);

  return (
    <div className="relative w-full overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-950 text-white">
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence>
          {!hideStars && (
            <motion.div
              key="starfield"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{ duration: 4.5 }}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              <StarFieldScene />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-transparent bg-clip-text monst text-6xl md:text-8xl font-extrabold tracking-wide uppercase'
            style={{ backgroundImage: "linear-gradient(to right, #4292e2, #2894ff, #96eaf6)" }}
          >
            Mridul Narula
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-xl md:text-2xl text-cyan-100 tracking-wider max-w-2xl"
          >
            AI & ML Specialist • Full-Stack Developer • Quantum & Astro Physics Buff
          </motion.p> */}

          <HeroTagline />    

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-colors duration-200"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-colors duration-200"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400 z-10 text-sm font-mono"
        >
          ↓ Scroll to Discover ↓
        </motion.div>
      </div>

      <section className="py-20 px-6 bg-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around text-center gap-8"
        >
          {[ 
            { label: 'Projects Completed', value: 12 },
            { label: 'Dataset Views', value: 574 },
            { label: 'Certifications Earned', value: 10 },
            { label: 'Years Coding', value: 5 }
          ].map((item, idx) => {
            const [ref, count] = useCountOnView(item.value);
            return (
              <div key={idx} className="flex flex-col items-center">
                <span
                  ref={ref}
                  className="text-4xl md:text-5xl font-bold text-cyan-400"
                >
                  {count.toLocaleString()}{item.value >= 1000 && '+'}+
                </span>
                <span className="mt-2 text-gray-300">{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Core Skills
          </h2>
          <p className="mt-4 text-gray-300">
            Bridging AI, web dev, and theoretical physics to build tomorrow's tech.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { name: 'Machine Learning & Deep Learning', level: 92 },
            { name: 'React & Redux', level: 88 },
            { name: 'Python & Automation', level: 90 },
            { name: 'Django & DRF', level: 82 },
            { name: 'C++ & Data Structures', level: 85 },
            { name: 'FAISS & BERT Embeddings', level: 75 },
          ].map((skill, idx) => {
            const [ref, fill] = useFillOnView();
            return (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div
                  ref={ref}
                  className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: fill ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/tech-stack"
            className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-colors duration-200"
          >
            Explore My Tech Stack
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            My Journey
          </h2>
          <p className="mt-4 text-gray-300">
            Milestones from my first Python script to live AI applications.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="border-l border-cyan-600 absolute h-full left-1/2 transform -translate-x-1/2" />
          <div className="space-y-8">
            {[
              { year: '2022', event: 'Began Python fundamentals & Data Structures in C++' },
              { year: '2023', event: 'Studies Machine Learning and Some Javascript' },
              { year: '2024', event: 'Scraped and published Anime Archive Dataset on Kaggle' },
              { year: '2024', event: 'Made anime recommender system CLI & Web App' },
              { year: '2025', event: 'Research and made ProLearn Project' },
              { year: '2025', event: 'Developed and Deployed Ani-verse' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative w-full md:w-1/2 px-4 ${
                  idx % 2 === 0
                    ? 'md:pr-8 text-right ml-auto'
                    : 'md:pl-8 text-left mr-auto'
                }`}
              >
                <div className="inline-block bg-cyan-600 text-black font-semibold px-3 py-1 rounded">
                  {item.year}
                </div>
                <div className="mt-2 text-gray-300">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-300">
            A glimpse into my top picks: from anime recommendation to AI-driven study hubs.
          </p>
        </motion.div>

        <div className="relative overflow-x-auto px-4">
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-6 pb-4">
            {[
              {
                title: 'Ani-verse',
                desc: 'AI anime recommender with FAISS & BERT',
                bg: 'from-cyan-600 to-indigo-600',
                link: '/projects/aniverse',
              },
              {
                title: 'Quark Search',
                desc: 'Research scraper & RAG Q&A system',
                bg: 'from-purple-600 to-pink-600',
                link: '/projects/quark-search',
              },
              {
                title: 'ProLearn',
                desc: 'Adaptive AI study planner',
                bg: 'from-green-600 to-teal-600',
                link: '/projects/prolearn',
              },
              {
                title: 'Project P',
                desc: 'Gaming ideas & low-end PC content',
                bg: 'from-yellow-500 to-red-500',
                link: '/projects/project-p',
              },
            ].map((proj, idx) => (
              <motion.div
                key={idx}
                className="relative flex-shrink-0 w-64 h-40 rounded-xl shadow-lg cursor-pointer overflow-hidden"
                onClick={() => (window.location.href = proj.link)}
                whileHover="hovered"
              >
                <motion.div
                  variants={{
                    initial: { opacity: 1 },
                    hovered: { opacity: 0.2 },
                  }}
                  initial="initial"
                  animate="initial"
                  whileHover="hovered"
                  className={`absolute inset-0 bg-gradient-to-br ${proj.bg}`}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 p-4 text-white">
                  <h3 className="text-xl font-semibold">{proj.title}</h3>
                  <p className="mt-2 text-sm">{proj.desc}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        <div className="relative text-center mt-8">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-colors duration-200"
          >
            View All Projects
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Testimonials
          </h2>
        </motion.div>

        <TestimonialsCarousel />
      </section>
    </div>
  );
}
