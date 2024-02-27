import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { posts } from '../../shared/posts';

import AppHeader from '../Header';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../Filter';
import PostList from '../PostList';
import AddForm from '../AddForm';

import styles from './style.module.css';
import NavPanel from '../NavPanel';

function App() {
  const [data, setData] = useState(posts);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [filter, setFilter] = useState('all');

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const addItem = (value) => {
    const newItem = {
      text: value,
      important: false,
      like: false,
      id: uniqid(),
    };

    setData([newItem, ...data]);
  };
  
  const onToggleIRetweet = (id, status) => {
    const retweetedItems = data.filter((item) => item.retweet && item.id.includes("-copy"));

    if (retweetedItems.length) {
      deleteItem(retweetedItems[0].id);
    } else {
      onToggleItem(id, status);
    }
  };

  const onToggleItem = (id, status) => {
    const index = data.findIndex((item) => item.id === id);
    const updatedItem = {
      ...data[index],
      [status]: !data[index][status],
    };
    const newItem = {
      ...data.find((item) => item.id === id),
      retweet: true,
      id: `${id}-copy`,
    };
    setData(
      status === 'retweet'
        ? [
          newItem,
          ...data.slice(0, index),
          updatedItem,
          ...data.slice(index + 1),
        ]
        : [
          ...data.slice(0, index),
          updatedItem,
          ...data.slice(index + 1),
        ],
    );
  };

  const searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => typeof item.text === 'string').filter((item) => item.text.toLowerCase().includes(term));
  };

  const filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter((item) => item.like);
    }
    return items;
  };

  const visiblePosts = filterPost(searchPost(data, searchPhrase), filter);

  return (
    <div className={styles.app}>
      <div className={styles.nav}>
        MENU
      </div>
      <div className={styles.body}>
        <NavPanel />
        <AppHeader 
          data={data}
        />
        <AddForm
          onAdd={addItem}
        />
        <PostList
          posts={visiblePosts}
          onDelete={deleteItem}
          onToggleImportant={onToggleItem}
          onToggleLiked={onToggleItem}
          onToggleRetweeted={onToggleIRetweet}
        />
      </div>
      <div className={styles.trends}>
        <div className={styles.searchPanel}>
          <SearchPanel
            onUpdateSearch={(term) => setSearchPhrase(term.toLowerCase())}
          />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={(value) => setFilter(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
