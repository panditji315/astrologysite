import React from 'react';
import { Star, Sparkles } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'hi';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      title: "Discover Your Future with India's Most Trusted Astrologer",
      subtitle: "25+ years of Vedic astrology and life guidance",
      buttonText: "Book Appointment"
    },
    hi: {
      title: "भारत के सबसे भरोसेमंद ज्योतिषी के साथ अपना भविष्य जानें",
      subtitle: "25+ वर्षों का वैदिक ज्योतिष और जीवन मार्गदर्शन का अनुभव",
      buttonText: "अपॉइंटमेंट बुक करें"
    }
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        {/* Floating Stars Animation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              className={`absolute text-yellow-300 animate-pulse opacity-60 w-4 h-4`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-spin-slow" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {content[language].subtitle}
          </p>
        </div>

        <button
          onClick={scrollToBooking}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50"
        >
          {content[language].buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;