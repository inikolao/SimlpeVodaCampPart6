import React, {useEffect, useState} from 'react';
import '../../specialFiles/special.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchMoovies} from "../../reduxLib/mooviesLib";

function Search() {

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
            <div className="page-single movie_list">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="topbar-filter">
                                {
                                    <p>Found <span>{movielist.length}</span> in total</p>
                                }
                                <label>Sort by:</label>
                                <select>
                                    <option value="popularity">Popularity Descending</option>
                                    <option value="popularity">Popularity Ascending</option>
                                    <option value="rating">Rating Descending</option>
                                    <option value="rating">Rating Ascending</option>
                                    <option value="date">Release date Descending</option>
                                    <option value="date">Release date Ascending</option>
                                </select>
                                <a href="movielist.html" className="list"><i
                                    className="ion-ios-list-outline active"></i></a>
                                <a href="moviegrid.html" className="grid"><i className="ion-grid"></i></a>
                            </div>
                            {
                                movielist.map((movie) =>(
                                    <div className="movie-item-style-2">
                                        <img src={movie.files[0].path} alt=""/>
                                        <div className="mv-item-infor">
                                            <h6><a href={`/movieview/`+movie.id}>{movie.title}</a></h6>
                                            <p className="rate"><i className="ion-android-star"></i><span>{movie.rating}</span> /10</p>
                                            <p className="describe">{movie.description}</p>
                                            <p className="run-time"> Run Time: {movie.duration} . <span>MMPA: PG-13 </span> . <span>Language: {movie.language}</span></p>
                                            <p>Director: <a href="#">TBD</a></p>
                                            <p>Stars: <a href="#">TBD</a> <a href="#">TBD</a> <a
                                                href="#">TBD</a></p>
                                            <button
                                                className="btn btn-light btn-sm deleteUser" data-id={movie.id}>Book A seat</button>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="topbar-filter">
                                <label>Movies per page:</label>
                                <select>
                                    <option value="range">5 Movies</option>
                                    <option value="saab">10 Movies</option>
                                </select>
                                <div className="pagination2">
                                    <span>Page 1 of 2:</span>
                                    <a className="active" href="#">1</a>
                                    <a href="#">2</a>
                                    <a href="#"><i className="ion-arrow-right-b"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <div className="searh-form">
                                    <h4 className="sb-title">Search for movie</h4>
                                    <form className="form-style-1" action="#">
                                        <div className="row">
                                            <div className="col-md-12 form-it">
                                                <label>Movie name</label>
                                                <input type="text" placeholder="Enter keywords"/>
                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Genres &amp; Subgenres</label>
                                                <div className="group-ip">
                                                    <div className="ui fluid dropdown selection multiple" tabIndex="0">
                                                        <select name="skills" multiple="">
                                                            <option value="">Enter to filter genres</option>
                                                            <option value="Action1">Action 1</option>
                                                            <option value="Action2">Action 2</option>
                                                            <option value="Action3">Action 3</option>
                                                            <option value="Action4">Action 4</option>
                                                            <option value="Action5">Action 5</option>
                                                        </select>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Rating Range</label>

                                                <select>
                                                    <option value="range">-- Select the rating range below --</option>
                                                    <option value="saab">-- Select the rating range below --</option>
                                                    <option value="saab">-- Select the rating range below --</option>
                                                    <option value="saab">-- Select the rating range below --</option>
                                                </select>

                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Release Year</label>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <select>
                                                            <option value="range">From</option>
                                                            <option value="number">10</option>
                                                            <option value="number">20</option>
                                                            <option value="number">30</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <select>
                                                            <option value="range">To</option>
                                                            <option value="number">20</option>
                                                            <option value="number">30</option>
                                                            <option value="number">40</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 ">
                                                <input className="submit" type="submit" value="submit"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    );
}

export default Search;