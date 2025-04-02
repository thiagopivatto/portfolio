import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="w-6 h-6 text-neon-blue" />
                <a href="mailto:thiago.pivatto@outlook.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                  thiago.pivatto@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="w-6 h-6 text-neon-blue" />
                <a href="tel:+5511999178699" className="text-gray-400 hover:text-neon-blue transition-colors">
                  +55 11 99917-8699
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-neon-blue" />
                <span className="text-gray-400">São Paulo, Brazil</span>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center items-center md:items-end space-y-4"
          >
            <p className="text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} Thiago Pivatto. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;