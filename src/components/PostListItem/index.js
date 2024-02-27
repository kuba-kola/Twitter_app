import React, { useState } from 'react';
import likeIcon from '../../assets/icons/like.png';
import likedIcon from '../../assets/icons/liked.png';
import bookmarkIcon from '../../assets/icons/bookmark.png';
import bookmarkedIcon from '../../assets/icons/bookmarked.png';
import deleteIcon from '../../assets/icons/display.png';
import retweetIcon from '../../assets/icons/retweet.png';
import retweetedIcon from '../../assets/icons/retweeted.png';
import commentIcon from '../../assets/icons/comment.png';

import styles from './styles.module.css';
import DeleteModal from '../common/DeleteModal';

const PostListItem = ({
  text,
  img,
  like,
  important,
  onDelete,
  onToggleImportant,
  onToggleLiked,
  onToggleRetweeted,
}) => {
  const [isShown, setIsShown] = useState(false);
  
  return (
    <div className={styles.container}>
      <div className={styles.tweet}>
        <span className={styles.label}>
          {text}
        </span>
        {img && (
          <img
            className={styles.image}
            src={img}
            alt="img"
          />
        )}
      </div>
      <div className={styles.buttonsContainer}>
        <div>
          <img
            className={styles.icon}
            src={commentIcon}
            alt="img"
          />
        </div>
        <div onClick={onToggleLiked}>
          <img
            className={styles.icon}
            src={like ? likedIcon : likeIcon}
            alt="img"
          />
        </div>
        <div onClick={onToggleRetweeted}>
          <img
            className={styles.icon}
            src={retweetIcon}
            alt="img"
          />
        </div>
        <div className={styles.editButtons}>
          <div onClick={() => setIsShown(true)}>
            <img
              className={styles.editIcon}
              src={deleteIcon}
              alt="img"
            />
          </div>
          <div onClick={onToggleImportant}>
            <img
              className={styles.editIcon}
              src={important ? bookmarkedIcon : bookmarkIcon}
              alt="img"
            />
          </div>
        </div>
      </div>
      {isShown && (
        <DeleteModal
          setIsShown={setIsShown}
          onDelete={onDelete}
        />
      )}
    </div>
  )
};

export default PostListItem;