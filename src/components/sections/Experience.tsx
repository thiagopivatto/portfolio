import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

const experiences = [
  {
    role: "Senior QA Engineer",
    clientName: "Step Up for Students",
    via: "Praxent",
    period: "Apr 2025 – Mar 2025",
    tools: ["Excel", "Azure DevOps", "Oracle", "Postman"],
    bullets: [
      "Led front-end and data validation testing for large-scale scholarship management systems handling high-volume financial transactions.",
      "Improved regression efficiency by 20% through test case consolidation and risk-based prioritization.",
      "Performed deep data validation against Oracle databases to ensure financial accuracy and compliance.",
      "Partnered with developers and product teams to define acceptance criteria and embed quality early in the SDLC.",
      "Contributed to release planning, defect triage, and stakeholder reporting in enterprise environments."
    ],
    achievement: "Increased release confidence and reduced rework through structured test planning and improved defect analysis."
  },
  {
    role: "Senior QA Engineer",
    clientName: "The Weather Channel",
    via: "Andela",
    period: "Dec 2023 – Dec 2024",
    tools: ["Postman", "Jira", "TestRail", "Charles Proxy"],
    bullets: [
      "Executed end-to-end mobile and API testing across Android and iOS platforms, identifying and resolving 50+ critical defects, improving release quality by 25%.",
      "Conducted API validations using Postman, improving response time reliability by 15%.",
      "Led QA team collaboration efforts, implementing test case reviews and reusable scenarios, boosting test cycle efficiency by 30%.",
      "Deployed Charles Proxy for network analysis and enhanced debugging of real-time data streaming APIs.",
      "Integrated TestRail and Jira workflows to improve defect traceability and test documentation."
    ],
    achievement: "Earned contract extension due to consistent delivery, strong QA metrics, and stakeholder satisfaction."
  },
  {
    role: "QA Engineer",
    clientName: "Pfizer",
    via: "Appnovation",
    period: "Aug 2023 – Apr 2024",
    tools: ["Postman", "TestRail", "Jira"],
    bullets: [
      "Conducted rigorous UI and API testing for Pfizer's enterprise platforms, aligning QA practices with pharmaceutical compliance standards.",
      "Authored 100+ detailed test cases and defect reports, reducing production leakage by 15%.",
      "Performed smoke, sanity, and regression testing before major releases, ensuring release readiness across global user environments.",
      "Provided regular testing status updates and defect summaries to global stakeholders, maintaining transparency and alignment."
    ],
    achievement: "Recognized internally for maintaining zero post-release defects across two major application launches."
  },
  {
    role: "System Integration Tester",
    clientName: "eShopWorld",
    via: "Dreamdev",
    period: "Jun 2022 – Jun 2023",
    tools: ["Azure DevOps", "Jira", "Postman"],
    bullets: [
      "Led API and backend integration testing for high-traffic international commerce systems.",
      "Designed over 30 integration scenarios that verified payment gateways, tax engines, and logistics APIs.",
      "Partnered with developers and analysts to validate cross-system requirements and resolve bottlenecks.",
      "Conducted root cause analysis for failed data exchanges, reducing repeat defects by 40%."
    ],
    achievement: "Boosted reliability of integration systems supporting multi-billion-dollar transactions and global expansion."
  },
  {
    role: "Expert Developer",
    clientName: "Kimberly-Clark",
    via: "Tech Mahindra",
    period: "Nov 2021 – Jun 2022",
    tools: ["Jira", "Excel"],
    bullets: [
      "Executed manual testing on desktop, mobile, and web applications for global healthcare platforms.",
      "Identified and documented critical defects early in the SDLC, preventing potential revenue losses of millions.",
      "Supported user acceptance and regression testing, ensuring user flows remained compliant and efficient."
    ],
    achievement: "Prevented major system failures through early-stage QA interventions, earning recognition from senior leadership."
  },
  {
    role: "QA Automator",
    clientName: "K2 Partnering Solutions",
    via: "K2 Partnering Solutions",
    period: "Jul 2021 – Nov 2021",
    tools: ["Katalon Studio", "Groovy", "Azure DevOps"],
    bullets: [
      "Built custom test automation framework using Katalon + Groovy, reducing manual testing time by 40%.",
      "Automated key Salesforce workflows for internal hiring platforms, boosting system reliability.",
      "Integrated test suites with CI/CD pipelines in Azure DevOps for seamless delivery."
    ],
    achievement: "Streamlined internal HR testing operations, shortening hiring cycle times by 20%."
  },
  {
    role: "Customized Solutions Consultant II",
    clientName: "Ágora Investimentos",
    via: "Capgemini",
    period: "Oct 2020 – Jul 2021",
    tools: ["Selenium", "Appium", "C#", "Docker"],
    bullets: [
      "Created Selenium-based test automation for mobile and web trading platforms, increasing test coverage by 50%.",
      "Deployed CI/CD automation using Docker containers, reducing regression cycle time by 40%.",
      "Delivered scalable Appium test suites across Android/iOS apps for financial client portals."
    ],
    achievement: "Strengthened release confidence for investor-facing apps; improvements contributed to 98% uptime."
  },
  {
    role: "Jr Test Analyst",
    clientName: "BNP Paribas, PACCAR Bank",
    via: "Sopra Banking Software",
    period: "Aug 2017 – Oct 2020",
    tools: ["Selenium", "Java", "Oracle"],
    bullets: [
      "Enhanced test automation frameworks with Selenium and Java, cutting regression time by 30%.",
      "Conducted compliance tests and API validations for core banking systems.",
      "Authored documentation and reports supporting successful Central Bank audits."
    ],
    achievement: "Contributed to PACCAR Bank's regulatory approval from Brazil's Central Bank, enabling full commercial operations."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-black border-t border-gray-800/50">
      <div className="section-container">
        <motion.h2
          className="section-title section-title-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-6 text-left">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.clientName}-${exp.period}`}
              className="card-base card-hover card-padding"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              variants={itemVariants}
            >
              <div className="flex flex-row flex-nowrap items-start justify-between gap-4 mb-4">
                <div className="min-w-0 pr-2">
                  <h3 className="text-xl font-medium text-white">
                    {exp.role} – {exp.clientName}
                  </h3>
                  {exp.clientName !== exp.via && (
                    <p className="text-sm text-gray-500 mt-0.5">(via {exp.via})</p>
                  )}
                </div>
                <span className="text-base text-neon-blue/80 tabular-nums font-medium shrink-0 whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-body-sm mb-4">
                <span className="font-medium text-gray-400">Tools:</span> {exp.tools.join(", ")}
              </p>
              <ul className="space-y-2 mb-5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-body flex gap-2">
                    <span className="text-neon-blue/60 mt-1 shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body border-l-2 border-neon-blue/50 pl-4">
                <span className="font-medium text-neon-blue/80">Achievement:</span> {exp.achievement}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
