import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchUsers} from "../../../../reduxLib/userLib";

function AdminUsers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userlist,setuserList]=useState([]);
    const users =  useSelector((state)=> state.userreducer.users);
    const state=useSelector((state)=> state.userreducer.state);

    useEffect(()=>{

        if (!users || users.length === 0) {
            // Fetch the event by ID when the component mounts or when the id changes
            dispatch(fetchUsers()).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setuserList(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", userlist);
                }
            });
        } else {
            //let f=events.filter((event) => event.ownerid === id);
            // If the event data is already available, set the eventprofile state

            setuserList(users);
            console.log("not disp ",userlist);
        }

    },[dispatch,state]);

    return (
        <div><h2>User Management</h2>

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
                    <th>User Name</th>
                    <th>Name</th>
                    <th>Last Log In</th>
                    <th>Admin</th>
                    <th>Enabled</th>
                    <th>Date Created</th>
                </tr>
                </thead>
                {
                    userlist.map((user) =>(
                        <tbody>
                        <tr>
                            <td text={user.username}>{user.username}</td>
                            <td text={user.name}>{user.name}</td>
                            <td text={user.lastLogIn}>{user.lastLogIn}</td>
                            <td text={user.admin}>{user.admin}</td>
                            <td text={user.enabled}>{user.enabled}</td>
                            <td text={user.dateCreated}>{user.dateCreated}</td>
                            <td>
                                <a
                                    className="btn btn-light btn-sm deleteUser" data-id={user.id}>Edit</a>
                                <a
                                    className="btn btn-danger btn-sm deleteUser" data-id={user.id}>Delete</a>

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

export default AdminUsers;