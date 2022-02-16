import React from 'react';

import { H2, P, ExternalLink, ProjectsImage } from 'components';

function Project({ project, projectNumber }) {
  return <article className='project'>
    <div className='project__text--container project__item'>
      <H2>{project.title}</H2>
      {project.description.split('\n').map((paragraph, pIndex) => {
        return <P key={`paragraph__${pIndex}--${projectNumber}`}>{paragraph}</P>;
      })}
      {project.link && <P>
        Puedes visitar el proyecto <ExternalLink to={project.link}>aqui.</ExternalLink>
      </P>}
    </div>
    <div className='project__image--container project__item'>
      <ProjectsImage
        icon={project.image}
        alt={project.title}
        to={project.link}
      />
    </div>
  </article>
}

export default Project;