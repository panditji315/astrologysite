import React from 'react';
import { Heart, Stars } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'hi';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      copyright: "© 2025 Pandit Sharma Astrology. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      disclaimer: "Disclaimer",
      madeWith: "Made with",
      tagline: "Guiding souls through the cosmic wisdom of Vedic astrology"
    },
    hi: {
      copyright: "© 2025 पंडित शर्मा ज्योतिष। सभी अधिकार सुरक्षित।",
      privacyPolicy: "गोपनीयता नीति",
      disclaimer: "अस्वीकरण",
      madeWith: "बनाया गया",
      tagline: "वैदिक ज्योतिष की ब्रह्मांडीय बुद्धि के माध्यम से आत्माओं का मार्गदर्शन"
    }
  };

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Stars className="w-8 h-8 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {language === 'en' ? 'Pandit Sharma Astrology' : 'पंडित शर्मा ज्योतिष'}
              </h3>
              <Stars className="w-8 h-8 text-yellow-400 ml-2" />
            </div>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              {content[language].tagline}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-purple-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-purple-200">
                {content[language].copyright}
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-purple-200 hover:text-yellow-400 transition-colors duration-300"
              >
                {content[language].privacyPolicy}
              </a>
              <span className="text-purple-400">|</span>
              <a 
                href="#" 
                className="text-purple-200 hover:text-yellow-400 transition-colors duration-300"
              >
                {content[language].disclaimer}
              </a>
            </div>

            <div className="flex items-center text-purple-200">
              <span className="mr-2">{content[language].madeWith}</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="ml-2">{language === 'en' ? 'for spiritual guidance' : 'आध्यात्मिक मार्गदर्शन के लिए'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;