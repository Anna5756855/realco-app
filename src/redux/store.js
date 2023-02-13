import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import PropertyItemReducer from "./PropertyItemReducer";
import PropertyPageReducer from './PropertyPageReducer';
import { reducer as formReducer } from 'redux-form'
import ContactPageReducer from "./ContactPageReducer";
import CartReducer from "./CartReducer";
//applyMiddleware

let store = configureStore({
    reducer: {
        propertyPage: PropertyPageReducer,
        propertyItem: PropertyItemReducer,
        contactPage: ContactPageReducer,
        auth: AuthReducer,
        form: formReducer,
        cart: CartReducer
    }
})

export default store;

