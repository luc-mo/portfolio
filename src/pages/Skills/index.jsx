import React from 'react';
import { useLocation } from 'react-router-dom';

import { SpanHeader, H2, P, InternalLink } from 'components';
import GroupOne from './GroupOne';
import GroupTwo from './GroupTwo';
import GroupThree from './GroupThree';
import GroupFour from './GroupFour';

import 'styles/Skills.scss';

function Skills() {
  const { pathname } = useLocation();

  const content = <React.Fragment>
    <div className='skills__text--container'>
      {pathname === '/' ? 
        <H2 className='skills__title'>Skills</H2> : 
        <SpanHeader className='skills__title'>Skills</SpanHeader>
      }
      <P className='skills__text'>Soy un desarrollador fullstack con un gran interés por crear aplicaciones simples e intuitivas. Me gusta aprender nuevas tecnologías para poder probar distintas opciones en mis proyectos.</P>
      <P className='skills__text'>Tengo experiencia con distintas tecnologías como lo son JavaScript, Sass, Node.js, ReactJS, MongoDB, PostgreSQL y cuento con una amplia experiencia realizando proyectos basados en microcontroladores Arduino. Actualmente estoy aprendiendo Python debido a todas de posibilidades que ofrece este lenguaje.</P>
      <P className='skills__text'>Si deseas más detalles o quieres trabajar conmigo, no dudes en <InternalLink to='/contact'>contactarme.</InternalLink></P>
    </div>
    <div className='skills__image-group--container'>
      <GroupOne/>
      <GroupTwo/>
      <GroupThree/>
      <GroupFour/>
    </div>
  </React.Fragment>

  return <React.Fragment>
    {pathname === '/' ? <section className='skills'>
      {content}
    </section> : <main className='skills'>
      {content}
    </main>}
  </React.Fragment>
}

export default Skills;