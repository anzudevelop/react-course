import s from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileComponent = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={ props.profilePage.posts } dispatch={ props.dispatch }/>
        </div>
    );
}

export default ProfileComponent