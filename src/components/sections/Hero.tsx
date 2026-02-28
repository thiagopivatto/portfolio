import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGoogleDrive, FaGithub } from 'react-icons/fa';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="max-w-2xl">
          <motion.div
            className="text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-5"
              variants={item}
              transition={{ duration: 0.4 }}
            >
              Thiago Pivatto
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-neon-blue/90 mb-6 max-w-lg mx-auto lg:mx-0 font-medium"
              variants={item}
              transition={{ duration: 0.4 }}
            >
              Senior Software Quality Engineer · SDET · Test Automation
            </motion.p>
            <motion.p
              className="text-body max-w-xl mx-auto lg:mx-0 mb-10"
              variants={item}
              transition={{ duration: 0.4 }}
            >
              8 years in manual and automated testing across healthcare, finance, eCommerce, and weather. Focus on automation, release cycles, and quality in the SDLC.
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start gap-5 mb-10"
              variants={item}
              transition={{ duration: 0.4 }}
            >
              <a
                href="https://linkedin.com/in/thiagopivatto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-neon-blue transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:thiago.pivatto@outlook.com"
                className="text-gray-500 hover:text-neon-blue transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/thiagopivatto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-neon-blue transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://drive.google.com/file/d/1zvB6IBSeCP37GTAh8k_Y8UZ1Nzg2DsxH/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-neon-blue transition-colors duration-300"
                aria-label="CV"
              >
                <FaGoogleDrive className="w-6 h-6" />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3"
              variants={item}
              transition={{ duration: 0.4 }}
            >
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="btn-secondary"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1SjpPLgfocRQt_PoUeIfdEOCakPyE2E2d/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <FaGoogleDrive className="w-4 h-4" />
                CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
