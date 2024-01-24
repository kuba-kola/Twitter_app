import React from 'react';

import styles from './styles.module.css';

const PostListItem = ({
    label,
    onDelete,
    onToggleImportant,
    onToggleLiked,
}) => (
    <div className={styles.container}>
        <span className={styles.label}>
            {label}
        </span>
        <div className={styles.buttonsContainer}>
            <button
                type="button"
                className="btn-like btn-sm"
                onClick={onToggleLiked}>
                <i className="fa fa-heart"></i>
            </button>
            <button
                type="button"
                className="btn-star btn-sm"
                onClick={onToggleImportant}>
                <i className="fa fa-star"></i>
            </button>
            <button
                type="button"
                className="btn-trash btn-sm"
                onClick={onDelete}>
                <i className="fa fa-trash-o"></i>
            </button>
        </div>
    </div>
);

export default PostListItem;