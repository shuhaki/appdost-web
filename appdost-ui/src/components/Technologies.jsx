import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚓' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'GraphQL', icon: '🔺' },
    { name: 'REST API', icon: '🔗' },
    { name: 'Git', icon: '📚' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Technologies We Master
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl mb-2">{tech.icon}</div>
              <span className="text-sm font-medium text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
