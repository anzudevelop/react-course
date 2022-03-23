import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.data.dialogs.map((el) => {     //Так
        return <DialogItem name={ el.name } id={ el.id } img={el.img}/>
    })

    let messagesElement = props.data.messages
        .map(msg => (<Message messageText={ msg.message } id={ msg.id } isMy={ msg.isMy }/>))  //Либо так

    let newMessageElement = React.createRef()

    let onAddMessageBtnClick = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        props.dispatch(updateMessageTextActionCreator(newMessageElement.current.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElement }
            </div>
            <div className={s.dialogsItems}>
                <div>
                    <textarea onChange={ onMessageChange } ref={ newMessageElement } value={ props.data.newMessageText } cols="30" rows="1"></textarea>
                </div>
                <div>
                    <button onClick={ onAddMessageBtnClick }>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs