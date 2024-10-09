import React from 'react';
// Images
import client1 from '../assets/assets/client-1.jpg';
import client2 from '../assets/assets/client-2.jpg';
import client3 from '../assets/assets/client-3.jpg';

const Testimony = [
  {
    title: 'Sarah Doe',
    description: 'This platform helped me find my dream job within weeks! The process was simple and straightforward.',
    image: client1, // Person image
  },
  {
    title: 'Mark Wilson',
    description: 'I was able to land multiple interviews after optimizing my resume with the site’s expert tools.',
    image: client2, // Search glass image
  },
  {
    title: 'John Smith',
    description: 'The job search filters and notifications kept me updated on new opportunities every day.',
    image: client3, // Resume image
  },
];

const TestimonySection = () => {
  return (
    <div>
      {/* Explore Section */}
      <section className="py-16 mx-4 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="md:text-4xl text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            What Our Clients Say About Us{' '}
            <span className="md:text-5xl text-3xl text-orange-500">Worldwide</span>
          </h1>
          <p className="text-lg mb-12">Discover how our platform has helped countless users achieve their career goals.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {Testimony.map((testimony, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg transition-transform duration-500 transform hover:scale-105 flex flex-col items-center text-center max-w-xs"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimony.image}
                    className="w-24 h-24 object-cover rounded-full"
                    alt="client"
                  />
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900">{testimony.title}</h4>
                <div className="mb-2 text-yellow-500 text-lg">⭐⭐⭐⭐</div>
                <p className="text-gray-500">{testimony.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonySection;
