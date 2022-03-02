// Можно сделать этот файл и с расширением .js

import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://sun9-43.userapi.com/impf/c852232/v852232040/51de2/oLemJi4HXN0.jpg?size=2560x1707&quality=96&sign=b793b422fa714830159fc8ad2b19c6fa&type=album" alt=""/>
            </div>
            <div className={s.discriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo