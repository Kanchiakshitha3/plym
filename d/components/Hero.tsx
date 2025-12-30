
import React from 'react';

const Hero: React.FC = () => {
  const tags = ['Smart dashboards', 'One-tap booking', 'Razorpay ready', 'Cloud Sync'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-center space-y-8 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium">
        ✨ Evolution in Progress
      </div>
      
      <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] gradient-text">
        Something powerful is loading <br className="hidden md:block" /> behind this screen
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        We are rebuilding the OS for modern gaming cafés. Smarter management, seamless player experience, and integrated payments.
      </p>

      <div className="flex flex-wrap justify-center gap-2 py-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
        <button 
          onClick={() => scrollToSection('early-access')}
          className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 transition-all rounded-2xl font-bold text-white shadow-xl shadow-indigo-600/20 active:scale-95"
        >
          Get Launch Update
        </button>
        <button 
          onClick={() => scrollToSection('roadmap')}
          className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 transition-all rounded-2xl font-bold text-white active:scale-95"
        >
          View Roadmap
        </button>
      </div>
    </div>
  );
};

export default Hero;
