import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElements = props.data.dialogs.map((el, index) => {     //Так
        return <DialogItem name={ el.name } key={ index } img={el.img}/>
    })

    let messagesElement = props.data.messages
        .map((msg, index) => (<Message messageText={ msg.message } key={index} isMy={ msg.isMy }/>))  //Либо так

    let newMessageElement = React.createRef()

    let onAddMessageBtnClick = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    if(!props.isAuth) return <Navigate to={'/login'}/>

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