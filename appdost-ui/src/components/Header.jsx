import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          AppDost
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-200 transition-colors">Home</a>
          <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-blue-200 transition-colors">Portfolio</a>
          <a href="#careers" className="hover:text-blue-200 transition-colors">Careers</a>
          <a href="#blog" className="hover:text-blue-200 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Our Services
          </button>
          <button className="border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
