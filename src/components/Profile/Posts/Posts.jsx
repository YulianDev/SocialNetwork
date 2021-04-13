import PostItem from "./Post/PostItem";
import styles from './posts.module.scss';
import React from 'react';
import {addPostActionCreator, updatePostTextAreaActionCreator} from "../../../redux/profile-reducer";


function Posts(props) {
    let posts = props.data.map(post => <PostItem message={post.message}/>)

    let postTextRef = React.createRef()

    let addPost = () => {
        props.dispath(addPostActionCreator());
    }

    let onPostChange = () => {
        let message = postTextRef.current.value;
        props.dispath(updatePostTextAreaActionCreator(message));
    }

    return (
        <div className={styles.posts}>
            <form className="posts_form">
                <textarea className={styles.textarea} ref={postTextRef} value={props.postTextArea} onChange={onPostChange}></textarea>
                <button className={styles.btn} type="button" onClick={addPost}>Post</button>
            </form>
            <div className="posts_feed">
                {
                    posts
                }
            </div>
        </div>
    )
};

export default Posts;