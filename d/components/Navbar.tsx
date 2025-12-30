
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">
          P
        </div>
        <span className="text-2xl font-extrabold tracking-tighter">PLYM <span className="text-indigo-400">GAMES</span></span>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs font-medium text-emerald-400 border-emerald-500/20">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Live Build in Progress
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs font-medium text-indigo-400 border-indigo-500/20">
          Optimized for Gaming Cafés
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
