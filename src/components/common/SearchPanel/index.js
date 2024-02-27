import React, {useState} from 'react';

import styles from './styles.module.css'

const SearchPanel = ({
  onUpdateSearch,
}) => {
  const [term, setTerm] = useState('');

  const updateSearch = (e) => {
    setTerm(e.target.value);
    onUpdateSearch(e.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search"
      value={term}
      onChange={updateSearch}
    />
  )
};

export default SearchPanel;