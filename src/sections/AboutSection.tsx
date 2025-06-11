import React from 'react';
import { Code, Book, Heart, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: <Code size={24} />, value: '10+', label: 'Projects Completed' },
    { icon: <Users size={24} />, value: '5+', label: 'Team Collaborations' },
    { icon: <Book size={24} />, value: '20+', label: 'Courses Taken' },
    { icon: <Heart size={24} />, value: '3+', label: 'Years of Study' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Information Management student passionate about technology and innovation"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Song Zhiheng, a third-year Information Management and Information Systems major at Wuhan University's School of Information Management. 
              I'm passionate about exploring the intersection of technology and business, and how data can transform decision-making processes.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My academic journey has equipped me with solid foundations in database systems, programming, and information analysis. 
              I'm particularly interested in web development and data analytics, and constantly seek opportunities to apply my knowledge in practical projects.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Java', 'Python', 'SQL', 'HTML/CSS', 'JavaScript', 'Data Analysis'].map((tech) => (
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
              <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <img 
                  src="https://github.com/SZHeng624/personal_page/raw/main/img/song.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-top rounded-2xl"
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