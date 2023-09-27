import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from "./components/topdown/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/topdown/Header";
import Register from "./components/register";
import Logout from "./components/LoginPage/logout";
import Profile from "./components/profile";

function Login() {
    return null;
}

function App() {

  const [token, setToken] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/*<Route path='/' element={<EventListPublic/>}></Route>
          <Route path='/' element={<EventListPublic/>}></Route>*/}
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='/profile/:username' element={<Profile/>}></Route>
            <Route path='/users' element={</>}></Route>
          {/*<Route path='/eventprofile/:id' element={<Eventprofile/>}></Route>
          <Route path='/edit/:id' element={<EditEvent/>}></Route>*/}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
