import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:[],
    },
    reducers:{
        setUser:(state, action)=>{
            state.userDetails = action.payload
           
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer;