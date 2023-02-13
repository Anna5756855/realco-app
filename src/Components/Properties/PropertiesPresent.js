import React from "react";
import houseTemplate from "../../assets/template.jpeg";
import styles from "./Properties.module.css";
import Preloader from "../common/preloader/Preloader";
import { NavLink } from "react-router-dom";
import Pagination from "./Pagination";
import Button from "../common/buttons/Button";

let PropertiesPresent = (props) => {
  console.log(props);
  return (
    <div className={styles.main}>
      <div className={styles.grayElem}>Properties</div>
      <h2>Houses in your favorite area</h2>

      <Pagination
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
        totalCount={props.totalCount}
        pageSize={props.pageSize}
      />
      <div>{props.isFetching ? <Preloader /> : null}</div>
      <div className={styles.itemsList}>
        {props.items.map((item) => (
          <div key={item.id} className={styles.propertyItem}>
            <NavLink to={"/PropertyItem/" + item.id}>
              <img
                className={styles.propertyImg}
                src={item.image_src !== null ? item.image_src : houseTemplate}
                alt="itemPic"
              ></img>
            </NavLink>
            <div className={styles.itemText}>
              <div>
                <span>{item.title}</span>
              </div>
              <div>$ {item.cost} USD</div>
              <div>{item.location}</div>
              {item.addedToCart ? (
                <button
                  className={styles.cartButtonAdded}
                  disabled={props.cartInProgress.some((id) => id === item.id)}
                  onClick={() => {
                    props.removingFromCartThunkCreator(item.id);
                  }}
                >
                  Added to Cart
                </button>
              ) : (
                <button
                  className={styles.cartButton}
                  disabled={props.cartInProgress.some((id) => id === item.id)}
                  onClick={() => {
                    props.addingToCartThunkCreator(item.id);
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* <button  className={styles.showMoreBtn}>Show more</button> */}
    </div>
  );
};

export default PropertiesPresent;
