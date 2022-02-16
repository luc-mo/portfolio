import React from 'react';
import { useHistory } from 'react-router-dom';

import { SpanHeader, P, Button } from 'components';

function HomeView() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/contact');
  }

  return <div className='home__home-view'>
    <div className='home-view__text--container'>
      <SpanHeader>Hola, soy</SpanHeader>
      <SpanHeader>Luciano Morales,</SpanHeader>
      <SpanHeader>desarrollador web</SpanHeader>
      <P className='home-view__paragraph'>
        Desarrollador fullstack e ingeniero eléctrico
      </P>
      <Button className='home-view__button' onClick={handleClick}>
        Contactame!
      </Button>
    </div>
  </div>
}

export default HomeView;