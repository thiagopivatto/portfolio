import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaLanguage, FaGraduationCap } from 'react-icons/fa';

const Certificates: React.FC = () => {
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

  const certificates = {
    languages: {
      title: "Language Certificates",
      icon: FaLanguage,
      items: [
        { name: "First Certificate in English (FCE)", year: "" },
        { name: "TOEFL ITP", year: "" },
        { name: "SIELE Certification", year: "2023" }
      ]
    },
    fiap: {
      title: "FIAP ON Courses",
      icon: FaGraduationCap,
      items: [
        { name: "Compliance & Quality Assurance", year: "" },
        { name: "Business Intelligence (BI)", year: "" },
        { name: "Biohacking, Deep Web and Cryptography", year: "" },
        { name: "IT Governance", year: "" },
        { name: "Intelligence and Counterintelligence", year: "" },
        { name: "Forense Expertise in Cyber Defense", year: "" },
        { name: "Big Data & Analytics", year: "" },
        { name: "Cloud Computing & Data Science", year: "" },
        { name: "Android Development", year: "" }
      ]
    },
    other: {
      title: "Other Certificates",
      icon: FaCertificate,
      items: [
        { name: "Cloudera Dev. Training for Spark & Hadoop", year: "July 2017" },
        { name: "Programming Course", year: "July 2013" }
      ]
    }
  };

  return (
    <section id="certificates" className="relative py-16 overflow-hidden">
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
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
          variants={itemVariants}
        >
          Certificates and Courses
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(certificates).map(([key, category]) => (
            <motion.div
              key={key}
              className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-neon-blue/50 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <category.icon className="w-5 h-5 text-neon-blue" />
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{item.name}</span>
                    {item.year && (
                      <span className="text-gray-500 text-xs">{item.year}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates; 