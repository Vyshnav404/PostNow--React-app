import { createSlice } from "@reduxjs/toolkit";

export const allQuestionSlice = createSlice({
    name:'allQuestion',
    initialState :{
        allQuestion: [],
    },
    reducers:{
        setAllQuestion :(state,action)=>{
            state.allQuestion = action.payload
        }
    }
})

export const { setAllQuestion }  = allQuestionSlice.actions
export default allQuestionSlice.reducer