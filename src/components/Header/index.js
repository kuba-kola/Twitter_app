import React from 'react';
import userpic from '../../assets/userpic.jpg'

import styles from './styles.module.css';

const AppHeader = () => (
    <div className={styles.header}>
        <div className={styles.container}>
            <img
                className={styles.userpic}
                src={userpic}
                alt="img"
            />
            <span className={styles.userName}>Jakub</span>
            <span className={styles.link}>
                <a href="https://github.com/kuba-kola/">@kuba-kola</a>
            </span>
        </div>
    </div>
);

export default AppHeader;