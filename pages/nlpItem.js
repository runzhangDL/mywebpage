import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const NlpItem = () => {
    const [rotation, setRotation] = useState(0);

    return (
        <a className={styles.project} href="/nlp">
          <img src='/ner.jpg'></img>
          <div>
            <h4>Text and tabular data processing with regular expression and NLP techniques.</h4>
            <p>During my first internship, I worked on extracting information from given text and tabular data. It required developing algorithms to identify and allocate relevant information into the database entries, transforming unstructured data into structured data. </p>
          </div>
        </a>
    );
}

export default NlpItem;