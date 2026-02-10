import React from 'react';

export const Roadmap: React.FC = () => {
  const steps = [
    {
      year: "Phase 1",
      title: "Foundation & Seed",
      detail: "Secure $100M Seed Fund to establish KSCM's credibility and operational infrastructure. Begin the journey to build a comprehensive investment firm."
    },
    {
      year: "Phase 2",
      title: "The 500M Reserve",
      detail: "Strategic acquisition of 500 Million Pi tokens. At projected valuations, this asset base aims to reach between $500 Billion and $12.5 Trillion."
    },
    {
      year: "Phase 3",
      title: "Ecosystem Deployment",
      detail: "Allocating 15% of the portfolio to dominate the Pi ecosystem: Pi Payment Escrow, Transaction Platforms, On-Chain Analysis, and Web3 Startups."
    },
    {
      year: "Phase 4",
      title: "Banking & Institutional",
      detail: "Establishment of Southeast Asia’s Premier Pi-Based Bank, headquartered in Vietnam. Mobilizing the 64 Billion dormant Pi to offer savings, lending, and bonds."
    }
  ];

  return (
    <section className="py-24 px-6 bg-navy-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-12 text-center md:text-left">Strategic Roadmap</h2>
        
        <div className="space-y-12 border-l border-gold-500/30 ml-3 md:ml-0 pl-8 md:pl-12 py-2">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full border-4 border-navy-800 bg-gold-500"></div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-gold-500 font-serif font-bold text-lg min-w-[120px]">{step.year}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm max-w-lg leading-relaxed">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};