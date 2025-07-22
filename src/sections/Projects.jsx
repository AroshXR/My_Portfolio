import React, { useState } from 'react';
import { myProjects } from '../constants';
import Project from './Project';
import ProjectDetails from './ProjectDetails';

function Projects({id}) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id={id} className='relative c-space section-spacing'>
      <h2 className='text-heading'>My Projects</h2>
      <div className='bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-12 h-[12px] w-full' />

      <div className='space-y-8 mt-12'>
        {myProjects.map((project) => (
          <Project 
            key={project.id} 
            title={project.title}
            description={project.description}
            tags={project.tags}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      {/* Modal will only render when selectedProject exists */}
      {selectedProject && (
        <ProjectDetails
          {...selectedProject}
          closeModal={closeModal}
        />
      )}
    </section>
  );
}

export default Projects;