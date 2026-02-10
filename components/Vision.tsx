import React from 'react';

export const Vision: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-navy-800">
      <div className="max-w-5xl mx-auto">
        {/* Macro Thesis */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <h2 className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-6">The Macro Thesis</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-6">
              From Gold to Oil... <br/>To Code.
            </h3>
          </div>
          <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
            <p>
              <strong>1944: Bretton Woods.</strong> The world anchored stability on Gold. <br/>
              <strong>1974: The Petrodollar.</strong> Stability was enforced by Oil and geopolitical power. <br/>
              <strong>2025+: The Digital Consensus.</strong> The world demands a neutral, finite, and borderless standard.
            </p>
            <p>
              The current financial system is plagued by inflation ($300T global debt) and centralized manipulation. Pi Network, with its fixed supply of 100 billion and 60 million users, represents the inevitable shift to a transparent, algorithmic monetary standard.
            </p>
          </div>
        </div>

        {/* The KSCM Vision */}
        <div className="border-t border-gray-700 pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-6">The KSCM Goal</h2>
                <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight mb-4">
                  Southeast Asia’s Premier Pi-Based Bank.
                </h3>
             </div>
             <div className="text-gray-400 font-light text-lg leading-relaxed">
               <p>
                 We are not just investing. We are building the infrastructure to mobilize the <strong>64 Billion "Dormant Pi"</strong> currently held by individuals. By transforming this digital store of value into active capital for lending, bonds, and global trade, we position Vietnam as a financial hub of the new economy.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};