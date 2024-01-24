import React, { useState } from 'react';
import uniqid from "uniqid";
import { posts } from '../../shared/posts';

import AppHeader from '../Header';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../Filter';
import PostList from '../PostList';
import PostAddForm from '../AddForm';

import styles from './style.module.css';

const App = () => {
    const [data, setData] = useState(posts);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [filter, setFilter] = useState('all');

    const deleteItem = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const addItem = (value) => {
        const newItem = {
            label: value,
            important: false,
            like: false,
            id: uniqid(),
        }

        setData([...data, newItem]);
    };

    const onToggleItem = (id, status) => {
        const index = data.findIndex((item) => item.id === id);
        const updatedItem = { ...data[index], [status]: !data[index][status] };

        setData([
            ...data.slice(0, index),
            updatedItem,
            ...data.slice(index + 1)
        ]);
    };

    const searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        };
        
        return items.filter(item => typeof item.label === 'string').filter(item => item.label.toLowerCase().includes(term))
    };

    const filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        };
    };

    const liked = () => data.filter((item) => item.like).length;
    const allPosts = () =>  data.length;
    const visiblePosts = filterPost(searchPost(data, searchPhrase), filter);
    
    return (
        <div className={styles.app}>
            <AppHeader liked={liked()} allPosts={allPosts()} />
            <div className={styles.searchPanel}>
                <SearchPanel
                    onUpdateSearch={(term) => setSearchPhrase(term.toLowerCase())}
                />
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={(value) => setFilter(value)}
                />
            </div>
            <AddForm
                onAdd={addItem}
            />
            <PostList
                posts={visiblePosts}
                onDelete={deleteItem}
                onToggleImportant={onToggleItem}
                onToggleLiked={onToggleItem}
            />
        </div>
    );
};

export default App;
