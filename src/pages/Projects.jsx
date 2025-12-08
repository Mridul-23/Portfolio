import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Ani-verse',
    desc: 'An anime recommendation platform utilizing FAISS & BERT embeddings for semantic search and personalized suggestions.',
    tech: ['React', 'Django', 'FAISS', 'BERT'],
    link: 'https://ani-verse-amber.vercel.app/'
  },
  {
    title: 'ThoughtNet',
    desc: 'A real-time idea clustering and visualization platform designed to organize thoughts dynamically.',
    tech: ['React','Django', 'Clustering', 'Real-time'],
    link: 'https://github.com/Mridul-23/ThoughtNet'
  },
  {
    title: 'SignSpeak',
    desc: 'Open-source initiative translating Indian Sign Language (ISL) gestures into spoken language for better accessibility.',
    tech: ['Python', 'Computer Vision', 'Deep Learning'],
    link: 'https://github.com/Mridul-23/SignSpeak'
  },
  {
    title: 'Ani-Spider',
    desc: 'Scraping tool built using the Scrapy framework to efficiently extract data from the MyAnimeList website.',
    tech: ['Python', 'Scrapy'],
    link: 'https://github.com/Mridul-23/Ani-Spider'
  },
  {
    title: 'Amaze',
    desc: 'Dynamic web scraping project utilizing Scrapy and Selenium for efficient data extraction.',
    tech: ['Python', 'Scrapy', 'Selenium WebDriver'],
    link: 'https://github.com/Mridul-23/amaze'
  },
  {
    title: "Simple-Python-Projects",
    desc: "A collection of basic Python projects perfect for beginners where each project is self-contained",
    tech: ['Python', 'Python Modules'],
    link: "https://github.com/Mridul-23/Simple-Python-Projects"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient font-['Space_Grotesk']"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col h-full"
            >
              <h2 className="text-2xl font-bold text-white mb-2">{proj.title}</h2>
              <p className="text-gray-300 mb-4 flex-grow">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono bg-slate-800 text-cyan-400 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <a 
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center py-3 rounded-xl bg-cyan-600/80 hover:bg-cyan-500 text-white transition-colors"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;