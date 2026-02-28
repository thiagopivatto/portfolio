import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  testing: {
    title: "Test types & practices",
    items: ["UAT", "Exploratory", "Regression", "Smoke", "API", "Performance", "Integration", "Accessibility", "BDD / TDD", "Shift-left"]
  },
  automation: {
    title: "QA & automation tools",
    items: ["Selenium", "Cypress", "Playwright", "Katalon", "Robot Framework", "Postman", "Rest Assured", "SoapUI", "Appium", "JUnit / Cucumber", "JMeter / K6", "TestRail"]
  },
  programming: {
    title: "Programming & database",
    items: ["Java", "C#", "Python", "Groovy", "JavaScript", "TypeScript", "Oracle", "SQL Server", "MySQL"]
  },
  cicd: {
    title: "CI/CD & cloud",
    items: ["Docker", "Jenkins", "Git / Bitbucket", "AWS", "Azure DevOps", "GCP"]
  },
  tools: {
    title: "Tools & management",
    items: ["Jira", "Confluence", "Monday", "Trello", "Zephyr", "Excel"]
  },
  methodology: {
    title: "Methodology & OS",
    items: ["Scrum", "SAFe", "Windows", "Linux", "MacOS"]
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-black border-t border-gray-800/50">
      <div className="section-container">
        <motion.h2
          className="section-title section-title-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
        >
          {Object.entries(skills).map(([key, category]) => (
            <motion.div
              key={key}
              className="card-base card-hover card-padding"
              variants={item}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-sm font-medium text-neon-blue/90 uppercase tracking-wider mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((name) => (
                  <span
                    key={name}
                    className="text-sm text-gray-400 bg-dark-300 border border-gray-700/60 px-2.5 py-1 rounded-lg"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
