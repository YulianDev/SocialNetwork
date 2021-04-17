import {connect} from "react-redux";
import {
    follow, setIsFetching, setPageNumber,
    setTotalUsers, setUsers, unfollow
} from "../../redux/friends-reducer";
import React from "react";
import * as axios from "axios";
import Friends from "./Friends";
import Loader from "../Common/Loader/Loader";

class FriendsAPIContainer extends React.Component{

    componentDidMount() {
        const start = Date.now();
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
                this.props.setTotalUsers(response.data.totalCount);
                console.log("Success");
                console.log((Date.now() - start) / 1000);
            }
        )
    };

    onPageClick = (pageNumber) => {
        this.props.setPageNumber(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
                console.log("Success");
            }
        )
    }


    render() {
        return <>
            <div>
                {this.props.isFetching ? <Loader/> : null }
            </div>
            <Friends totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageClick={this.onPageClick}
                     friends={this.props.friends}
                     toUnfollow={this.props.unfollow}
                     toFollow={this.props.follow}
            />
        </>

    }
}


const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
    }
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        toFollow: (id) => dispatch(followActionCreator(id)),
        toUnfollow: (id) => dispatch(unfollowActionCreator(id)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        changePage: (pageNumber) => dispatch(setPageNumberActionCreator(pageNumber)),
        setTotalUsers: (count) => dispatch(setTotalUsersActionCreator(count)),
        setIsFetching: (isFetching) => dispatch(setIsFetchingActionCreator(isFetching)),
    }
}*/


export default connect(mapStateToProps, {follow, unfollow, setUsers, setPageNumber, setTotalUsers, setIsFetching})(FriendsAPIContainer);