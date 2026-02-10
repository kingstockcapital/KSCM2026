import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-navy-800">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-3xl font-serif italic text-gray-300 mb-8 leading-relaxed">
          "We don't just speculate on the future of money. We build it."
        </p>
        <div className="text-gold-500 font-bold uppercase tracking-widest text-xs">
          Dang Quan Vuong — Founder
        </div>
      </div>
    </section>
  );
};