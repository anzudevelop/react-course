import React from 'react'
import ProfileComponent from "./ProfileComponent";
import {getUserProfile} from "../../redux/profilePageReducer";
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
    }

    render() {
        return (
            <div>
                <ProfileComponent {...this.props} profile={this.props.profile}/>
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
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),    //3
    withRouter,         //2
    withAuthRedirect    //1
)(ProfileContainer)
