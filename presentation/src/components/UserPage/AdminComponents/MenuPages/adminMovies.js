import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import mooviessreducer, {fetchMoovies} from "../../../../reduxLib/mooviesLib";

function AdminMovies() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [movielist,setMovieList]=useState([]);
    const movies=useSelector((state)=>state.mooviessreducer.moovieList);
    const state=useSelector((state) => state.mooviessreducer.state);

    useEffect(()=>{

        if (!movies || movies.length === 0) {
            // Fetch the event by ID when the component mounts or when the id changes
            dispatch(fetchMoovies()).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setMovieList(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", movielist);
                }
            });
        } else {
            //let f=events.filter((event) => event.ownerid === id);
            // If the event data is already available, set the eventprofile state

            setMovieList(movies);
            console.log("not disp ",movielist);
        }

    },[dispatch,state]);


    return (
        <div>
            <h2>Movies Management</h2>
            <p><button onClick={() => navigate(`/movieadd`)}>Add New Movie</button></p>
            <form className="form-inline" action="" method="post">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="search-addon"><i className="fa fa-search"></i></span>
                    </div>
                    <input type="text" className="form-control" id="search" name="search" placeholder="Search Movies"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            <table className="table">
                <thead>
                <tr>
                    <th>Movie Title</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Rating</th>
                    <th>Genres</th>
                </tr>
                </thead>
                {
                    movielist.map((movie) =>(
                        <tbody>
                        <tr>
                            <td text={movie.title}>{movie.title}</td>
                            <td text={movie.description}>{movie.description}</td>
                            <td text={movie.duration}>{movie.duration}</td>
                            <td text={movie.rating}>{movie.rating}</td>
                            <td text={movie.name}>TBDeveloped</td>
                            <td>
                                <a
                                    className="btn btn-light btn-sm deleteUser" data-id={movie.id} >Edit</a>
                                <a
                                    className="btn btn-danger btn-sm deleteUser" data-id={movie.id}>Delete</a>

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

    );
}

export default AdminMovies;