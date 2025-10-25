import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Transform Your Ideas Into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Digital Reality</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Complete IT Solution Provider Since 2025. We deliver end-to-end services, from app development and UI/UX design to cloud, cybersecurity, and innovative open-source projects.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          Start Your Project
        </button>
      </div>
    </section>
  );
};

export default Hero;
