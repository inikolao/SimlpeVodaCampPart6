import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState={
    roomList:[],
    selectedRoom: null,
    registerstatus:'failure',
    editstatus:'failure',
    status:"idle",
    error:''
}

export const fetchRooms = createAsyncThunk('fetch/rooms',async()=>{
    let response = await fetch('http://localhost:8080/rooms/all')
    return response.json()

})
export const fetchRoomBYID= createAsyncThunk('fetch/roomsbyID',async(id)=>{
    let response = await fetch(`http://localhost:8080/rooms/${id}`)
    return response.json()

})

const roomslice = createSlice({
    name:"rooms",
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
        builder.addCase(fetchRooms.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            state.status = 'success';
            //state.eventsList = state.eventsList.concat(action.payload);
            state.roomList = action.payload;
        });
        builder.addCase(fetchRooms.rejected, (state, action) => {
            state.status = 'error';
            state.error = state.error.message || 'Failed to fetch seats';
        });
         builder.addCase(fetchRoomBYID.pending, (state, action) => {
             state.status = 'loading';
         });
         builder.addCase(fetchRoomBYID.fulfilled, (state, action) => {
             state.status = 'success';
             //state.eventR = state.eventR.concat(action.payload);
             state.selectedRoom = action.payload;
         });
         builder.addCase(fetchRoomBYID.rejected, (state, action) => {
             state.status = 'error';
             state.error = state.error.message || 'Failed to fetch events by ID';
         });
         /*builder.addCase(fetchEventsByPublic.pending, (state, action)=>{
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
export  default roomslice.reducer;