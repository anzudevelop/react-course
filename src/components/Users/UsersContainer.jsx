import {connect} from "react-redux"
import {
    followUnfollowAC,
    setCurrentPageAC,
    toggleFollowingProgressAC,
    getUsersThunkCreator, followUnfollow
} from "../../redux/UsersPageReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   isFollowingInProgress={this.props.isFollowingInProgress}
                   followUnfollow={this.props.followUnfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    toggleFollowingProgress: toggleFollowingProgressAC,
    getUsers: getUsersThunkCreator,
    followUnfollow,
})(UsersContainer)