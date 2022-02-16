import React from 'react';
import classNames from 'classnames';

function Input({ type='text', className='', ...rest }) {
  return <input
    type={type}
    className={classNames(
      'input',
      className
    )}
    {...rest}
  />
}

export default Input;