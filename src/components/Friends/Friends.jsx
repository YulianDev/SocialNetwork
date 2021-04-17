import React from "react";
import styles from "./friends.module.scss";
import {NavLink} from "react-router-dom";


const Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(<span className={props.currentPage === i ? styles.active : ""} onClick={() => props.onPageClick(i)}>{i}</span>);
    }

    return <div>
        <div className="{pagination}">
            {pages}
        </div>
        { props.friends.map(user => <div key={user.id}>
            <NavLink to={`profile/${user.id}`}>
                <p>Name: {user.name}</p>
            </NavLink>
            <div className="button-box">{ (user.follow) ? <button onClick={() => {props.toUnfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.toFollow(user.id)}}>Follow</button>}</div>
        </div>)

        }
    </div>
};

export default Friends;