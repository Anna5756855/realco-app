import React from "react";
import styles from "./Properties.module.css";
import PropertyItem from "./PropertyItem/PropertyItemContainer";

function Properties(props) {
  const propertyElem = props.propElems.map((elem) => (
    <PropertyItem
      id={elem.id}
      addedToCart={elem.addedToCart}
      title={elem.title}
      cost={elem.cost}
      location={elem.location}
      src={elem.src}
    />
  ));

  return (
    <div className={styles.main}>
      <h2>Houses in your favorite area</h2>
      <div className={styles.itemsList}>{propertyElem}</div>
      <button className={styles.showMoreBtn}>Show more</button>
    </div>
  );
}

export default Properties;
