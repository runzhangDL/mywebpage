import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const GptItem = () => {
    const [rotation, setRotation] = useState(0);

    return (
        <a className={styles.project} href="http://ec2-18-214-100-128.compute-1.amazonaws.com:3000/" target='_blank'>
          <img src='/gpt.png'></img>
          <div>
            <h4>A English polishing tool based on ChatGPT</h4>
            <p>This full-stack English polishing tool utilizes Spring Boot for RESTful API development and integration. The front-end is crafted with React and styled using Tailwind CSS. Deployed on Amazon Web Services (AWS), the project uses AWS S3 for persistent storage. The ChatGPT API serves as the primary engine powering the polishing algorithm.</p>
          </div>
        </a>
    );
}

export default GptItem;