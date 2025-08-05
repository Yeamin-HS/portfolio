import React from "react";

const ProjectCard = ({ title, description, image, onClick, style }) => {
  return (
    <div
      onClick={onClick}
      className="w-80 h-80 bg-white/10 border border-purple-400 text-white rounded-xl p-4 cursor-pointer flex flex-col justify-between items-center backdrop-blur-md shadow-lg hover:scale-105 transition-transform"
      style={{ transform: style, transformOrigin: "bottom center" }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-purple-300">{title}</h3>
      <p className="text-sm text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default ProjectCard;