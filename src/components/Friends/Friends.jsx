import * as axios from "axios";

let Friends = (props) => {

    if (props.friends.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
            }
        )
        console.log("Success");
    }


    return <div>
        { props.friends.map(user => <div key={user.id}>
            <p>Name: {user.name}</p>
            <div className="button-box">{ (user.follow) ? <button onClick={() => {props.toUnfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.toFollow(user.id)}}>Follow</button>}</div>
        </div>)

        }
        </div>

}

export default Friends;