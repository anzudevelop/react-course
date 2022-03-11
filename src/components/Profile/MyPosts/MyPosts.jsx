import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map((p) => (<Post message={ p.postText } likeCounts={ p.likesCounts }/>))

    let newPostElement = React.createRef()

    let onAddPostBtnClick = () => {
        let postText = newPostElement.current.value
        if(postText.length <= 0) return
        props.addPost(postText) //Пока что работать не будет, нужна перерисовка
    }

    return (
        <div className={s.MyPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement } name="" id="" cols="30" rows="3"></textarea>
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