import { createSlice } from "@reduxjs/toolkit";

export const singleQuestionSlice = createSlice({
    name:'singleQuestion',
    initialState:{
        questionDetails:'',
    },
    reducers:{
       setSingleQuestion:(state, action)=>{
            state.questionDetails = action.payload
            console.log(action.payload,"action payload")
        }
    }
})

export const { setSingleQuestion } = singleQuestionSlice.actions
export default singleQuestionSlice.reducer;