import React from "react";
import { connect } from "react-redux";
import ReduxLoginForm from "./LoginForm";
import {loginThunk} from "../../redux/AuthReducer"
import {authAPI} from '../../api/api'
import styles from './Login.module.css'
import { Link } from "react-router-dom";

class Login extends React.Component {

    render() {
        const onSubmit = (formData) => {
            authAPI.login(formData.login, formData.password)
            // authAPI.loginRefresh()
           // this.props.loginThunk(formData.login, formData.password)
            // console.log(formData)
        }
       return ( <div className={styles.main}>
            <div className={styles.loginForm}>
                <h2>Sign in</h2>
                <ReduxLoginForm onSubmit={onSubmit} />  
                <Link to="/Properties">Go to Properties</Link>
            </div>
        </div>
    )
} 
    }
    

export default Login

const mapStateToProps = (state) => {
    return {
       isAuth: state.auth.isAuth 
    }
    
}

connect(mapStateToProps, {loginThunk})(Login)

