// Можно сделать этот файл и с расширением .js

import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                {/*<img src={props.profile.photos.large || "https://api.apdnews.com/uploads/20180907/NQrX4pdw8avpBH8Jj7xDtR6OOoHCeh2B.jpg"} alt=""/>*/}
            </div>
            <div className={s.discriptionBlock}>
                <ProfileStatus status={'ahjbjkdfhdf'}/>
            </div>
        </div>
    );
}

export default ProfileInfo