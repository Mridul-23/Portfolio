import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Tech', path: '/tech-stack' },
  { label: 'Certs', path: '/certifications' },
  { label: 'Social', path: '/social' },
  { label: 'Contact', path: '/contact' },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClose = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="px-6 md:px-8 h-16 flex items-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link
            to="/"
            className="text-2xl font-mono font-bold text-white hover:text-cyan-400 transition-colors"
            onClick={handleClose}
          >
            Mridul
          </Link>
        </motion.div>

        <motion.ul
          className="hidden md:flex ml-auto space-x-8"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          {NAV_LINKS.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <motion.li
                key={path}
                className="relative"
                variants={itemVariants}
              >
                <Link
                  to={path}
                  className={`font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-300'
                      : 'text-gray-200 hover:text-cyan-300'
                  }`}
                >
                  {label}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="nav-starline"
                    className="absolute -bottom-0.5 left-0 w-full flex justify-between h-1 overflow-visible"
                  >
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.span
                        key={i}
                        className="block w-[0.5px] h-[0.5px] bg-cyan-300 rounded-full"
                        initial={{ opacity: 0.3, scale: 0.6, rotate: 0 }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.6, 1, 0.6],
                        }}
                        transition={{
                          delay: i * 0.08,
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'loop'
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.button
          onClick={() => setMobileOpen(prev => !prev)}
          className="md:hidden ml-auto text-gray-200 hover:text-white focus:outline-none"
          whileTap={{ rotate: 90 }}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <ul className="flex flex-col px-6 py-8 space-y-6">
              {NAV_LINKS.map(({ label, path }) => {
                const isActive = pathname === path;
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={handleClose}
                      className={`block text-lg font-medium transition-colors ${
                        isActive
                          ? 'text-cyan-300'
                          : 'text-gray-200 hover:text-cyan-300'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
