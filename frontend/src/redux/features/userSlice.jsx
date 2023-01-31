import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:null
    },
    reducers:{
        setUser:(state, action)=>{
            state.userDetails = action.payload
            console.log("data",action.payload);
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer;