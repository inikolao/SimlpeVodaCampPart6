import React, {useEffect, useState} from 'react';
import { Link, Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUserByUsername} from "../reduxLib/userLib";
import AdminPage from "./UserPage/adminPage";
import ProfilePage from "./UserPage/profilePage";

function Profile() {
    let {username} = useParams();
    console.log('name ',username);
    const [userprofile, setuserprofile] = useState();
    let dispatch = useDispatch();
    const user = useSelector((state)=> state.userreducer.selectedUser);
    const state=useSelector((state)=> state.userreducer.state);
    let isLoggedIn = useSelector((state)=> state.userreducer.isLoggedIn);
    let navigate = useNavigate();

    useEffect(()=>{

        console.log('profile : '+username)
        if(!isLoggedIn) {
            alert('Please Login')
            navigate('/login')
        }
       // if(user.id === 0)
        if (!user || user.length === 0)
            dispatch(fetchUserByUsername(username)).then((action)=>{
                if (action.payload) {
                    setuserprofile(action.payload);
                    console.log("playload ", action.payload);
                }
            });
        else{
            console.log('else');
            console.log(user);
            setuserprofile(user);
           // alert("us : "+user.id);
        }
    },[user,dispatch,state]);

    function checkAdmin(username,email,id,name,surname,mobile,password)
    {
        console.log('profile check : '+username)

        if(username ==='admin')
        {
           return <AdminPage />;
        }
        else
        {
          return  <ProfilePage {...{username,email,id,name,surname,mobile,password}} />;
        }
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-4'>
                    {
                        //isUserLoggedIn()  ?
                       userprofile ?
                           (
                               checkAdmin(user.username,user.email,user.id,user.name,user.surname,user.mobile,user.password)
                           ):''
                        // <Navigate to='/login'/>
                    }

                </div>

            </div>
        </div>
    );
}

export default Profile;