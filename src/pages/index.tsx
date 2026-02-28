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
        <title>Thiago Pivatto - Senior Software Quality Engineer | SDET | Test Automation</title>
        <meta name="description" content="Senior QA Engineer with 8 years of experience in manual and automated testing across healthcare, finance, eCommerce, and weather. SDET and test automation specialist." />
        <meta name="keywords" content="QA Engineer, SDET, Test Automation, Selenium, Cypress, Playwright, Quality Assurance, Software Quality Engineer" />
        <meta name="author" content="Thiago Pivatto" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Thiago Pivatto - Senior Software Quality Engineer | SDET | Test Automation" />
        <meta property="og:description" content="Senior QA Engineer with 8 years of experience in manual and automated testing across healthcare, finance, eCommerce, and weather. SDET and test automation specialist." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thiagopivatto.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white">
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