import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:[],
    },
    reducers:{
        setUser:(state, action)=>{
            state.userDetails = action.payload
           
        },
       resetOTP:(state,action)=>{
        state.userDetails.OTP = action.payload
       } 
    }
})

export const { setUser,resetOTP } = userSlice.actions
export default userSlice.reducer;