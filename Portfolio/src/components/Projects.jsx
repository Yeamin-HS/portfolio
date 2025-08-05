// src/components/Projects.jsx
import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A cool project about something awesome.',
    image: '/src/assets/project1.png',
  },
  {
    title: 'Project Two',
    description: 'Another creative solution to a real-world problem.',
    image: '/src/assets/project2.png',
  },
  {
    title: 'Project Three',
    description: 'Sleek design and powerful tech stack.',
    image: '/src/assets/project3.png',
  },
  {
    title: 'Project Four',
    description: 'Making things faster and smarter.',
    image: '/src/assets/project2.png',
  },
  {
    title: 'Project Five',
    description: 'Optimized frontend interfaces.',
    image: '/src/assets/project1.png',
  },
  {
    title: 'Project Six',
    description: 'Responsive, mobile-friendly designs.',
    image: '/src/assets/pg.jpg',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [offset, setOffset] = useState(0);
  const scrollRef = useRef();
  const CARD_WIDTH = 375;
  const CARD_HEIGHT = 700;
  const visibleCount = 3;

  const handleNext = () => {
    if (offset + visibleCount < projects.length) {
      setOffset(offset + 1);
    }
  };

  const handlePrev = () => {
    if (offset > 0) {
      setOffset(offset - 1);
    }
  };

  const handleMouseDrag = (e) => {
    const startX = e.clientX;
    const handleMouseMove = (moveEvent) => {
      const diff = moveEvent.clientX - startX;
      if (diff > 100) {
        handlePrev();
        document.removeEventListener('mousemove', handleMouseMove);
      } else if (diff < -100) {
        handleNext();
        document.removeEventListener('mousemove', handleMouseMove);
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }, { once: true });
  };

  return (
    <section id="projects" className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My <span className="text-purple-400">Projects</span></h2>

        <div className="relative">
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10">
            <button onClick={handlePrev} className="bg-gray-800 hover:bg-purple-500 text-white p-3 rounded-full">
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10">
            <button onClick={handleNext} className="bg-gray-800 hover:bg-purple-500 text-white p-3 rounded-full">
              <FaChevronRight />
            </button>
          </div>

          <div className="overflow-hidden cursor-grab" ref={scrollRef} onMouseDown={handleMouseDrag}>
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${offset * (CARD_WIDTH + 15)}px)` }}
            >
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="flex-shrink-0"
                  style={{ width: `${CARD_WIDTH}px` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gray-900 p-6 rounded-lg max-w-lg text-white relative">
                <button
                  className="absolute top-2 right-3 text-2xl text-red-400 hover:text-red-600"
                  onClick={() => setSelectedProject(null)}
                >
                  &times;
                </button>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full rounded mb-4" />
                <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
