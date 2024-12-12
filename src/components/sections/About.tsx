import React from 'react';
import { FaGlobe, FaCode, FaTerminal, FaGraduationCap, FaLanguage } from 'react-icons/fa';

const About: React.FC = () => {
 return (
   <section id="about" className="py-20 bg-black">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Heading */}
       <div className="text-center mb-16">
         <h2 className="text-4xl font-bold text-neon-blue mb-4">
           About Me
         </h2>
         <div className="w-24 h-1 mx-auto bg-neon-pink"></div>
       </div>

       {/* Content */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
         {/* Text Content */}
         <div className="space-y-8">
           <h3 className="text-2xl font-bold text-neon-pink">
             QA Engineer & Test Automation Specialist
           </h3>
           <div className="space-y-4 text-gray-300">
             <p>
               Experienced QA Engineer with expertise in implementing comprehensive test automation 
               solutions and establishing robust quality assurance processes. Specialized in designing 
               and developing test frameworks using industry-leading tools and best practices.
             </p>
             <p>
               Proven track record in leading QA teams and delivering high-quality solutions across 
               various sectors including finance, healthcare, and weather technology. Skilled in both 
               manual and automated testing, with a focus on creating scalable and maintainable test 
               architectures.
             </p>
           </div>
           
           {/* Quick Info */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex items-center space-x-3 group">
               <FaGlobe className="w-6 h-6 text-neon-blue group-hover:animate-glow-blue" />
               <span className="text-gray-300">Based in São Paulo, Brazil</span>
             </div>
             <div className="flex items-center space-x-3 group">
               <FaCode className="w-6 h-6 text-neon-blue group-hover:animate-glow-blue" />
               <span className="text-gray-300">7+ Years Experience</span>
             </div>
             <div className="flex items-center space-x-3 group">
               <FaTerminal className="w-6 h-6 text-neon-blue group-hover:animate-glow-blue" />
               <span className="text-gray-300">Test Automation Expert</span>
             </div>
           </div>
         </div>

         {/* Education & Languages */}
         <div className="space-y-8">
           {/* Education Section */}
           <div className="bg-black/40 p-8 rounded-lg border border-gray-800 hover:border-neon-blue transition-colors duration-300">
             <div className="flex items-center space-x-3 mb-6">
               <FaGraduationCap className="w-6 h-6 text-neon-pink" />
               <h4 className="text-xl font-bold text-neon-pink">
                 Education
               </h4>
             </div>
             <ul className="space-y-6">
               <li>
                 <p className="font-bold text-neon-blue mb-1">B.Sc in Computer Engineering</p>
                 <p className="text-gray-400">FIAP – Centro Universitário</p>
                 <p className="text-gray-500">2016-2020</p>
               </li>
               <li>
                 <p className="font-bold text-neon-blue mb-1">Computer Technician</p>
                 <p className="text-gray-400">ETEC de Cotia</p>
                 <p className="text-gray-500">2014-2015</p>
               </li>
             </ul>
           </div>

           {/* Languages Section */}
           <div className="bg-black/40 p-8 rounded-lg border border-gray-800 hover:border-neon-pink transition-colors duration-300">
             <div className="flex items-center space-x-3 mb-6">
               <FaLanguage className="w-6 h-6 text-neon-pink" />
               <h4 className="text-xl font-bold text-neon-pink">
                 Languages
               </h4>
             </div>
             <ul className="space-y-4">
               <li className="flex justify-between items-center">
                 <span className="text-gray-300">Portuguese</span>
                 <span className="text-neon-blue">Native</span>
               </li>
               <li className="flex justify-between items-center">
                 <span className="text-gray-300">English</span>
                 <span className="text-neon-blue">Fluent</span>
               </li>
               <li className="flex justify-between items-center">
                 <span className="text-gray-300">Spanish</span>
                 <span className="text-neon-blue">Intermediate</span>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};

export default About;