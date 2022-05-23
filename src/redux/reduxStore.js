import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import sidebarReducer from "./sidebarReducer";
import UsersPageReducer from "./UsersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {withAuthRedirect} from "../hoc/withAuthRecirect";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer,
    usersPage: UsersPageReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store