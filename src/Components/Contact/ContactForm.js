import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Contact.module.css';
import {minLengthCreator, requiredField} from '../../utils/validators/validators'
import { Textarea, Input } from '../common/preloader/formControls/formControls';
import Button from '../common/buttons/Button';

const minLength10 = minLengthCreator(10)

function ContactForm(props) {
    return (
        <div className={styles.container} >
        <form onSubmit={ props.handleSubmit } className={styles.form}>
            <h2 className={styles.formHeader}>Contact the owner</h2>
            <div><Field placeholder='Enter your name' component={Input} name={"contactFormName"} className={styles.input} /></div>
            <div><Field placeholder='Enter your phone number' type="number" component={Input} name={"contactFormNum"} /></div>
            <div className={styles.formInstruction}>Ask anything you need to know:</div>
            <div><Field placeholder='Can I have a discount? Where is it located?' component={Textarea} name={"contactFormTA"} validate={[requiredField, minLength10]}/></div>
            <div><Button buttonText="Send"/></div>
        </form>
        </div>
    )
}

const ReduxContactForm = reduxForm({form: "contactForm"})(ContactForm)

export default ReduxContactForm;