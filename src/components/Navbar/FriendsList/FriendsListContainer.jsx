import {connect} from "react-redux";
import FriendsList from "./FriendsList";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList)

export default FriendsListContainer