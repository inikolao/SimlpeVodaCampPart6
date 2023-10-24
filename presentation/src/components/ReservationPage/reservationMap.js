import React, {useState} from 'react';
import {useParams} from "react-router-dom";

function ReservationMap() {
    let {roomid} = useParams();
    function changeColor() {
       alert("sss");
    }

    return (
        <div id="container">
            <div className="bi bi-square"></div>
            <div className="bi bi-square"></div>
            <div className="bi bi-square"></div>
            <div className="bi bi-square"></div>
            <button type="button" className="btn btn-secondary btn-square-md">Button</button>
            <button type="button" className="btn btn-secondary btn-square-md">Button</button>
            <button type="button" className="btn btn-secondary btn-square-md">Button</button>
            <button type="button" className="btn btn-secondary btn-square-md">Button</button>
            <button type="button" className="btn btn-secondary btn-square-md">Button</button>
            <button type="button" className="btn btn-secondary btn-square-md">Button</button>
            <div onClick={changeColor} className="square"></div>
            <div className="square"></div>
        </div>
    );
}

export default ReservationMap;