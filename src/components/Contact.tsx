import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'hi';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const content = {
    en: {
      title: "Contact Information",
      subtitle: "Get in touch for personalized astrological guidance",
      phone: "+91 98765 43210",
      address: "Varanasi, Uttar Pradesh, India",
      email: "contact@panditsharma.com",
      hours: "Available: 10 AM - 7 PM (IST)",
      consultationNote: "Online consultations available worldwide"
    },
    hi: {
      title: "संपर्क जानकारी",
      subtitle: "व्यक्तिगत ज्योतिषीय मार्गदर्शन के लिए संपर्क करें",
      phone: "+91 98765 43210",
      address: "वाराणसी, उत्तर प्रदेश, भारत",
      email: "contact@panditsharma.com",
      hours: "उपलब्ध: सुबह 10 बजे - शाम 7 बजे (IST)",
      consultationNote: "दुनिया भर में ऑनलाइन परामर्श उपलब्ध"
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {content[language].title}
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              {content[language].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
              <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'en' ? 'Phone' : 'फोन'}
              </h3>
              <p className="text-purple-200">{content[language].phone}</p>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
              <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'en' ? 'Location' : 'स्थान'}
              </h3>
              <p className="text-purple-200">{content[language].address}</p>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
              <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'en' ? 'Email' : 'ईमेल'}
              </h3>
              <p className="text-purple-200">{content[language].email}</p>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'en' ? 'Hours' : 'समय'}
              </h3>
              <p className="text-purple-200 text-sm">{content[language].hours}</p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.5267058641817!2d82.96707031448334!3d25.30079993832089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31ef1a0a0a0a%3A0x0!2sVaranasi%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pandit Sharma Location"
              ></iframe>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-yellow-300 font-semibold">
              {content[language].consultationNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;