import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  { 
    name: "Summer Training on Python Technology", 
    issuer: "Chandigarh Group of Colleges, Landran", 
    date: "2024",
    link: "https://drive.google.com/file/d/1-mdlFQwnTHQYO1zqNBFvZqzrIXSforWY/view"
  },
  { 
    name: "Machine Learning using Python", 
    issuer: "INI", 
    date: "2025",
    link: "https://drive.google.com/file/d/1T4B-0ZYJvnQsHeGqJWQo-GvfhKPgWSUU/view"
  },
  { 
    name: "Database Management System", 
    issuer: "NPTEL", 
    date: "2025",
    link: "https://drive.google.com/file/d/1eQW-NZkbxnJ_JjGp3tx1_B_75C9_ro9Z/view"
  },
  { 
    name: "SIH Internal Hackathon Participation", 
    issuer: "Smart India Hackathon", 
    date: "2024",
    link: "https://drive.google.com/file/d/10hdeedMwFuSVwm-HAFirn5p_UiTudi28/view?usp=sharing" 
  },
  { 
    name: "SIH Internal Hackathon Participation", 
    issuer: "Smart India Hackathon", 
    date: "2025",
    link: "https://drive.google.com/file/d/12boGhWhreBUbZOUMeSnqmqF9AdL7eYCn/view?usp=sharing" 
  }
];

const Certifications = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient font-['Space_Grotesk']"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Certifications
        </motion.h1>

        <div className="grid grid-cols-1 gap-6">
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link || "#"}
              target={cert.link ? "_blank" : "_self"}
              rel={cert.link ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={cert.link ? { scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.6)" } : {}}
              className={`glass-card p-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left transition-all ${!cert.link ? 'cursor-default' : 'cursor-pointer hover:border-cyan-400/50'}`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  {cert.name}
                  {cert.link && <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">View</span>}
                </h3>
                <p className="text-gray-400 mt-1">{cert.issuer}</p>
              </div>
              <div className="mt-4 sm:mt-0 px-4 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm border border-cyan-800 whitespace-nowrap">
                {cert.date}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;