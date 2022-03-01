import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={ s.item }>
            <img src="https://steemitimages.com/DQmaYTpZQZpowS29qfETHZjGtXwPd5TgNA9vvMrSgxv3ZRa/avatar1600.png"/>
            { props.message }
            <div>
                <span>{ props.likeCounts } likes</span>
            </div>
        </div>
    );
}

export default Post