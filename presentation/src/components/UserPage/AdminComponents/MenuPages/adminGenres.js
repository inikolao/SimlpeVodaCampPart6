import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenres} from "../../../../reduxLib/genreLib";



function AdminGenres() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [genrelist,setGenreList]=useState([]);
    const genres= useSelector((state)=>state.genrereducer.genreList);
    const state= useSelector((state) => state.genrereducer.state);

    useEffect(()=>{

        if (!genres || genres.length === 0) {
            // Fetch the event by ID when the component mounts or when the id changes
            dispatch(fetchGenres()).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setGenreList(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", genrelist);
                }
            });
        } else {
            //let f=events.filter((event) => event.ownerid === id);
            // If the event data is already available, set the eventprofile state

            setGenreList(genres);
            console.log("not disp ",genrelist);
        }

    },[dispatch,state]);

    return (
        <div>
            <h2>Genre Management</h2>
            <p><button onClick={() => navigate(`/admin/genreadd`)}>Add New Genre</button></p>
            <form className="form-inline" action="" method="post">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="search-addon"><i className="fa fa-search"></i></span>
                    </div>
                    <input type="text" className="form-control" id="search" name="search" placeholder="Search users"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            <table className="table">
                <thead>
                <tr>
                    <th>Genre Name</th>
                </tr>
                </thead>
                {
                    genrelist.map((genre) =>(
                        <tbody>
                           <tr>
                               <td text={genre.name}>{genre.name}</td>
                               <td>
                                   <a
                                       className="btn btn-light btn-sm deleteUser" data-id={genre.id}>Edit</a>
                                   <a
                                       className="btn btn-danger btn-sm deleteUser" data-id={genre.id}>Delete</a>

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

export default AdminGenres;