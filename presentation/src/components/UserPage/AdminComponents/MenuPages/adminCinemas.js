import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchCinemas} from "../../../../reduxLib/cinemaLib";
function AdminCinemas() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cinemalist,setCinemaList]=useState([]);
    //cinemareducer
    const cinemas =useSelector((state)=>state.cinemareducer.cinemaList);
    const state= useSelector((state) => state.cinemareducer.state);

    useEffect(()=>{

        if (!cinemas || cinemas.length === 0) {
            // Fetch the event by ID when the component mounts or when the id changes
            dispatch(fetchCinemas()).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setCinemaList(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", cinemalist);
                }
            });
        } else {
            //let f=events.filter((event) => event.ownerid === id);
            // If the event data is already available, set the eventprofile state

            setCinemaList(cinemas);
            console.log("not disp ",cinemalist);
        }

    },[dispatch,state]);

    return (
        <div><h2>Cinemas Management</h2>
            <p><button onClick={() => navigate(`/addcinema`)}>Add New Cinema</button></p>
            <form className="form-inline" action="" method="post">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="search-addon"><i className="fa fa-search"></i></span>
                    </div>
                    <input type="text" className="form-control" id="search" name="search" placeholder="Search users"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            <table className="table">
                <thead>
                <tr>
                    <th>Cinema Name</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Rooms</th>
                </tr>
                </thead>
                {
                    cinemalist.map((cinema) =>(
                        <tbody>
                        <tr>
                            <td text={cinema.name}>{cinema.name}</td>
                            <td text={cinema.city}>{cinema.city}</td>
                            <td text={cinema.address}>{cinema.address}</td>
                            <td text={cinema.roomsNum}>{cinema.roomsNum}</td>
                            <td>
                                <a
                                    className="btn btn-light btn-sm deleteUser" data-id={cinema.id}>Edit</a>
                                <a
                                    className="btn btn-danger btn-sm deleteUser" data-id={cinema.id}>Delete</a>

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
    );
}

export default AdminCinemas;