import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from './redux/state'   //Импорт функции

export let rerenderEntitreTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={ state } addPost={ addPost } updateNewPostText={ updateNewPostText } sendMessage={ sendMessage } updateNewMessageText={ updateNewMessageText }/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

