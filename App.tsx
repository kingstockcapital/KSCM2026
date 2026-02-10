import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Valuation } from './components/Valuation';
import { Strategy } from './components/Strategy';
import { Roadmap } from './components/Roadmap';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white selection:bg-gold-500 selection:text-navy-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Valuation />
        <Strategy />
        <Roadmap />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;