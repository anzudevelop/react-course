import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState()

    let onAddMessageBtnClick = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text))
    }

    return <Dialogs data={state.messagesPage}
                     newMessageText={state.messagesPage.newMessageText}
                     addMessage={ onAddMessageBtnClick }
                     updateNewMessageText={ onMessageChange } />
}

export default DialogsContainer