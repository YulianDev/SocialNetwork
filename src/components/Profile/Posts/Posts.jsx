import PostItem from "./Post/PostItem";
import styles from './posts.module.scss';
import React from 'react';


function Posts(props) {
    let posts = props.posts.map(post => <PostItem message={post.message}/>)



    const onAddPost = () => {
        debugger;
        props.addPost();
    }

    let onPostChange = (e) => {
        let message = e.target.value;
        props.updatePostTextArea(message);
    }

    return (
        <div className={styles.posts}>
            <form className="posts_form">
                <textarea className={styles.textarea} value={props.postTextAreaValue} onChange={onPostChange}></textarea>
                <button className={styles.btn} type="button" onClick={onAddPost}>Post</button>
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