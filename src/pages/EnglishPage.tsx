import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BookingForm from '../components/BookingForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const EnglishPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header language="en" />
      <Hero language="en" />
      <About language="en" />
      <Services language="en" />
      <BookingForm language="en" />
      <Contact language="en" />
      <Footer language="en" />
    </div>
  );
};

export default EnglishPage;