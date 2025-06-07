import React from 'react';
import { Code, Coffee, Heart, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: <Code size={24} />, value: '50+', label: 'Projects Completed' },
    { icon: <Users size={24} />, value: '30+', label: 'Happy Clients' },
    { icon: <Coffee size={24} />, value: '1000+', label: 'Cups of Coffee' },
    { icon: <Heart size={24} />, value: '5+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate developer with a love for creating amazing digital experiences"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              beautiful, functional, and user-centered digital experiences. I love turning 
              complex problems into simple, beautiful designs.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while reading about the 
              latest trends in web development.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <img 
                  src="https://imgur.com/a/XJbbvZ0" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 rounded-lg mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;