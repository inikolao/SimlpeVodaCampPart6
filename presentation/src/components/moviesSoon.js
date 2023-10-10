import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMoovies} from "../reduxLib/mooviesLib";

function MoviesSoon() {
    const [index, setIndex] = useState(0);
    const[moovielist,setMoovieList]=useState();
    const dispatch = useDispatch();
    const moovies = useSelector((state) => state.mooviessreducer.moovieList);
    const state= useSelector((state) => state.mooviessreducer.state);

    useEffect(()=> {
        console.log('event profiles');
        // setIndex(k++);
        // console.log("koita k "+k);
        if (!moovies || moovies.length === 0) {
            // Fetch the event by ID when the component mounts or when the id changes
            dispatch(fetchMoovies()).then((action) => {
                // Once the action is fulfilled, set the eventprofile state
                if (action.payload) {
                    setMoovieList(action.payload);
                    console.log(action.payload);
                }
            });
        } else {
            // If the event data is already available, set the eventprofile state
            setMoovieList(moovies);
            console.log(moovies);
        }

    }, [dispatch,state]);


    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    disabled={index === 0}
                    onClick={() => setIndex(0)}
                    className="small outlined"
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    disabled={index === 0}
                    onClick={() => setIndex(index - 1)}
                    className="small"
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    onClick={() => setIndex(index + 1)}
                    disabled={index === moovies.length - 1}
                    className="small"
                >
                    Next
                </button>
            </div>
            {
                moovielist?
                    <div id="slide" className="card text-center">
                        <h1 data-testid="title"><a href={`/eventprofile/${moovielist[index].id}`}>{moovielist[index].title}</a>
                        </h1>
                        <p data-testid="description">{moovielist[index].description}</p>
                        <p data-testid="location">{moovielist[index].location}</p>
                       {/* <img src={require(`../../../rawFiles/${moovielist[index].files[0].file1}.jpg`)} height="600"/>*/}
                    </div> : ''
            }
        </div>
    );
}

export default MoviesSoon;