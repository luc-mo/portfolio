import React from 'react';
import classNames from 'classnames';
import { Button } from 'components';

function Submit({ className='', children, ...rest }) {
  return <Button
    className={classNames(
      'submit',
      className
    )}
    type='submit'>
    {children}
  </Button>
}

export default Submit;