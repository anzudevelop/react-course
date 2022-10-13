import React from 'react'
import ProfileComponent from "./ProfileComponent";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profilePageReducer";
import {connect} from "react-redux"
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRecirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;    //Получаем Id пользователя из URL
        if(!userId) userId = 23131
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <ProfileComponent {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),    //3
    withRouter,         //2
    withAuthRedirect    //1
)(ProfileContainer)
