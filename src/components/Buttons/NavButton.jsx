import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

function NavButton({ className, name, children, ...rest }) {
  const location = useLocation();
  const active = location.pathname.includes(name) || (location.pathname === '/' && name === 'home');
  return <NavLink
    className={classNames(
      'nav__button',
      { 'nav__button--active': active },
      className
    )}
    activeClassName={null}
    {...rest}>
    {children}
  </NavLink>
}

function NavButtonLogo({ className, containerClassName='', children, ...rest }) {
  return <div className={classNames('nav__logo--container', containerClassName)}>
    <NavLink
      className={classNames(
        'nav__logo',
        className
      )}
      {...rest}>
      {children}
    </NavLink>
  </div>
}

export { NavButton, NavButtonLogo };