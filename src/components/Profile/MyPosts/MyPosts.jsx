import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10)
const minLength = minLengthCreator(2)

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={''}
                    name={'newPostText'}
                    component={Textarea}
                    placeholder={"Your message"}
                    validate={[required, maxLength, minLength]}
                />
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </form>
    );
}

const MyPostsReduxForm = reduxForm({form: 'myPostsForm'})(MyPostsForm)

const MyPosts = (props) => {

    let postsElements = props.posts
        .map((p) => (<Post message={ p.postText } key={p.id} likeCounts={ p.likesCounts } profile={props.profile}/>))

    let newPostElement = React.createRef()


    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    const onAddPost = (formData) => {
        props.addPost(formData.newPostText)
        formData.newPostText = ''
    }

    return (
        <div className={s.MyPostsBlock}>
            <h3>My posts</h3>
            <MyPostsReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts