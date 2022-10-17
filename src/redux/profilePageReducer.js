import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id:1, postText:"Hello everybody", likesCounts:1},
        {id:2, postText:"Hello world", likesCounts:5},
        {id:3, postText:"How are you?", likesCounts:18},
        {id:4, postText:"What's up!", likesCounts:3},
        {id:5, postText:"Just a post", likesCounts:26},
        {id:6, postText:"First post", likesCounts:6},
    ],
    profile: null,
    status: '',
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let id = state.posts.length + 1
            let postText = action.newPostText
            let likesCounts = 0
            return {
                ...state,
                posts: [...state.posts, {id:id, postText:postText, likesCounts:likesCounts}],
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.newStatus,
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatusAC = (status) => ({type: SET_STATUS, newStatus: status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            if(response.data === null) {
                dispatch(setStatusAC('no status'))
                return
            }
            dispatch(setStatusAC(response.data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}

export default profilePageReducer