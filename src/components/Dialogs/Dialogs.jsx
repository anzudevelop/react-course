import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((el) => {     //Так
        return <DialogItem name={ el.name } id={ el.id }/>
    })

    let messagesElement = props.messages
        .map(msg => (<Message messageText={ msg.message } id={ msg.id }/>))  //Либо так

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElement }
            </div>
        </div>
    )
}

export default Dialogs