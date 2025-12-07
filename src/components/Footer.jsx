import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-6 px-4 text-center text-sm glass-panel border-t border-white/10 z-20">
      <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center">
        <span className="text-blue-200/70">
          © {new Date().getFullYear()} <span className="text-white font-medium">Mridul Narula</span>
        </span>
        <span className="hidden sm:inline text-blue-200/70">•</span>
        <a
          href="https://www.linkedin.com/in/mridul-narula-55338524b/"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="mt-2 text-sm text-gray-600 tracking-wide ">
        Coding • Anime • Tech • AI/ML • Physics • Gaming • Music
      </div>
    </footer>
  );
}
