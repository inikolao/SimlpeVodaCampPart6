import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {fetchMoovies, fetchMooviesByID} from "../../../../reduxLib/mooviesLib";

function EditMovie() {

    let {movieid} = useParams();
    console.log('mID ',movieid);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [movieSL,setMoviesl]=useState('');

    const movie=useSelector((state)=>state.mooviessreducer.selectedMoovie);
    const state=useSelector((state) => state.mooviessreducer.state);

    useEffect(()=>{

        if (!movie || movie.length === 0) {
            // Fetch the event by ID when the component mounts or when the id changes
            dispatch(fetchMoovies()).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setMoviesl(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", movieSL);
                }
            });
        } else {
            //let f=events.filter((event) => event.ownerid === id);
            // If the event data is already available, set the eventprofile state

            setMoviesl(movie);
            console.log("not disp ",movieSL);
        }

    },[dispatch,state]);

    const handleSubmit = (event)=> {
        event.preventDefault();
    }

    return (
        <div>
            <p>Edit Movie</p>
            <p>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Title:</label>
                        <input type="text" className="form-control" id="title" placeholder="Username" name="username" value={movieSL.title} onChange={(event)=>setMoviesl({...movieSL, [event.target.name]:event.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Descreption:</label>
                        <input type="text" className="form-control" id="description" placeholder="description" name="description" value={movieSL.description} onChange={(event)=>setMoviesl({...movieSL, [event.target.name]:event.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Rating:</label>
                        <input type="text" className="form-control" id="rating" name="rating" placeholder="rating" value={movieSL.rating} onChange={(event)=>setMoviesl({...movieSL, [event.target.name]:event.target.value})}/>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </p>
        </div>
    );
}

export default EditMovie;