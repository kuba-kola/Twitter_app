import React from 'react';
// import { Link } from "react-router-dom";

import arrowLeft from '../../assets/icons/arrow_left.svg'

import styles from './styles.module.css';

const NavPanel = ({count}) => (
  <div
    // to={{ pathname: "/" }}
    className={styles.goBackButton}
  >
    <img
      src={arrowLeft}
      className={styles.arrow}
      alt="img"
    />
    <div className={styles.label}>
      <span className={styles.name}>Jakub</span>
      <span className={styles.count}>{count} posts</span>
    </div>
  </div>
);

export default NavPanel;