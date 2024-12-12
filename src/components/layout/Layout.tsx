import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
 children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
 return (
   <div className="min-h-screen flex flex-col bg-black transition-colors duration-300">
     <Header />
     <main className="flex-grow pt-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-4">
         {/* Page Content Container */}
         <div className="relative z-10">
           {children}
         </div>

         {/* Background Decoration */}
         <div className="fixed inset-0 z-0">
           {/* Gradient overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 opacity-50" />
           {/* Radial glow effects */}
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-3xl" />
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full filter blur-3xl" />
         </div>
       </div>
     </main>

     <Footer />
   </div>
 );
};

export default Layout;
