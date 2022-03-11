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
    },
    sidebar: {
        friends: [
            {id:1, name:"Даниил", img:"https://sun4-11.userapi.com/s/v1/ig2/RfK4I2wEO7vFc26hBTRo7HN22AHx-_M1YQ5kVxatNMgS2jSHWW0eb-YL3YISX_zWsU4iM0HuMdN5847Xwmu23na7.jpg?size=50x50&quality=95&crop=564,0,1704,1704&ava=1"},
            {id:2, name:"Матвей", img:"https://sun4-15.userapi.com/s/v1/ig2/XCTeA82CNGFL2iqqCLyF9p0FN-lCIvuIo3m9V_kQCCyiWK8hVjlnYdfewb-o6tnXzZEYoVju7oqaG4ogkAy9ptzP.jpg?size=50x50&quality=96&crop=0,417,1620,1620&ava=1"},
            {id:3, name:"Влад", img:"https://sun4-17.userapi.com/s/v1/if1/PI92XMRkl3N_ZOD0QBYFuo6NzJfUcwvTx8fM0yRh37RnOenBJ0mXq71RPDVRiUdgfBM-_c6m.jpg?size=50x50&quality=96&crop=298,3,2045,2045&ava=1"},
            {id:4, name:"Никита", img:"https://sun4-17.userapi.com/s/v1/if1/Cezd8dI-L8pjjgCXNE2g4X-2RBUkiwutcpfHI7HwGzkqSSlHTpVowoAKz6plstHPFup69QoX.jpg?size=50x50&quality=96&crop=0,187,1365,1365&ava=1"},
            {id:5, name:"Даня норм поц", img:"https://sun4-15.userapi.com/s/v1/ig2/S205i7auYN3Hvjvqc_VQtsMpmtIMsrVeYoen43lepENWJPjn2Il-YAPcNgJmZ6p0CmVixjvcXJtugS0e6lQEE9PQ.jpg?size=50x50&quality=96&crop=96,320,846,846&ava=1"},
            {id:5, name:"Дёма", img:"https://sun4-10.userapi.com/s/v1/ig2/5kEwNhoj7s9s2fbQ7eoEAYGQ9MgvI2G5Bmhc9yOYm8MS27puLcQAfzQ0GFihTC6Eet5_kjPQgnoBEy6GRnSvvGGG.jpg?size=50x50&quality=96&crop=363,544,836,836&ava=1"},
        ]
    },
}

export default state