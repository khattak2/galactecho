"use client";
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Adil Hussain',
    review: 'The service exceeded my expectations! Great communication and top-notch results.',
  },
  {
    name: 'Jane Smith',
    review: 'Very professional and efficient team. Highly recommended for quality work!',
  },
  {
    name: 'Fahad Ali',
    review: 'Outstanding support and attention to detail. Will definitely work with them again!',
  },
  {
    name: 'Emily Davis',
    review: 'Fantastic experience! The team was very responsive and delivered high-quality work on time.',
  },
  {
    name: 'Michael Brown',
    review: 'They went above and beyond to ensure our project was a success. Exceptional service!',
  },
  {
    name: 'Sophia Martinez',
    review: 'Highly skilled professionals! Their attention to detail and dedication is unmatched.',
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-3xl mx-auto my-16 p-8 bg-gray-900 text-white rounded-lg shadow-xl text-center">
      <h2 className="text-4xl font-extrabold mb-8">What Our Clients Say</h2>
      <div className="relative p-6 border-l-4 border-blue-500 bg-gray-800 rounded-lg shadow-md">
        <p className="text-lg italic">"{testimonials[currentIndex].review}"</p>
        <p className="mt-4 font-semibold text-blue-400">- {testimonials[currentIndex].name}</p>
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={prevTestimonial} className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">◀</button>
        <button onClick={nextTestimonial} className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">▶</button>
      </div>
    </div>
  );
}
