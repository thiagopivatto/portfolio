import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaTools, 
  FaMobile, 
  FaRobot,
  FaBug,
  FaNetworkWired,
  FaCloud,
  FaTerminal,
  FaLaptopCode,
  FaDatabase as FaDb,
  FaChartLine,
  FaFileAlt,
  FaUsers,
  FaWindows,
  FaLinux,
  FaApple,
  FaSearch,
  FaTachometerAlt,
  FaVial,
  FaClipboardCheck,
  FaRocket,
  FaServer,
  FaMicrochip,
  FaCodeBranch as FaGit,
  FaDocker,
  FaJenkins
} from 'react-icons/fa';

const Skills: React.FC = () => {
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

  const skills = {
    testing: {
      title: "Software Testing",
      icon: FaBug,
      items: [
        { name: "UAT", icon: FaClipboardCheck },
        { name: "Exploratory", icon: FaSearch },
        { name: "Sanity", icon: FaVial },
        { name: "Regression", icon: FaTachometerAlt },
        { name: "Smoke", icon: FaRocket },
        { name: "Unit", icon: FaMicrochip },
        { name: "API", icon: FaNetworkWired },
        { name: "Performance", icon: FaChartLine }
      ]
    },
    automation: {
      title: "Test Automation",
      icon: FaRobot,
      items: [
        { name: "Selenium", icon: FaLaptopCode },
        { name: "Cypress", icon: FaTerminal },
        { name: "JUnit/xUnit", icon: FaCode },
        { name: "Postman", icon: FaNetworkWired },
        { name: "Appium", icon: FaMobile },
        { name: "JMeter", icon: FaChartLine },
        { name: "Katalon Studio", icon: FaTools },
        { name: "Robot Framework", icon: FaRobot },
        { name: "Playwright", icon: FaLaptopCode },
        { name: "Cucumber", icon: FaCode }
      ]
    },
    programming: {
      title: "Programming & Database",
      icon: FaCode,
      items: [
        { name: "Java", icon: FaCode },
        { name: "C#", icon: FaCode },
        { name: "Python", icon: FaCode },
        { name: "Groovy", icon: FaCode },
        { name: "JavaScript", icon: FaCode },
        { name: "Oracle", icon: FaDb },
        { name: "SQL Server", icon: FaDb },
        { name: "MySQL", icon: FaDb }
      ]
    },
    cicd: {
      title: "CI/CD & Cloud",
      icon: FaServer,
      items: [
        { name: "Jenkins", icon: FaJenkins },
        { name: "Docker", icon: FaDocker },
        { name: "Git", icon: FaGit },
        { name: "AWS", icon: FaCloud },
        { name: "Azure DevOps", icon: FaCloud }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: FaTools,
      items: [
        { name: "Office Package", icon: FaFileAlt },
        { name: "Jira", icon: FaTools },
        { name: "Confluence", icon: FaTools },
        { name: "Zephyr", icon: FaTools },
        { name: "Monday", icon: FaTools }
      ]
    },
    methodology: {
      title: "Methodology & OS",
      icon: FaUsers,
      items: [
        { name: "SAFe", icon: FaUsers },
        { name: "Scrum", icon: FaUsers },
        { name: "Kanban", icon: FaUsers },
        { name: "Windows", icon: FaWindows },
        { name: "Linux", icon: FaLinux },
        { name: "MacOS", icon: FaApple }
      ]
    }
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
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
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
          variants={itemVariants}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category]) => (
            <motion.div
              key={key}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-neon-blue transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <category.icon className="w-6 h-6 text-neon-blue" />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400 text-sm">{item.name}</span>
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

export default Skills;