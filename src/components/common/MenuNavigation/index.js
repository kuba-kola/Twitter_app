import React, { useRef, useState } from 'react';
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaUserAlt } from 'react-icons/fa';
import cx from 'classnames';

import styles from './styles.module.css';
import { useOutsideClick } from '../../../shared/hooks';
import InfoModal from '../InfoModal';

const MenuNavigation = ({ setFilter, activeTab }) => {
  const [isShown, setIsShown] = useState(false);
  const wrapperRef = useRef(null);

  const handleClick = (value) => {
    setFilter(value)
  }
 
  useOutsideClick(wrapperRef, () => {
    setIsShown(false)
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.link}
        onClick={() => setIsShown(true)}
      >
        <FaHome />
        <span>Home</span>
      </div>
      <div
        className={styles.link}
        onClick={() => setIsShown(true)}
      >
        <FaHashtag />
        <span>Explore</span>
      </div>
      <div
        className={styles.link}
        onClick={() => setIsShown(true)}
      >
        <FaBell />
        <span>Notification</span>
      </div>
      <div
        className={styles.link}
        onClick={() => setIsShown(true)}
      >
        <FaEnvelope />
        <span>Messages</span>
      </div>
      <div
        className={styles.link}
        onClick={() => handleClick('important')}
      >
        <FaBookmark />
        <span className={cx({
          [styles.active]: activeTab === 'important',
        })}
        >
          Bookmarks</span>
      </div>
      <div
        className={styles.link}
        onClick={() => handleClick('all')}
      >
        <FaUserAlt />
        <span
          className={cx({
            [styles.active]: activeTab === 'all',
          })}
        >Profile</span>
      </div>
      {isShown && (
        <InfoModal
          wrapperRef={wrapperRef}
        />
      )}
    </div>
  );
}

export default MenuNavigation;
