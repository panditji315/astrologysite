import React from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'hi';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    en: {
      title: "About Pandit Sharma",
      description: "With over 25 years of dedicated practice in Vedic Astrology, Pandit Sharma has become one of India's most respected and trusted astrologers. His deep understanding of ancient scriptures combined with modern counseling techniques has helped transform thousands of lives.",
      expertise: "Expertise Areas:",
      areas: [
        "Vedic Astrology",
        "Horoscope Reading",
        "Palmistry",
        "Kundali Matching",
        "Gemstone Recommendations",
        "Vaastu Solutions"
      ],
      stats: [
        { icon: Users, number: "10,000+", label: "Happy Clients" },
        { icon: Award, number: "95%", label: "Accuracy Rate" },
        { icon: Globe, number: "50+", label: "Countries Served" },
        { icon: TrendingUp, number: "25+", label: "Years Experience" }
      ]
    },
    hi: {
      title: "पंडित शर्मा के बारे में",
      description: "वैदिक ज्योतिष में 25 से अधिक वर्षों के समर्पित अभ्यास के साथ, पंडित शर्मा भारत के सबसे सम्मानित और भरोसेमंद ज्योतिषियों में से एक बन गए हैं। प्राचीन शास्त्रों की गहरी समझ और आधुनिक परामर्श तकनीकों के संयोजन से हजारों जीवन बदले हैं।",
      expertise: "विशेषज्ञता के क्षेत्र:",
      areas: [
        "वैदिक ज्योतिष",
        "कुंडली पठन",
        "हस्तरेखा विज्ञान",
        "कुंडली मिलान",
        "रत्न सुझाव",
        "वास्तु समाधान"
      ],
      stats: [
        { icon: Users, number: "10,000+", label: "खुश ग्राहक" },
        { icon: Award, number: "95%", label: "सटीकता दर" },
        { icon: Globe, number: "50+", label: "देश सेवित" },
        { icon: TrendingUp, number: "25+", label: "वर्षों का अनुभव" }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              {content[language].title}
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {content[language].description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {content[language].stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <stat.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Expertise Areas */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 text-center">
              {content[language].expertise}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content[language].areas.map((area, index) => (
                <div key={index} className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg hover:from-purple-100 hover:to-orange-100 transition-all duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-800 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;