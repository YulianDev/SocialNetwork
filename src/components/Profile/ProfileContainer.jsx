import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfileInfo} from "../../redux/profile-reducer";
import { withRouter } from "react-router";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId).then(response => {
            this.props.setProfileInfo(response.data);
            console.log("Success");
        })
    }

    render() {
        return <Profile profileInfo={this.props.profileInfo}/>
    }
};



const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
    }
}
const RouterProfileComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setProfileInfo})(RouterProfileComponent);