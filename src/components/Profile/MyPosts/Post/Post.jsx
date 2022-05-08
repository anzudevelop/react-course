import s from './Post.module.css'
import Preloader from "../../../common/preloader/preloader";

const Post = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={ s.item }>
            <img src={props.profile.photos.small || "https://steemitimages.com/DQmaYTpZQZpowS29qfETHZjGtXwPd5TgNA9vvMrSgxv3ZRa/avatar1600.png"}/>
            { props.message }
            <div>
                <span>{ props.likeCounts } likes</span>
            </div>
        </div>
    );
}

export default Post