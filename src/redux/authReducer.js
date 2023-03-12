import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}})

export const getMe = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if(response.data.resultCode == 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserDataAC(id, login, email, true))
                }
            })
    }
}

export const login = (email,  password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email,  password, rememberMe)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(getMe())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                }
            })
    }
}
export default authReducer