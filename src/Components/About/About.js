import React from 'react';
import styles from './About.module.css';
import Chat from './Chats/Chat';
import ChatMessages from './ChatMessages/ChatMessages';

function About(props) {
    //mapping names of friends
    let chats = props.aboutPage.chats.map( elem => <Chat name={elem.name} />);

    return (
        <div className={styles.main}>
            <div className={styles.dialog}>
                <div className={styles.chatBar}>
                {chats}
                </div>
                <div>
                <ChatMessages aboutPage={props.aboutPage} dispatch={props.dispatch}/>
                </div>
            </div>
        </div>    
    )
}

export default About;