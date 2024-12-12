import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';

const Contact: React.FC = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   subject: '',
   message: ''
 });

 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log('Form submitted:', formData);
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   const { name, value } = e.target;
   setFormData(prev => ({
     ...prev,
     [name]: value
   }));
 };

 return (
   <section id="contact" className="py-20 bg-black">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Heading */}
       <div className="text-center mb-16">
         <h2 className="text-4xl font-bold text-neon-blue mb-4">
           Get In Touch
         </h2>
         <div className="w-24 h-1 mx-auto bg-neon-pink"></div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
         {/* Contact Info */}
         <div className="lg:col-span-2 space-y-8">
           <h3 className="text-2xl font-bold text-neon-pink mb-8">
             Contact Information
           </h3>
           
           <div className="space-y-8">
             <div className="group flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:border-neon-blue transition-colors duration-300">
               <MdEmail className="w-8 h-8 text-neon-blue group-hover:animate-glow-blue" />
               <div>
                 <p className="text-neon-pink font-medium">Email</p>
                 <a href="mailto:thiago.pivatto@outlook.com" 
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300">
                   thiago.pivatto@outlook.com
                 </a>
               </div>
             </div>

             <div className="group flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:border-neon-blue transition-colors duration-300">
               <MdPhone className="w-8 h-8 text-neon-blue group-hover:animate-glow-blue" />
               <div>
                 <p className="text-neon-pink font-medium">Phone</p>
                 <a href="tel:+5511999178699" 
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300">
                   +55 (11) 99917-8699
                 </a>
               </div>
             </div>

             <div className="group flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:border-neon-blue transition-colors duration-300">
               <MdLocationOn className="w-8 h-8 text-neon-blue group-hover:animate-glow-blue" />
               <div>
                 <p className="text-neon-pink font-medium">Location</p>
                 <p className="text-gray-300">
                   São Paulo, Brazil
                 </p>
               </div>
             </div>
           </div>
         </div>

         {/* Contact Form */}
         <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6 bg-black/40 p-8 rounded-lg border border-gray-800">
           <div>
             <label htmlFor="name" className="block text-sm font-medium text-neon-pink mb-2">
               Name
             </label>
             <input
               type="text"
               id="name"
               name="name"
               value={formData.name}
               onChange={handleChange}
               className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-800 text-gray-300 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors duration-300"
               required
             />
           </div>

           <div>
             <label htmlFor="email" className="block text-sm font-medium text-neon-pink mb-2">
               Email
             </label>
             <input
               type="email"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-800 text-gray-300 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors duration-300"
               required
             />
           </div>

           <div>
             <label htmlFor="subject" className="block text-sm font-medium text-neon-pink mb-2">
               Subject
             </label>
             <input
               type="text"
               id="subject"
               name="subject"
               value={formData.subject}
               onChange={handleChange}
               className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-800 text-gray-300 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors duration-300"
               required
             />
           </div>

           <div>
             <label htmlFor="message" className="block text-sm font-medium text-neon-pink mb-2">
               Message
             </label>
             <textarea
               id="message"
               name="message"
               rows={6}
               value={formData.message}
               onChange={handleChange}
               className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-800 text-gray-300 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors duration-300"
               required
             />
           </div>

           <button
             type="submit"
             className="w-full py-4 px-6 flex items-center justify-center space-x-2 bg-black hover:bg-gray-900 text-neon-blue border border-neon-blue rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,255,0.5)] group"
           >
             <span>Send Message</span>
             <MdSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
           </button>
         </form>
       </div>
     </div>
   </section>
 );
};

export default Contact;