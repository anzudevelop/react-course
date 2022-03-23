const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id:1, postText:"Hello everybody", likesCounts:1},
        {id:2, postText:"Hello world", likesCounts:5},
        {id:3, postText:"How are you?", likesCounts:18},
        {id:4, postText:"What's up!", likesCounts:3},
        {id:5, postText:"Just a post", likesCounts:26},
        {id:6, postText:"First post", likesCounts:6},
    ],
    newPostText: ''
}

const profilePageReducer = (state = initialState, action) => {
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

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateAddPostActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newPostText,
})

export default profilePageReducer