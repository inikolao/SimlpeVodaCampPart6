import React from 'react';
import {useParams} from "react-router-dom";

function ReservationMap() {
    let {roomid} = useParams();

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
        </div>
    );
}

export default ReservationMap;