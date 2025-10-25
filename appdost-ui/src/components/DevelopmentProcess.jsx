import React from 'react';

const DevelopmentProcess = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and constraints through detailed consultation and analysis.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes to visualize the solution.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building the solution using agile methodologies with regular feedback and iterations.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing to ensure functionality, performance, and security standards.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Deploying the solution to production environment with proper monitoring and support.'
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support to ensure continued success.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Development Process
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
