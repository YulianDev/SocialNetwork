
import Header from "./Header/Header";
import Loader from "../Common/Loader/Loader";



function Profile(props) {
    if (!props.profileInfo) {
        return <Loader/>
    }
    return (
        <div className="profile">
            <Header profileInfo={props.profileInfo}/>
            {/*<HeaderContainer />
            <PostsContainer />*/}
        </div>
    )


};


export default Profile;