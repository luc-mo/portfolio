import React from 'react';

import { useReducers } from 'hooks';
import Project from './Project';
import { SpanHeader, Hr } from 'components';

import 'styles/Projects.scss';

function Projects() {
  const { projects } = useReducers('projects');
  
  return <main className='projects'>
    <SpanHeader className='projects__title'>Proyectos</SpanHeader>
    {projects.map((project, index) => <React.Fragment key={`project__${index}`}>
      <Project
        project={project}
        projectNumber={index}
      />
      {projects.length !== index + 1 && <Hr/>}
    </React.Fragment>)}
  </main>
}

export default Projects;