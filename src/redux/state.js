let state = {
    profilePage: {
        posts: [
            {id:1, postText:"Hello everybody", likesCounts:1},
            {id:2, postText:"Hello world", likesCounts:5},
            {id:3, postText:"How are you?", likesCounts:18},
            {id:4, postText:"What's up!", likesCounts:3},
            {id:5, postText:"Just a post", likesCounts:26},
            {id:6, postText:"First post", likesCounts:6},
        ],
    },
    messagesPage: {
        dialogs: [
            {id:1, name:"Даниил"},
            {id:2, name:"Влад"},
            {id:3, name:"Никита"},
            {id:4, name:"Матвей"},
        ],
        messages: [
            {id:1, message:"Hi"},
            {id:2, message:"How are you?"},
            {id:3, message:"What's up!"},
            {id:4, message:"Pashol von"},
            {id:5, message:"Yo!"},
            {id:6, message:"Hello"},
        ],
    },
    sitebar: 1,
}

export default state