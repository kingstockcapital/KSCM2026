import React from 'react';
import { Layers, TrendingUp, Building2, ShieldCheck, BarChart3, Users } from 'lucide-react';

export const Strategy: React.FC = () => {
  const strategies = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      title: "Pi Payment Escrow",
      description: "Investing in decentralized escrow solutions to replace traditional banking letters of credit, securing KSCM's dominance in transaction infrastructure."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-gold-500" />,
      title: "On-Chain Analysis",
      description: "Funding platforms that analyze real-time economic behavior and cash flow trends within the blockchain economy to drive data-centric decisions."
    },
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: "P2P Investment Hub",
      description: "Creating a decentralized platform connecting investors with high-potential Pi-based startups, fostering institutional wealth creation."
    },
    {
      icon: <Building2 className="w-6 h-6 text-gold-500" />,
      title: "The Pi-Based Bank",
      description: "Headquartered in Vietnam. We aim to mobilize the 63.9 billion dormant Pi to provide savings (0.5-1.5%) and lending services (3-5%)."
    }
  ];

  return (
    <section className="py-24 px-6 bg-navy-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-16 text-center">Investment Strategy</h2>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {strategies.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-4 p-3 border border-gold-500/20 rounded-full bg-navy-800">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-gray-800 pt-12 text-center">
           <p className="text-gray-500 text-sm max-w-2xl mx-auto italic">
             "As Pi cements its role as a global currency, KSCM will strategically pivot reserves into Bonds and Dividend-Paying Stocks to ensure long-term stability."
           </p>
        </div>
      </div>
    </section>
  );
};