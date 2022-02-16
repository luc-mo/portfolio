import React from 'react';
import { useLocation } from 'react-router-dom';

import { SpanHeader, H2, P } from 'components';
import ContactForm from './ContactForm';
import Map from './Map';

import 'styles/Contact.scss';

function Contact() {
  const { pathname } = useLocation();

  const content = <React.Fragment>
    <div className='contact__item--container'>
      <div className='contact__text--container'>
        {pathname === '/' ? 
          <H2>Contacto</H2> : 
          <SpanHeader>Contacto</SpanHeader>
        }
        <P>Si te gusta lo que hago, quieres que colaboremos en un proyecto o tienes alguna consulta sobre mi trabajo, no dudes en enviarme un mensaje.</P>
      </div>
      <div className='contact__map--container'>
        <Map/>
      </div>
    </div>
    <div className='contact__item--container'>
      <div className='contact__form--container'>
        <ContactForm/>
      </div>
    </div>
  </React.Fragment>

  return <React.Fragment>
    {pathname === '/' ? <section className='contact'>
      {content}
    </section> : <main className='contact'>
      {content}
    </main>}
  </React.Fragment>
}

export default Contact;