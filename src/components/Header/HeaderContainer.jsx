import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthorizationData} from "../../redux/authorization-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true}).then(response => {
            debugger;
            if (response.data.resultCode === 0) {
                debugger;
                let {id, login, email} = response.data.data;
                this.props.setAuthorizationData(id, login, email);
            }
        })
    };


    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.authorize.isAuthorized,
        login: state.authorize.login,
    }
}
export default connect(mapStateToProps, {setAuthorizationData})(HeaderContainer);