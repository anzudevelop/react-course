import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path="/profile/:userId" element={<ProfileContainer />}/>
                      <Route path="/dialogs/*" element={<DialogsContainer />}/>
                      <Route path="/users/*" element={<UsersContainer />}/>
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
