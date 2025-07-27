import ProjectCard from './ProjectCard';


const projectData = [
  {
    title: 'Interactive Portfolio',
    description: 'Framer Motion + Tailwind-based developer portfolio with page transitions and dark mode.',
  },
  {
    title: 'React 3D Scene',
    description: 'Built with @react-three/fiber to create a 3D interactive canvas in React.',
  },
];

const Projects = () => (
  <section id="projects" className="min-h-screen px-6 py-24 bg-gray-100 dark:bg-gray-800">
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectData.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
