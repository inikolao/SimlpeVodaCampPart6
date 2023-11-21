import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../../specialFiles/special.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    fetchMoovieOrderByratingAsc,
    fetchMoovieOrderByratingDesc,
    fetchMoovies
} from "../../reduxLib/mooviesLib";
import genrereducer, {fetchGenres} from "../../reduxLib/genreLib";

function Search() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [movielist,setMovieList]=useState([]);
    const statem=useSelector((state) => state.mooviessreducer.status);
    const movies=useSelector((state) => state.mooviessreducer.moovieList);
    const moviesasc=useSelector((state) => state.mooviessreducer.moovieListAsc);
    const moviesDesc=useSelector((state) => state.mooviessreducer.moovieListDesc);



    const [genrelist,setGenreList]=useState([]);
    const genres=useSelector((state)=>state.genrereducer.genreList);
    const stateg=useSelector((state)=>state.genrereducer.status);


    const [selectedOption, setSelectedOption] = useState(1);
    const [selectedOptionb, setSelectedOptionb] = useState('');
    const [selectedOptionCF, setSelectedOptionCF] = useState('');

    //const [selectedState, setSelectedState] = useState("");


    useEffect(()=>{

        console.log("selected Oprion Useffect " + selectedOption);

        if (!movies || movies.length === 0) {

            if (selectedOption === 1) {
                dispatch(fetchMoovies()).then((action) => {
                    // Once the action is fulfilled, set the eventprofile state
                    if (action.payload) {
                        setMovieList(action.payload);
                        console.log("playload ", action.payload);
                        console.log("playload E", movielist);
                    }
                });
            }
            else if(selectedOption===2)
            {
                dispatch(fetchMoovieOrderByratingAsc()).then((action) => {
                    // Once the action is fulfilled, set the eventprofile state
                    if (action.payload) {
                        setMovieList(action.payload);
                        console.log("playload ", action.payload);
                        console.log("playload E", movielist);
                    }
                });

            }
            else if(selectedOption===3) {
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
        else {
            if (selectedOption === 1) {

                setMovieList(movies);
            }
            else if(selectedOption===2)
            {
                setMovieList(moviesDesc);
            }
            else if(selectedOption===3)
            {
                setMovieList(moviesasc);
            }
            console.log("not disp M ",movielist);
        }



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
            console.log("not disp G ",genrelist);
        }

    },[dispatch,statem,stateg,selectedOption]);




    const handleSelectChange = (e) => {
       // e.preventDefault();
        setSelectedOption(e.target.value);
        console.log("change "+e.target.value);
        console.log("selected OPt "+ selectedOption);
       /* const root = ReactDOM.createRoot(document.getElementById('results'));
        root.render();*/

    };
    const handleSelectChangeb = (e) => {
        setSelectedOptionb(e.target.value);


    };
    const handleSelectChangeCF = (e) => {
        setSelectedOptionCF(e.target.value);


    };

function Render()
{
    if (selectedOption === 1) {

        setMovieList(movies);
    }
    else if(selectedOption===2)
    {
        setMovieList(moviesDesc);
    }
    else if(selectedOption===3)
    {
        setMovieList(moviesasc);
    }

   return  movielist.map((movie) => (
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
                                <select value={selectedOption}
                                        onChange={handleSelectChange}
                                >
                                    <option value="1">Select ...</option>
                                    <option value="3">Rating Descending</option>
                                    <option value="2">Rating Ascending</option>
                                </select>

                                <label>Filter by Genre:</label>
                                <select value={selectedOptionb}
                                        onChange={handleSelectChangeb}
                                >
                                    <option value="-1">Select genre...</option>
                                    {
                                        genrelist.map((genre)=>(
                                            <option value={genre.id}>{genre.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div id="results">
                            {
                                <Render/>



                            }
                            </div>
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
                                                <label>Genres </label>
                                                <div className="group-ip">
                                                    <div className="ui fluid dropdown selection multiple" tabIndex="0">
                                                        <select name="skills" multiple="" value={selectedOptionCF}
                                                                                                   onChange={handleSelectChangeCF}
                                                        >
                                                            <option value="">Enter to filter genres</option>
                                                            {
                                                                genrelist.map((genre)=>(
                                                                    <option value={genre.id}>{genre.name}</option>
                                                                ))
                                                            }
                                                        </select>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Rating Range</label>

                                                <select>
                                                    <option value="range">-- select range --</option>
                                                    <option value="13">-- 1-3 --</option>
                                                    <option value="46">-- 4-6 --</option>
                                                    <option value="710">-- 7-10 --</option>
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