import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A cool project about something awesome.',
    image: '../src/assets/project1.png',
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
  const [index, setIndex] = useState(0);
  const visibleCards = 3;
  const containerRef = useRef(null);
  const [modalProject, setModalProject] = useState(null);

  const handleNext = () => {
    if (index + visibleCards < projects.length) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleDrag = (e, info) => {
    if (info.offset.x < -100) handleNext();
    if (info.offset.x > 100) handlePrev();
  };

  return (
    <section id="projects" className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My <span className="text-purple-400">Projects</span></h2>

        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <button onClick={handlePrev} className="text-gray-400 hover:text-white text-2xl">
              <FaChevronLeft />
            </button>
            <button onClick={handleNext} className="text-gray-400 hover:text-white text-2xl">
              <FaChevronRight />
            </button>
          </div>

          <motion.div
            className="overflow-hidden"
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDrag}
          >
            <motion.div
              className="flex gap-6 cursor-grab active:cursor-grabbing"
              style={{ x: `-${index * 21.5}rem` }}
              animate={{ x: `-${index * 21.5}rem` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {projects.map((project, i) => (
                <div key={i} onClick={() => setModalProject(project)}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence>
          {modalProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
            >
              <motion.div
                className="bg-gray-900 text-white p-6 rounded-lg max-w-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-2">{modalProject.title}</h3>
                <img src={modalProject.image} alt={modalProject.title} className="rounded-lg mb-4" />
                <p>{modalProject.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
