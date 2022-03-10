import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/Profile/ProfileComponent";
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar friends={props.state.sidebar.friends}/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path="/profile/*" element={<ProfileComponent posts={ props.state.profilePage.posts }/>}/>
                      <Route path="/dialogs/*" element={<Dialogs data={props.state.messagesPage}/>}/>
                      <Route path="/news/*" element={<News />}/>
                      <Route path="/music/*" element={<Music />}/>
                      <Route path="/settings/*" element={<Settings />}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
