// Можно сделать этот файл и с расширением .js

import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://vsevsevmeste.ru/wp-content/uploads/2019/09/961-9610434_png-file-svg-google-chrome-logo-png.png" alt=""/>
        </header>
    );
}

export default Header