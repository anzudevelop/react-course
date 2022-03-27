import {connect} from "react-redux"
import Users from './Users'
import {followUnfollowAC, setUsersAC} from "../../redux/UsersPageReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (usersList) => {
            dispatch(setUsersAC(usersList))
        },
        followUnfollow: (userId) => {
            dispatch(followUnfollowAC(userId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)