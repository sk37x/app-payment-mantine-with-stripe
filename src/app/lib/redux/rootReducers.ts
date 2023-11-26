import counterSlice from "./slices/counterSlice";
import mainConfigSlice from "./slices/mainConfigSlice";
import storage from "./webStorage";
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
    blacklist:['counter']
}


export const reducers = combineReducers({
    "counter": counterSlice,
    "mainConfig": mainConfigSlice,
})

export const persistedReducer = persistReducer(persistConfig, reducers);
