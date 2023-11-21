import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


const initialState = {
    moovieList: [],
    moovieListOwn: [],
    moovieListDesc: [],
    moovieListAsc: [],
    moovieListFiltered: [],
    selectedMoovie: null,
    registerstatus:'failure',
    editstatus:'failure',
    status:"idle",
    error:''
}

export const fetchMoovies = createAsyncThunk('fetch/movies',async()=>{
    let response = await fetch('http://localhost:8080/movie/all')
    return response.json()

})

export const fetchMoovieBySeat = createAsyncThunk('fetch/movieBySeatId',async(id)=>{
    let response = await fetch(`http://localhost:8080/complex/moviebyID/${id}`)
    return response.json()

})
export const fetchMoovieOrderByratingAsc = createAsyncThunk('fetch/movieByRatingAsc',async()=>{
    let type="asc";
    let response = await fetch(`http://localhost:8080/movie/byRating/${type}`)
    return response.json()

})

export const fetchMoovieOrderByratingDesc = createAsyncThunk('fetch/movieByRatingDesc',async()=>{
    let type="desc";
    let response = await fetch(`http://localhost:8080/movie/byRating/${type}`)
    return response.json()

})

const moovieslice = createSlice({
    name:"moovies",
    initialState,
    reducers:{
        changeRegisterStatus:(state)=>{
            state.registerstatus='failure';
        },
        changeEditStatus:(state)=>{
            state.editstatus='failure';
        }
    },
    extraReducers(builder){
        builder.addCase(fetchMoovies.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchMoovies.fulfilled, (state, action) => {
            state.status = 'success';
            //state.eventsList = state.eventsList.concat(action.payload);
            state.moovieList = action.payload;
        });
        builder.addCase(fetchMoovies.rejected, (state, action) => {
            state.status = 'error';
            state.error = state.error.message || 'Failed to fetch moovies';
        });
        builder.addCase(fetchMoovieBySeat.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchMoovieBySeat.fulfilled, (state, action) => {
            state.status = 'success';
            //state.eventR = state.eventR.concat(action.payload);
            state.selectedMoovie = action.payload;
        });
        builder.addCase(fetchMoovieBySeat.rejected, (state, action) => {
            state.status = 'error';
            state.error = state.error.message || 'Failed to fetch events by ID';
        });
         builder.addCase(fetchMoovieOrderByratingAsc.pending, (state, action)=>{
             state.status='loading';
         })
         builder.addCase(fetchMoovieOrderByratingAsc.fulfilled, (state, action)=>{
             state.status = 'success';
             state.moovieListAsc = action.payload;
         })
         builder.addCase(fetchMoovieOrderByratingAsc.rejected, (state, action)=>{
             state.status='error';
             state.error = state.error.message || 'Failed to fetch event by public flag';
         })
         builder.addCase(fetchMoovieOrderByratingDesc.pending, (state, action)=>{
             state.status='loading';
         })
         builder.addCase(fetchMoovieOrderByratingDesc.fulfilled, (state, action)=>{
             state.status = 'success';
             //state.selectedEvent = state.selectedEvent.concat(action.payload);
             state.moovieListDesc=action.payload;
         })
         builder.addCase(fetchMoovieOrderByratingDesc.rejected, (state, action)=>{
             state.status='error';
             state.error = state.error.message || 'Failed to fetch event by owner flag';
         })
        /*  builder.addCase(editEvent.pending, (state, action)=>{
              state.editstatus='loading';
          })
          builder.addCase(editEvent.fulfilled, (state, action)=>{
              state.editstatus = 'success';
              //state.selectedEvent = state.selectedEvent.concat(action.payload);
          })
          builder.addCase(editEvent.rejected, (state, action)=>{
              state.editstatus='error';
              state.error = state.error.message || 'Failed to edit event by id flag';
          })
          builder.addCase(deleteEvent.pending, (state, action)=>{
              state.editstatus='loading';
          })
          builder.addCase(deleteEvent.fulfilled, (state, action)=>{
              state.editstatus = 'success';
              //state.selectedEvent = state.selectedEvent.concat(action.payload);
          })
          builder.addCase(deleteEvent.rejected, (state, action)=>{
              state.editstatus='error';
              state.error = state.error.message || 'Failed to delete event';
          })
          builder.addCase(addEvent.pending, (state, action)=>{
              state.registerstatus='loading';
          })
          builder.addCase(addEvent.fulfilled, (state, action)=>{
              state.registerstatus = 'success';
              //state.selectedEvent = state.selectedEvent.concat(action.payload);
          })
          builder.addCase(addEvent.rejected, (state, action)=>{
              state.registerstatus='error';
              state.error = state.error.message || 'Failed to add event';
          })*/
    }
})

export default moovieslice.reducer;