import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${ props.id }`
    return (
        <div className={s.dialog}>
            <img src="https://yt3.ggpht.com/ytc/AAUvwnh9__YmGKU7uNxBjeuX4BKtqWI6UloiLYq8yGOF=s900-c-k-c0x00ffffff-no-rj"/>
            <NavLink to={ path } className={ navData => navData.isActive? s.isActive : s.dialog }>{ props.name }</NavLink>
        </div>
    )
}

export default DialogItem