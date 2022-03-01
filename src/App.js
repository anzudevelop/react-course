import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/Profile/ProfileComponent";
import Dialogs from "./components/Dialogs/Dialogs"

//test commit 2
const App = () => {
  return (
      <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
              {/*<ProfileComponent />*/}
              <Dialogs />
          </div>
      </div>
  );
}

export default App;
