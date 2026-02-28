import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Company {
  name: string;
  logo: string;
}

interface Client {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: 'Praxent', logo: '/images/companies/praxent.png' },
  { name: 'Andela', logo: '/images/companies/andela.png' },
  { name: 'Appnovation', logo: '/images/companies/appnovation.png' },
  { name: 'Dreamdev', logo: '/images/companies/dreamdev.png' },
  { name: 'Tech Mahindra', logo: '/images/companies/techmahindra.png' },
  { name: 'K2 Partnering Solutions', logo: '/images/companies/k2.png' },
  { name: 'Capgemini', logo: '/images/companies/capgemini.png' },
  { name: 'Sopra Banking Software', logo: '/images/companies/sopra.png' }
];

const clients: Client[] = [
  { name: 'Step Up for Students', logo: '/images/clients/sufs.png' },
  { name: 'Weather Channel', logo: '/images/clients/weather-channel.png' },
  { name: 'Pfizer', logo: '/images/clients/pfizer.png' },
  { name: 'eShopWorld', logo: '/images/clients/eshopworld.png' },
  { name: 'Kimberly-Clark', logo: '/images/clients/kimberly-clark.png' },
  { name: 'Ágora Investimentos', logo: '/images/clients/agora.png' },
  { name: 'PACCAR Bank', logo: '/images/clients/paccar.png' },
  { name: 'BNP Paribas', logo: '/images/clients/bnp.png' }
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section-padding bg-black border-t border-gray-800/50"
    >
      <div className="section-container">
        <motion.h2
          className="section-title section-title-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-left">
          <div className="space-y-6">
            <motion.div
              className="card-base card-hover card-padding"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUpVariants}
            >
              <h3 className="text-sm font-medium text-neon-blue/90 uppercase tracking-wider mb-4">About me</h3>
              <p className="text-body mb-3">
                Senior QA Engineer with 8 years of experience in manual and automated testing across healthcare, finance, eCommerce, and weather. Focus on large-scale automation, release cycles, and quality throughout the SDLC.
              </p>
              <p className="text-body">
                Building test frameworks, mentoring teams, and embedding quality from the start of the cycle. Fluent in English (C1), focused on innovation in QA.
              </p>
            </motion.div>

            <motion.div
              className="card-base card-hover card-padding"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUpVariants}
            >
              <h3 className="text-sm font-medium text-neon-blue/90 uppercase tracking-wider mb-4">Summary</h3>
              <ul className="space-y-2 text-body">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/70" />
                  Senior Software Quality Engineer · SDET
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/70" />
                  8 years of experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/70" />
                  Test frameworks, shift-left, SDLC
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="card-base card-hover card-padding"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUpVariants}
            >
              <h3 className="text-sm font-medium text-neon-blue/90 uppercase tracking-wider mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium text-base">B.Sc. Computer Engineering</p>
                  <p className="text-body-sm">FIAP – Centro Universitário · 2016 – 2020</p>
                </div>
                <div>
                  <p className="text-white font-medium text-base">Computer Technician</p>
                  <p className="text-body-sm">ETEC – Centro Paula Souza · 2014 – 2015</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card-base card-hover card-padding"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUpVariants}
            >
              <h3 className="text-sm font-medium text-neon-blue/90 uppercase tracking-wider mb-4">Languages</h3>
              <div className="flex flex-wrap gap-6 sm:gap-8 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative shrink-0 rounded-full overflow-hidden border border-gray-700">
                    <Image src="/images/flags/brazil.png" alt="" fill className="object-cover" />
                  </div>
                  <span className="text-body">Portuguese · Native</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative shrink-0 rounded-full overflow-hidden border border-gray-700">
                    <Image src="/images/flags/usa.png" alt="" fill className="object-cover" />
                  </div>
                  <span className="text-body">English · C1</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative shrink-0 rounded-full overflow-hidden border border-gray-700">
                    <Image src="/images/flags/spain.png" alt="" fill className="object-cover" />
                  </div>
                  <span className="text-body">Spanish · B1</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6 text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUpVariants}
            >
              <h3 className="text-sm font-medium text-neon-blue/90 uppercase tracking-wider mb-4">Companies</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                {companies.map((company) => (
                  <div
                    key={company.name}
                    className="card-base card-hover aspect-square p-4 flex items-center justify-center"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={72}
                      height={72}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUpVariants}
            >
              <h3 className="text-sm font-medium text-neon-blue/90 uppercase tracking-wider mb-4">Clients</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                {clients.map((client) => (
                  <div
                    key={client.name}
                    className="card-base card-hover aspect-square p-4 flex items-center justify-center"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={72}
                      height={72}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
