import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

interface Project {
 title: string;
 description: string;
 tags: string[];
 year: string;
 link?: string;
 github?: string;
}

const projects: Project[] = [
  {
    title: "Ultron",
    description: "Entertainment bot for WhatsApp using NodeJS. Personal project developed in 2022.",
    tags: ["NodeJS", "WhatsApp API", "Bot"],
    year: "2022",
    github: "https://github.com/thiagopivatto/ultron"
  },
  {
    title: "HUD Car",
    description: "Development of HUD automotive solution. Undergraduate project from 4th year.",
    tags: ["Hardware", "Automotive", "HUD"],
    year: "2019"
  },
  {
    title: "ChinchiApp",
    description: "App development project from 3rd year of undergraduate studies.",
    tags: ["Mobile", "App Development"],
    year: "2018"
  },
  {
    title: "AirCup",
    description: "Drone construction project from 2nd year of undergraduate studies.",
    tags: ["Drone", "Hardware", "Engineering"],
    year: "2017"
  },
  {
    title: "CyberCup",
    description: "AGV robot project from 1st year of undergraduate studies.",
    tags: ["Robotics", "AGV", "Programming"],
    year: "2016"
  },
  {
    title: "AlfaBeta",
    description: "Quiz format game in Android to help people studying for entrance exams. ETEC project.",
    tags: ["Android", "Education", "Game Development"],
    year: "2015"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neon-blue mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-neon-pink"></div>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-black border border-gray-800 hover:border-neon-blue rounded-lg overflow-hidden transition-all duration-300"
            >
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-neon-pink group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-neon-blue px-2 py-1 rounded-full border border-neon-blue">
                    {project.year}
                  </span>
                </div>
 
                {/* Description */}
                <p className="text-gray-400">
                  {project.description}
                </p>
 
                {/* Tech Stack */}
                <div className="pt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm text-neon-blue bg-neon-blue/10 border border-neon-blue/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
 
                {/* Links */}
                <div className="pt-4 flex items-center space-x-4 border-t border-gray-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-neon-blue transition-colors duration-300"
                    >
                      <FaGithub className="w-5 h-5 mr-2"/>
                      <span>Code</span>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-neon-blue transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="w-5 h-5 mr-2"/>
                      <span>Demo</span>
                    </a>
                  )}
                  {!project.github && !project.link && (
                    <span className="flex items-center text-gray-500">
                      <FaCode className="w-5 h-5 mr-2" />
                      <span>Private Project</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
 };
 
 export default Projects;
