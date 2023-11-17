import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Tickets() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ticketlist,setTicketList]=useState([]);
    //const tickets=useSelector((state)=>state.
     //   const state=useSelector((state) => state

    return (
        <div>
            <div className="page-single movie_list">
                <div className="container">
                <p>My Tickets</p>
                </div>
            </div>
        </div>
    );
}

export default Tickets;