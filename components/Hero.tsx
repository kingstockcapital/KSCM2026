import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center text-center px-6 bg-navy-900 pt-32 pb-16 md:pt-40">
      <div className="my-auto flex flex-col items-center w-full max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 tracking-tight leading-tight">
          <span className="text-silver-gradient">King Stock</span> <br />
          <span className="text-gold-gradient">
            Capital Management
          </span>
        </h1>
        <p className="max-w-3xl text-lg md:text-2xl text-gray-400 leading-relaxed font-light mb-10">
          The foundation for building a comprehensive investment firm <br className="hidden md:block"/>
          and establishing a specialized <span className="text-white">global bank</span>.
        </p>
        
        <a 
          href="https://drive.google.com/file/d/1cyVniPfiLoI-QKlEkxGK-MoNh-tyNbRt/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-16 inline-flex items-center gap-3 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 btn-shine-border"
        >
          <span>Read Full Pitch Deck</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <div className="flex flex-wrap justify-center gap-12 text-center">
          <div>
            <div className="text-3xl font-serif text-white">$100M</div>
            <div className="text-xs text-gold-500 uppercase tracking-widest mt-2">Seed Fund</div>
          </div>
          <div>
            <div className="text-3xl font-serif text-white">500M</div>
            <div className="text-xs text-gold-500 uppercase tracking-widest mt-2">Pi Reserve</div>
          </div>
        </div>
      </div>
    </section>
  );
};