import React from 'react';
import classNames from 'classnames';

function AboutImage({
  width = '150',
  icon = null,
  alt = 'default',
  className = '',
  containerClassName = '',
  innerRef = null,
  ...rest
}) {
  return <div className={classNames(
      'about__image--container',
      containerClassName,
    )}
    ref={innerRef}
    {...rest}>
    <img
      className={classNames(
        'about__image',
        className,
      )}
      src={icon}
      alt={alt}
      width={width}
    />
  </div>
}

export default AboutImage;