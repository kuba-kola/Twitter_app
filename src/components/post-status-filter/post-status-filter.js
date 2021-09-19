import React from 'react';

import './post-status-filter.css'

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className='btn btn-info'>Усе</button>
            <button type="button" className='btn btn-outline-secondary'>Спадабалася</button>
        </div>
    )
}

export default PostStatusFilter;