import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://steemitimages.com/DQmaYTpZQZpowS29qfETHZjGtXwPd5TgNA9vvMrSgxv3ZRa/avatar1600.png"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post