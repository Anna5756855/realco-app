const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let store = {
    _state: {
        propertyPage: { propElems: [
            {id: 1, title:"Cozy studio in Los Angeles", cost: " 1,200.00 ", location: "2263 Southlea, Los Angeles", src:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}, 
          { id: 2, title:"Tiny home in San Diego", cost:" 740,000.00 ", location:"2569 El Segundo, San Diego", src:"https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}, 
          { id: 3, title:"Crown house in New York", cost:" 980,000.00 ", location:"4489 Smity Fielda, New York", src:"https://images.unsplash.com/photo-1613545325268-9265e1609167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"},
          { id: 4, title: "Family house in Los Angeles", cost:" 4,200.00 ", location: "2263 Southlea, Los Angeles", src:"https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"},
          { id: 5, title:"Studio in Las Vegas", cost:" 820,000.00 ", location:"2569 Halls Corner, Las Vegas", src:"https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}, 
          { id: 6, title:"San Diego story", cost:" 3,700.00 ", location:"69 El Segundo, San Diego", src:"https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"} ]
        },
    
        searchPage: { searchBarItem: [ 
            {id: 'Budget', src: "https://cdn-icons-png.flaticon.com/512/1018/1018573.png", alt: "dollar", categoryName:"Budget"},
            {id: 'Luxury', src: "https://cdn-icons-png.flaticon.com/512/3562/3562699.png",  alt: "mansion", categoryName:"Luxury"},
            {id: 'Apartment', src:"https://cdn-icons-png.flaticon.com/512/1018/1018525.png", alt: "apartment", categoryName: "Apartment"},
            {id: 'Penthouse', src: "https://cdn-icons-png.flaticon.com/512/1594/1594731.png", alt: "penthouse", categoryName: "Penthouse"},
            {id: 'Countryside', src: "https://cdn-icons-png.flaticon.com/512/7390/7390081.png", alt: "countryside", categoryName: "Countryside"},
            {id: 'Beach', src:"https://cdn-icons-png.flaticon.com/512/3942/3942052.png", alt: "beach", categoryName: "Beach"},
            {id: 'Design', src: "https://cdn-icons-png.flaticon.com/512/2484/2484112.png", alt: "design", categoryName: "Design"},
            {id: 'BigCity', src: "https://cdn-icons-png.flaticon.com/512/2484/2484011.png", alt: "big-city", categoryName: "BigCity"}]
        },
        contactPage: { contactItem: 
            [ {id: 1, message: 'How much does it cost?' }, {id: 3, message: "How are you?"}],
            newPostText: "I am not a bad girl. She's just crazy"
        }, 
        aboutPage: { 
            chats: [ 
            { id: 1, name: "Anna"},
            { id: 2, name: "George"}, 
            {id: 3, name: "Andrew"},
            {id: 4, name: "Klava"},
            {id: 5, name: "Kate"}  ],

            messagesFrom: [
                {text: "Hi"}, {text: "How are you"}, {text: "?"}
            ],
            messagesTo: [
                {text: "Hey"},
                {text: "Great"},
                {text: "You? :)"}
            ],
            newMessage: "Hi"
        }
    },
    _callsubsciber() {
        console.log("State is changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubsciber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newQuestion = {
                id: 2, message: this._state.contactPage.newPostText
            };
            this._state.contactPage.contactItem.push(newQuestion);
            this._state.contactPage.newPostText = "";
            this._callsubsciber(this._state);
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            this._state.contactPage.newPostText = action.newText;
            this._callsubsciber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            //let newMessage = {
               // text: this._state.aboutPage.newMessage};
           // this._state.aboutPage.messagesTo.push(newMessage);
           // this._state.aboutPage.newMessage = "";
           let body = this._state.aboutPage.newMessage;
           this._state.aboutPage.messagesTo.push({text: body});
           this._state.aboutPage.newMessage = "";
           this._callsubsciber(this._state);

        } else if (action.type === UPDATE_MESSAGE) {
            this._state.aboutPage.newMessage = action.text;
            this._callsubsciber(this._state);
        }
    }
    
}

const addPostActionCreator = () =>  ({ type: ADD_POST });


const changeNewPostTextActionCreator = (text) => ({
    type: CHANGE_NEW_POST_TEXT,
    newText: text
});

const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, text: text});


window.store = store;


export default store;
export {addPostActionCreator, changeNewPostTextActionCreator, sendMessageActionCreator, updateMessageActionCreator};
