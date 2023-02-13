
import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Chat.module.css'

function Chat(props) {

    return (
        <NavLink to={`/About/${props.name}`} className={styles.chatElem}>{props.name}</NavLink>
    )
}

export default Chat;