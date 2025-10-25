import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss your ideas and bring them to life with our expert team. Get a free consultation and see how we can help transform your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
            Get Free Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
