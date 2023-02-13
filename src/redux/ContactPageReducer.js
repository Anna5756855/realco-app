
const SET_CONTACT_QUERIES = "SET_CONTACT_QUERIES";

let initialState = {
    contactQueries: []
}

const ContactPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_QUERIES:
            //to add a new elem in the array USE CONCAT!!!!
            return { ...state, contactQueries: state.contactQueries.concat(action.contactQueries) };
        default:
            return state;
    }

}
//Action creators

const setContactQueries = (contactQueries) => ({ type: SET_CONTACT_QUERIES, contactQueries: contactQueries });


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

export default ContactPageReducer;

export { setContactQueries }