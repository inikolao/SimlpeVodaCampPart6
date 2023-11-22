import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import genrereducer, {CreateGenre} from "../../../../reduxLib/genreLib";

const initialState=
    {
        name: "",
    }

function AddGenre() {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [genren,setGenren]=useState(initialState);

    const [error, setError] = useState();
    const rstatus=useSelector((state) => state.genrereducer.registerstatus);


    useEffect(()=>{
        if(rstatus === 'success'){
            alert('Create successful');
        }

    },[rstatus])

    const handleSubmit = (event)=> {
        event.preventDefault();
        dispatch(CreateGenre(genren));

    }


    return (
        <div>
            <p>Add new Genre</p>
            <p style={{color:'red'}}>{error && error}</p>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Genre:</label>
                    <input type="text" className="form-control" id="name" placeholder="name" name="name" value={genren.name} onChange={(event)=>setGenren({...genren, [event.target.name]:event.target.value})}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default AddGenre;