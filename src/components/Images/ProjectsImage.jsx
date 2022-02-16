import React from 'react';
import classNames from 'classnames';
import { ExternalLink } from 'components';

function ProjectsImage({ icon, alt='default', to='#', className='', ...rest }) {
  return <ExternalLink to={to}>
    <img
      className={classNames(
        'projects__image',
        className,
      )}
      src={icon}
      alt={alt}
      {...rest}
    />
  </ExternalLink>
}

export default ProjectsImage;