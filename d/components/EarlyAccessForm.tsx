
import React, { useState } from 'react';
import { apiService } from '../services/api';

const EarlyAccessForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const response = await apiService.submitEarlyAccess(email);
      if (response.success) {
        setSubmitted(true);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-10 glass rounded-3xl border-emerald-500/20 bg-emerald-500/5 text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">You're on the list!</h3>
        <p className="text-gray-400">We've received your request. Check your inbox for updates as we get closer to launch.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-indigo-400 text-sm font-semibold hover:underline"
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 p-2 glass rounded-2xl shadow-2xl focus-within:ring-2 focus-within:ring-indigo-500/50 transition-all">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
          required
        />
        <button
          disabled={loading}
          type="submit"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 transition-all rounded-xl font-bold text-white shadow-lg active:scale-95 flex items-center justify-center min-w-[140px]"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
          ) : (
            'Reserve Spot'
          )}
        </button>
      </div>
      {error && (
        <p className="absolute -bottom-8 left-4 text-rose-500 text-xs font-medium">{error}</p>
      )}
    </form>
  );
};

export default EarlyAccessForm;
