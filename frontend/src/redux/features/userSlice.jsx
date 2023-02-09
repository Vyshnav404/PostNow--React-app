import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:[],
        tokenData:'',
    },
    reducers:{
        setUser:(state, action)=>{
            state.userDetails = action.payload
           
        },
       resetOTP:(state,action)=>{
        state.userDetails.OTP = action.payload
       } ,

       setToken:(state,action)=>{
        state.tokenData=action.payload
       }
    }
})

export const { setUser,resetOTP ,setToken} = userSlice.actions
export default userSlice.reducer;