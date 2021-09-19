import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const data = [
    {label: 'Збіраюся вучыць React', importan:true},
    {label: 'ЗУсё яшчэ збіраюся вучыць React', importan:false},
    {label: 'Сяджу і думаю для чаго мне гэта вось ўсё', importan:false}
];

const App = () => {
    return (
        <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
   </div>
    )
}

export default App;