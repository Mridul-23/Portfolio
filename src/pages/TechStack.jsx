import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    name: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "Keras", "Sentence-Transformers", "Transformers (BERT, GPT, etc.)", "FAISS", "Scikit-learn", "NLTK", "OpenCV", "Agentic AI"]
  },
  {
    name: "Web Development",
    skills: ["JavaScript", "React", "Django", "Django Rest Framework", "HTML/CSS", "Tailwind CSS"]
  },
  {
    name: "Data & Tools",
    skills: ["C++", "SQL (MySQL, PostgreSQL)", "Scrapy", "Git", "Linux", "Numpy", "Pandas", "Matplotlib", "Seaborn"]
  }
];

const TechStack = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-['Space_Grotesk']">My Tech Arsenal</h1>
          <p className="text-gray-300">Tools I use to interpret data and build applications.</p>
        </motion.div>

        <div className="space-y-12">
          {techCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-cyan-300 border-b border-white/10 pb-2">{cat.name}</h2>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.2)" }}
                    className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700 text-gray-200 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
