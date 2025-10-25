import React from 'react';

const OurServices = () => {
  const detailedServices = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing']
    },
    {
      title: 'Custom Software Development',
      description: 'Building tailored software solutions that address your unique business requirements and challenges.',
      features: ['Requirements Analysis', 'Architecture Design', 'Development', 'Testing', 'Deployment']
    },
    {
      title: 'Web & Mobile App Development',
      description: 'Developing responsive web applications and native mobile apps for iOS and Android platforms.',
      features: ['Cross-platform Development', 'Progressive Web Apps', 'Native Apps', 'API Integration', 'Performance Optimization']
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete development services covering both frontend and backend technologies for comprehensive solutions.',
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Development', 'System Integration']
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic consulting to help businesses modernize their processes and adopt digital technologies.',
      features: ['Digital Strategy', 'Process Optimization', 'Technology Assessment', 'Change Management', 'Implementation Planning']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to enhance business agility and reduce costs.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Monitoring', 'Security']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {detailedServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
