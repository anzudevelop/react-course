import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${ props.id }`
    return (
        <div className={s.dialog}>
            <img src="https://sun4-16.userapi.com/s/v1/if2/0VB3ZJsRu56M7FVoRCwX8WfwiV-6pMBLBWgadKoQ0PB7XkrsuJspBvfqg9Cr-CecMILBdpCiV01Yj8pEFccc7PCb.jpg?size=50x50&quality=96&crop=122,105,1296,1296&ava=1"/>
            <NavLink to={ path } className={ navData => navData.isActive? s.isActive : s.dialog }>{ props.name }</NavLink>
        </div>
    )
}

export default DialogItem