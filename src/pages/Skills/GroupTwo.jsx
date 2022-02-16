import React from 'react';
import gsap from 'gsap';

import { SkillsImage } from 'components';
import { javascript, nodejs, react, redux } from 'images';
import { skillsEffect } from 'utils';

function GroupTwo() {
  const nodejsRef = React.useRef(null);
  const reactRef = React.useRef(null);
  const reduxRef = React.useRef(null);

  React.useEffect(() => {
    const nodejsCurrent = nodejsRef.current;
    const reactCurrent = reactRef.current;
    const reduxCurrent = reduxRef.current;
    skillsEffect([nodejsRef, reactRef, reduxRef]);
    return () => {
      gsap.killTweensOf(nodejsCurrent);
      gsap.killTweensOf(reactCurrent);
      gsap.killTweensOf(reduxCurrent);
    }
  }, []);

  return <div className='skills__image-group'>
    <SkillsImage
      icon={javascript}
      containerClassName='image--javascript'
      width='180'/>
    <SkillsImage
      icon={nodejs}
      innerRef={nodejsRef}
      containerClassName='image--nodejs'/>
    <SkillsImage
      icon={react}
      innerRef={reactRef}
      containerClassName='image--react'/>
    <SkillsImage
      icon={redux}
      innerRef={reduxRef}
      containerClassName='image--redux'/>
  </div>
}

export default GroupTwo;