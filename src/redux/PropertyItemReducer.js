import { itemsAPI } from "../api/api";

const SET_PROPERTY_ITEM = "realco-app/PropertyItemPage/SET_PROPERTY_ITEM";
const TOGGLE_FETCHING = "realco-app/PropertyItemPage/TOGGLE_FETCHING";

let initialState = {
  item: {},
  isFetching: false,
};
const PropertyItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROPERTY_ITEM:
      return { ...state, item: action.item };

    case TOGGLE_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

//Action Creators
const setPropertyItem = (item) => ({ type: SET_PROPERTY_ITEM, item: item });

const setFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching: isFetching, });


//Thunk Creators
const setPropertyItemThunkCreator = (itemId) => async (dispatch) => {
  dispatch(setFetching(true));
  let response = await itemsAPI.getCurrentItem(itemId);
  dispatch(setPropertyItem(response.data));
  dispatch(setFetching(false));
};

export default PropertyItemReducer;

export { setPropertyItem, setFetching, setPropertyItemThunkCreator };
