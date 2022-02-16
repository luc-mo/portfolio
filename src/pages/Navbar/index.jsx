import React from 'react';

import { NavButtonLogo, NavButton } from 'components';
import { logo } from 'images';

import SocialMedia from './SocialMedia';
import 'styles/Navbar.scss';

function Navbar() {
  return <nav className='nav'>
    <NavButtonLogo exact to='/'>
      <img src={logo} alt='Logo' width='130'/>
    </NavButtonLogo>
    <NavButton exact to='/' name='home'>Home</NavButton>
    <NavButton exact to='/skills' name='skills'>Skills</NavButton>
    <NavButton exact to='/blog' name='blog'>Blog</NavButton>
    <NavButton exact to='/projects' name='projects'>Proyectos</NavButton>
    <NavButton exact to='/contact' name='contact'>Contacto</NavButton>
    <NavButton exact to='/about' name='about'>Acerca de</NavButton>
    <SocialMedia/>
  </nav>
}

export default Navbar;