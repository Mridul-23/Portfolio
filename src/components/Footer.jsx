import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-6 px-4 text-center text-sm bg-[#121212] text-gray-500 border-t border-gray-700">
      <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-3">
        <span className="opacity-70">
          © {new Date().getFullYear()} <span className="text-white font-medium">Mridul Narula</span>
        </span>
        <span className="hidden sm:inline">•</span>
        <a
          href="https://www.linkedin.com/in/mridul-narula-55338524b/"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="mt-2 text-xs text-gray-600 tracking-wide">
        Coding • Anime • Tech • AI/ML • Physics • Gaming • Music
      </div>
    </footer>
  );
}
