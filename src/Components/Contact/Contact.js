import React from 'react';
import styles from './Contact.module.css';
import ReduxContactForm from './ContactForm';
import { connect } from 'react-redux';
import {setContactQueries} from '../../redux/ContactPageReducer'


function Contact(props) {
    console.log(props)
    const onContactFormSubmit = (contactQueries) => {
        console.log(contactQueries)
        props.setContactQueries(contactQueries) }
    return (
        <div className={styles.main}>
            <ReduxContactForm onSubmit={onContactFormSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contactQueries: state.contactPage.contactQueries
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setContactQueries: (contactQueries) => dispatch(setContactQueries(contactQueries))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);

