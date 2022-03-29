const SET_USERS = 'SET-USERS'
const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW'

let initialState = {
    users: [],
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.usersList]} //Склеиваем то, что было и то, что пришло
        }
        case FOLLOW_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: !(u.followed)}   //Если id совпадает, то возвращаем копию, у которой меняем followed
                    }
                    return u
                }),

            }
        }

        default:
            return state
    }
}

export const setUsersAC = (usersList) => ({type: 'SET-USERS', usersList:usersList})

export const followUnfollowAC = (userId) => ({type: 'FOLLOW-UNFOLLOW', id: userId})    // followUnfollowActionCreator


export default usersPageReducer
