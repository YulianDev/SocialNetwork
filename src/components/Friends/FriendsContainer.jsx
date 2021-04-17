import {connect} from "react-redux";
import Friends from "./Friends";
import FriendsClass from "./FriendsClass"
import {
    followActionCreator,
    setPageNumberActionCreator, setTotalUsersActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/friends-reducer";

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toFollow: (id) => dispatch(followActionCreator(id)),
        toUnfollow: (id) => dispatch(unfollowActionCreator(id)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        changePage: (pageNumber) => dispatch(setPageNumberActionCreator(pageNumber)),
        setTotalUsers: (count) => dispatch(setTotalUsersActionCreator(count)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsClass);