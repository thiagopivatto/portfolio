import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaUser, FaLanguage, FaBuilding, FaUsers } from 'react-icons/fa';
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
  { name: 'Andela', logo: '/images/companies/andela.png' },
  { name: 'Appnovation', logo: '/images/companies/appnovation.png' },
  { name: 'Dreamdev', logo: '/images/companies/dreamdev.png' },
  { name: 'Tech Mahindra', logo: '/images/companies/techmahindra.png' },
  { name: 'K2 Partnering Solutions', logo: '/images/companies/k2.png' },
  { name: 'Capgemini', logo: '/images/companies/capgemini.png' },
  { name: 'Sopra Banking Software', logo: '/images/companies/sopra.png' }
];

const clients: Client[] = [
  { name: 'Weather Channel', logo: '/images/clients/weather-channel.png' },
  { name: 'Pfizer', logo: '/images/clients/pfizer.png' },
  { name: 'eShopWorld', logo: '/images/clients/eshopworld.png' },
  { name: 'Kimberly-Clark', logo: '/images/clients/kimberly-clark.png' },
  { name: 'Ágora', logo: '/images/clients/agora.png' },
  { name: 'PACCAR', logo: '/images/clients/paccar.png' },
  { name: 'BNP Paribas', logo: '/images/clients/bnp.png' },
  { name: 'Banrisul', logo: '/images/clients/banrisul.png' }
];

const About: React.FC = () => {
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

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* About Me */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <FaUser className="w-6 h-6 text-neon-blue" />
                <h3 className="text-3xl font-semibold text-white">About Me</h3>
              </div>
              <p className="text-xl text-gray-400 mb-4">
                Senior QA Engineer with 7+ years of experience in software testing and test automation, 
                specializing in delivering high-quality solutions for industries such as finance, healthcare, 
                and eCommerce. Proficient in developing and implementing scalable test frameworks using 
                Selenium, Postman, and other cutting-edge tools.
              </p>
              <p className="text-xl text-gray-400">
                Adept at leading cross-functional teams, optimizing testing workflows, and delivering 
                measurable results such as defect reductions and process efficiencies. Fluent in English, 
                passionate about driving innovation in quality assurance, and committed to excellence.
              </p>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <FaCode className="w-6 h-6 text-neon-blue" />
                <h3 className="text-3xl font-semibold text-white">Quick Info</h3>
              </div>
              <ul className="space-y-4 text-xl text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  Sr QA Engineer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  7+ Years of Experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  Passionate about AI, QA, Sports, Financial, Games
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  Strong problem-solving skills
                </li>
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <FaGraduationCap className="w-6 h-6 text-neon-blue" />
                <h3 className="text-3xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-medium text-white">Computer Engineering</h4>
                  <p className="text-xl text-gray-400">Centro Universitário (FIAP)</p>
                  <p className="text-lg text-gray-500">2016 - 2020</p>
                </div>
                <div>
                  <h4 className="text-2xl font-medium text-white">Computer Technician</h4>
                  <p className="text-xl text-gray-400">ETEC de Cotia</p>
                  <p className="text-lg text-gray-500">2014 - 2015</p>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <FaLanguage className="w-6 h-6 text-neon-blue" />
                <h3 className="text-3xl font-semibold text-white">Languages</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 relative">
                    <Image
                      src="/images/flags/brazil.png"
                      alt="Brazil Flag"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-xl text-gray-400">Portuguese</p>
                  <p className="text-lg text-gray-500">Native</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 relative">
                    <Image
                      src="/images/flags/usa.png"
                      alt="USA Flag"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-xl text-gray-400">English</p>
                  <p className="text-lg text-gray-500">Fluent</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 relative">
                    <Image
                      src="/images/flags/spain.png"
                      alt="Spain Flag"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-xl text-gray-400">Spanish</p>
                  <p className="text-lg text-gray-500">Intermediate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Companies */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <FaBuilding className="w-6 h-6 text-neon-blue" />
                <h3 className="text-3xl font-semibold text-white">Companies I&apos;ve Worked With</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {companies.map((company) => (
                  <div key={company.name} className="relative group">
                    <div className="w-28 h-28 mx-auto bg-gray-800 rounded-lg p-4 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-700">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-2">
                        <p className="text-lg text-white font-medium">{company.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Clients */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <FaUsers className="w-6 h-6 text-neon-blue" />
                <h3 className="text-3xl font-semibold text-white">Clients I&apos;ve Worked With</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {clients.map((client) => (
                  <div key={client.name} className="relative group">
                    <div className="w-28 h-28 mx-auto bg-gray-800 rounded-lg p-4 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-700">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-2">
                        <p className="text-lg text-white font-medium">{client.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;