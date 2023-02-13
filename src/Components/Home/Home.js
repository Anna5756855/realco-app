import React from "react";
import styles from "./Home.module.css";
import { NavLink, Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.motto}>Find your dream place</div>
      <h1 className={styles.heading}>Find house for your family in minutes</h1>
      <p className={styles.sectionText}>
        Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum
        curabitur eget aliquam elit in mauris purus.
      </p>
      <div className={styles.search}>
        <NavLink to="/Properties" className={styles.searchButton}>
          Find a Property
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
