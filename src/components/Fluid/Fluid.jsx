import React, { Component } from 'react';

import FluidGallery from 'react-fluid-gallery';
import styles from './Fluid.module.css'
import image1 from '../../assets/image1.PNG';
import sudoku from '../../assets/sudoku.mp4';
import image3 from '../../assets/3.jpg';
import {FluidM} from './FluidM/FluidM.jsx'

const images = [image1, sudoku, image3]

export default class App extends Component {
  render() {
    return (
      <div className={styles['wrapper']}>
        <div className={styles['container']}>
          <FluidGallery slides={images} startAt={0} onChange={this._onChange} />
          <span>{this.index === 0}</span>
        </div>
      </div>
    )
  }

  _onClick = index => {

  }

  _onChange = index => {
    if (index === 0) {
      return <FluidM/>
    }
    console.log('FluidGallery.onChange', index)
  }
}
