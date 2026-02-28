import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="section-container py-12 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-left">
          <div className="space-y-2 text-body">
            <a
              href="mailto:thiago.pivatto@outlook.com"
              className="block hover:text-neon-blue transition-colors duration-300"
            >
              thiago.pivatto@outlook.com
            </a>
            <a
              href="tel:+5511999178699"
              className="block hover:text-neon-blue transition-colors duration-300"
            >
              +55 11 99917-8699
            </a>
            <span className="block">São Paulo, Brazil</span>
          </div>
          <p className="text-body-sm text-gray-600">
            © {new Date().getFullYear()} Thiago Pivatto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
