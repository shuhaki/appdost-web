import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging experiences.',
      icon: '🎨'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business needs.',
      icon: '💻'
    },
    {
      title: 'Web & Mobile App Development',
      description: 'Responsive web applications and native mobile apps for all platforms.',
      icon: '📱'
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete development solutions from frontend to backend.',
      icon: '⚡'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance to modernize your business processes.',
      icon: '🚀'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: '☁️'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Core Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
