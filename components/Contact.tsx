import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "kingstockcapitalmanagement@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 text-center bg-navy-900">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
        Join the Fund.
      </h2>
      
      <div className="relative inline-block group">
        <button 
          onClick={handleCopy}
          className="inline-flex items-center gap-3 text-gold-500 text-lg md:text-xl hover:text-white transition-all border-b border-gold-500 hover:border-white pb-1 cursor-pointer bg-transparent"
        >
          <span>{email}</span>
          <span className="opacity-50 group-hover:opacity-100 transition-opacity">
            {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
          </span>
        </button>
        
        <div className={`absolute left-1/2 -translate-x-1/2 -bottom-8 text-green-400 text-xs font-bold transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
          Copied!
        </div>
      </div>
    </section>
  );
};