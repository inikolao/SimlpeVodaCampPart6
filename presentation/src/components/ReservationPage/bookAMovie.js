import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { fetchShowsDetailsByMovie} from "../../reduxLib/showsLib";

const initialState=
    {
        cinemaId:"",
        cinemaName:"",
        roomId:"",
        roomNo:"",
        movieName:"",
        cost:"",
        seatNo:"",
    }

function BookAMovie() {

    let {movieid} = useParams();
    console.log('mID ',movieid);
    const [ticketB,setTicketB]=useState(initialState);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state=useSelector((state) => state.showsreducer.statusR);
    const shows=useSelector((state) => state.showsreducer.showsList);
    const [showslist,setShowsList]=useState([]);


    const [selectedOption, setSelectedOption] = useState('');
    //selectedSeat
    const [selectedSeat, setselectedSeat] = useState('');


    const [error, setError] = useState();

    useEffect(()=>{

        if (!shows || shows.length === 0) {
            // Fetch the event by ID when the component mounts or when the id changes
            dispatch(fetchShowsDetailsByMovie(movieid)).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setShowsList(action.payload);
                    console.log("playload ", action.payload);
                    console.log("playload E", showslist);
                }
            });
        } else {
            //let f=events.filter((event) => event.ownerid === id);
            // If the event data is already available, set the eventprofile state

            setShowsList(shows);
            console.log("not disp ",showslist);
        }



    },[dispatch,state]);

    const handleSubmit = (event)=> {
        event.preventDefault();
        //ticketB.cinemaId=selectedOption;
        console.log("submit : "+ticketB);
    }

    const handleSelectChange = (e) => {
        // e.preventDefault();
        setSelectedOption(e.target.value);
        console.log("change "+e.target.value);
        console.log("selected OPt "+ selectedOption);
        /* const root = ReactDOM.createRoot(document.getElementById('results'));
         root.render();*/
        if (selectedOption!=="0")
        {

        }


    };
    const handleselectedSeat= (e) => {

        selectedSeat(e.target.valueOf);
    };

    function ShowDetails(props)
    {
        const data=props;
       const dx=JSON.parse(data.selectedOption);
        //console.log("render Pro "+ data.toString());
        console.log("dddd + "+JSON.parse(data.selectedOption));
        return (
            <div>
                <h1>Details of the show</h1>
                <p>Cinema Id: {dx.cinemaId}</p>
                <p>Cinema Name: {dx.cinemaName}</p>
                <p>Movie Name: {dx.movieName}</p>
                <p>Price: {dx.price}</p>
                <p>Room ID: {dx.roomId}</p>
                <p>Room No: {dx.roomNo}</p>
                <p>seatsAvaliable: {dx.seatsAvaliable}</p>

            </div>
        );
    }

    return (
        <div className="page-single movie_list">
            <div className="container">
            <p>Book A movie</p>
                <h1 className="sb-title">Tciket</h1>
                <p style={{color: 'red'}}>{error && error}</p>
                <form className="form-style-1">
                    <div className="form-group">
                        <label>Cinema:</label>
                        <select value={selectedOption}
                                onChange={handleSelectChange}
                        >
                            <option value="">Select ...</option>
                            {
                                showslist.map((show)=>(
                                   // console.log(show)
                                    <option value={JSON.stringify(show)}>{show.cinemaName}</option>
                                ))
                            }
                        </select>
                    </div>
                    {
                        selectedOption?
                            <ShowDetails { ...{selectedOption }}/>
                            :''
                    }
                    {  selectedOption?
                        <select value={selectedSeat}
                            onChange={handleselectedSeat}
                    >
                        <option value="">Select ...</option>
                        {
                            [...Array(65)].map((x, i) =>(

                                <option value={i}>{i}</option>
                            ))
                        }
                    </select>:''
                    }

                    {
                        selectedOption?
                            <div className="form-group">
                                <label htmlFor="email">Credit card:</label>
                                <input type="email" className="form-control" id="card" name="card" placeholder="card"/>
                            </div>:''

                    }



                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>

        </div>
        </div>
    );
}

export default BookAMovie;