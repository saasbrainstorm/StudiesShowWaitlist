import React from 'react';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-900 bg-white">
      <Hero />
    </div>
  );
};

export default App;