
function Friends(props) {

    return (
        <div>
            {
                props.users.map(user =>
                    <div className="{box}" id={user.id} >
                        <img src={user.avatarImg} alt="" className="img"/>
                        <p className="fullname">{user.fullName}</p>
                        <div className="btn-box">{
                            user.follow?<button className="{btn}" onClick={() => props.unfollowAction(user.id)}>Unfollow</button> :
                                        <button className="{btn}" onClick={() => props.followAction(user.id)}>Follow</button>
                        }</div>
                    </div>
                )
            }
        </div>
    )
}

export default Friends;