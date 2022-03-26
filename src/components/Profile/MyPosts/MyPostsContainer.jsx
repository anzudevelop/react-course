import {addPostActionCreator, updateAddPostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let updateNewPostText = (text) => {
        props.store.dispatch(updateAddPostActionCreator(text))
    }

    return (<MyPosts posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>)
}

export default MyPostsContainer