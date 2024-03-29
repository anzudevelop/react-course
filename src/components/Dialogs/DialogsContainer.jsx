import {addMessageActionCreator} from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRecirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        data: state.messagesPage,
        profile: state.profilePage.profile,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        },
    }
}

export default compose(    //!!!!Это!!!!
    connect(mapStateToProps, mapDispatchToProps),    //2
    withAuthRedirect    //1
)(Dialogs)

//let AuthRedirectComponent = withAuthRedirect(Dialogs)   //HOC       !!!!!Вместо этого!!!!
//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

//export default DialogsContainer