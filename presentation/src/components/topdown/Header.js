import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'


function Header() {

    const [sessionStorage,setStorage]=useState();

    const isLoggedIn = useSelector((state)=> state.userreducer.isLoggedIn);
    const dispatch = useDispatch();
    const username = useSelector((state)=> state.userreducer.username);



    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="">
                        My Cinema
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/search">
                                    Search
                                </NavLink>
                            </li>
                            {
                                !isLoggedIn &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">
                                        Register
                                    </NavLink>
                                </li>
                            }
                            {
                                !isLoggedIn &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Login
                                    </NavLink>
                                </li>
                            }
                            {//onClick={()=>dispatch(logoutUser())}
                                isLoggedIn &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/tickets" >
                                        Tickets
                                    </NavLink>
                                </li>
                            }
                            {//onClick={()=>dispatch(logoutUser())}
                                isLoggedIn &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/payments" >
                                        My payments
                                    </NavLink>
                                </li>
                            }
                            {//onClick={()=>dispatch(logoutUser())}
                                isLoggedIn &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/history" >
                                        My History
                                    </NavLink>
                                </li>
                            }

                            {//onClick={()=>dispatch(logoutUser())}
                                isLoggedIn &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/logout" >
                                        Logout
                                    </NavLink>
                                </li>
                            }
                            {
                                isLoggedIn &&
                                <li className="nav-item"><NavLink className="nav-link" to={`/profile/${username}`}>
                                    {username}
                                </NavLink></li>
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </div>



    );
}

export default Header;