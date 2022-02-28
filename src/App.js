import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProfileComponent from "./components/ProfileComponent";

//test commit
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
