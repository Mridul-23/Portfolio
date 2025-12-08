import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaAtom } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-12 font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto">
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-12 text-center text-gradient tracking-tight"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass-panel p-8 md:p-10 flex flex-col justify-center gap-6"
          >
             <h2 className="text-2xl md:text-3xl font-bold text-white">
                Hi, I'm <span className="text-cyan-400">Mridul Narula</span>! 👋
             </h2>
             <p className="text-gray-300 text-lg leading-relaxed">
                I'm a B.Tech Computer Science student, constantly tinkering at the intersection of logic and <span className="text-cyan-400 font-medium">innovation</span>, especially in advanced computing & artificial intelligence.
             </p>
             <p className="text-gray-300 text-lg leading-relaxed">
                My work sits at the intersection of <strong>Deep Learning</strong>, <strong>Web Engineering</strong>, and <strong>Scientific Curiosity</strong>. 
                Whether it's building recommendation engines like <span className="text-cyan-400">Ani-verse</span> or real-time platforms like <span className="text-cyan-400">ThoughtNet</span>, I love crafting systems that are smart, fast, and impactful.
             </p>
             <div className="flex gap-3 flex-wrap mt-2">
                {["Python", "React", "TensorFlow", "Django", "Automation"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-cyan-300/80">
                    {tech}
                  </span>
                ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 bg-gradient-to-br from-purple-900/20 to-slate-900/20"
            >
               <div className="w-12 h-12 font-thin rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                 <FaBrain size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">AI-First</h3>
               <p className="text-sm text-gray-400">
                 Specializing in Reinforcement Learning, NLP, and scalable ML architectures.
               </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="glass-card p-6 bg-gradient-to-br from-yellow-900/20 to-slate-900/20"
            >
               <div className="w-12 h-12 font-thin rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-4">
                 <FaAtom size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Physics Driven</h3>
               <p className="text-sm text-gray-400">
                 Exploring the synergy between Quantum Mechanics, Astrophysics, and Code.
               </p>
            </motion.div>
          </div>

        </div>

        <div className="mt-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-10 text-center text-white"
          >
            Endorsements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: '飘 (Piao)',
                ini: '飘',
                role: 'ML Enthusiast',
                text: '“I stumbled upon Mridul’s recommender system while researching feedback-driven agents. It was refreshingly well thought-out compared to most GitHub projects I’d seen.”',
                delay: 0.4
              },
              {
                name: 'Komal Preet',
                ini: 'K',
                role: 'B.Tech CSE Student',
                text: '“I was genuinely impressed by Mridul’s AniSpider project. His knowledge of web scraping blew me away.”',
                delay: 0.5
              },
              {
                name: 'Dr. Vandana Sharma',
                ini: 'V',
                role: 'Assistant Professor',
                text: '“Mridul’s SignSpeak project stood out for its social impact and technical depth. His work reflects both innovation and empathy.”',
                delay: 0.6
              }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: t.delay }}
                className="glass-card p-8 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="absolute top-6 right-6 text-6xl text-white/5 font-serif leading-none group-hover:text-cyan-500/10 transition-colors">“</div>
                
                <p className="text-gray-300 italic mb-6 relative z-10 text-[0.95rem] leading-relaxed flex-grow">
                  {t.text}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                    {t.ini}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
