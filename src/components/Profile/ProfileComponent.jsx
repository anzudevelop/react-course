// Можно сделать этот файл и с расширением .js

import s from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileComponent = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={ props.posts }/>
        </div>
    );
}

export default ProfileComponent