import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
];

interface BookingFormProps {
  language: 'en' | 'hi';
}

const BookingForm: React.FC<BookingFormProps> = ({ language }) => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', time: '' });
  const [bookedSlots, setBookedSlots] = useState<{ [date: string]: string[] }>({});

  const translations = {
    en: {
      name: 'Name',
      email: 'Email',
      date: 'Select Date',
      time: 'Select Time Slot',
      submit: 'Book Appointment',
    },
    hi: {
      name: 'नाम',
      email: 'ईमेल',
      date: 'तारीख चुनें',
      time: 'समय स्लॉट चुनें',
      submit: 'अपॉइंटमेंट बुक करें',
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, date, time } = formData;

    if (!name || !email || !date || !time) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (bookedSlots[date]?.includes(time)) {
      toast.error('This slot is already booked.');
      return;
    }

    // Add slot to booked slots (in-memory only)
    setBookedSlots((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), time],
    }));

    const templateParams = {
      name,
      email,
      date,
      time,
      meetlink: 'https://meet.google.com/kus-kzhv-ajd',
    };

    try {
      await emailjs.send(
        'service_h2y20sm',      // Replace with your EmailJS service ID
        'template_6jxo1cr',     // Replace with your EmailJS template ID
        templateParams,
        'Fyx9bTQwfA_dHTnIG'       // Replace with your EmailJS public key (user ID)
      );
      toast.success('Booking successful! Confirmation email sent.');
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Booking failed. Please try again.');
    }

    setFormData({ name: '', email: '', date: '', time: '' });
  };

  const getAvailableSlots = () => {
    if (!formData.date) return timeSlots;
    return timeSlots.filter((slot) => !bookedSlots[formData.date]?.includes(slot));
  };

  const t = translations[language];

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div>
        <label>{t.name}</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label>{t.email}</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div>
        <label>{t.date}</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>

      <div>
        <label>{t.time}</label>
        <select name="time" value={formData.time} onChange={handleChange} required>
          <option value="">--</option>
          {getAvailableSlots().map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" style={{ marginTop: '10px' }}>{t.submit}</button>
    </form>
  );
};

export default BookingForm;
