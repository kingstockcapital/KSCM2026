import React from 'react';

export const Valuation: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-navy-900 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-4">The Opportunity</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Why Pi? The Valuation Models</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlike speculative assets, Pi's value is derived from its potential to replace global liquidity pools. Based on global wealth data (Credit Suisse, IMF, World Bank), we project significant upside.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Model 1 */}
          <div className="bg-navy-800 p-8 border border-gray-700 hover:border-gold-500/50 transition-colors">
            <h4 className="text-gold-500 font-serif text-xl mb-2">Global Wealth Model</h4>
            <div className="text-3xl font-bold text-white mb-4">$7,578 <span className="text-sm font-normal text-gray-500">/ Pi</span></div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Based on $485 Trillion in total global individual wealth distributed across the 64 Billion Pi circulating among the population.
            </p>
          </div>

          {/* Model 2 */}
          <div className="bg-navy-800 p-8 border border-gray-700 hover:border-gold-500/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1">INSTITUTIONAL</div>
            <h4 className="text-gold-500 font-serif text-xl mb-2">Institutional Wealth</h4>
            <div className="text-3xl font-bold text-white mb-4">$11,111 <span className="text-sm font-normal text-gray-500">/ Pi</span></div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Based on $300-500 Trillion in assets held by governments and enterprises, allocated to the 36 Billion Pi reserved for institutions.
            </p>
          </div>

          {/* Model 3 */}
          <div className="bg-navy-800 p-8 border border-gray-700 hover:border-gold-500/50 transition-colors">
            <h4 className="text-gold-500 font-serif text-xl mb-2">Reserve Liquidity</h4>
            <div className="text-3xl font-bold text-white mb-4">$1,635 <span className="text-sm font-normal text-gray-500">/ Pi</span></div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Conservative estimate based solely on converting 100% of Global Forex Reserves ($12.3T) and Gold Reserves ($4.35T) into Pi liquidity.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm italic">
            *Projections based on full global adoption scenarios outlined in the <a href="https://drive.google.com/file/d/1cyVniPfiLoI-QKlEkxGK-MoNh-tyNbRt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-500 transition-colors">KSCM Research Papers (2025)</a>.
          </p>
        </div>
      </div>
    </section>
  );
};