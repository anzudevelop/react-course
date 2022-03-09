import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

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