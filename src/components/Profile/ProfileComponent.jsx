// Можно сделать этот файл и с расширением .js

import s from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileComponent = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default ProfileComponent