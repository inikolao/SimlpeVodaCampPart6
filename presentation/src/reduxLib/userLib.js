import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import bcrypt from 'bcryptjs';
const initialState = {
    loginstatus:'',
    username:sessionStorage.getItem('username') || '',
    id:sessionStorage.getItem('id') || '',
    registerstatus:'failure',
    isLoggedIn:!!sessionStorage.getItem('username'),
    user:{
        "id":0,
        'username': '',
        'name': '',
        'surname': '',
        'email': '',
        'password': '',
        'mobile': '',

    }
}

export const fetchUsers = createAsyncThunk('fetch/usersall',async()=>{
    let response = await fetch('http://localhost:8080/users/all')
    return response.json()

})

export const loginUser = createAsyncThunk('login/User',async(user)=>{
    console.log(user, 'logging in')
    let response = await fetch(`http://localhost:8080/users/?username=${user.username}`);
    let fetchuser = await response.json()
    // console.log(fetchuser.password, "  jjj")
   // console.log(bcrypt.compareSync(user.password,fetchuser.password))
   // console.log("lng" ,fetchuser.password.length)
    if(fetchuser.password.length > 0 && bcrypt.compareSync(user.password,fetchuser.password))
    {
        console.log("if inside")
        return Promise.resolve(fetchuser);
    }
    return Promise.reject('error')
})

export const fetchUserByUsername = createAsyncThunk('fetch/User',async(username)=>{
    let response = await fetch(`http://localhost:8080/users/${username}`)
    // console.log('fetch user', response)
    return  response.json()

})

export const registerUser = createAsyncThunk('register/user', async(user)=>{

    let response =  await fetch(`http://localhost:8080/users/register`,{
        method:'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type' : 'application/json',
            //'Access-Control-Allow-Origin' : '*',
            //'Access-Control-Allow-Methods' : 'POST, GET, PUT'
        }
    })
    let data = await response.json();
    if(data !== null || data !== undefined)
        return Promise.resolve('success')
    return Promise.reject('failure')
})

const userslice = createSlice({
    name:'usersLb',
    initialState,
    reducers:{
        logoutUser:(state, action)=>{
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('loged');
            state.loginstatus = 'failure';
            state.username='';
        },
        changeRegisterStatus:(state)=>{
            state.registerstatus='failure';
        }
    },
    extraReducers(builder){
        builder
            .addCase(loginUser.fulfilled,(state, action)=>{
                //console.log("logged in ",action.payload);
                state.loginstatus = 'success';
                state.user=action.payload;
                state.username = action.payload.username;
                state.id=action.payload.id;
                state.isLoggedIn= true;
                sessionStorage.setItem('username', state.username);
                sessionStorage.setItem('id', state.id);
                sessionStorage.setItem('loged', state.user);
            })
            .addCase(loginUser.rejected,(state, action)=>{
                state.loginstatus = 'failure';
                state.username = ''
                state.isLoggedIn= false
            })
            .addCase(registerUser.fulfilled,(state, action)=>{
                state.registerstatus = 'success';
            })
            .addCase(registerUser.rejected,(state, action)=>{
                state.registerstatus = 'failure';
            })
            .addCase(fetchUserByUsername.fulfilled, (state, action)=>{
                state.user = action.payload[0]
            })
            .addCase(fetchUsers.fulfilled,(state, action)=>{
                state.registerstatus = 'success';
                state.user = action.payload[0];
            })
            .addCase(fetchUsers.rejected,(state, action)=>{
                state.registerstatus = 'failure';
            })
    }
})

export let {isLoggedIn} = state => state.userreducer.isLoggedIn
export let {logoutUser, changeRegisterStatus} = userslice.actions

export default userslice.reducer;