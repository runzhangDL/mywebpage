import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const AsvItem = () => {
    const [rotation, setRotation] = useState(0);

    return (
        <a className={styles.project} href='/asv'>
          <img src='/navi_nn.png'></img>
          <div>
          <h4>Autonomous Surface Vehicle Controller</h4>
          <p>My Master's dissertation focused on implementing Evolutionary Algorithms to develop a vehicle controller, which selected actions based on the current state of the environment or the vehicle itself. Additionally, the project explored deep reinforcement learning and compared the two approaches.</p>
          </div>
        </a>
    );
}

export default AsvItem;