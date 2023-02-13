import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.svg";
import Button from "../common/buttons/Button";
import { authAPI } from "../../api/api";

function NavBar(props) {
  let activeClass = (navData) => (navData.isActive ? styles.active : "");

  let itemsInCart = 3;

  const onLogOut = () => {
    authAPI.logout();
  };

  return (
    <div className={styles.nav}>
        <Link to="/">
              <img className={styles.logo} src={logo} alt="logo"></img>
            </Link>
          <div className={styles.items}>
            <NavLink to="/Properties" className={activeClass}>
              Properties
            </NavLink>
            <NavLink to="/About" className={activeClass}>
              About
            </NavLink>
            <NavLink to="/Contact" className={activeClass}>
              Contact
            </NavLink>
            <NavLink to="/Search" className={activeClass}>
              Search
            </NavLink>
            <NavLink to="/Login" className={activeClass}>
              Login
            </NavLink>
            <NavLink to="/Cart" className={activeClass}>
              Cart({itemsInCart})
            </NavLink>
            {/* <div className={styles.logOut} onClick={onLogOut}>Logout</div> */}
          </div>

        {/* <div className={styles.cartButton}>Cart</div> */}

    </div>
  );
}

export default NavBar;
