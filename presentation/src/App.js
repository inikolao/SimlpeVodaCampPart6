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
import Users from "./components/users";
import Login from "./components/LoginPage/login";
import MoviesSoon from "./components/moviesSoon";
import ReservationMap from "./components/ReservationPage/reservationMap";
import Search from "./components/moviePages/search";
import Tickets from "./components/Ticketing/tickets";
import History from "./components/history";
import PayementsView from "./components/PaymentsPages/payementsView";
import BookAMovie from "./components/ReservationPage/bookAMovie";
import MoviePresentation from "./components/moviePages/moviePresentation";
import Reservations from "./components/ReservationPage/reservations";
import AddGenre from "./components/UserPage/AdminComponents/MenuPages/addGenre";
import EditMovie from "./components/UserPage/AdminComponents/MenuPages/editMovie";


function App() {

  const [token, setToken] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/*<Route path='/' element={<EventListPublic/>}></Route>*/}
          <Route path='/' element={<MoviesSoon/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='/profile/:username' element={<Profile/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/reservations' element={<Reservations/>}></Route>
          <Route path='/reservation/:roomid' element={<ReservationMap/>}></Route>
          <Route path='/tickets' element={<Tickets/>}></Route>
          <Route path='/history' element={<History/>}></Route>
          <Route path='/payments' element={<PayementsView/>}></Route>
          <Route path='/book/:movieid' element={<BookAMovie/>}></Route>
          <Route path='/movieview/:mvid' element={<MoviePresentation/>}></Route>
          <Route path='/admin/genreadd' element={<AddGenre/>}></Route>
          <Route path='/admin/editMovie/:movieid' element={<EditMovie/>}></Route>
          {/*<Route path='/eventprofile/:id' element={<Eventprofile/>}></Route>
          <Route path='/edit/:id' element={<EditEvent/>}></Route>
          /admin/editMovie
          */}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
