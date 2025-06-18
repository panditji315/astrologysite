import React from 'react';
import { 
  Calendar, 
  Heart, 
  Briefcase, 
  Gem, 
  Home, 
  Users, 
  Star,
  HandMetal 
} from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'hi';
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive astrological guidance for all aspects of life",
      services: [
        {
          icon: Calendar,
          title: "Horoscope Analysis",
          description: "Detailed birth chart analysis and future predictions based on planetary positions."
        },
        {
          icon: Users,
          title: "Kundali Matching",
          description: "Complete compatibility analysis for marriage proposals and relationship harmony."
        },
        {
          icon: Heart,
          title: "Marriage Prediction",
          description: "Timing and compatibility insights for marriage and relationship matters."
        },
        {
          icon: Briefcase,
          title: "Business & Career Consultation",
          description: "Professional guidance for career growth and business success strategies."
        },
        {
          icon: Heart,
          title: "Love & Relationship Advice",
          description: "Relationship counseling and solutions for love-related challenges."
        },
        {
          icon: Gem,
          title: "Gemstone Suggestion",
          description: "Personalized gemstone recommendations for health, wealth, and prosperity."
        },
        {
          icon: Home,
          title: "Vaastu Correction",
          description: "Home and office Vaastu analysis for positive energy and harmony."
        },
        {
          icon: HandMetal,
          title: "Palmistry Reading",
          description: "Hand reading for insights into personality, career, and life events."
        }
      ]
    },
    hi: {
      title: "हमारी सेवाएं",
      subtitle: "जीवन के सभी पहलुओं के लिए व्यापक ज्योतिषीय मार्गदर्शन",
      services: [
        {
          icon: Calendar,
          title: "कुंडली विश्लेषण",
          description: "ग्रहों की स्थिति के आधार पर विस्तृत जन्म कुंडली विश्लेषण और भविष्य की भविष्यवाणियां।"
        },
        {
          icon: Users,
          title: "कुंडली मिलान",
          description: "विवाह प्रस्तावों और रिश्ते की सामंजस्य के लिए पूर्ण संगतता विश्लेषण।"
        },
        {
          icon: Heart,
          title: "विवाह भविष्यवाणी",
          description: "विवाह और रिश्ते के मामलों के लिए समय और संगतता की जानकारी।"
        },
        {
          icon: Briefcase,
          title: "व्यापार और करियर परामर्श",
          description: "करियर की वृद्धि और व्यापारिक सफलता रणनीतियों के लिए पेशेवर मार्गदर्शन।"
        },
        {
          icon: Heart,
          title: "प्रेम और रिश्ते की सलाह",
          description: "प्रेम संबंधी चुनौतियों के लिए रिश्ते की काउंसलिंग और समाधान।"
        },
        {
          icon: Gem,
          title: "रत्न सुझाव",
          description: "स्वास्थ्य, धन और समृद्धि के लिए व्यक्तिगत रत्न सिफारिशें।"
        },
        {
          icon: Home,
          title: "वास्तु सुधार",
          description: "सकारात्मक ऊर्जा और सामंजस्य के लिए घर और कार्यालय का वास्तु विश्लेषण।"
        },
        {
          icon: HandMetal,
          title: "हस्तरेखा पठन",
          description: "व्यक्तित्व, करियर और जीवन की घटनाओं की अंतर्दृष्टि के लिए हाथ पढ़ना।"
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              {content[language].title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {content[language].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {content[language].services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-orange-500 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-purple-900 font-semibold">
                {language === 'en' ? 'All consultations include personalized remedies' : 'सभी परामर्श में व्यक्तिगत उपचार शामिल हैं'}
              </span>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;