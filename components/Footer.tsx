import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 py-12 text-center">
      <div className="text-gray-600 text-xs tracking-widest uppercase">
        &copy; {new Date().getFullYear()} King Stock Capital Management
      </div>
    </footer>
  );
};