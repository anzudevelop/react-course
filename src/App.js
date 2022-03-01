import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/Profile/ProfileComponent";

//test commit 2
const App = () => {
  return (
      <div className='app-wrapper'>
          <Header />
          <Navbar />
          <ProfileComponent />
      </div>
  );
}

export default App;
