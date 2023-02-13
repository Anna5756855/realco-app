import React from 'react';
import styles from './PropertyItem.module.css';
import Preloader from "../../common/preloader/Preloader"
// import {removingFromCartThunkCreator, addingToCartThunkCreator, cartInProgress} from "../../../redux/PropertyPageReducer"

const PropertyItem = (props) => {
    console.log(props)
    return (
        <div className={styles.main}>
            <div>{props.isFetching ? <Preloader /> : null}</div>
            <div className={styles.container}>
            <div className={styles.header}>{props.item.title}</div>
            <div>{props.item.location}</div>
            <div>$ {props.item.cost} USD</div>
            <div><img className={styles.mainImg} src={props.item.image_src} alt="item"/></div>
            <div>Description</div>
            {/* {props.item.addedToCart ? (
                <button
                  className={styles.cartButtonAdded}
                  disabled={cartInProgress.some((id) => id === props.item.id)}
                  onClick={() => {
                    removingFromCartThunkCreator(props.item.id);
                  }}
                >
                  Added to Cart
                </button>
              ) : (
                <button
                  className={styles.cartButton}
                  disabled={props.cartInProgress.some((id) => id === props.item.id)}
                  onClick={() => {
                    addingToCartThunkCreator(props.item.id);
                  }}
                >
                  Add to Cart
                </button>
              )} */}
            </div>
            
        </div>)
}

export default PropertyItem;