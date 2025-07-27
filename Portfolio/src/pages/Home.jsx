import React from "react";
import AnimatedHero from "../components/AnimatedHero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="w-screen min-h-screen relative overflow-hidden 
                     bg-gray-900 dark:bg-gray-900">

      {/* ✅ Light Mode Animated Gradient Background */}
      <div className="absolute inset-0 z-0 dark:hidden">
        <div className="animated-gradient"></div>
      </div>

      {/* ✅ Custom Cursor */}
      <div id="custom-cursor" className="hidden md:block"></div>

      {/* Hero Section */}
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
