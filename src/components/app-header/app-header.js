import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Kuba</h1>
            <h2> {allPosts} запісаў, з іх спадабалася {liked}</h2>
        </div>
    )
}

export default AppHeader;