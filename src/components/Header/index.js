import React from 'react';
import userpic from '../../assets/userpic.jpg'

import styles from './styles.module.css';

const AppHeader = ({ data }) => {
  const liked = data.filter((item) => item.like).length;
  const allPosts = data.length;
  
  return (
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
        <div className={styles.stat}>
          <div className={styles.container}>
            <span className={styles.count}>{liked}</span>
            <span>Likes</span>  
          </div>
          <div className={styles.container}>
            <span className={styles.count}>{allPosts}</span>
            <span>Posts</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AppHeader;