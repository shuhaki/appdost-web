import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Lifecycle Expertise',
      description: 'End-to-end project management from concept to deployment and beyond.',
      icon: '🔄'
    },
    {
      title: 'Agile Process',
      description: 'Flexible development methodology ensuring quick iterations and quality.',
      icon: '⚡'
    },
    {
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, handling increased demands seamlessly.',
      icon: '📈'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our priority, with dedicated support and communication.',
      icon: '🤝'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
