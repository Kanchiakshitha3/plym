
import React from 'react';
import { BuildStatus } from '../types';

interface Props {
  status: BuildStatus;
}

const BuildStatusCard: React.FC<Props> = ({ status }) => {
  return (
    <div className="p-8 glass rounded-3xl space-y-6 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      </div>

      <div className="space-y-1">
        <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Current Build Status</span>
        <h3 className="text-3xl font-bold">{status.buildState}</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="text-gray-400">Alpha Completion</span>
          <span className="text-indigo-400">{status.progress}%</span>
        </div>
        <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
          <div 
            className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            style={{ width: `${status.progress}%` }}
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">
        Our engineers are currently refining the real-time seat tracking engine and payment hooks. Est. Beta deployment: Q4 2024.
      </p>
    </div>
  );
};

export default BuildStatusCard;
