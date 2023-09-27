import {configureStore} from '@reduxjs/toolkit';
import userreducer from './reduxLib/userLib';

export default configureStore({
    reducer:{
        userreducer,
    }
});