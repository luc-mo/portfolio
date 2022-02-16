import React from 'react';
import classNames from 'classnames';

function TextArea({ className='', children, ...rest }) {
  return <textarea
    className={classNames(
      'textarea',
      className
    )}
    {...rest}>
    {children}
  </textarea>
}

export default TextArea;