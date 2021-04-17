import React from "react";
import styles from './friends.module.scss';
import * as axios from "axios";

class Friends extends React.Component{

    componentDidMount() {
        const start = Date.now();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
                console.log("Success");
                console.log((Date.now() - start) / 1000);
            }
        )
    };

    onPageClick = (pageNumber) => {
        this.props.changePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                console.log("Success");
            }
        )
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(<span className={this.props.currentPage === i ? styles.active : ""} onClick={() => this.onPageClick(i)}>{i}</span>);
        }

        return <div>
            <div className="{pagination}">
                {pages}
            </div>
            { this.props.friends.map(user => <div key={user.id}>
                <p>Name: {user.name}</p>
                <div className="button-box">{ (user.follow) ? <button onClick={() => {this.props.toUnfollow(user.id)}}>Unfollow</button> : <button onClick={() => {this.props.toFollow(user.id)}}>Follow</button>}</div>
            </div>)

            }
        </div>
    }
}

export default Friends;