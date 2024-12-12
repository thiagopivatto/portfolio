import React from 'react';
import { FaCode, FaDatabase, FaServer, FaTerminal } from 'react-icons/fa';

interface Skill {
 name: string;
 level?: number;
 years?: string;
}

interface SkillCategory {
 title: string;
 icon: React.ElementType;
 skills: Skill[];
}

const skillCategories: SkillCategory[] = [
 {
   title: "Software Testing",
   icon: FaTerminal,
   skills: [
     { name: "Selenium", years: "4 years", level: 90 },
     { name: "Cypress", level: 85 },
     { name: "JUnit/xUnit", level: 85 },
     { name: "Postman", years: "2 years", level: 90 },
     { name: "Appium", level: 80 }
   ]
 },
 {
   title: "Programming Languages",
   icon: FaCode,
   skills: [
     { name: "Java", level: 85 },
     { name: "C#", level: 80 },
     { name: "Python", level: 75 },
     { name: "JavaScript", level: 80 }
   ]
 },
 {
   title: "Databases",
   icon: FaDatabase,
   skills: [
     { name: "Oracle", level: 85 },
     { name: "SQL Server", level: 80 },
     { name: "MySQL", level: 75 },
   ]
 },
 {
   title: "DevOps & Tools",
   icon: FaServer,
   skills: [
     { name: "Jenkins", level: 85 },
     { name: "Docker", level: 80 },
     { name: "Git", level: 90 },
     { name: "AWS", level: 75 },
     { name: "Azure DevOps", level: 85 }
   ]
 }
];

const Skills: React.FC = () => {
 return (
   <section id="skills" className="py-20 bg-black">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
         <h2 className="text-4xl font-bold text-neon-blue mb-4">
           Skills & Expertise
         </h2>
         <div className="w-24 h-1 mx-auto bg-neon-pink"></div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {skillCategories.map((category, index) => (
           <div 
             key={index}
             className="bg-black/40 rounded-lg p-8 border border-gray-800 hover:border-neon-blue transition-all duration-300"
           >
             <div className="flex items-center mb-8">
               <div className="p-3 bg-neon-blue/10 rounded-lg mr-4 group-hover:bg-neon-blue/20">
                <category.icon className="w-6 h-6 text-neon-blue" />
               </div>
               <h3 className="text-2xl font-bold text-neon-pink">
                 {category.title}
               </h3>
             </div>

             <div className="space-y-6">
               {category.skills.map((skill, skillIndex) => (
                 <div key={skillIndex} className="space-y-2">
                   <div className="flex justify-between">
                     <span className="text-gray-300 font-medium">
                       {skill.name}
                       {skill.years && (
                         <span className="ml-2 text-sm text-gray-500">
                           ({skill.years})
                         </span>
                       )}
                     </span>
                     {skill.level && (
                       <span className="text-neon-blue">
                         {skill.level}%
                       </span>
                     )}
                   </div>
                   {skill.level && (
                     <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-gradient-to-r from-neon-blue to-neon-pink rounded-full transition-all duration-1000"
                         style={{ width: `${skill.level}%` }}
                       />
                     </div>
                   )}
                 </div>
               ))}
             </div>
           </div>
         ))}
       </div>
     </div>
   </section>
 );
};

export default Skills;