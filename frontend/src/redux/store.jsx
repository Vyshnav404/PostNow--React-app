import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from './features/alertSlice';
import { userSlice } from './features/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { completeUserSlice } from './features/completeUserSlice';
import { singleQuestionSlice } from './features/singleQuestionSlice';
import { showAnswersSlice } from './features/showAnswersSlice';



const persistConfig = {
    key:"root",
    version:1,
    storage
};

const reducer = combineReducers({
    alerts:alertSlice.reducer,
    user:userSlice.reducer,
    allUsers:completeUserSlice.reducer,
    singleQuestion:singleQuestionSlice.reducer,
    showAnswers:showAnswersSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({
    reducer:persistedReducer
});