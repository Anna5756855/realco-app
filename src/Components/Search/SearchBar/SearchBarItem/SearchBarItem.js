
import styles from './SearchBarItem.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';



function SearchBarItem(props) {
    // let path = '/Search/' + props.id;
    let onFilteringItems = () => {
        console.log(props.categoryName)
    }
    return (
    <div onClick={onFilteringItems} className={styles.searchBarItem}>
        <div><img src={props.src} alt={props.alt}/></div>
        {/* <NavLink to={path} className={styles.searchBarText}>{props.categoryName}</NavLink> */}
    </div> )
    
}
export default SearchBarItem;