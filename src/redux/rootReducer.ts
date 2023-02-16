import { combineReducers } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { apiSlice } from '../services/photoApi';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
  })
const persistedRootReducer = persistReducer(persistConfig, rootReducer)

export default persistedRootReducer;