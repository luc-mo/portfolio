import React from 'react';
import classNames from 'classnames';

function Button({ className, children, ...rest }) {
  return <button
    className={classNames(
      'button',
      className
    )}
    {...rest}>
    {children}
  </button>
}

export default Button;