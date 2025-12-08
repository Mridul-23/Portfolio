import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, 
  FaEnvelope, FaKaggle, FaMicrosoft 
} from 'react-icons/fa';

const socials = [
  { name: "GitHub", icon: FaGithub, color: "text-white", link: "https://github.com/Mridul-23", desc: "Check out my repositories and code." },
  { name: "LinkedIn", icon: FaLinkedin, color: "text-blue-400", link: "https://www.linkedin.com/in/mridul-narula-55338524b/", desc: "Connect with me professionally." },
  { name: "Kaggle", icon: FaKaggle, color: "text-blue-500", link: "https://kaggle.com/mridulnarula", desc: "View my datasets and notebooks." },
  { name: "Twitter/X", icon: FaTwitter, color: "text-sky-400", link: "https://x.com/mridulnarula_", desc: "Follow my latest tech thoughts." },
  { name: "Gmail", icon: FaEnvelope, color: "text-red-400", link: "mailto:mridulnarula23@gmail.com", desc: "Shoot me an email directly." },
  { name: "Outlook", icon: FaMicrosoft, color: "text-blue-600", link: "mailto:mridulnarula@outlook.com", desc: "Reach me via Outlook." }
];

const Social = () => {
  return (
    <div className="min-h-screen pt-28 px-6 pb-16 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient font-['Space_Grotesk']"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Connect on Socials
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {socials.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
                className="group relative p-6 rounded-2xl 
                  bg-slate-800/40 backdrop-blur-md
                  transition-all duration-300 
                  border border-white/10 
                  overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  translate-x-[-100%] group-hover:translate-x-[100%]
                  transition-all duration-700"></span>

                <div className="w-14 h-14 rounded-xl bg-slate-700/40 flex items-center justify-center 
                  transition-all duration-300 group-hover:bg-slate-700/70">
                  <Icon className={`text-3xl ${item.color} group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300`} />
                </div>

                <h2 className="text-xl font-semibold text-white mt-4 transition-colors duration-300 
                  group-hover:text-cyan-300">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-400 mt-1 leading-snug transition-colors duration-300 group-hover:text-gray-300">
                  {item.desc}
                </p>
              </motion.a>

            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Social;
