import React from 'react';
import styles from './Search.module.css';
import SearchBar from './SearchBar/SearchBar';

function Search(props) {
   
    return (
        <div className={styles.main}>
            <SearchBar searchBarItem={props.searchBarItem}/>
        </div>
    )
}

export default Search;