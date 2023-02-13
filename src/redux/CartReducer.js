import { itemsAPI } from "../api/api";

const SET_ITEMS_IN_CART = "realco-app/cart/SET_ITEMS_IN_CART";
const REMOVE_FROM_CART = "realco-app/propertyPage/REMOVE_FROM_CART";

let initialState = {
  itemsInCart: [],
  itemsInCartCount: 3,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_ITEMS_IN_CART:
      return { ...state, itemsInCart: action.itemsInCart };

    default:
      return state;
  }
};
//Action creators
const setItemsInCart = () => ({
  type: SET_ITEMS_IN_CART,
});

//Thunk 
const setItemsInCartThunkCreator = () => async (dispatch) => {
  let response = await itemsAPI.getItemsInCart();
  dispatch(setItemsInCart(response.results));
};


export default CartReducer;

export { setItemsInCart, setItemsInCartThunkCreator};
