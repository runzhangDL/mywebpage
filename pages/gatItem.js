import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const GatItem = () => {
    const [rotation, setRotation] = useState(0);

    return (
        <a className={styles.project} href='/gat'>
        <img src='/graph1.png'></img>
        <div>
          <h4>Research on Graph Attention Networks and automatical Grap generation on text data, with LSTM.</h4>
          <p>While working with text data, I realized that structured data is commonly represented using relational graphs, where two nodes are connected if they are related. This observation naturally led to the idea of exploring whether deep learning models can be trained to generate these relational graphs.</p>
        </div>
      </a>
    );
}

export default GatItem;