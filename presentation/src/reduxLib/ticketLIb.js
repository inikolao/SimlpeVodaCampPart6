import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import {fetchGenres} from "./genreLib";

const initialState={
    ticketList:[],
    selectedTicket: null,
    registerstatus:'failure',
    editstatus:'failure',
    status:"idle",
    error:''
}

export const fetchTickets = createAsyncThunk('fetch/genres',async()=>{
    let response = await fetch('http://localhost:8080/tickets/all')
    return response.json()

})

const ticketslice = createSlice({
    name:"tickets",
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
        builder.addCase(fetchTickets.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchTickets.fulfilled, (state, action) => {
            state.status = 'success';
            //state.eventsList = state.eventsList.concat(action.payload);
            state.ticketList = action.payload;
        });
        builder.addCase(fetchTickets.rejected, (state, action) => {
            state.status = 'error';
            state.error = state.error.message || 'Failed to fetch genres';
        });
        /* builder.addCase(fetchEventsById.pending, (state, action) => {
             state.status = 'loading';
         });
         builder.addCase(fetchEventsById.fulfilled, (state, action) => {
             state.status = 'success';
             //state.eventR = state.eventR.concat(action.payload);
             state.selectedEvent = action.payload;
         });
         builder.addCase(fetchEventsById.rejected, (state, action) => {
             state.status = 'error';
             state.error = state.error.message || 'Failed to fetch events by ID';
         });
         builder.addCase(fetchEventsByPublic.pending, (state, action)=>{
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