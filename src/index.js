import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id:1, postText:"Hello everybody", likesCounts:1},
    {id:2, postText:"Hello world", likesCounts:5},
    {id:3, postText:"How are you?", likesCounts:18},
    {id:4, postText:"What's up!", likesCounts:3},
    {id:5, postText:"Just a post", likesCounts:26},
    {id:6, postText:"First post", likesCounts:6},
]

let dialogsData = [
    {id:1, name:"Даниил"},
    {id:2, name:"Влад"},
    {id:3, name:"Никита"},
    {id:4, name:"Матвей"},
]

let messagesData = [
    {id:1, message:"Hi"},
    {id:2, message:"How are you?"},
    {id:3, message:"What's up!"},
    {id:4, message:"Pashol von"},
    {id:5, message:"Yo!"},
    {id:6, message:"Hello"},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
