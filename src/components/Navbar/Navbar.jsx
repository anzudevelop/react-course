// Можно сделать этот файл и с расширением .js

import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsListContainer from "./FriendsList/FriendsListContainer";

const profileIcon = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-256.png'
const dialogsIcon = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/bubble-256.png'
const usersIcon = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-256.png'

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <img src={profileIcon} />
                <NavLink to="/profile" className={ navData => navData.isActive? s.active : s.item }>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <img src={dialogsIcon} />
                <NavLink to="/dialogs" className={ navData => navData.isActive? s.active : s.item }>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <img src={usersIcon} />
                <NavLink to="/users" className={ navData => navData.isActive? s.active : s.item }>Пользователи</NavLink>
            </div>
            {/*<div className={s.item}>
                <NavLink to="/news" className={ navData => navData.isActive? s.active : s.item }>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={ navData => navData.isActive? s.active : s.item }>Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={ navData => navData.isActive? s.active : s.item }>Настройки</NavLink>
            </div>*/}
            <FriendsListContainer />
        </nav>
    );
}

export default Navbar