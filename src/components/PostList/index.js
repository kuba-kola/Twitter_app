import React from 'react';

import PostListItem from '../PostListItem';

import styles from './styles.module.css'

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked, onToggleRetweeted }) => {
  const elements = posts.map( (item) => {
    if (typeof item === 'object' && Object.keys(item).length ){ 
      const { id, ...itemProps } = item;

      return (
        <li key={id} className={styles.listGroup}>
          <PostListItem 
            {...itemProps}
            onDelete = {() => onDelete(id)}
            onToggleImportant={()=> onToggleImportant(id, 'important')}
            onToggleLiked={() => onToggleLiked(id, 'like')}
            onToggleRetweeted={() => onToggleRetweeted(id, 'retweet')}
          /> 
        </li>
      )
    }
    return null;
  })

  return (
    <ul className={styles.list}>
      {elements}
    </ul>
  )
}

export default PostList;