import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BookingForm from '../components/BookingForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HindiPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header language="hi" />
      <Hero language="hi" />
      <About language="hi" />
      <Services language="hi" />
      <BookingForm language="hi" />
      <Contact language="hi" />
      <Footer language="hi" />
    </div>
  );
};

export default HindiPage;