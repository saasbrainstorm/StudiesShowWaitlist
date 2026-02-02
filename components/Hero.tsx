import React, { useState } from 'react';
import { Background } from './Background';
import { ResearchCard } from './ResearchCard';
import { Logo } from './Logo';
import { PhoneMockup } from './PhoneMockup';

import { ResearchCardData } from '../types';

const cards: ResearchCardData[] = [
  {
    id: '1',
    category: 'Creativity',
    headline: 'Gaming Boosts Creativity',
    summary: 'Active imagination engagement.',
    imageUrl: '/deck-1.jpg',
    rotation: -6,
  },
  {
    id: '2',
    category: 'Economics',
    headline: 'Coastal Recovery',
    summary: 'resilience in crisis.',
    imageUrl: '/deck-2.jpg',
    rotation: 6,
  },
  {
    id: '3',
    category: 'Trust',
    headline: 'Values Over Price',
    summary: 'Identity drives choices.',
    imageUrl: '/deck-3.jpg',
    rotation: -3,
  }
];

export const Hero: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!name.trim() || !email.trim()) {
      setStatus('error');
      setMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

    if (!GOOGLE_SHEET_URL) {
      // Simulation for development if env var is missing
      console.warn('VITE_GOOGLE_SHEET_URL is missing. Simulating success.');
      setTimeout(() => {
        setStatus('success');
        setMessage('Thanks for joining! (Simulation - missing API URL)');
        setName('');
        setEmail('');
      }, 1500);
      return;
    }

    try {
      // We use 'text/plain' to avoid preflight OPTIONS request which GAS doesn't handle well
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (data.result === 'success') {
        setStatus('success');
        setMessage('Thanks for joining the waitlist!');
        setName('');
        setEmail('');
      } else if (data.error && data.error.toLowerCase().includes('already registered')) {
        setStatus('success');
        setMessage("Yay you're already on the list!");
        setName('');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setMessage('Connection error. Please try again.');
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col font-sans text-gray-900 overflow-hidden">
      <Background />

      {/* Header */}
      <header className="w-full p-6 md:px-12 flex justify-center items-center z-50">
        <Logo />
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center relative z-10 pt-10 md:pt-20">

        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-20 lg:gap-20">
          {/* Left Column: Text & Form */}
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left z-30 w-full">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Studies. Answers. <br />
              <span className="relative inline-block">
                Life.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#3131C5] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg">
              One simplified research study at a time. <br />
              Clear takeaways for life.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="User" /></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="User" /></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="User" /></div>
              </div>
              <span className="text-sm font-semibold text-gray-600">Join 50+ curious minds</span>
            </div>

            {/* Form */}
            <div className="w-full max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === 'loading'}
                  className="px-6 py-3 rounded-full border border-gray-200 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3131C5] transition-all w-full"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="px-6 py-3 rounded-full border border-gray-200 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3131C5] transition-all w-full"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`px-8 py-3 rounded-full font-bold transition-all shadow-lg whitespace-nowrap w-full ${status === 'success'
                    ? 'bg-[#3131C5] text-white hover:bg-[#27279D]'
                    : status === 'loading'
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-black text-white hover:bg-gray-800'
                    }`}
                >
                  {status === 'loading' ? 'Joining...' : status === 'success' ? 'You’re on the list!' : 'Join the waitlist'}
                </button>
              </form>
              {message && (
                <p className={`mt-3 text-sm font-medium ${status === 'error' ? 'text-red-500' : 'text-[#3131C5]'}`}>
                  {message}
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Phone & Background */}
          <div className="flex-1 flex justify-center items-center relative w-full h-[600px] flex-col">
            <div className="relative z-20">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Bottom Section: Cards */}
        <div className="w-full max-w-[1200px] mx-auto mt-24 md:mt-32 mb-20 px-6">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-12 md:gap-24">
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-60 md:w-80 aspect-square hover:scale-105 transition-transform duration-300"
                style={{ transform: `rotate(${card.rotation}deg)` }}
              >
                <ResearchCard data={card} className="shadow-2xl" />
              </div>
            ))}
          </div>
        </div>

      </main>

      <footer className="w-full p-6 text-center md:text-right relative z-50">
        <div className="text-xs text-gray-400">
          © Studies Show 2024
        </div>
      </footer>
    </div>
  );
};