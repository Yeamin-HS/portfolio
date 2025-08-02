import React from 'react';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="w-80 bg-[#111] border border-gray-700 rounded-xl shadow-lg overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;