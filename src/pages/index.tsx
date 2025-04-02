import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Certificates from '../components/sections/Certificates';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Thiago Pivatto - QA Engineer & Computer Engineer</title>
        <meta name="description" content="Experienced QA Engineer and Computer Engineer specializing in test automation and quality assurance." />
        <meta name="keywords" content="QA Engineer, Test Automation, Selenium, Java, Quality Assurance, Computer Engineer" />
        <meta name="author" content="Thiago Pivatto" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Thiago Pivatto - QA Engineer & Computer Engineer" />
        <meta property="og:description" content="Experienced QA Engineer and Computer Engineer specializing in test automation and quality assurance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thiagopivatto.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <div>
          {/* About Section */}
          <section id="about">
            <About />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <Skills />
          </section>

          {/* Experience Section */}
          <section id="experience">
            <Experience />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <Projects />
          </section>

          {/* Certificates Section */}
          <section id="certificates">
            <Certificates />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Home;