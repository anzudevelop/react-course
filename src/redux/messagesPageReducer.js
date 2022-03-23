const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id:1, name:"Даниил", img:"https://sun4-11.userapi.com/s/v1/ig2/RfK4I2wEO7vFc26hBTRo7HN22AHx-_M1YQ5kVxatNMgS2jSHWW0eb-YL3YISX_zWsU4iM0HuMdN5847Xwmu23na7.jpg?size=50x50&quality=95&crop=564,0,1704,1704&ava=1"},
        {id:2, name:"Влад", img:"https://sun4-17.userapi.com/s/v1/if1/PI92XMRkl3N_ZOD0QBYFuo6NzJfUcwvTx8fM0yRh37RnOenBJ0mXq71RPDVRiUdgfBM-_c6m.jpg?size=50x50&quality=96&crop=298,3,2045,2045&ava=1"},
        {id:3, name:"Никита", img:"https://sun4-17.userapi.com/s/v1/if1/Cezd8dI-L8pjjgCXNE2g4X-2RBUkiwutcpfHI7HwGzkqSSlHTpVowoAKz6plstHPFup69QoX.jpg?size=50x50&quality=96&crop=0,187,1365,1365&ava=1"},
        {id:4, name:"Матвей", img:"https://sun4-15.userapi.com/s/v1/ig2/XCTeA82CNGFL2iqqCLyF9p0FN-lCIvuIo3m9V_kQCCyiWK8hVjlnYdfewb-o6tnXzZEYoVju7oqaG4ogkAy9ptzP.jpg?size=50x50&quality=96&crop=0,417,1620,1620&ava=1"},
    ],
    messages: [
        {id:1, message:"Hi", isMy:true},
        {id:2, message:"How are you?", isMy:false},
        {id:3, message:"What's up!", isMy:true},
        {id:4, message:"Pashol von", isMy:false},
        {id:5, message:"Yo!", isMy:false},
        {id:6, message:"Hello", isMy:true},
    ],
    newMessageText: ''
}


const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
                isMy: true,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateMessageTextActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
})

export default messagesPageReducer