import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.MyPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                console.log(props)
                <Post message='Hello everybody' likeCounts="1"/>
                <Post message='Hello world' likeCounts="5"/>
                <Post message='How are you?' likeCounts="18"/>
                <Post message="What's up!" likeCounts="3"/>
                <Post message='Just a post' likeCounts="26"/>
            </div>
        </div>
    );
}

export default MyPosts