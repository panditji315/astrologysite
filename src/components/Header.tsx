import React from 'react';
import { Link } from 'react-router-dom';
import { Stars, Moon } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'hi';
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-maroon-900 text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Stars className="w-8 h-8 text-yellow-400 animate-pulse" />
              <Moon className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {language === 'en' ? 'Pandit Sharma Astrology' : 'पंडित शर्मा ज्योतिष'}
            </h1>
          </div>
          
          <div className="flex space-x-2">
            <Link
              to="/english"
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                language === 'en' 
                  ? 'bg-yellow-500 text-purple-900 shadow-lg' 
                  : 'bg-purple-700 hover:bg-purple-600 text-white'
              }`}
            >
              English
            </Link>
            <Link
              to="/hindi"
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                language === 'hi' 
                  ? 'bg-yellow-500 text-purple-900 shadow-lg' 
                  : 'bg-purple-700 hover:bg-purple-600 text-white'
              }`}
            >
              हिन्दी
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;