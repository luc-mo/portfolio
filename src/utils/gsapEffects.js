import gsap from 'gsap';
import { randomFloat } from 'utils';

export function skillsEffect(refs, currentRef = 0, reversed = false) {
  gsap.fromTo(refs[currentRef].current, {
    opacity: reversed ? 1 : 0,
  }, {
    opacity: reversed ? 0 : 1,
    delay: randomFloat(1, 4),
    duration: 2,
    ease: 'linear',
    onComplete: () => {
      if(!reversed) {
        if(currentRef !== refs.length - 1)
          skillsEffect(refs, currentRef + 1);
        else
          skillsEffect(refs, currentRef, true);
      } else {
        if(currentRef !== 0)
          skillsEffect(refs, currentRef - 1, true);
        else
          skillsEffect(refs, currentRef);
      }
    }
  });
}

export function handleOver(imageRef) {
  gsap.to(imageRef.current, {
    duration: 0.01,
    scale: 1.1,
    filter: 'none',
  });
}

export function handleOut(imageRef) {
  gsap.to(imageRef.current, {
    duration: 0.01,
    scale: 1,
    filter: 'brightness(60%)',
  });
}