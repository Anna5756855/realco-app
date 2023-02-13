import React from 'react';
import { connect } from 'react-redux';
import styles from './Cart.module.css';
import {setItemsInCartThunkCreator} from './../../redux/CartReducer'

function Cart(props) {
    let onAddingCartItems = () => {
        setItemsInCartThunkCreator()
    }
    return (
        <div>
            <div>Hello!</div>
            <button onClick={onAddingCartItems}></button>
        </div>
    )
}

export default Cart;

let mapStateToProps = (state) => {
    return {
        itemsInCart: state.cart.itemsInCart
    }
}

connect(mapStateToProps, {setItemsInCartThunkCreator})(Cart)