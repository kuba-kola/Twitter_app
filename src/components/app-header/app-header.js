import React from 'react';
import userpic from '../../assets/userpic.jpg'

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    let numOfTweets = 'запісаў';
    let numOfLikes = 'спадабалася';

    if (allPosts === 1) {
        numOfTweets = 'запіс';
    } else if (allPosts > 1 && allPosts <= 4) {
        numOfTweets = 'запісы';
    }

    if (liked === 1) {
        numOfLikes = 'спадабаўся';
    }

    return (
        <div className="app-header d-flex">
            <div className='userpic_header'>
                <img className='userpic' src={userpic} alt="img" /> 
                <h1>Jakub</h1>
                <h2>@kuba-kola</h2>                
            </div>
            <h2> {allPosts} {numOfTweets}, з іх {numOfLikes} {liked}</h2>
        </div>
    )
}

export default AppHeader;