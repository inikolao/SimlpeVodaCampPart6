import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function AdminUsers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


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
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td text="${user.getUsername()}"></td>
                    <td text="${user.getName()}"></td>
                    <td text="${user.getLastLogIn()}"></td>
                    <td text="${user.getAdmin()}"></td>
                    <td text="${user.isEnabled()}"></td>
                    <td>
                        <a
                           className="btn btn-danger btn-sm deleteUser" data-id="">Delete</a>
                    </td>
                </tr>
                </tbody>
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