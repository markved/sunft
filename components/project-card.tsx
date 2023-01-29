import React from "react";

interface Props {
  project: {
    title: string;
    description: string;
    link: string;
  };
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="m-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-2">{project.title}</h2>
      <p className="text-gray-700">{project.description}</p>
      <a href={project.link} className="text-blue-500 underline">
        View NFTs
      </a>
    </div>
  );
};

export default ProjectCard;
