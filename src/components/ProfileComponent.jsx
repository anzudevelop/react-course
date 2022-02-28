// Можно сделать этот файл и с расширением .js

import s from './ProfileComponent.module.css'

const ProfileComponent = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="http://darvidart.com.au/Gallery/photos/IMG_1309.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent