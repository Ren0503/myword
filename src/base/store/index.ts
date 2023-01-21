import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userLoginSlice, userRegisterSlice } from "apps";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'userLogin',
  storage,
  whiteList: ['token']
}

const rootReducers = combineReducers({
  userLogin: persistReducer(persistConfig, userLoginSlice.reducer),
  userRegister: userRegisterSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: true }),
})

export const persister = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
