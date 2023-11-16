import {configureStore} from '@reduxjs/toolkit';
import userreducer from './reduxLib/userLib';
import mooviessreducer from './reduxLib/mooviesLib';
import genrereducer from './reduxLib/genreLib';

export default configureStore({
    reducer:{
        userreducer,
        mooviessreducer,
        genrereducer,
    }
});