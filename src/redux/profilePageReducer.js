import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id:1, postText:"Hello everybody", likesCounts:1},
        {id:2, postText:"Hello world", likesCounts:5},
        {id:3, postText:"How are you?", likesCounts:18},
        {id:4, postText:"What's up!", likesCounts:3},
        {id:5, postText:"Just a post", likesCounts:26},
        {id:6, postText:"First post", likesCounts:6},
    ],
    newPostText: '',
    profile: null,
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let id = state.posts.length + 1
            let postText = state.newPostText
            let likesCounts = 0
            return {
                ...state,
                posts: [...state.posts, {id:id, postText:postText, likesCounts:likesCounts}],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateAddPostActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newPostText,
})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export default profilePageReducer