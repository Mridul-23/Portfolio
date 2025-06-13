import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const testimonials = [
  {
    name: '飘 (Piao)',
    role: 'ML Enthusiast from China',
    text: '“I stumbled upon Mridul’s recommender system while researching feedback-driven agents. It was refreshingly well thought-out compared to most GitHub projects I’d seen. Looking forward to building on it.”',
  },
  {
    name: 'Komal Preet Choudhary',
    role: 'B.Tech CSE Student, CGC Landran',
    text: '“I was genuinely impressed by Mridul’s AniSpider project. I reached out to understand how he built it, and his knowledge of web scraping blew me away.”',
  },
  {
    name: 'Dr. Vandana Sharma',
    role: 'Assistant Professor, CGC Landran',
    text: '“Mridul’s SignSpeak project stood out for its social impact and technical depth. We proudly showcased it on Science Day 2025. His work reflects both innovation and empathy.”',
  }
];

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);
  const timeout = useRef();

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearTimeout(timeout.current);
  }, [idx]);

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={!hasAnimatedOnce ? { opacity: 0, x: 50 } : { opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
          onAnimationComplete={() => {
            if (!hasAnimatedOnce) setHasAnimatedOnce(true);
          }}
        >
          <p className="text-gray-300 italic mb-4">
            {testimonials[idx].text}
          </p>
          <div className="mt-4 text-white font-semibold">
            {testimonials[idx].name}
          </div>
          <div className="text-gray-400 text-sm">
            {testimonials[idx].role}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === idx ? 'bg-cyan-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
