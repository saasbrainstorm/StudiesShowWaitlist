import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Background } from './Background';
import { ResearchCard } from './ResearchCard';
import { Logo } from './Logo';
import { ResearchCardData } from '../types';

// Mock data based on the user's uploaded images
const cards: ResearchCardData[] = [
  {
    id: '1',
    category: 'Creativity',
    headline: 'Playing video games for a month boosts creativity through imagination',
    summary: 'Video games boost creativity not through passive screen time, but by activating imagination when you\'re genuinely engaged in playing.',
    rotation: -6,
  },
  {
    id: '2',
    category: 'Economics',
    headline: 'Coastal hotels bounce back faster from crises than inland ones',
    summary: 'Hotel location shapes both vulnerability to shocks and recovery patterns, with coastal properties rebounding quickly but inland ones building sustainable gains.',
    rotation: 6,
  },
  {
    id: '3',
    category: 'Consumer Behavior',
    headline: 'Religious consumers choose Islamic banking for trust, not price',
    summary: 'When products align with identity or values, customers prioritize trust and community approval over getting the best deal.',
    rotation: -3,
  }
];

export const Hero: React.FC = () => {
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
    }
  };

  return (
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
        </div>

      </main>

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
    </div>
  );
};