import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchTicketsByUsername, fetchUserByUsername, registerUser} from "../../reduxLib/userLib";
import {fetchMoovieBySeat} from "../../reduxLib/mooviesLib";
import {fetchCinemas} from "../../reduxLib/cinemaLib";
import {fetchRoomBYID} from "../../reduxLib/roomsLib";
import ticketsreducer from "../../reduxLib/ticketLib";

const initialState = {
    "ownerid": "",
    "seatID": "",
    "Movie": "",
    "Cinema": "",
}

function Tickets() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [reservationR, setreservationR] = useState(initialState);
    const [selectedUser,setSelectedUser]=useState([]);
    const [resrervationList,setresrervationList]=useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const user=useSelector((state)=>state.userreducer.selectedUser);
    const state=useSelector((state)=> state.userreducer.state);
    let registerstatus = useSelector((state)=> state.ticketsreducer.state);
    const [error, setError] = useState();
    //const tickets=useSelector((state)=>state.
     //   const state=useSelector((state) => state


    useEffect(()=>{

        var userx=sessionStorage.getItem('username').toString();

        console.log("user ", userx);
       // if (!userx || userx.length === 0) {
            // Fetch the event by ID when the component mounts or when the id changes
            dispatch(fetchTicketsByUsername(sessionStorage.getItem('username').toString())).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setSelectedUser(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", selectedUser);
                    setresrervationList(action.payload.reservations);
                }
            });
     //   } else {
            //let f=events.filter((event) => event.ownerid === id);
            // If the event data is already available, set the eventprofile state

        //    setSelectedUser(userx);
       //     setresrervationList(selectedUser.reservations);
       //     console.log("not disp ",selectedUser);
      //  }

    },[dispatch,state]);

    function findmoovie(reservation) {
        var movie='';

            dispatch(fetchMoovieBySeat(reservation.seat.id)).then((action) => {
                if(action.payload)
                {
                    movie=action.payload;
                }
            })

        return movie;
    }
    function findCinema(reservation){
        var cinemas='';
        dispatch(fetchCinemas()).then((action) => {
            if(action.payload)
            {
                cinemas=action.payload;
                for (let i = 0; i < cinemas.length; i++) {
                    if(cinemas[i].rooms.id===findRoom(reservation).id)
                    {
                        return cinemas[i];
                    }

                }
            }
        })

        return cinemas;
    }

    function findRoom(reservation)
    {
        var room='';
        dispatch(fetchRoomBYID(reservation.seat.id)).then((action) => {
            if(action.payload)
            {
                room=action.payload;
            }
        })
    return room;
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        // console.log('Selected option:', selectedOption);
        //user.city=selectedOption;
        //console.log('City option:', user.city);
        console.log('ticket :', reservationR);
       // dispatch(registerReservation(reservationR))
        // You can do something with the selected option here


    }
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <div className="page-single movie_list">
                <div className="container">
                   {/* <h1 className="sb-title">New ticket</h1>
                    <p style={{color: 'red'}}>{error && error}</p>
                    <form className="form-style-1">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" placeholder="Username"
                                   name="username" value={user.username}
                                   onChange={(event) => setreservationR({...user, [event.target.name]: event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" name="name"
                                   value={user.name}
                                   onChange={(event) => setreservationR({...user, [event.target.name]: event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Surname:</label>
                            <input type="text" className="form-control" id="surname" name="surname"
                                   placeholder="Surname" value={user.surname}
                                   onChange={(event) => setreservationR({...user, [event.target.name]: event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Mobile">Mobile:</label>
                            <input type="tel" className="form-control" id="mobile" name="mobile" placeholder="Mobile"
                                   value={user.mobile}
                                   onChange={(event) => setreservationR({...user, [event.target.name]: event.target.value})}/>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>*/}
                <p>My Tickets</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Date Created</th>
                            <th>Cost</th>
                            <th>Seat No</th>
                            <th>Movie</th>
                            <th>Cinema</th>
                        </tr>
                        </thead>
                        {
                            resrervationList.map((reservation) =>(
                                <tbody>
                                <tr>
                                    <td text={reservation.creationTimestamp}>{reservation.creationTimestamp}</td>
                                    <td text={reservation.cost}>{reservation.cost}</td>
                                    <td text={reservation.seat.seatNo}>{reservation.seat.seatNo}</td>
                                    <td text={findmoovie(reservation).title}>{findmoovie(reservation).title}</td>
                                    <td text={findCinema(reservation).name}>{findCinema(reservation).name}</td>
                                    <td>
                                        <a
                                            className="btn btn-light btn-sm deleteUser" data-id={reservation.id}>Edit</a>
                                        <a
                                            className="btn btn-danger btn-sm deleteUser" data-id={reservation.id}>Delete</a>

                                    </td>
                                </tr>
                                </tbody>
                            ))

                        }
                    </table>
                    <nav>
                        <ul className="pagination">
                            <li >
                                <a className="page-link">Previous</a>
                            </li>
                            <li>
                                <a className="page-link">1</a>
                            </li>
                            <li>
                                <a className="page-link">2</a>
                            </li>
                            <li>
                                <a className="page-link" >Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Tickets;