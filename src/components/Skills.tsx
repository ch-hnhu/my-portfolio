import React from 'react';
import { Code2, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'emerald',
      skills: ['JavaScript', 'TypeScript', 'C++', 'C#', 'Python', 'Java']
    },
    {
      icon: Globe,
      title: 'Frontend',
      color: 'blue',
      skills: ['HTML', 'CSS', 'SASS', 'Bootstrap', 'React']
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'purple',
      skills: ['Node.js']
    },
    {
      icon: Database,
      title: 'Database',
      color: 'orange',
      skills: ['MySQL']
    }
  ];

  const colorVariants = {
    emerald: {
      bg: 'bg-emerald-100 dark:bg-emerald-900',
      icon: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-200 dark:border-emerald-700'
    },
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      icon: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-700'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900',
      icon: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-700'
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900',
      icon: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-200 dark:border-orange-700'
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorVariants[category.color as keyof typeof colorVariants];
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 mr-2 mb-2 border-2 ${colors.border} hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Graphic Design', 'Game Development', 'UI/UX Design', 'Creative Development'].map((interest, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Palette className="h-4 w-4 text-orange-500" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;