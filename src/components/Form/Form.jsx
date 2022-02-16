import React from 'react';
import classNames from 'classnames';

function Form({ className='', children, ...rest }) {
  return <form
    className={classNames(
      'form',
      className
    )}
    {...rest}>
    {children}
  </form>
}

export default Form;