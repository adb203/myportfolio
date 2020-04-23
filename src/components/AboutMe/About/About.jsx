import React from 'react';
import styles from './About.module.css';


export function About() {
  return (
    <div className={styles["banner"]}>
      <div className={styles["container"]}>
        <div className={styles["row"]}>
          <div className={styles['text-top']}>Developer</div>
          <div className={styles['text']}>Arian Baoas</div>
          <div className={styles['text-bottom']}>Student</div>
          <div className={styles['blurb']}>
            <p>Currently a junior studying at Rutgers University. Expected graduation at May 2021. Looking to impact the world using the power of technology and data.</p>
          </div>
          <div className={styles['contact']}>
            <p>Contact:</p>
            <p>arianbaoas@gmail.com</p>
            <p><a href="https://github.com/adb203">My Github</a></p>
            <p><a href="https://www.instagram.com/arian.baoas/">My Instagram</a></p>
            <p><a href="https://www.linkedin.com/in/abaoas/">My LinkedIn</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
