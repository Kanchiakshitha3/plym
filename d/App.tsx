
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BuildStatusCard from './components/BuildStatusCard';
import FeatureGrid from './components/FeatureGrid';
import Roadmap from './components/Roadmap';
import EarlyAccessForm from './components/EarlyAccessForm';
import { apiService } from './services/api';
import { Feature, BuildStatus } from './types';

const App: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [status, setStatus] = useState<BuildStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statusData, featuresData] = await Promise.all([
          apiService.getBuildStatus(),
          apiService.getFeatures()
        ]);
        setStatus(statusData);
        setFeatures(featuresData);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030712]">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background Blobs */}
      <div className="fixed top-0 -left-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 -right-20 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        <Navbar />
        
        <main className="space-y-32">
          <Hero />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-8">
              {status && <BuildStatusCard status={status} />}
              <div className="p-6 glass rounded-2xl">
                 <h4 className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">Quick Stats</h4>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl">
                       <div className="text-2xl font-bold">120+</div>
                       <div className="text-xs text-gray-400">Lines of Code</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                       <div className="text-2xl font-bold">14</div>
                       <div className="text-xs text-gray-400">Beta Cafés</div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <FeatureGrid features={features} />
            </div>
          </div>

          <Roadmap />
          
          <div id="early-access" className="py-20 border-t border-white/5 scroll-mt-20">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Secure your early access spot</h2>
                <p className="text-gray-400">Join 500+ café owners and gamers waiting for the next generation of café management.</p>
              </div>
              <EarlyAccessForm />
            </div>
          </div>
        </main>

        <footer className="pt-12 pb-8 border-t border-white/5 text-center text-sm text-gray-500">
           &copy; {new Date().getFullYear()} PLYM Games. All rights reserved. Gaming Café OS v0.8.2-alpha.
        </footer>
      </div>
    </div>
  );
};

export default App;
