import React from 'react';
import { Code, Smartphone, Palette, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Website Development',
      description: 'Complete frontend and backend development services for web applications and websites.',
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration'],
      color: 'emerald'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Creating mobile-first, responsive designs that work perfectly across all devices.',
      features: ['Mobile-First Approach', 'Cross-Browser Compatibility', 'Performance Optimization', 'User Experience'],
      color: 'blue'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces with great user experience.',
      features: ['User Interface Design', 'User Experience Research', 'Prototyping', 'Visual Design'],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Collaboration & Internships',
      description: 'Open to collaborative projects, internships, and learning opportunities.',
      features: ['Team Collaboration', 'Internship Opportunities', 'Freelance Projects', 'Skill Development'],
      color: 'orange'
    }
  ];

  const colorVariants = {
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      icon: 'text-emerald-600 dark:text-emerald-400',
      gradient: 'from-emerald-500 to-teal-500'
    },
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      icon: 'text-blue-600 dark:text-blue-400',
      gradient: 'from-blue-500 to-cyan-500'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      icon: 'text-purple-600 dark:text-purple-400',
      gradient: 'from-purple-500 to-pink-500'
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      icon: 'text-orange-600 dark:text-orange-400',
      gradient: 'from-orange-500 to-red-500'
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services & Collaboration
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects and bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = colorVariants[service.color as keyof typeof colorVariants];
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`h-8 w-8 ${colors.icon}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Great Together!
          </h3>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects, internships, and collaborative opportunities. 
            Let's discuss how we can work together to create amazing digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
            </a>
            <a
              href="mailto:hnhu07012004@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;