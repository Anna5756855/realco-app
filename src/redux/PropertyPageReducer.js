import { itemsAPI } from "../api/api";

const ADD_TO_CART = "realco-app/propertyPage/ADD_TO_CART";
const REMOVE_FROM_CART = "realco-app/propertyPage/REMOVE_FROM_CART";
const SET_ITEMS = "realco-app/propertyPage/SET_ITEMS";
const SET_CURRENT_PAGE = "realco-app/propertyPage/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "realco-app/propertyPage/SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "realco-app/propertyPage/TOGGLE_FETCHING";
const ADDING_TO_CART_IN_PROGRESS =
  "realco-app/propertyPage/ADDING_TO_CART_IN_PROGRESS";
const SET_MORE_ITEMS = "realco-app/propertyPage/SET_MORE_ITEMS";

let initialState = {
  items: [],
  totalCount: 0,
  pageSize: 6,
  currentPage: 1,
  isFetching: false,
  //cartInProgress: false
  cartInProgress: [],
  pageNumTest: 2, //?????
};

const PropertyPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.propertyId) {
            return { ...item, addedToCart: false };
          }
          return item;
        }),
      };
    //we make a copy of the whole state, as for propElems array we change
    //  "addedToCart to false" if item.id === action.propertyId
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.propertyId) {
            return { ...item, addedToCart: true };
          }
          return item;
        }),
      };
    case SET_ITEMS:
      return { ...state, items: action.items };

    // case SET_MORE_ITEMS:
    //     return {...state, pageNumTest: state.pageNumTest + 1,
    //         items: state.items.concat(action.items)}; //??????

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.count };

    case TOGGLE_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case ADDING_TO_CART_IN_PROGRESS:
      return {
        ...state,
        cartInProgress: action.cartInProgress
          ? [...state.cartInProgress, action.id]
          : state.cartInProgress.filter((id) => id !== action.id),
      };
    // case ADDING_TO_CART_IN_PROGRESS:
    //     return {...state,
    //         cartInProgress: action.cartInProgress}

    default:
      return state;
  }
};
//Action creators
const addToCart = (propertyId) => ({
  type: ADD_TO_CART,
  propertyId: propertyId,
});

const removeFromCart = (propertyId) => ({
  type: REMOVE_FROM_CART,
  propertyId: propertyId,
});

const setItems = (items) => ({ type: SET_ITEMS, items: items });

const setMoreItems = (items) => ({ type: SET_MORE_ITEMS, items: items }); //??????

const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});

const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count: count });

const setFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching: isFetching,
}); //крутилка!!!

const addingToCartInProgress = (cartInProgress, id) => ({
  type: ADDING_TO_CART_IN_PROGRESS,
  cartInProgress: cartInProgress,
  id: id,
}); //disabled btn!!!

// const getItemsThunkCreator = (currentPage) => {
//     return (dispatch) => {
//         dispatch(setFetching(true))
//         itemsAPI.getItems(currentPage) //API
//             //axios.get(`https://playfulvoluminousobjects.tomphillimore.repl.co/properties/?page=${this.props.currentPage}`, config)
//             .then(data => {
//                 dispatch(setFetching(false))
//                 dispatch(setItems(data.results));
//                 dispatch(setTotalCount(data.count));
//             })
//     }
// }

const getItemsThunkCreator = (currentPage) => async (dispatch) => {
  dispatch(setFetching(true));
  let response = await itemsAPI.getItems(currentPage);
  dispatch(setFetching(false));
  dispatch(setItems(response.results));
  dispatch(setTotalCount(response.count));
};

const getMoreItemsThunkCreator = (currentPage) => async (dispatch) => {
  dispatch(setFetching(true));
  let response = await itemsAPI.getItems(currentPage);
  dispatch(setFetching(false));
  dispatch(setMoreItems(response.results));
}; //?????

const onPageChangeThunkCreator = (page) => async (dispatch) => {
  dispatch(setCurrentPage(page));
  dispatch(setFetching(true));
  let response = await itemsAPI.getItems(page);
  dispatch(setFetching(false));
  dispatch(setItems(response.results));
};

// const onPageChangeThunkCreator = (page) => {
//     return (dispatch) => {
//         dispatch(setCurrentPage(page));
//         dispatch(setFetching(true));
//         // axios.get(`https://playfulvoluminousobjects.tomphillimore.repl.co/properties/?page=${page}`, config)
//         itemsAPI.getItems(page)
//             .then(response => {
//                 dispatch(setFetching(false))
//                 dispatch(setItems(response.results))
//             })
//     }
// }

const addingToCartThunkCreator = (itemId) => async (dispatch) => {
  dispatch(addingToCartInProgress(true, itemId));
  await itemsAPI.changeCart(itemId, true);
  dispatch(addToCart(itemId));
  dispatch(addingToCartInProgress(false, itemId));
};

const removingFromCartThunkCreator = (itemId) => async (dispatch) => {
  dispatch(addingToCartInProgress(true, itemId));
  await itemsAPI.changeCart(itemId, false);
  dispatch(removeFromCart(itemId));
  dispatch(addingToCartInProgress(false, itemId));
};

// const removingFromCartThunkCreator = (itemId) => {
//     return (dispatch) => {
//         dispatch(addingToCartInProgress(true, itemId));
//         itemsAPI.changeCart(itemId, false)
//             //axios.patch(`https://playfulvoluminousobjects.tomphillimore.repl.co/properties/${item.id}/`, {"addedToCart": false }, config)
//             .then(() => {
//                 dispatch(removeFromCart(itemId));
//                 dispatch(addingToCartInProgress(false, itemId));
//             }).catch(err => {
//                 console.log(err)
//             })
//     }
// }

export default PropertyPageReducer;

export { addToCart, removeFromCart, setItems, setCurrentPage, setTotalCount, setFetching, addingToCartInProgress,
  getItemsThunkCreator, onPageChangeThunkCreator, addingToCartThunkCreator, removingFromCartThunkCreator, getMoreItemsThunkCreator, };
