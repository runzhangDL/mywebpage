import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

// const Gear = () => {
//   const [scrollDirection, setScrollDirection] = useState(null);

//   useEffect(() => {
//     let lastScrollPosition = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollPosition = window.scrollY;
//       const direction = currentScrollPosition > lastScrollPosition ? 'down' : 'up';
//       setScrollDirection(direction);
//       lastScrollPosition = currentScrollPosition;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={styles.gear}
//       style={{
//         transform: scrollDirection === 'down' ? 'rotate(45deg)' : 'rotate(-45deg)',
//       }}
//     >
//     </div>
//   );
// };

const Gear = ({is_home}) => {
  const [rotation, setRotation] = useState(0);

  // const router = useRouter()

  const handleClick = () => {
    // router.push('/')
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const rotationAngle = currentScrollPosition * 0.1;
      setRotation(rotationAngle);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if(is_home){
    return (
      <div
        className={styles.gear}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
        onClick={handleClick}
      ></div>
    );
  }
  else{
    return (
      <a
        className={styles.gear}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
        href='/'
      ></a>
    );
  }
};


export default Gear;