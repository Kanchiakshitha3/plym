
import React from 'react';
import { Feature } from '../types';

interface Props {
  features: Feature[];
}

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const getStatusStyles = (status: Feature['status']) => {
    switch (status) {
      case 'Launching soon': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Beta queue': return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20';
      case 'Sandbox ready': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Socket enabled': return 'bg-sky-500/10 text-sky-500 border-sky-500/20';
      default: return 'bg-white/5 text-white/50 border-white/10';
    }
  };

  return (
    <div className="p-6 glass rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/20 group">
      <div className="flex flex-col h-full justify-between gap-6">
        <div className="space-y-3">
          <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getStatusStyles(feature.status)}`}>
            {feature.status}
          </div>
          <h4 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">{feature.title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
        </div>
        
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-500 cursor-pointer group-hover:gap-3 transition-all">
          LEARN MORE 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const FeatureGrid: React.FC<Props> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature._id} feature={feature} />
      ))}
    </div>
  );
};

export default FeatureGrid;
