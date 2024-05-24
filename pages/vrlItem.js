import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const VrlItem = () => {
    const [rotation, setRotation] = useState(0);

    return (
        <a className={styles.project} href='/vrl'>
          <img src="/simvp.png"></img>
          <div>
          <h4>Predict the future semantci masks of moving objects.</h4>
          <p>In the project for the deep learning course at NYU, I work with two classmates to implement SimVP open-source model on a video semantic prediction task .</p>
          </div>
        </a>
    );
}

export default VrlItem;