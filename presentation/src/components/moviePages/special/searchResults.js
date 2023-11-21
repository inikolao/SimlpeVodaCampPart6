import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    fetchMoovieOrderByratingAsc,
    fetchMoovieOrderByratingDesc,
    fetchMoovies
} from "../../../reduxLib/mooviesLib";

function SearchResults(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [movielist,setMovieList]=useState([]);
    const statem=useSelector((state) => state.mooviessreducer.status);

    useEffect(()=>{
       // if (!movies || movies.length === 0) {

            if (props === 1) {
                setMovies(1);

            } else if (props === 2) {
                setMovies(2);
            } else {
                setMovies(3);
            }
      //  }

    },[dispatch,statem,props]);

    function setMovies(type)
    {
        console.log("ksks and type "+type);

        // Fetch the event by ID when the component mounts or when the id changes
        if (type===1) {
            console.log("normal");
            dispatch(fetchMoovies()).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setMovieList(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", movielist);
                }
            });
        } else if (type===2)
        {
            console.log("asc d");
            dispatch(fetchMoovieOrderByratingAsc()).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setMovieList(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", movielist);
                }
            });

        }
        else if (type===3)
        {
            console.log("desc d");
            dispatch(fetchMoovieOrderByratingDesc()).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setMovieList(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", movielist);
                }
            });


        }

    }


    return movielist.map((movie) => (
        <div className="movie-item-style-2">
            <img src={movie.files[0].path} alt=""/>
            <div className="mv-item-infor">
                <h6><a href={`/movieview/` + movie.id}>{movie.title}</a></h6>
                <p className="rate"><i className="ion-android-star"></i><span>{movie.rating}</span> /10</p>
                <p className="describe">{movie.description}</p>
                <p className="run-time"> Run
                    Time: {movie.duration} . <span>MMPA: PG-13 </span> . <span>Language: {movie.language}</span>
                </p>
                <p>Director: <a href="#">TBD</a></p>
                <p>Stars: <a href="#">TBD</a> <a href="#">TBD</a> <a
                    href="#">TBD</a></p>
                <button
                    className="btn btn-light btn-sm deleteUser" data-id={movie.id}
                    onClick={() => navigate(`/book/${movie.id}`)}>Book A seat
                </button>
            </div>
        </div>
    ));
}

export default SearchResults;