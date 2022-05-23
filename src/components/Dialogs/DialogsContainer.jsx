import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRecirect";

let mapStateToProps = (state) => {
    return {
        data: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        },
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)   //HOC

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer