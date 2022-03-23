import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map((p) => (<Post message={ p.postText } likeCounts={ p.likesCounts }/>))

    let newPostElement = React.createRef()

    let onAddPostBtnClick = () => {
        let action = {type: 'ADD-POST'};
        props.dispatch(action)
    }

    let onPostChange = () => {
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value};
        props.dispatch(action)
    }

    return (
        <div className={s.MyPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }/>
                </div>
                <div>
                    <button onClick={ onAddPostBtnClick }>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts