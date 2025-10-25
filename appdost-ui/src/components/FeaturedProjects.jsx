import React from 'react';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features and seamless user experience.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒'
    },
    {
      title: 'Healthcare Management System',
      description: 'Digital platform for managing patient records, appointments, and medical data securely.',
      techStack: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
      image: '🏥'
    },
    {
      title: 'Financial Dashboard',
      description: 'Real-time financial analytics and reporting dashboard for investment firms.',
      techStack: ['Angular', 'Java', 'MySQL', 'Docker'],
      image: '📊'
    },
    {
      title: 'Social Media App',
      description: 'Modern social networking platform with real-time messaging and content sharing.',
      techStack: ['React Native', 'Firebase', 'GraphQL', 'Redux'],
      image: '📱'
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive platform for online education with interactive courses and assessments.',
      techStack: ['Next.js', 'Express', 'MongoDB', 'Socket.io'],
      image: '🎓'
    },
    {
      title: 'IoT Monitoring System',
      description: 'Real-time monitoring and analytics platform for IoT devices and sensors.',
      techStack: ['React', 'Python', 'InfluxDB', 'MQTT'],
      image: '📡'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
