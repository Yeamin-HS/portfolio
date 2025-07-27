// src/pages/Home.jsx
import React from 'react';
import AnimatedHero from '../components/AnimatedHero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="w-screen min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Animated Background */}
      <AnimatedHero />

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
