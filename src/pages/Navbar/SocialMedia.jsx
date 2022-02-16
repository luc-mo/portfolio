import React from 'react';
import classNames from 'classnames';

import { ExternalLink } from 'components';
import { github } from 'images';

function SocialMedia({ className='', ...rest }) {
  return <div
    className={classNames(
      'nav__social-media',
      className
    )}
    {...rest}>
    <ExternalLink to='https://www.github.com/luc-mo'>
      <img src={github} alt='Github' width='50'/>
    </ExternalLink>
  </div>
}

export default SocialMedia;