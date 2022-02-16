import React from 'react';
import { useLocation } from 'react-router-dom';

import { SpanHeader, H2, P, AboutImage } from 'components';
import { javascript, nodejs, react, redux, sass, arduino } from 'images';

import 'styles/About.scss';

function About() {
  const { pathname } = useLocation();

  const content = <React.Fragment>
    <div className='about__text--container'>
      {pathname === '/' ? 
        <H2 className='about__title'>Sobre mi</H2> : 
        <SpanHeader className='about__title'>Sobre mi</SpanHeader>
      }
      <P className='about__text'>Mi interés por la programación comenzó realizando pequeños proyectos en PLC y Arduino en la carrera de electricidad, así fue como comencé con el proyecto IoTduino, esto me llevo a aprender sobre desarrollo web.</P>
      <P className='about__text'>Soy una persona organizada, detallista y con una gran pasión por aprender constantemente. Fanático de la música y de los instrumentos musicales.</P>
      <P className='about__text'>En este sitio busco compartir parte de mis conocimientos y cosas que hubiera querido saber cuando comence a utilizar algunas tecnologias.</P>
    </div>
    <div className='about__images--container'>
      <AboutImage
        icon={javascript}
        containerClassName='about__image--javascript'/>
      <AboutImage
        icon={nodejs}
        containerClassName='image--nodejs'/>
      <AboutImage
        icon={react}
        containerClassName='image--react'/>
      <AboutImage
        icon={redux}
        width='130'
        containerClassName='image--redux'/>
      <AboutImage
        icon={sass}
        containerClassName='image--sass'/>
      <AboutImage
        icon={arduino}
        containerClassName='image--arduino'/>
    </div>
  </React.Fragment>

  return <React.Fragment>
    {pathname === '/' ? <section className='about'>
      {content}
    </section> : <main className='about'>
      {content}
    </main>}
  </React.Fragment>
}

export default About;