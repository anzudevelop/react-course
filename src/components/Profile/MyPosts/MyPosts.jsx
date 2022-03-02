import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id:1, postText:"Hello everybody", likesCounts:1},
        {id:2, postText:"Hello world", likesCounts:5},
        {id:3, postText:"How are you?", likesCounts:18},
        {id:4, postText:"What's up!", likesCounts:3},
        {id:5, postText:"Just a post", likesCounts:26},
    ]

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
                <Post message={ postsData[0].postText } likeCounts={ postsData[0].likesCounts }/>
                <Post message={ postsData[1].postText } likeCounts={ postsData[1].likesCounts }/>
                <Post message={ postsData[2].postText } likeCounts={ postsData[2].likesCounts }/>
                <Post message={ postsData[3].postText } likeCounts={ postsData[3].likesCounts }/>
                <Post message={ postsData[4].postText } likeCounts={ postsData[4].likesCounts }/>
            </div>
        </div>
    );
}

export default MyPosts