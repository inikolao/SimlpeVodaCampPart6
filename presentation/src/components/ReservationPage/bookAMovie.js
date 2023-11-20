import React from 'react';
import {useParams} from "react-router-dom";

function BookAMovie(props) {
    let {movieID} = useParams();
    console.log('mID ',movieID);
    return (
        <div className="page-single movie_list">
            <div className="container">
            <p>Book A movie</p>
        </div>
        </div>
    );
}

export default BookAMovie;