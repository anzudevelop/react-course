const SET_USERS = 'SET-USERS'
const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.usersList}
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
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }

        default:
            return state
    }
}

export const setUsersAC = (usersList) => ({type: SET_USERS, usersList:usersList})

export const followUnfollowAC = (userId) => ({type: FOLLOW_UNFOLLOW, id: userId})    // followUnfollowActionCreator

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})



export default usersPageReducer
