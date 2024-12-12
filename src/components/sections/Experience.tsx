import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaTrophy } from 'react-icons/fa';

interface Experience {
 title: string;
 company: string;
 period: string;
 description: string;
 achievements: string;
 client?: string;
 type: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string;
  client?: string;
  type: string;
}

const experiences: Experience[] = [
  {
    title: "Sr QA Engineer",
    company: "Andela",
    period: "12/2023 – 11/2024",
    type: "Contract Job",
    client: "The Weather Channel - IBM (Weather Industry)",
    description: "Successfully conducted manual Mobile and API testing using Postman. Led a team with other QAs to improve the quality standards for the product.",
    achievements: "Contract renewed multiple times due to high quality standards from Andela's QA team."
  },
  {
    title: "QA Engineer",
    company: "Appnovation",
    period: "08/2023 – 04/2024",
    type: "Full Time",
    client: "Pfizer (Pharmaceutical Industry)",
    description: "Successfully conducted manual UI and API testing using Postman.",
    achievements: "Recognition by Pfizer as a company of excellence in software quality due to high quality standards."
  },
  {
    title: "System Integration Tester",
    company: "Dreamdev Technologies",
    period: "06/2022 - 06/2023",
    type: "Contract Job",
    client: "eShopWorld (eCommerce Industry)",
    description: "Successfully executed API testing, implementing best software testing practices.",
    achievements: "Improvements and implementation of critical system integration tests, ensuring excellence in software quality for multi-billion dollar billing clients."
  },
  {
    title: "Expert Developer",
    company: "Tech Mahindra",
    period: "11/2021 - 06/2022",
    type: "Full Time",
    client: "Kimberly-Clark (Healthcare Industry)",
    description: "Planned and executed desktop, mobile and UI tests.",
    achievements: "Optimization of testing processes where critical failures were found saving the client millions of dollars."
  },
  {
    title: "QA Automator",
    company: "K2 Partnering Solutions",
    period: "07/2021 - 11/2021",
    type: "Full Time",
    client: "Interal Project (HR Industry)",
    description: "Developed a test automation framework using stacks like Katalon, Groovy and Zephyr.",
    achievements: "Improved internal testing processes to optimize the hiring flow for clients using the Salesforce platform using multiple testing automation frameworks."
  },
  {
    title: "Customized Solutions Consultant II",
    company: "Capgemini",
    period: "10/2020 - 07/2021",
    type: "Full Time",
    client: "Ágora Investimentos (Financial Industry)",
    description: "Developed a test automation framework for web and mobile testing.",
    achievements: "Significant improvements in the mobile app after the implementation of a test automation routine, consolidating the broker's trust with its customers."
  },
  {
    title: "Test Automation (Intern) / Test Analyst",
    company: "Sopra Banking Software",
    period: "08/2017 - 10/2020",
    type: "Full Time",
    client: "PACCAR Bank, BNP Paribas, Banrisul (Banking Industry)",
    description: "Improved and implemented an automated testing framework using Java.",
    achievements: "Approval from the central bank of brazil after an audit for one of our clients to become a bank, obtaining billionaire revenue. (PACCAR Bank)."
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neon-blue mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 mx-auto bg-neon-pink"></div>
        </div>
 
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-px bg-neon-blue/20" />
 
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start group`}>
                {/* Timeline dot with glow effect */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-neon-blue group-hover:animate-glow-blue" />
                </div>
 
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-neon-blue transition-colors duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-neon-pink">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-neon-blue font-medium px-3 py-1 rounded-full border border-neon-blue">
                        {exp.type}
                      </span>
                    </div>
 
                    {/* Company & Period Info */}
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center text-gray-300">
                        <FaBuilding className="w-5 h-5 mr-3 text-neon-blue" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      {exp.client && (
                        <div className="flex items-center text-gray-300 ml-8">
                          <FaBriefcase className="w-5 h-5 mr-3 text-neon-blue" />
                          <span>{exp.client}</span>
                        </div>
                      )}
                      <div className="flex items-center text-gray-300">
                        <FaCalendarAlt className="w-5 h-5 mr-3 text-neon-blue" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
 
                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
 
                    {/* Achievements */}
                    <div className="bg-black/40 p-4 rounded-lg border border-neon-pink/20">
                      <div className="flex items-center mb-2">
                        <FaTrophy className="w-5 h-5 mr-2 text-neon-pink" />
                        <p className="text-neon-pink font-medium">
                          Key Achievement
                        </p>
                      </div>
                      <p className="text-gray-300">
                        {exp.achievements}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
 };
 
 export default Experience;