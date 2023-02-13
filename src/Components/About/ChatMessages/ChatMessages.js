import React from "react";
import styles from './ChatMessages.module.css';
import { updateMessageActionCreator, sendMessageActionCreator } from "../../../redux/state";

function ChatMessages(props) {
    console.log(props)

    let messagesFrom = props.aboutPage.messagesFrom.map(elem => <div>{elem.text}</div>);
    let messagesTo = props.aboutPage.messagesTo.map(elem => <div>{elem.text}</div>);

    let onSendMessage = () => {props.dispatch(sendMessageActionCreator())};

    let onNewMessageText = (event) => {
        let text = event.target.value;
        props.dispatch(updateMessageActionCreator(text))
    };
   
    
    return (
    <div className={styles.main}>
        <div className={styles.messagesFrom}>{messagesFrom}</div>
        <div className={styles.messagesTo}>{messagesTo}</div>
        <textarea onChange={onNewMessageText} placeholder="Enter your message here" value={props.aboutPage.newMessage}></textarea>
        <button onClick={onSendMessage}>Send message</button>
        </div>
    )
}

export default ChatMessages;

//chatFriends