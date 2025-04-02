import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      company: "The Weather Channel - IBM",
      period: "2023-2024",
      client: "Andela",
      industry: "Weather Industry",
      description: "Led QA team in conducting manual Mobile and API testing, identifying and resolving over 50 high-priority defects. Utilized Postman for API validation and Charles Proxy for mobile testing.",
      technologies: ["Postman", "Jira", "Charles Proxy", "TestRail", "Mobile Testing", "API Testing"],
      achievements: [
        "Secured multiple contract renewals due to consistent delivery of high-quality solutions",
        "Improved testing process through collaborative efforts and knowledge sharing",
        "Validated seamless feature integrations across platforms"
      ]
    },
    {
      company: "Pfizer Pharmaceutical Platform",
      period: "2023",
      client: "Appnovation",
      industry: "Pharmaceutical Industry",
      description: "Conducted UI and API testing for pharmaceutical applications, ensuring compliance with strict industry standards. Created detailed test plans and reports.",
      technologies: ["Postman", "Jira", "TestRail", "UI Testing", "API Testing", "Pharmaceutical Standards"],
      achievements: [
        "Reduced defect leakage by 15% through comprehensive test planning",
        "Maintained exceptional quality standards contributing to industry accolades",
        "Delivered regular stakeholder updates aligning testing progress with objectives"
      ]
    },
    {
      company: "eShopWorld Integration Testing",
      period: "2022-2023",
      client: "Dreamdev Technologies",
      industry: "eCommerce Industry",
      description: "Executed API testing for high-traffic eCommerce platforms, verifying seamless integration between diverse systems. Designed and implemented over 30 test scenarios.",
      technologies: ["Postman", "Jira", "Azure DevOps", "Monday.com", "API Testing", "Integration Testing"],
      achievements: [
        "Improved integration quality for multi-billion-dollar revenue clients",
        "Designed and implemented over 30 test scenarios for critical system integrations",
        "Enhanced testing workflows using Azure DevOps and Monday.com"
      ]
    },
    {
      company: "Kimberly-Clark Healthcare Platform",
      period: "2021-2022",
      client: "Tech Mahindra",
      industry: "Healthcare Industry",
      description: "Planned and executed manual tests for desktop, mobile, and web platforms, identifying usability issues and critical failures early in the development cycle.",
      technologies: ["Manual Testing", "Jira", "Excel", "Mobile Testing", "Web Testing", "Desktop Testing"],
      achievements: [
        "Detected critical failures early, saving millions in potential losses",
        "Collaborated with cross-functional teams to prioritize and resolve defects efficiently",
        "Implemented comprehensive testing strategies across multiple platforms"
      ]
    },
    {
      company: "K2 Partnering Solutions - HR Platform",
      period: "2021",
      client: "K2 Partnering Solutions",
      industry: "HR Industry",
      description: "Designed test automation frameworks using Katalon Studio and Groovy, automating functional and regression tests to reduce manual testing effort by 40%.",
      technologies: ["Katalon Studio", "Groovy", "Salesforce", "Azure DevOps", "CI/CD", "Test Automation"],
      achievements: [
        "Reduced manual testing effort by 40% through automation",
        "Automated Salesforce workflows and end-to-end business processes",
        "Enhanced internal testing efficiency, optimizing hiring processes for clients"
      ]
    },
    {
      company: "Ágora Investimentos Platform",
      period: "2020-2021",
      client: "Capgemini",
      industry: "Financial Industry",
      description: "Developed and maintained test automation frameworks for web and mobile platforms using Selenium, Appium, and C#, integrating Docker-based CI/CD pipelines.",
      technologies: ["Selenium", "Appium", "C#", "xUnit", "Docker", "Jira", "TFS"],
      achievements: [
        "Introduced a robust test automation routine improving app performance",
        "Strengthened client trust through enhanced testing processes",
        "Streamlined test deployments through Docker-based CI/CD pipelines"
      ]
    },
    {
      company: "Banking Software Testing",
      period: "2017-2020",
      client: "Sopra Banking Software",
      industry: "Banking Industry",
      description: "Enhanced automated testing frameworks with Selenium and Java, conducting functional and compliance tests for multiple banking clients.",
      technologies: ["Selenium", "Java", "Oracle", "Jira", "Confluence", "SoapUI", "API Testing"],
      achievements: [
        "Reduced regression testing time by 30% through framework enhancement",
        "Contributed to successful Central Bank of Brazil audit for PACCAR Bank",
        "Developed API validation scripts ensuring banking regulation compliance"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-16 overflow-hidden">
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
        <div className="flex items-center space-x-3 mb-6">
          <FaCalendarAlt className="w-6 h-6 text-neon-blue" />
          <h3 className="text-3xl font-semibold text-white">Professional Experience</h3>
        </div>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.company}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h4 className="text-2xl font-medium text-white">{experience.client}</h4>
                <p className="text-xl text-gray-400">{experience.period}</p>
              </div>
              <p className="text-lg text-gray-400 mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 rounded-full text-lg text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <h5 className="text-xl font-medium text-white mb-2">Key Achievements:</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="text-lg">{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 