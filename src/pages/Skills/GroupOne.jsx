import React from 'react';
import gsap from 'gsap';

import { SkillsImage } from 'components';
import { html, css, sass, gsap as gsapImage } from 'images';
import { skillsEffect } from 'utils';

function GroupOne() {
  const cssRef = React.useRef(null);
  const sassRef = React.useRef(null);
  const gsapRef = React.useRef(null);
  
  React.useEffect(() => {
    const cssCurrent = cssRef.current;
    const sassCurrent = sassRef.current;;
    const gsapCurrent = gsapRef.current;;
    skillsEffect([cssRef, sassRef, gsapRef]);
    return () => {
      gsap.killTweensOf(cssCurrent);
      gsap.killTweensOf(sassCurrent);
      gsap.killTweensOf(gsapCurrent);
    }
  }, []);

  return <div className='skills__image-group'>
    <SkillsImage
      icon={html}
      containerClassName='image--html'
      width='110'/>
    <SkillsImage
      icon={css}
      innerRef={cssRef}
      containerClassName='image--css'
      width='110'/>
    <SkillsImage
      icon={sass}
      innerRef={sassRef}
      containerClassName='image--sass'/>
    <SkillsImage
      icon={gsapImage}
      innerRef={gsapRef}
      containerClassName='image--gsap'/>
  </div>
}

export default GroupOne;