import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import sidebarReducer from "./sidebarReducer";
import UsersPageReducer from "./UsersPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer,
    usersPage: UsersPageReducer,
})

let store = createStore(reducers)

window.store = store

export default store