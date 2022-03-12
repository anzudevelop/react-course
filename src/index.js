import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from './redux/state'   //Импорт функции

let rerenderEntitreTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={ state } addPost={ addPost } updateNewPostText={ updateNewPostText } sendMessage={ sendMessage } updateNewMessageText={ updateNewMessageText }/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntitreTree(state)

subscribe(rerenderEntitreTree)  // Создали callback для избежания цикличной зависимости

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
