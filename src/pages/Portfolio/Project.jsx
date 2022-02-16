import React from 'react';

import { handleOver, handleOut } from 'utils';
import { ExternalLink } from 'components';

function Project({ project }) {
  const [hover, setHover] = React.useState(false);
  const imageRef = React.useRef(null);

  React.useEffect(() => {
    if(hover) handleOver(imageRef);
    else handleOut(imageRef);
  }, [hover])

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  return <div className='portfolio__project--container'>
    <ExternalLink to={project.link}>
      <img
        className='portfolio__project'
        ref={imageRef}
        src={project.image}
        alt={project.title}
      />
      <div className='portfolio__project--circle'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
      </div>
    </ExternalLink>
  </div>
}

export default Project;