import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../../specialFiles/special.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    fetchMoovieByGenre,
    fetchMoovieOrderByratingAsc,
    fetchMoovieOrderByratingDesc,
    fetchMoovies, searchMovie
} from "../../reduxLib/mooviesLib";
import genrereducer, {fetchGenres} from "../../reduxLib/genreLib";


const initialState = {
    "name": "",
    "genre": "",
    "rattingRange": "",
}




function Search() {

    const [search,setSearch]=useState(initialState);
    const dispatch = useDispatch();
    const dispatchSR = useDispatch();
    const navigate = useNavigate();
    const [movielist,setMovieList]=useState([]);
    const [movieSearchR,setMovieSearchR]=useState([]);
    const statem=useSelector((state) => state.mooviessreducer.status);
    const stateS=useSelector((state) => state.mooviessreducer.searchStatus);
    const movies=useSelector((state) => state.mooviessreducer.moovieList);
    const moviesasc=useSelector((state) => state.mooviessreducer.moovieListAsc);
    const moviesDesc=useSelector((state) => state.mooviessreducer.moovieListDesc);
    const moviesByGenre=useSelector((state) => state.mooviessreducer.moovieListByGenre);



    const [genrelist,setGenreList]=useState([]);
    const genres=useSelector((state)=>state.genrereducer.genreList);
    const stateg=useSelector((state)=>state.genrereducer.status);


    const [selectedOption, setSelectedOption] = useState("1");
    const [selectedOptionb, setSelectedOptionb] = useState("0");
    const [selectedOptionCF, setSelectedOptionCF] = useState('');
    const [selectedOptionRange, setSelectedOptionRange] = useState('');

    const [selectedSearch, setSelectedSearch] = useState("0");


    useEffect(()=>{

        console.log("selected Op effect :"+ selectedOption);
        console.log("selected Op effect B:"+ selectedOptionb);

        if (selectedSearch==="0")
        {
            if (selectedOptionb === "0") {
                if (selectedOption === "1") {
                    if (!movies || movies.length === 0) {


                        dispatch(fetchMoovies()).then((action) => {
                            // Once the action is fulfilled, set the eventprofile state
                            if (action.payload) {
                                setMovieList(action.payload);
                                console.log("playload ", action.payload);
                                console.log("playload E", movielist);
                            }
                        });


                    } else {

                        setMovieList(movies);

                        console.log("not disp M ", movielist);
                    }
                } else if (selectedOption === "2") {
                    if (!moviesasc || moviesasc.length === 0) {


                        dispatch(fetchMoovieOrderByratingAsc()).then((action) => {
                            // Once the action is fulfilled, set the eventprofile state
                            if (action.payload) {
                                setMovieList(action.payload);
                                console.log("playload ", action.payload);
                                console.log("playload E", movielist);
                            }
                        });


                    } else {

                        setMovieList(moviesasc);

                        console.log("not disp M ", movielist);
                    }
                } else if (selectedOption === "3") {
                    if (!moviesDesc || moviesDesc.length === 0) {


                        dispatch(fetchMoovieOrderByratingDesc()).then((action) => {
                            // Once the action is fulfilled, set the eventprofile state
                            if (action.payload) {
                                setMovieList(action.payload);
                                console.log("playload ", action.payload);
                                console.log("playload E", movielist);
                            }
                        });


                    } else {

                        setMovieList(moviesDesc);

                        console.log("not disp M ", movielist);
                    }
                }
            } else {

                //if (!moviesByGenre || moviesByGenre.length === 0) {


                dispatch(fetchMoovieByGenre(selectedOptionb)).then((action) => {
                    // Once the action is fulfilled, set the eventprofile state
                    if (action.payload) {
                        setMovieList(action.payload);
                        console.log("playload ", action.payload);
                        console.log("playload E", movielist);
                    }
                });


                /*  } else {

                      setMovieList(moviesByGenre);

                      console.log("not disp M ", movielist);
                  }*/
            }
        } else {
            dispatchSR(searchMovie(search)).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setMovieSearchR(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", movieSearchR);
                }
            });
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
                console.log("not disp G ", genrelist);
            }


    },[dispatch,statem,stateg,selectedOption,selectedOptionb,selectedSearch]);




    const handleSelectChange = (e) => {
       // e.preventDefault();
        setSelectedOption(e.target.value);
        console.log("change "+e.target.value);
        console.log("selected OPt "+ selectedOption);
       /* const root = ReactDOM.createRoot(document.getElementById('results'));
        root.render();*/
        //setMovieList(moviesasc);
        //window.location.reload();
        setSelectedOptionb("0");

    };
    const handleSelectChangeb = (e) => {
        setSelectedOptionb(e.target.value);
        console.log("change B"+e.target.value);
        console.log("selected OPt BS "+ selectedOptionb);
        setSelectedOption("1");


    };
    const handleSelectChangeCF = (e) => {
        setSelectedOptionCF(e.target.value);
        console.log("change CF"+e.target.value);


    };
    const handleSelectChangeRange = (e) => {
        setSelectedOptionRange(e.target.value);
        console.log("change B"+e.target.value);

    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log("submit : "+search);

        search.rattingRange=selectedOptionRange;
        search.genre=selectedOptionCF;

        dispatchSR(searchMovie(search)).then((action) => {
            // Once the action is fulfilled, set the eventprofile state
            if (action.payload) {
                setMovieSearchR(action.payload);
                console.log("playload ", action.payload);
                console.log("playload E", movieSearchR);
            }
        });
        setSelectedSearch("1");
    }


function Render()
{

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
                                    <option value="0">Select genre...</option>
                                    {
                                        genrelist.map((genre)=>(
                                            <option value={genre.name}>{genre.name}</option>
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
                                                <input type="text" id="name" name="name" placeholder="Enter keywords" value={search.name} onChange={(event)=>setSearch(({...search,[event.target.name]:event.target.value}))}/>
                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Genres </label>
                                                <div className="group-ip">
                                                    <div className="ui fluid dropdown selection multiple" tabIndex="0">
                                                        <select name="skills" multiple="" value={selectedOptionCF}
                                                                                                   onChange={handleSelectChangeCF}
                                                        >
                                                            <option value="00">Enter to filter genres</option>
                                                            {
                                                                genrelist.map((genre)=>(
                                                                    <option value={genre.name}>{genre.name}</option>
                                                                ))
                                                            }
                                                        </select>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Rating Range</label>

                                                <select value={selectedOptionRange} onChange={handleSelectChangeRange}>
                                                    <option value="range">-- select range --</option>
                                                    <option value="13">-- 1-3 --</option>
                                                    <option value="46">-- 4-6 --</option>
                                                    <option value="710">-- 7-10 --</option>
                                                </select>

                                            </div>
                                            <div className="col-md-12 ">
                                                <input className="submit" type="submit" value="submit" onClick={handleSubmit}/>
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