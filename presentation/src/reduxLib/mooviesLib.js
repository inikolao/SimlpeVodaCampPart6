import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


const initialState = {
    moovieList: [],
    moovieListOwn: [],
    moovieListDesc: [],
    moovieListAsc: [],
    moovieListFiltered: [],
    moovieListByGenre: [],
    moovieListResults: [],
    selectedMoovie: null,
    registerstatus:'failure',
    editstatus:'failure',
    searchStatus: 'faliure',
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

export const fetchMoovieByGenre = createAsyncThunk('fetch/movieByGenre',async(genre)=>{
    let response = await fetch(`http://localhost:8080/movie/bygenre/${genre}`)
    return response.json()

})

export const searchMovie=createAsyncThunk('fetch/results', async(search)=> {
    let response = await fetch(`http://localhost:8080/movie/search/`,
        {
            method:'POST',
            body: JSON.stringify(search),
            headers:{
                'Content-Type' : 'application/json',
                // 'Access-Control-Allow-Origin' : 'true'
            }
        })
    return await response.json();
       /* let data = await response.json();
        if(data !== null || data !== undefined)
            return Promise.resolve('success')
        return Promise.reject('failure')*/

})

export const bookMovie=createAsyncThunk('fetch/bookMovie', async(search)=> {
    let response = await fetch(`http://localhost:8080/complex/bookMovie`,
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
          builder.addCase(fetchMoovieByGenre.pending, (state, action)=>{
              state.editstatus='loading';
          })
          builder.addCase(fetchMoovieByGenre.fulfilled, (state, action)=>{
              state.editstatus = 'success';
              state.moovieListByGenre=action.payload;
              //state.selectedEvent = state.selectedEvent.concat(action.payload);
          })
          builder.addCase(fetchMoovieByGenre.rejected, (state, action)=>{
              state.editstatus='error';
              state.error = state.error.message || 'Failed to get movies by rating';
          })
         builder.addCase(searchMovie.pending, (state, action)=>{
              state.searchStatus='loading';
          })
          builder.addCase(searchMovie.fulfilled, (state, action)=>{
              state.searchStatus = 'success';
              state.moovieListResults=action.payload
              //state.selectedEvent = state.selectedEvent.concat(action.payload);
          })
          builder.addCase(searchMovie.rejected, (state, action)=>{
              state.searchStatus='error';
              state.error = state.error.message || 'Failed to get search results';
          })
            builder.addCase(bookMovie.pending, (state, action)=>{
              state.registerstatus='loading';
          })
          builder.addCase(bookMovie.fulfilled, (state, action)=>{
              state.registerstatus = 'success';
              //state.selectedEvent = state.selectedEvent.concat(action.payload);
          })
          builder.addCase(bookMovie.rejected, (state, action)=>{
              state.registerstatus='error';
              state.error = state.error.message || 'Failed to book';
          })
    }
})

export default moovieslice.reducer;