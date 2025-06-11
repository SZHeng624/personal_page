import React from 'react';
import { ExternalLink, Github, Award, BookOpen, BarChart2, Cpu } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  type: 'competition' | 'research' | 'product';
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Financial Risk Decision System',
      description: 'Developed backend for a financial risk decision system using Python and FastAPI, creating visualization interfaces for external assessment indicators, related public opinion indices, and internal financial statement data. Collaborated on the complete development of the financial risk decision system.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      technologies: ['Python', 'FastAPI', 'APIFox', 'Figma', 'Data Visualization'],
      featured: true,
      type: 'research'
    },
    {
      id: 2,
      title: 'GraphRAG - Financial Knowledge Graph',
      description: 'Won CCF Digital Finance Conference GraphRAG competition by developing a knowledge graph retrieval system. Implemented multi-level retrieval enhancement technology incorporating graph retrieval and multi-modal chart recognition to solve financial report understanding challenges in large models.',
      image: 'https://www.falkordb.com/wp-content/uploads/2024/05/53fec1ce-287d-43f8-a32b-e5a75fad0ef4-768x768.jpeg',
      technologies: ['Knowledge Graph', 'RAG', 'LLM', 'Multi-modal', 'NLP'],
      featured: true,
      type: 'competition'
    },
    {
      id: 3,
      title: '"Citi Cup" Financial Innovation Competition',
      description: 'National Second Prize winner. As core team member, developed backend for "risk evolution" module, implementing industry risk index and risk contagion evolution APIs. Combined public opinion with financial data using knowledge graphs for financial risk prediction and early warning of real estate bond defaults.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      technologies: ['Python', 'Knowledge Graph', 'API Development', 'Financial Analysis'],
      featured: false,
      type: 'competition'
    },
    {
      id: 4,
      title: 'Mathematical Modeling Competitions',
      description: 'Multiple provincial-level awards including MCM Meritorious Winner, National Third Prize, and Central China Cup Second Prize. Specialized in programming implementation of evaluation algorithms, prediction models, classification models, and optimization models using Python and MATLAB.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      technologies: ['Python', 'MATLAB', 'Mathematical Modeling', 'Data Analysis'],
      featured: false,
      type: 'competition'
    },
    {
      id: 5,
      title: 'AIGC Career Planning System',
      description: 'Designed "Wisdom Career Guide" - an AIGC-based career planning system for college students. Developed features including career assessment, market analysis, career path matching, and intelligent job search assistance. Created high-fidelity prototypes using Figma and Modao.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      technologies: ['Figma', 'Modao', 'AIGC', 'UX Design', 'Product Management'],
      featured: false,
      type: 'product'
    },
    {
      id: 6,
      title: 'AIGC Waiting State Visual Design',
      description: 'Designed progress bars and animated interfaces for text-generation AIGC systems to reduce perceived waiting time and improve user satisfaction. Implemented JavaScript solutions for web interfaces and conducted user research with SPSS analysis.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      technologies: ['JavaScript', 'SPSS', 'User Research', 'Interaction Design'],
      featured: false,
      type: 'research'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const competitionProjects = projects.filter(project => project.type === 'competition' && !project.featured);
  const researchProjects = projects.filter(project => project.type === 'research' && !project.featured);
  const productProjects = projects.filter(project => project.type === 'product' && !project.featured);

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'competition': return <Award size={16} className="mr-1" />;
      case 'research': return <BookOpen size={16} className="mr-1" />;
      case 'product': return <Cpu size={16} className="mr-1" />;
      default: return <BarChart2 size={16} className="mr-1" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Projects & Competitions" 
          subtitle="Showcase of my academic competitions, research projects, and product designs"
        />
        
        {/* Featured Projects */}
        <div className="space-y-16 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">
                  {getTypeIcon(project.type)}
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)} Project
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      icon={<Github size={16} />}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      Code
                    </Button>
                    {project.demoUrl && (
                      <Button 
                        size="sm"
                        icon={<ExternalLink size={16} />}
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        Details
                      </Button>
                    )}
                  </div>
                )}
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-teal-500 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="relative rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Competition Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Award className="mr-2" /> Competition Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitionProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-l-4 border-yellow-400"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Product Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <BookOpen className="mr-2" /> Research Projects
            </h3>
            <div className="space-y-6">
              {researchProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-400"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Cpu className="mr-2" /> Product Projects
            </h3>
            <div className="space-y-6">
              {productProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border-l-4 border-green-400"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;