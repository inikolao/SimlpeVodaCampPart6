import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchCinemaByRoomId, fetchCinemas} from "./cinemaLib";

const initialState={
    showsList:[],
    selectedShow: null,
    registerstatus:'failure',
    editstatus:'failure',
    status:"idle",
    statusR:"idle",
    error:''
}

export const fetchShows = createAsyncThunk('fetch/shows',async()=>{
    let response = await fetch('http://localhost:8080/Shows/all')
    return response.json()

})
export const fetchShowsDetailsByMovie = createAsyncThunk('fetch/showsDetailsByMovie',async(id)=>{
    let response = await fetch(`http://localhost:8080/complex/showDetailsByMovie/${id}`)
    return response.json()

})


const showsslice = createSlice({
    name:"shows",
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
        builder.addCase(fetchShows.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchShows.fulfilled, (state, action) => {
            state.status = 'success';
            //state.eventsList = state.eventsList.concat(action.payload);
            state.showsList = action.payload;
        });
        builder.addCase(fetchShows.rejected, (state, action) => {
            state.status = 'error';
            state.error = state.error.message || 'Failed to fetch cinemas';
        });
        builder.addCase(fetchShowsDetailsByMovie.pending, (state, action) => {
            state.statusR = 'loading';
        });
        builder.addCase(fetchShowsDetailsByMovie.fulfilled, (state, action) => {
            state.statusR = 'success';
            //state.eventR = state.eventR.concat(action.payload);
            state.showsList = action.payload;
        });
        builder.addCase(fetchShowsDetailsByMovie.rejected, (state, action) => {
            state.statusR = 'error';
            state.error = state.error.message || 'Failed to fetch shows details by Movie ID';
        });
        /* builder.addCase(fetchEventsByPublic.pending, (state, action)=>{
             state.status='loading';
         })
         builder.addCase(fetchEventsByPublic.fulfilled, (state, action)=>{
             state.status = 'success';
             state.selectedEvent = state.selectedEvent.concat(action.payload);
         })
         builder.addCase(fetchEventsByPublic.rejected, (state, action)=>{
             state.status='error';
             state.error = state.error.message || 'Failed to fetch event by public flag';
         })
         builder.addCase(filterEventsByOwnerId.pending, (state, action)=>{
             state.status='loading';
         })
         builder.addCase(filterEventsByOwnerId.fulfilled, (state, action)=>{
             state.status = 'success';
             //state.selectedEvent = state.selectedEvent.concat(action.payload);
             state.eventsListOwn=action.payload;
         })
         builder.addCase(filterEventsByOwnerId.rejected, (state, action)=>{
             state.status='error';
             state.error = state.error.message || 'Failed to fetch event by owner flag';
         })
         builder.addCase(editEvent.pending, (state, action)=>{
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

export default showsslice.reducer;