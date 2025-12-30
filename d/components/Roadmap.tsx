
import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <div id="roadmap" className="space-y-12 scroll-mt-20">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black">Development Roadmap</h2>
        <p className="text-gray-400">Our journey towards redefining the café management experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 glass rounded-3xl border-l-4 border-l-indigo-500 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Now</h3>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-tighter">In Progress</span>
          </div>
          <ul className="space-y-4">
             {[
               "Core booking system architecture",
               "Café owner dashboard (Alpha)",
               "WebSocket station status integration",
               "Security & Auth layer hardening"
             ].map((item, idx) => (
               <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                  <span>{item}</span>
               </li>
             ))}
          </ul>
        </div>

        <div className="p-8 glass rounded-3xl border-l-4 border-l-gray-600 space-y-6 opacity-80">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Next</h3>
            <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs font-bold uppercase tracking-tighter">Queued</span>
          </div>
          <ul className="space-y-4">
             {[
               "Player profiles & gaming avatars",
               "Global rankings & leaderboards",
               "Integrated 'Live Pass' subscriptions",
               "Advanced café inventory POS system"
             ].map((item, idx) => (
               <li key={idx} className="flex items-start gap-3 text-gray-500">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0"></span>
                  <span>{item}</span>
               </li>
             ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
