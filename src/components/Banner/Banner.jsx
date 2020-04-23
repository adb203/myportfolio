import React from 'react';
import styles from './Banner.module.css';

export function Banner() {
  return (
    <div className={styles["banner"]}>
      <div className={styles["container"]}>
        <div className={styles["row"]}>
          <div className={styles['text-top']}>Developer
            <div className={styles['text']}>Arian Baoas
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
