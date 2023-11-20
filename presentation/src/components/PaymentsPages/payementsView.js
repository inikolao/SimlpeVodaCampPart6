import React, {useEffect, useState} from 'react';
import {fetchTicketsByUsername, fetchUserByUsername} from "../../reduxLib/userLib";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function PayementsView() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedUser,setSelectedUser]=useState([]);
    const [paymentsList,setpaymentsList]=useState([]);
    const user=useSelector((state)=>state.userreducer.selectedUser);
    const state=useSelector((state)=> state.userreducer.state);

    useEffect(()=>{

        var userx=sessionStorage.getItem('username').toString();

        console.log("user ", userx);
        // if (!userx || userx.length === 0) {
        // Fetch the event by ID when the component mounts or when the id changes
        dispatch(fetchUserByUsername(sessionStorage.getItem('username').toString())).then((action) => {
            // Once the action is fulfilled, set the eventprofile state
            if (action.payload) {
                setSelectedUser(action.payload);
                console.log("playload ", action.payload);
                console.log("playload E", selectedUser);
                setpaymentsList(action.payload.payments);
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
    return (
        <div>
            <div className="page-single movie_list">
            <p>My Payments</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Date Created</th>
                        <th>Cost</th>
                        <th>Tickets Included</th>
                    </tr>
                    </thead>
                    {
                        paymentsList.map((payment) =>(
                            <tbody>
                            <tr>
                                <td text={payment.paymentTimestamp}>{payment.paymentTimestamp}</td>
                                <td text={payment.amount}>{payment.amount}</td>
                                <td text={payment.reservations.length}>{payment.reservations.length}</td>
                                <td>

                                    <a
                                        className="btn btn-danger btn-sm deleteUser" data-id={payment.id}>Delete</a>

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
    );
}

export default PayementsView;