import React from 'react';

const WorkCulture = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Embracing new technologies and creative solutions.',
      icon: '💡'
    },
    {
      title: 'Collaboration',
      description: 'Working together as a team to achieve excellence.',
      icon: '🤝'
    },
    {
      title: 'Learning',
      description: 'Continuous growth and skill development.',
      icon: '📚'
    },
    {
      title: 'Growth Mindset',
      description: 'Always striving for improvement and progress.',
      icon: '🌱'
    },
    {
      title: 'Work-Life Balance',
      description: 'Supporting healthy work-life integration.',
      icon: '⚖️'
    },
    {
      title: 'Recognition',
      description: 'Celebrating achievements and contributions.',
      icon: '🏆'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Work Culture & Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
