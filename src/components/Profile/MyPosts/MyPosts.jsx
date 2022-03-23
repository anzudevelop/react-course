import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateAddPostActionCreator} from "../../../redux/profilePageReducer";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map((p) => (<Post message={ p.postText } likeCounts={ p.likesCounts }/>))

    let newPostElement = React.createRef()

    let onAddPostBtnClick = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        props.dispatch(updateAddPostActionCreator(newPostElement.current.value))
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