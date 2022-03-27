const SET_USERS = 'SET-USERS'
const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW'

let initialState = {
    users: [/*
        {id:1, fullName:"Дмитрий", status:"Hello everybody", location:{city: 'Tomsk', country: 'Russia'}, followed: true, profileImg: 'https://i.pinimg.com/originals/fc/67/03/fc6703e79d41363832817cbdf297beaa.jpg'},
        {id:2, fullName:"Василий", status:"I'm a boss", location:{city: 'Moscow', country: 'Russia'}, followed: false, profileImg: 'https://i.pinimg.com/originals/fc/67/03/fc6703e79d41363832817cbdf297beaa.jpg'},
        {id:3, fullName:"Даниил", status:"What's up?", location:{city: 'Kiev', country: 'Ukraine'}, followed: true, profileImg: 'https://i.pinimg.com/originals/fc/67/03/fc6703e79d41363832817cbdf297beaa.jpg'},
        {id:4, fullName:"Влад", status:"I'm a pussy boy", location:{city: 'New York', country: 'Pendostan'}, followed: false, profileImg: 'https://sun4-17.userapi.com/s/v1/if1/bA3QsuT2Juzg8JBiNX-2hbDH6Za05oQyoAQF6hwJ1KKV3-qf92ODp415Lom3s76RGr7xGjg0.jpg?size=200x200&quality=96&crop=298,3,2045,2045&ava=1'},
    */],
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
