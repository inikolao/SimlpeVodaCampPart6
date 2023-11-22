import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchMoovies} from "./mooviesLib";

const initialState={
    genreList:[],
    selectedGenre: null,
    registerstatus:'failure',
    editstatus:'failure',
    status:"idle",
    error:''
}
export const fetchGenres = createAsyncThunk('fetch/genres',async()=>{
    let response = await fetch('http://localhost:8080/genre/all')
    return response.json()

})
export const CreateGenre=createAsyncThunk('fetch/createGenre', async(search)=> {
    let response = await fetch(`http://localhost:8080/create`,
        {
            method:'POST',
            body: JSON.stringify(search),
            headers:{
                'Content-Type' : 'application/json',
                // 'Access-Control-Allow-Origin' : 'true'
            }
        })
    return await response.json();
    let data = await response.json();
    if(data !== null || data !== undefined)
        return Promise.resolve('success')
    return Promise.reject('failure')

})

const genreslice = createSlice({
    name:"genres",
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
        builder.addCase(fetchGenres.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.status = 'success';
            //state.eventsList = state.eventsList.concat(action.payload);
            state.genreList = action.payload;
        });
        builder.addCase(fetchGenres.rejected, (state, action) => {
            state.status = 'error';
            state.error = state.error.message || 'Failed to fetch genres';
        });
         builder.addCase(CreateGenre.pending, (state, action) => {
             state.registerstatus = 'loading';
         });
         builder.addCase(CreateGenre.fulfilled, (state, action) => {
             state.registerstatus = 'success';
             //state.eventR = state.eventR.concat(action.payload);
            // state.selectedEvent = action.payload;
         });
         builder.addCase(CreateGenre.rejected, (state, action) => {
             state.registerstatus = 'error';
             state.error = state.error.message || 'Failed to add genre';
         });
        /*  builder.addCase(fetchEventsByPublic.pending, (state, action)=>{
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

export default genreslice.reducer;