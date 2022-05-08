
import s from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://vsevsevmeste.ru/wp-content/uploads/2019/09/961-9610434_png-file-svg-google-chrome-logo-png.png" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header