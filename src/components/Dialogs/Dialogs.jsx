import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import { Navigate } from "react-router-dom";
import {ReduxForm as AddMessageForm} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let dialogsElements = props.data.dialogs.map((el, index) => {     //Так
        return <DialogItem name={ el.name } key={ index } img={el.img}/>
    })

    let messagesElement = props.data.messages
        .map((msg, index) => (<Message messageText={ msg.message } key={index} isMy={ msg.isMy }/>))  //Либо так

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
        values.newMessageBody = ''
    }

    let newMessageElement = React.createRef()

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
               <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs