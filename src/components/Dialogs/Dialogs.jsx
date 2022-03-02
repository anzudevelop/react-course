import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Даниил
                </div>
                <div className={`${ s.dialog } ${ s.isActive }`}>
                    Владислав
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