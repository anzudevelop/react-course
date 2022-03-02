import s from "./Dialogs.module.css"
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

const Message = (props) => {
    return <div className={s.message}>{ props.messageText }</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name:"Даниил"},
        {id:2, name:"Влад"},
        {id:3, name:"Никита"},
        {id:4, name:"Матвей"},
    ]

    let messagesData = [
        {id:1, message:"Hi"},
        {id:2, message:"How are you?"},
        {id:3, message:"What's up!"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={ dialogsData[0].name } id={ dialogsData[0].id }/>
                <DialogItem name={ dialogsData[1].name } id={ dialogsData[1].id }/>
                <DialogItem name={ dialogsData[2].name } id={ dialogsData[2].id }/>
                <DialogItem name={ dialogsData[3].name } id={ dialogsData[3].id }/>
            </div>
            <div className={s.messages}>
                <Message messageText={ messagesData[0].message } id={ messagesData[0].id }/>
                <Message messageText={ messagesData[1].message } id={ messagesData[1].id }/>
                <Message messageText={ messagesData[2].message } id={ messagesData[2].id }/>
            </div>
        </div>
    )
}

export default Dialogs