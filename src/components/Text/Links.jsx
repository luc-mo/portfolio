import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export function InternalLink({ className='', children, ...rest }) {
  return <Link
    className={classNames(
      'link',
      className
    )}
    {...rest}>
    {children}
  </Link>
}

export function ExternalLink({ className='', to='#', children, ...rest }) {
  return <a className={classNames(
      'link',
      className,
    )}
    href={to}
    target='_blank'
    rel='noopener noreferrer'
    {...rest}>
    {children}
  </a>
}
