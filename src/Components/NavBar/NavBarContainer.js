import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
//import axios from 'axios';
import {setUserDataAC} from "../../redux/AuthReducer"

//{withCredentials: true} использует куки для авторизации
class NavBarContainer extends React.Component {
    componentDidMount() {
        // axios.get('', {withCredentials: true}).then(response => 
        //     { if (response.data.resultCode === 0) {
        //         let {userId, email, login} = response.data;
        //         this.props.setUserData(userId, email, login)
        //     }
        //     console.log(response)})

    }
    render() { return (
    <NavBar {...this.props} />
    )}

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
        // data: state.auth.data,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
      //  setUserData: (data) => dispatch(setUserDataAC(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
