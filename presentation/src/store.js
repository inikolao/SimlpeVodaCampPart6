import {configureStore} from '@reduxjs/toolkit';
import userreducer from './reduxLib/userLib';
import mooviessreducer from './reduxLib/mooviesLib';
import genrereducer from './reduxLib/genreLib';
import cinemareducer from './reduxLib/cinemaLib';
import ticketsreducer from './reduxLib/ticketLib';

export default configureStore({
    reducer:{
        userreducer,
        mooviessreducer,
        genrereducer,
        cinemareducer,
        ticketsreducer,
    }
});