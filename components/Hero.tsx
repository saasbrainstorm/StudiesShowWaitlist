import React, { useState } from 'react';
<<<<<<< HEAD
import { Background } from './Background';
import { ResearchCard } from './ResearchCard';
import { Logo } from './Logo';
import { PhoneMockup } from './PhoneMockup';

import { ResearchCardData } from '../types';

=======
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Background } from './Background';
import { ResearchCard } from './ResearchCard';
import { Logo } from './Logo';
import { ResearchCardData } from '../types';

// Mock data based on the user's uploaded images
>>>>>>> ac3db022d28e3c06288752d25db03abac0852268
const cards: ResearchCardData[] = [
  {
    id: '1',
    category: 'Creativity',
<<<<<<< HEAD
    headline: 'Gaming Boosts Creativity',
    summary: 'Active imagination engagement.',
    imageUrl: '/deck-1.jpg',
=======
    headline: 'Playing video games for a month boosts creativity through imagination',
    summary: 'Video games boost creativity not through passive screen time, but by activating imagination when you\'re genuinely engaged in playing.',
>>>>>>> ac3db022d28e3c06288752d25db03abac0852268
    rotation: -6,
  },
  {
    id: '2',
    category: 'Economics',
<<<<<<< HEAD
    headline: 'Coastal Recovery',
    summary: 'resilience in crisis.',
    imageUrl: '/deck-2.jpg',
=======
    headline: 'Coastal hotels bounce back faster from crises than inland ones',
    summary: 'Hotel location shapes both vulnerability to shocks and recovery patterns, with coastal properties rebounding quickly but inland ones building sustainable gains.',
>>>>>>> ac3db022d28e3c06288752d25db03abac0852268
    rotation: 6,
  },
  {
    id: '3',
<<<<<<< HEAD
    category: 'Trust',
    headline: 'Values Over Price',
    summary: 'Identity drives choices.',
    imageUrl: '/deck-3.jpg',
=======
    category: 'Consumer Behavior',
    headline: 'Religious consumers choose Islamic banking for trust, not price',
    summary: 'When products align with identity or values, customers prioritize trust and community approval over getting the best deal.',
>>>>>>> ac3db022d28e3c06288752d25db03abac0852268
    rotation: -3,
  }
];

export const Hero: React.FC = () => {
<<<<<<< HEAD
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
=======
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Logic to submit email would go here
      setTimeout(() => {
         setEmail('');
         setSubmitted(false);
         alert("Thanks for joining the waitlist!");
      }, 2000);
>>>>>>> ac3db022d28e3c06288752d25db03abac0852268
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="relative w-full h-screen overflow-hidden font-sans text-gray-900 selection:bg-blue-200">
      <Background />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center">
        <Logo />
        <a href="mailto:hello@studiesshow.com" className="text-sm font-medium text-gray-600 hover:text-black transition-colors hidden sm:block">
          Contact
        </a>
      </nav>

      {/* Main Content Container */}
      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6">
        
        {/* Text & Form */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-0 relative z-20 bg-white/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-6 sm:p-0 rounded-3xl border border-white/50 sm:border-none shadow-xl sm:shadow-none">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-gray-900 mb-6 leading-[0.9]">
            Research, <br className="sm:hidden" />
            Made Useful.
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium mb-10 max-w-xl mx-auto">
            One Study at a Time. <br className="hidden sm:inline" />
            Clear Takeaways for Life.
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 bg-white shadow-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
              />
              <button 
                type="submit"
                disabled={submitted}
                className="px-8 py-4 rounded-full bg-black text-white font-bold hover:bg-gray-800 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {submitted ? <CheckCircle2 size={20} /> : 'Get Early Access'}
                {!submitted && <ArrowRight size={18} />}
              </button>
            </div>
            <p className="text-xs text-gray-400 font-medium tracking-wide">
              No Spam, Just Start Full Research.
            </p>
          </form>
        </div>

        {/* Floating Cards - Absolute Positioned */}
        {/* These positions mimic the reference layout while being responsive */}
        
        {/* Card 1: Left */}
        <div className="absolute hidden lg:block left-[5%] bottom-[15%] xl:bottom-[20%] animate-float-slow rotate-[-6deg]">
           <ResearchCard data={cards[0]} className="shadow-2xl opacity-90 hover:opacity-100 scale-75 xl:scale-90" />
        </div>

        {/* Card 2: Right */}
        <div className="absolute hidden lg:block right-[5%] top-[20%] xl:top-[25%] animate-float-medium rotate-[6deg]">
           <ResearchCard data={cards[1]} className="shadow-2xl opacity-90 hover:opacity-100 scale-75 xl:scale-90" />
        </div>

        {/* Card 3: Bottom Center-ish (visible on smaller screens too but positioned differently) */}
        <div className="absolute hidden md:block lg:hidden bottom-[5%] right-[10%] animate-float-fast rotate-3">
           <ResearchCard data={cards[2]} className="shadow-2xl opacity-80 hover:opacity-100 scale-50" />
        </div>
        
         <div className="absolute hidden md:block lg:hidden top-[10%] left-[5%] animate-float-fast -rotate-3">
           <ResearchCard data={cards[0]} className="shadow-2xl opacity-80 hover:opacity-100 scale-50" />
>>>>>>> ac3db022d28e3c06288752d25db03abac0852268
        </div>

      </main>

<<<<<<< HEAD
      <footer className="w-full p-6 text-center md:text-right relative z-50">
        <div className="text-xs text-gray-400">
          © Studies Show 2024
        </div>
      </footer>
=======
      {/* Mobile Footer/Cards hint */}
      <div className="md:hidden absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-8 z-0">
         <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x w-full opacity-60">
             {/* Render mini versions of cards for mobile ambience */}
             {cards.map((c) => (
                <div key={c.id} className="min-w-[150px] snap-center">
                    <div className="bg-blue-600 rounded-xl p-3 h-24 flex items-center justify-center">
                        <span className="text-white text-[10px] text-center line-clamp-2 leading-tight font-bold">{c.headline}</span>
                    </div>
                </div>
             ))}
         </div>
      </div>

       <div className="absolute bottom-6 right-6 text-xs text-gray-300 hidden md:block">
        © Studies Show 2024
      </div>
>>>>>>> ac3db022d28e3c06288752d25db03abac0852268
    </div>
  );
};