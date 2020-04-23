import React from 'react';
import styles from './NavBar.module.css';
import {Link} from 'react-router-dom';
import resume from '../../../assets/resumev2.pdf';

export function NavBar() {
  const linkstyle ={
    color: '#FFFFFF'
  }

  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["inner-nav"]}>
        <div className={styles["left-nav"]}>Arian Baoas / <Link to="/">Home</Link></div>
        { /*<svg viewBox="0 0 45 7">
            <polyline points="0,7 45,7 24,0 24,6 0,6"></polyline>
          </svg>*/}
        <div className={styles["right-nav"]}>
          <a href="https://drive.google.com/open?id=1hHxsB3ZZS79LIi7z1HKWOea4NI8ZPG7m">Resume</a>
        </div>
      </div>
    </div>
  );
}
