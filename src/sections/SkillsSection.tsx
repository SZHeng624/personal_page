import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Globe size={24} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 95, category: 'frontend' },
        { name: 'TypeScript', level: 90, category: 'frontend' },
        { name: 'Tailwind CSS', level: 92, category: 'frontend' },
        { name: 'Vue.js', level: 85, category: 'frontend' },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Code size={24} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 88, category: 'backend' },
        { name: 'Python/Django', level: 85, category: 'backend' },
        { name: 'Express.js', level: 90, category: 'backend' },
        { name: 'GraphQL', level: 80, category: 'backend' },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: <Database size={24} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 85, category: 'database' },
        { name: 'MongoDB', level: 88, category: 'database' },
        { name: 'AWS', level: 82, category: 'cloud' },
        { name: 'Docker', level: 80, category: 'cloud' },
      ],
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React Native', level: 85, category: 'mobile' },
        { name: 'Flutter', level: 75, category: 'mobile' },
        { name: 'iOS/Swift', level: 70, category: 'mobile' },
        { name: 'Android/Kotlin', level: 72, category: 'mobile' },
      ],
    },
  ];

  const tools = [
    'Git & GitHub', 'VS Code', 'Figma', 'Postman', 'Jest', 'Webpack',
    'Vite', 'ESLint', 'Prettier', 'Jira', 'Slack', 'Linear'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I use to bring ideas to life"
        />
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full mb-4">
              <Code size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full mb-4">
              <Zap size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Frameworks</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4">
              <Database size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Databases</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full mb-4">
              <Cloud size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cloud Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;