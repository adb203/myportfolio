import React from 'react';
import styles from './Display.module.css';
import image1 from '../../../assets/image1.PNG';
import image2 from '../../../assets/image2.jpg';

const images = [image1, image2,]

export function Display() {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <img src={image1}  alt='image1'/>
        <span>#1</span>
        <img src={image1}  alt='image1'/>
        <span>#1</span>
        <img src={image1}  alt='image1'/>
        <span>#1</span>
      </div>
      <div className={styles.column}>
        <img src={image1}  alt='image1'/>
        <span>#1</span>
        <img src={image1}  alt='image1'/>
        <span>#1</span>
        <img src={image1}  alt='image1'/>
        <span>#1</span>
      </div>
      <div className={styles.column}>
        <img src={image1}  alt='image1'/>
        <span>#1</span>
        <img src={image1}  alt='image1'/>
        <span>#1</span>
        <img src={image1}  alt='image1'/>
        <span>#1</span>
      </div>
    </div>

  );
}
