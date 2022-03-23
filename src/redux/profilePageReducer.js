const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateAddPostActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newPostText,
})

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                postText: state.newPostText,
                likesCounts: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export default profilePageReducer