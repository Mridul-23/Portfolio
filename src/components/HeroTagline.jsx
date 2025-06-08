import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroTagline = () => {
  return (
    <motion.div
      className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold mt-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <span className="text-white">
        <Typewriter
          words={[
            'Breathing life into algorithms',
            'Decoding the cosmos by night',
            'Wandering through neural nets & mountain trails',
            'Living in logic, dreaming in quantum',
            'From particle physics to pixel-perfect UIs'
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </span>
    </motion.div>
  );
};

export default HeroTagline;
