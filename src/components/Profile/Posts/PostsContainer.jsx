import Posts from "./Posts";
import {addPostActionCreator, updatePostTextAreaActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";



/*function PostsContainer(props) {
    const state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const updatePostTextArea = (message) => {
        props.store.dispatch(updatePostTextAreaActionCreator(message));
    }


    return (
        <Posts posts={state.posts} addPost={addPost} postTextAreaValue={state.postTextAreaValue} updatePostTextArea={updatePostTextArea}/>
    )
};*/

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postTextAreaValue: state.profilePage.postTextAreaValue,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updatePostTextArea: (message) => dispatch(updatePostTextAreaActionCreator(message)),
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;