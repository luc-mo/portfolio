import React from 'react';
import classNames from 'classnames';
import './Headers.scss';

export function H1({ className, children, ...rest }) {
  return <h1 className={classNames('h1', className)}
    {...rest}>
    {children}
  </h1>
}
export function H2({ className, children, ...rest }) {
  return <h1 className={classNames('h2', className)}
    {...rest}>
    {children}
  </h1>
}
export function H3({ className, children, ...rest }) {
  return <h1 className={classNames('h3', className)}
    {...rest}>
    {children}
  </h1>
}
export function H4({ className, children, ...rest }) {
  return <h1 className={classNames('h4', className)}
    {...rest}>
    {children}
  </h1>
}
export function H5({ className, children, ...rest }) {
  return <h1 className={classNames('h5', className)}
    {...rest}>
    {children}
  </h1>
}
export function H6({ className, children, ...rest }) {
  return <h1 className={classNames('h6', className)}
    {...rest}>
    {children}
  </h1>
}

export function SpanHeader({ children: text, ...rest }) {
  const spanHeader = text.split('').map((letter, index) => {
    return <span
      className='span-header'
      key={`SpanHeader-${letter}-${index}`}>
      {letter}
    </span>
  });

  return <H1 {...rest}>
    {spanHeader}
  </H1>
}