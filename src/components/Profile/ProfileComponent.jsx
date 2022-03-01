// Можно сделать этот файл и с расширением .js

import s from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";

const ProfileComponent = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="http://darvidart.com.au/Gallery/photos/IMG_1309.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default ProfileComponent