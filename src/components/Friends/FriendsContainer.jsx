import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, unfollowAC} from "../../redux/friends-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        followAction: (id) => {   debugger;
            dispatch(followAC(id)) },
        unfollowAction: (id) => {dispatch(unfollowAC(id))},
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Friends);