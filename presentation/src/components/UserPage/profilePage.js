import React, {useEffect} from 'react';

function ProfilePage(props) {


    return (
        <div>
            <div>
                <h1>User Profile</h1>
                <p>Name : {props.username}</p>
                <p>Email : {props.email}</p>
            </div>
        </div>
    );
}

export default ProfilePage;