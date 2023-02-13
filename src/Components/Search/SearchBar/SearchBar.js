import SearchBarItem from "./SearchBarItem/SearchBarItem";
import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  searchBarItems = [
    {
      id: "Budget",
      src: "https://cdn-icons-png.flaticon.com/512/1018/1018573.png",
      alt: "dollar",
      categoryName: "Budget",
    },
    {
      id: "Luxury",
      src: "https://cdn-icons-png.flaticon.com/512/3562/3562699.png",
      alt: "mansion",
      categoryName: "Luxury",
    },
    {
      id: "Apartment",
      src: "https://cdn-icons-png.flaticon.com/512/1018/1018525.png",
      alt: "apartment",
      categoryName: "Apartment",
    },
    {
      id: "Penthouse",
      src: "https://cdn-icons-png.flaticon.com/512/1594/1594731.png",
      alt: "penthouse",
      categoryName: "Penthouse",
    },
    {
      id: "Countryside",
      src: "https://cdn-icons-png.flaticon.com/512/7390/7390081.png",
      alt: "countryside",
      categoryName: "Countryside",
    },
    {
      id: "Beach",
      src: "https://cdn-icons-png.flaticon.com/512/3942/3942052.png",
      alt: "beach",
      categoryName: "Beach",
    },
    {
      id: "Design",
      src: "https://cdn-icons-png.flaticon.com/512/2484/2484112.png",
      alt: "design",
      categoryName: "Design",
    },
    {
      id: "BigCity",
      src: "https://cdn-icons-png.flaticon.com/512/2484/2484011.png",
      alt: "big-city",
      categoryName: "BigCity",
    },
  ];
  searchElem = this.searchBarItems.map((elem) => (
    <SearchBarItem
      id={elem.id}
      src={elem.src}
      alt={elem.alt}
      categoryName={elem.categoryName}
    />
  ));
  render() {
    return (
      <div className={styles.searchBar}>
        {this.searchElem}
      </div>
    );
  }
}

export default SearchBar;
