import React from 'react';
import {NavLink} from "react-router-dom";

function AdminMenu(props) {

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/profile/admin">
                Admin Page
            </NavLink>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={()=>props.func(1)}>Movies </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"  onClick={()=>props.func(2)}>Genres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=>props.func(3)}>Cinemas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=>props.func(4)}>Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=>props.func(5)}>Economics</a>
                    </li>
                </ul>

            </div>
        </nav>
            </div>
    );
}

export default AdminMenu;