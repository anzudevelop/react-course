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

    let dialogsElements = dialogsData.map((el) => {     //Так
        return <DialogItem name={ el.name } id={ el.id }/>
    })

    let messagesData = [
        {id:1, message:"Hi"},
        {id:2, message:"How are you?"},
        {id:3, message:"What's up!"},
        {id:4, message:"Pashol von"},
        {id:5, message:"Yo!"},
        {id:6, message:"Hello"},
    ]

    let messagesElement = messagesData
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