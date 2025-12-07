import React, { useContext } from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DefaultHelmet from "./DefaultHelmet";
import StarFieldScene from "./StarFieldScene";
import { ThemeContext } from "../context/ThemeContext";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import TechStack from "../pages/TechStack";
import Certifications from "../pages/Certifications";
import Social from "../pages/Social";
import NotFound from "../pages/NotFound";

import useDynamicTitle from "../hooks/useDynamicTitle";
import useKeySequence from "../hooks/useKeySequence";
import { FaInfoCircle } from "react-icons/fa";

export default function Wrapper() {
  const location = useLocation();
  const { hideStars, setHideStars } = useContext(ThemeContext);

  // Global Key Sequence for Star Toggle
  useKeySequence([
    {
      sequence: ['KeyO', 'KeyF', 'KeyF'],
      onMatch: () => setHideStars(true),
      onCancel: () => setHideStars(false),
    },
  ]);

  useDynamicTitle(location.pathname);

  return (
    <>
      <DefaultHelmet />

      {!hideStars && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarFieldScene />
        </div>
      )}

      <Navbar />

      <main className="relative z-10 w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <Routes location={location}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tech-stack" element={<TechStack />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/social" element={<Social />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />


      <div className="fixed bottom-4 right-4 z-50 group">
        <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-cyan-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 cursor-help transition-all shadow-lg">
          <FaInfoCircle size={14} />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 w-64 p-3 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md text-xs text-gray-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none shadow-xl">
           <p className="mb-1"><strong className="text-cyan-300">Easter Egg:</strong></p>
           <p>Type <kbd className="bg-white/10 px-1 rounded font-mono text-white">off</kbd> to disable stars.</p>
           <p className="mt-1">Press <kbd className="bg-white/10 px-1 rounded font-mono text-white">Esc</kbd> to bring them back.</p>
        </div>
      </div>
    </>
  );
}
