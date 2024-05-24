import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const PcdItem = () => {
    const [rotation, setRotation] = useState(0);

    return (
        <a className={styles.project} href="/pcd">
            <img src="/pcd.png"></img>
            <div>
            <h4>3D LiDAR point cloud semantic and noise point recoginition</h4>
            <p>LiDAR is a crucial component of the perception system in autonomous vehicles. It generates point cloud data by detecting reflected light. The perception module then analyze this data to identify objects and filter out noise points to support safe driving. </p>
            </div>
        </a>
    );
}

export default PcdItem;