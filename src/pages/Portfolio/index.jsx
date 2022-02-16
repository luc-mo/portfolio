import React from 'react';
import { useHistory } from 'react-router-dom';

import { useReducers } from 'hooks';
import Project from './Project';
import { H2, P, Button } from 'components';
import 'styles/Portfolio.scss';


function Portfolio() {
  const history = useHistory();
  const { projects } = useReducers('projects');

  const handleClick = () => {
    history.push('/projects');
  }

  return <section className='portfolio'>
    <div className='portfolio__item'>
      <div className='portfolio__text--container'>
        <H2>Mi portafolio</H2>
        <P>Aqui podras encontrar una pequeña lista de proyectos que he realizado en mi experiencia con la programacion y el desarrollo web.</P>
      </div>
      <div className='portfolio__button--container'>
        <Button
          className='portfolio__button'
          onClick={handleClick}>
          Ver mas!
        </Button>
      </div>
    </div>
    <div className='portfolio__projects'>
      {projects.map((project, index) => {
        if(index < 4) return <Project
          key={`portfolio__project-${index}`}
          project={project}
        />
        else return null;
      })}
    </div>
  </section>
}

export default Portfolio;