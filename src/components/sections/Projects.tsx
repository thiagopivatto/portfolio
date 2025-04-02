import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaRocket, FaCar, FaMobile, FaPlane, FaGamepad, FaWhatsapp, FaCode } from 'react-icons/fa';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const projects = [
    {
      name: "Ultron",
      description: "WhatsApp entertainment bot using NodeJS",
      icon: FaWhatsapp,
      technologies: ["NodeJS", "WhatsApp API", "JavaScript", "MongoDB"]
    },
    {
      name: "Startup One",
      description: "Led startup project during undergraduate studies",
      icon: FaRocket,
      technologies: ["React", "NodeJS", "MongoDB", "AWS"]
    },
    {
      name: "HUD Car",
      description: "Automotive HUD solution integrating software and hardware",
      icon: FaCar,
      technologies: ["Python", "Arduino", "C++", "OpenGL"]
    },
    {
      name: "ChinchiApp",
      description: "App supporting academic needs with accessibility focus",
      icon: FaMobile,
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"]
    },
    {
      name: "AirCup",
      description: "Competition drone showcasing engineering skills",
      icon: FaPlane,
      technologies: ["Python", "Arduino", "C++", "ROS"]
    },
    {
      name: "CyberCup",
      description: "AGV robot emphasizing automation and system reliability",
      icon: FaRobot,
      technologies: ["Python", "ROS", "C++", "Arduino"]
    },
    {
      name: "AlfaBeta",
      description: "Android quiz game for entrance exam preparation",
      icon: FaGamepad,
      technologies: ["Java", "Android SDK", "SQLite", "Firebase"]
    }
  ];

  return (
    <section id="projects" className="relative py-16 overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FaCode className="w-6 h-6 text-neon-blue" />
          <h3 className="text-3xl font-semibold text-white">Academic and Personal Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <project.icon className="w-6 h-6 text-neon-blue" />
                <h3 className="text-2xl font-medium text-white">{project.name}</h3>
              </div>
              <p className="text-lg text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 rounded-full text-lg text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
