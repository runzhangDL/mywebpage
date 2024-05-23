import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const AsvItem = () => {
    const [rotation, setRotation] = useState(0);

    return (
        <a className={styles.project} href='/asv'>
          <img src='/navi_nn.png'></img>
          <div>
          <h4>Autonomous Surface Vehicle Controller</h4>
          <p>The MSc disseration was about implementing Evolutionary Algorithms(MAP-Elites particularly) to build a vehicle controller, which chose from the action space based on the current status of the environment or vehicle itself. The project also investigate deep reinforcement learning and compared the two methods.</p>
          </div>
        </a>
    );
}

export default AsvItem;