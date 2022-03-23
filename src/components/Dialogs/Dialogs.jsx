import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.data.dialogs.map((el) => {     //Так
        return <DialogItem name={ el.name } id={ el.id } img={el.img}/>
    })

    let messagesElement = props.data.messages
        .map(msg => (<Message messageText={ msg.message } id={ msg.id } isMy={ msg.isMy }/>))  //Либо так

    let newMessageElement = React.createRef()

    let onAddMessageBtnClick = () => {
        let action = {type: "ADD-MESSAGE"};
        props.dispatch(action)
    }

    let onMessageChange = () => {
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: newMessageElement.current.value};
        props.dispatch(action)
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