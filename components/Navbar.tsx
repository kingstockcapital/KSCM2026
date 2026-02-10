import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "kingstockcapitalmanagement@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 py-8 bg-navy-900/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 flex justify-between items-center">
          <span className="text-2xl font-serif font-bold text-gold-gradient tracking-widest">
            KSCM
          </span>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-xs font-bold text-gold-500 hover:text-white transition-colors uppercase tracking-widest border border-gold-500 px-4 py-2 rounded-full hover:bg-gold-500 hover:text-navy-900 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Contact Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-navy-900 border border-gold-500 rounded-xl p-8 w-full max-w-lg shadow-2xl relative transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-serif text-white mb-6">Contact Us</h3>
            
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                For investment inquiries or to request access to our full documentation, please contact us at:
              </p>
              
              <div className="space-y-2">
                <label className="text-xs text-gold-500 uppercase tracking-widest font-bold">Email Address</label>
                <div className="flex items-center gap-2 bg-navy-800 border border-gray-700 rounded-lg p-4 group hover:border-gold-500/50 transition-colors">
                  <span className="text-gray-200 text-sm md:text-base truncate flex-1 font-mono">{email}</span>
                  <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-gray-700 rounded-md transition-colors text-gold-500"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
                {copied && <p className="text-green-400 text-xs text-right mt-1 animate-pulse">Copied to clipboard!</p>}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm rounded transition-colors uppercase tracking-wider shadow-[0_0_15px_rgba(253,224,71,0.3)]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};