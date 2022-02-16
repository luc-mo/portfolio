import React from 'react';
import gsap from 'gsap';

import { SkillsImage } from 'components';
import { arduino, git, figma } from 'images';
import { skillsEffect } from 'utils';

function GroupOne() {
  const gitRef = React.useRef(null);
  const figmaRef = React.useRef(null);
  
  React.useEffect(() => {
    const gitCurrent = gitRef.current;
    const figmaCurrent = figmaRef.current;
    skillsEffect([gitRef, figmaRef]);
    return () => {
      gsap.killTweensOf(gitCurrent);
      gsap.killTweensOf(figmaCurrent);
    }
  }, []);

  return <div className='skills__image-group'>
    <SkillsImage
      icon={arduino}
      containerClassName='image--arduino'/>
    <SkillsImage
      icon={git}
      innerRef={gitRef}
      containerClassName='image--git'
      width='230'/>
    <SkillsImage
      icon={figma}
      innerRef={figmaRef}
      containerClassName='image--figma'/>
  </div>
}

export default GroupOne;