import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name:'question',
    initialState:{
        questionDetails:'',
    },
    reducers:{
        singleQuestion:(state, action)=>{
            state.questionDetails = action.payload
            console.log(action.payload,"action payload")
        }
    }
})

export const { singleQuestion } = questionSlice.actions
export default questionSlice.reducer;