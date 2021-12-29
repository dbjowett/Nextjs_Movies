import { useState, useEffect } from 'react';
import classes from '../SearchBar/searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ getQuery }) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const onChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  //Debounce search query
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [query]);

  // Call API when query has been debounced
  useEffect(() => {
    getQuery(debouncedQuery);
  }, [debouncedQuery]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (debouncedQuery.length === 0) {
      return;
    }
    setQuery('');
    getQuery(debouncedQuery);
  };

  return (
    <div className={classes.form_container}>
      <form onSubmit={onSubmit}>
        <input className={classes.searchBar} type='text' onChange={onChange} value={query} placeholder='Search for movies'></input>
      </form>
    </div>
  );
}
