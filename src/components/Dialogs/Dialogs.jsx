import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" className={ navData => navData.isActive? s.isActive : s.dialog }>Даниил</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" className={ navData => navData.isActive? s.isActive : s.dialog }>Владислав</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" className={ navData => navData.isActive? s.isActive : s.dialog }>Никита</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" className={ navData => navData.isActive? s.isActive : s.dialog }>Матвей</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
            </div>
        </div>
    )
}

export default Dialogs