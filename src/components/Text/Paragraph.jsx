import React from 'react';
import classNames from 'classnames';

function Paragraph({ className='', children, ...rest }) {
  return <p className={classNames(
      'p',
      className,
    )}
    {...rest}>
    {children}
  </p>
}

export default Paragraph;