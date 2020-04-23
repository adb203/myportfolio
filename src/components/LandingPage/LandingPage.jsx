import React from 'react';
import styles from './LandingPage.module.css';
import Fluid from '../Fluid/Fluid.jsx';
import {NavBar} from '../NavBar/NavBar.jsx'
import {Banner} from '../Banner/Banner.jsx'

export function LandingPage() {
  return (
    <div className={styles["container"]}>
      <NavBar/>
        <div className={styles["banner"]}>
          <Banner/>
        </div>
      <Fluid/>
    </div>
  );
}
