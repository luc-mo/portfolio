import React from 'react';
import classNames from 'classnames';

function SkillsImage({
  width = '150',
  icon = null,
  alt = 'default',
  className = '',
  containerClassName = '',
  innerRef = null,
  ...rest
}) {
  return <div className={classNames(
      'skills__image--container',
      containerClassName,
    )}
    ref={innerRef}
    {...rest}>
    <img
      className={classNames(
        'skills__image',
        className,
      )}
      src={icon}
      alt={alt}
      width={width}
    />
  </div>
}

export default SkillsImage;