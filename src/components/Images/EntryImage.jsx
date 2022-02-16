import React from 'react';
import classNames from 'classnames';

function EntryImage({ icon, alt='default', className='', ...rest }) {
  return <img
    className={classNames(
      'entry__image',
      className,
    )}
    src={icon}
    alt={alt}
    {...rest}
  />
}

export default EntryImage;