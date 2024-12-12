import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={40} />,
      href: "https://github.com/thiagopivatto",
      label: "Github"
    },
    {
      icon: <FaLinkedin size={40} />,
      href: "https://linkedin.com/in/thiagopivatto",
      label: "LinkedIn"
    },
    {
      icon: <MdEmail size={40} />,
      href: "mailto:thiago.pivatto@outlook.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-900 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 hover:animate-glow-blue"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 hover:text-neon-pink transition-colors duration-300">
            © {currentYear} Thiago Pivatto. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;