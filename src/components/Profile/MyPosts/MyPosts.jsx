import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id:1, postText:"Hello everybody", likesCounts:1},
        {id:2, postText:"Hello world", likesCounts:5},
        {id:3, postText:"How are you?", likesCounts:18},
        {id:4, postText:"What's up!", likesCounts:3},
        {id:5, postText:"Just a post", likesCounts:26},
        {id:6, postText:"First post", likesCounts:6},
    ]

    let postsElements = postsData.map((p) => (<Post message={ p.postText } likeCounts={ p.likesCounts }/>))

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
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts