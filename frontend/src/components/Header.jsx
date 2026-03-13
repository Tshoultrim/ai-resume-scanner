import React from 'react';
import { getImagePath } from '../utils/imagePath';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Very subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 animate-pulse-slow"></div>
      
      {/* More transparent glass header */}
      <div className="relative backdrop-blur-md bg-black/5 border-b border-white/10 py-3 md:py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            {/* Logo with subtle effect */}
            <div className="relative group flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <img
                src={getImagePath('Logo.png')}
                alt="DrukOptix Logo"
                className="relative w-12 h-12 md:w-16 md:h-16 object-contain rounded-full border border-white/20"
                onError={(e) => {
                  console.error('Logo failed to load:', e.target.src);
                  e.target.src = 'https://via.placeholder.com/64?text=Logo';
                }}
              />
            </div>
            
            {/* Text content */}
            <div className="relative text-center md:text-left">
              <h1 className="text-xl md:text-3xl font-bold text-white drop-shadow-md">
                DrukOptix AI
              </h1>
              <p className="text-xs md:text-sm text-gray-300 mt-0.5 md:mt-1 font-light">
                Building amazing things together
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}