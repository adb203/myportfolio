import React from 'react';
import styles from './AboutMe.module.css';
import {NavBar} from './NavBar/NavBar.jsx';
import {Display} from './Display/Display.jsx';
import {About} from './About/About.jsx';

export function AboutMe() {
  return (
    <div className={styles['container']}>
      <NavBar/>
        <div className={styles['about']}>
          <About/>
        </div>
        <div className={styles['display']}>
          <Display/>
        </div>


    </div>
  );
}
