import React, {useEffect} from 'react';

function ProfilePage(props) {


    return (
        <div>
            <div>
                <h1>User Profile</h1>
                <p>Username : {props.username}</p>
                <p>Email : {props.email}</p>
                <p>Name : {props.name}</p>
                <p>Surname : {props.surname}</p>
                <p>Mobile : {props.mobile}</p>
                <p>Password : {props.password}</p>
            </div>
            <a href="#" className="btn btn-primary">Edit</a>
        </div>
    );
}

export default ProfilePage;