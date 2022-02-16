import React from 'react';
import gsap from 'gsap';

import { SkillsImage } from 'components';
import { postgresql, mongodb, sequelize } from 'images';
import { skillsEffect } from 'utils';

function GroupOne() {
  const mongodbRef = React.useRef(null);
  const sequelizeRef = React.useRef(null);
  
  React.useEffect(() => {
    const mongodbCurrent = mongodbRef.current;
    const sequelizeCurrent = sequelizeRef.current;
    skillsEffect([mongodbRef, sequelizeRef]);
    return () => {
      gsap.killTweensOf(mongodbCurrent);
      gsap.killTweensOf(sequelizeCurrent);
    }
  }, []);

  return <div className='skills__image-group'>
    <SkillsImage
      icon={postgresql}
      containerClassName='image--postgresql'/>
    <SkillsImage
      icon={mongodb}
      innerRef={mongodbRef}
      containerClassName='image--mongodb'
      width='200'/>
    <SkillsImage
      icon={sequelize}
      innerRef={sequelizeRef}
      containerClassName='image--sequelize'/>
  </div>
}

export default GroupOne;