import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
  { code: 'pt-BR', name: 'Português', flag: '/images/flags/brazil.png' },
  { code: 'en-US', name: 'English', flag: '/images/flags/usa.png' },
  { code: 'es-ES', name: 'Español', flag: '/images/flags/spain.png' },
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-neon-blue transition-colors"
      >
        <FaGlobe className="w-5 h-5 text-neon-blue" />
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 relative">
            <Image
              src={currentLanguage?.flag || ''}
              alt={currentLanguage?.name || ''}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <span className="text-gray-300">{currentLanguage?.name}</span>
        </div>
        <FaChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 w-48 rounded-lg bg-gray-900/95 backdrop-blur-sm border border-gray-800 shadow-lg z-50"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as 'pt-BR' | 'en-US' | 'es-ES');
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-800/50 transition-colors ${
                    language === lang.code ? 'text-neon-blue' : 'text-gray-300'
                  }`}
                >
                  <div className="w-6 h-6 relative">
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 