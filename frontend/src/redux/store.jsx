import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from './features/alertSlice';
import { userSlice } from './features/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { completeUserSlice } from './features/completeUserSlice';
import { questionSlice } from './features/singleQuestionSlice'



const persistConfig = {
    key:"root",
    version:1,
    storage
};

const reducer = combineReducers({
    alerts:alertSlice.reducer,
    user:userSlice.reducer,
    allUsers:completeUserSlice.reducer,
    question:questionSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({
    reducer:persistedReducer
});