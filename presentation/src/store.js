import {configureStore} from '@reduxjs/toolkit';
import userreducer from './reduxLib/userLib';
import mooviessreducer from './reduxLib/mooviesLib';

export default configureStore({
    reducer:{
        userreducer,
        mooviessreducer,
    }
});