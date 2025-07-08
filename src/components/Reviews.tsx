import React from 'react';

const reviews = [
  {
    name: 'John Doe',
    review: 'Absolutely amazing service! The team was professional and delivered beyond expectations. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    review: 'A seamless experience from start to finish. The support was outstanding, and the final result was perfect.',
  },
  {
    name: 'Mark Johnson',
    review: 'High-quality work and great attention to detail. I will definitely be using their services again in the future.',
  },
];

export default function Reviews() {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
            <p className="text-lg italic">
              &quot;{review.review}&quot;
            </p>
            <p className="mt-2 font-semibold text-right">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
