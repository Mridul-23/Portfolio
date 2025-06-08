// src/components/Navbar.jsx
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

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClose = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className=" px-6 md:px-8 h-16 flex items-center">
        <Link
          to="/"
          className="text-2xl font-mono font-bold text-white hover:text-cyan-400 transition-colors"
          onClick={handleClose}
        >
          Mridul
        </Link>

        <ul className="hidden md:flex ml-auto space-x-8">
          {NAV_LINKS.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <li key={path} className="relative">
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
                      {/*
                        Generate 10 tiny dots across the full width.
                        Each dot is w-0.5 h-0.5 (≈2px), bg-cyan-300, and twinkles via opacity animation.
                      */}
                      {Array.from({ length: 20 }).map((_, i) => (
                        <motion.span
                          key={i}
                          className="block w-[0.5px] h-[0.5px] bg-cyan-300 rounded-full"
                          initial={{ opacity: 0.3, scale: 0.6 }}
                          animate={{ opacity: [0.3, 1, 0.3], scale: [0.6, 1, 0.6] }}
                          transition={{
                            delay: i * 0.08,      // stagger each dot’s twinkle
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden ml-auto text-gray-200 hover:text-white focus:outline-none"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
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
