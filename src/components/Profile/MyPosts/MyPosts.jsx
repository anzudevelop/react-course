import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="100" rows="10"></textarea>
                <button>Add post</button>
                <button>Remove</button>
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