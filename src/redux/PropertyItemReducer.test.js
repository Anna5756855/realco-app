
import { itemsAPI } from "../api/api";

const SET_PROPERTY_ITEM = "SET_PROPERTY_ITEM";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";



let initialState = {
    item: {},
    isFetching: false
}
const PropertyItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROPERTY_ITEM: 
            return {...state, item: action.item };

        case TOGGLE_FETCHING: 
            return {...state, isFetching: action.isFetching}
        
        default:
            return state;
    }

}
//Action Creators
const setPropertyItem = (item) => ({type: SET_PROPERTY_ITEM, item: item});

const setFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching: isFetching})

const setPropertyItemThunkCreator = (itemId) => {
    return (dispatch) => {
        dispatch(setFetching(true))
        //axios.get(`https://playfulvoluminousobjects.tomphillimore.repl.co/properties/${itemId}`, config)
        itemsAPI.getCurrentItem(itemId)
        .then(response => {
            dispatch(setPropertyItem(response.data))
            dispatch(setFetching(false))
        }).catch(err => {
            console.log(err)
          })
    }
}


export default PropertyItemReducer;

export {setPropertyItem, setFetching, 
    setPropertyItemThunkCreator
}
