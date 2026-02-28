import React from 'react';
import { motion } from 'framer-motion';

const certificates = {
  languages: {
    title: "Language Certificates",
    items: [
      { name: "First Certificate in English (FCE)", year: "" },
      { name: "TOEFL ITP", year: "" },
      { name: "SIELE Certification", year: "2023" }
    ]
  },
  fiap: {
    title: "FIAP ON Courses",
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
    items: [
      { name: "Cloudera Dev. Training for Spark & Hadoop", year: "July 2017" },
      { name: "Programming Course", year: "July 2013" }
    ]
  }
};

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

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="section-padding bg-black border-t border-gray-800/50">
      <div className="section-container">
        <motion.h2
          className="section-title section-title-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          Certificates and Courses
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
        >
          {Object.entries(certificates).map(([key, category]) => (
            <motion.div
              key={key}
              className="card-base card-hover card-padding"
              variants={item}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-sm font-medium text-neon-blue/90 uppercase tracking-wider mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((cert) => (
                  <li key={cert.name} className="flex justify-between items-baseline gap-3 text-base text-gray-300">
                    <span>{cert.name}</span>
                    {cert.year && (
                      <span className="text-body-sm text-neon-blue/70 shrink-0">{cert.year}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
