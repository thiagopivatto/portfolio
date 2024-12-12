import React from 'react';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
 return (
   <section className="min-h-screen flex items-center bg-black relative overflow-hidden">
     {/* Background Effects */}
     <div className="absolute inset-0">
       {/* Gradient Overlay */}
       <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-pink/10" />
       
       {/* Animated Circles */}
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl" />
       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl" />
       
       {/* Grid Pattern */}
       <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
     </div>

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         {/* Content */}
         <div className="space-y-12">
           {/* Main Heading */}
           <div className="space-y-6">
             <h1 className="text-5xl md:text-7xl font-bold">
               <span className="text-white">Thiago </span>
               <span className="text-neon-blue animate-glow-blue">Pivatto</span>
               <span className="block mt-4 text-4xl md:text-5xl text-neon-pink">
                 QA Engineer
               </span>
             </h1>
             <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
               Senior Test Automation Engineer specializing in building robust testing frameworks
               and leading quality assurance teams across diverse industries.
             </p>
           </div>

           {/* Action Buttons */}
           <div className="flex flex-col sm:flex-row gap-6">
             <a href="#contact" className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue hover:bg-neon-blue/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,255,0.5)]">
               Contact Me
               <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
             </a>             
             
             <a href="/resume.pdf" download className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-neon-pink/10 text-neon-pink border border-neon-pink hover:bg-neon-pink/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]">
               Download CV
               <FaDownload className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
             </a>             
           </div>

           {/* Social Links */}
           <div className="flex items-center space-x-6">
               < a href="https://github.com/thiagopivatto"
               target="_blank"
               rel="noopener noreferrer"               
               className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
               <FaGithub className="w-8 h-8" />
             </a>             
             
             < a href="https://linkedin.com/in/thiagopivatto"
               target="_blank"
               rel="noopener noreferrer"               
               className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
               <FaLinkedin className="w-8 h-8" />
             </a>             
           </div>
         </div>

         {/* Visual Element */}
         <div className="relative hidden lg:block">
           <div className="relative w-full aspect-square">
             {/* Animated circles */}
             <div className="absolute inset-0">
               <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink opacity-20" />
               <div className="absolute inset-8 rounded-full bg-gradient-to-br from-neon-pink to-neon-blue opacity-20" />
               <div className="absolute inset-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink opacity-20" />
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};

export default Hero;
