// Можно сделать этот файл и с расширением .js

import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://api.apdnews.com/uploads/20180907/NQrX4pdw8avpBH8Jj7xDtR6OOoHCeh2B.jpg" alt=""/>
            </div>
            <div className={s.discriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo