import Header from "./Header/Header";
import Posts from "./Posts/Posts";



function Profile(props) {
    return (
        <div className="profile">
            <Header data={props.state.generalInfo}/>
            <Posts data={props.state.posts} postTextArea={props.state.postTextAreaValue} dispath={props.dispatch}/>
        </div>
    )


};


export default Profile;