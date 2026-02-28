import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { name: "Ultron", description: "WhatsApp entertainment bot using NodeJS" },
  { name: "Startup One", description: "Led startup project during undergraduate studies" },
  { name: "HUD Car", description: "Automotive HUD solution integrating software and hardware" },
  { name: "ChinchiApp", description: "App supporting academic needs with accessibility focus" },
  { name: "AirCup", description: "Competition drone showcasing engineering skills" },
  { name: "CyberCup", description: "AGV robot emphasizing automation and system reliability" },
  { name: "AlfaBeta", description: "Android quiz game for entrance exam preparation" }
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-black border-t border-gray-800/50">
      <div className="section-container">
        <motion.h2
          className="section-title section-title-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          Academic and Personal Projects
        </motion.h2>

        <div className="space-y-5 text-left">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="card-base card-hover card-padding"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              variants={itemVariants}
            >
              <h3 className="text-xl font-medium text-white mb-2">{project.name}</h3>
              <p className="text-body">{project.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
