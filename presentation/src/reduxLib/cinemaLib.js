import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState={
    cinemaList:[],
    selectedCinema: null,
    registerstatus:'failure',
    editstatus:'failure',
    status:"idle",
    error:''
}

export const fetchCinemas = createAsyncThunk('fetch/cinemas',async()=>{
    let response = await fetch('http://localhost:8080/cinemas/all')
    return response.json()

})
export const fetchCinemaByRoomId = createAsyncThunk('fetch/cinemaByRoom',async(roomId)=>{
    let response = await fetch(`http://localhost:8080/cinemas/${roomId}`)
    return response.json()

})

const cinemaslice = createSlice({
    name:"cinemas",
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
        builder.addCase(fetchCinemas.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchCinemas.fulfilled, (state, action) => {
            state.status = 'success';
            //state.eventsList = state.eventsList.concat(action.payload);
            state.cinemaList = action.payload;
        });
        builder.addCase(fetchCinemas.rejected, (state, action) => {
            state.status = 'error';
            state.error = state.error.message || 'Failed to fetch cinemas';
        });
        builder.addCase(fetchCinemaByRoomId.pending, (state, action) => {
             state.status = 'loading';
         });
         builder.addCase(fetchCinemaByRoomId.fulfilled, (state, action) => {
             state.status = 'success';
             //state.eventR = state.eventR.concat(action.payload);
             state.selectedCinema = action.payload;
         });
         builder.addCase(fetchCinemaByRoomId.rejected, (state, action) => {
             state.status = 'error';
             state.error = state.error.message || 'Failed to fetch cinema by Room ID';
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

export default cinemaslice.reducer;