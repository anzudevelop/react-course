import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${ props.id }`
    return (
        <div className={s.dialog}>
            <img src={ props.img }/>
            <NavLink to={ path } className={ navData => navData.isActive? s.isActive : s.dialog }>{ props.name }</NavLink>
        </div>
    )
}

export default DialogItem