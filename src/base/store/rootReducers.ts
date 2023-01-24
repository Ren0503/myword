import { combineReducers } from "@reduxjs/toolkit";
import {
  groupCreateSlice,
  groupDeleteSlice,
  groupDetailsSlice,
  groupListSlice,
  groupUpdateSlice,
  memberCreateSlice,
  memberDeleteSlice,
  memberListSlice,
  memberUpdateSlice,
  postCreateSlice,
  postDeleteSlice,
  postListSlice,
  postUpdateSlice,
  profileDetailsSlice,
  profileUpdateSlice,
  relationCreateSlice,
  relationDeleteSlice,
  relationListSlice,
  relationUpdateSlice,
  userLoginSlice,
  userRegisterSlice,
  USER_LOGOUT
} from "apps";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'userLogin',
  storage,
  whiteList: ['token']
}

const appReducers = combineReducers({
  groupCreate: groupCreateSlice.reducer,
  groupList: groupListSlice.reducer,
  groupDetails: groupDetailsSlice.reducer,
  groupUpdate: groupUpdateSlice.reducer,
  groupDelete: groupDeleteSlice.reducer,
  memberCreate: memberCreateSlice.reducer,
  memberList: memberListSlice.reducer,
  memberUpdate: memberUpdateSlice.reducer,
  memberDelete: memberDeleteSlice.reducer,
  postCreate: postCreateSlice.reducer,
  postList: postListSlice.reducer,
  postUpdate: postUpdateSlice.reducer,
  postDelete: postDeleteSlice.reducer,
  profileDetails: profileDetailsSlice.reducer,
  profileUpdate: profileUpdateSlice.reducer,
  relationCreate: relationCreateSlice.reducer,
  relationList: relationListSlice.reducer,
  relationUpdate: relationUpdateSlice.reducer,
  relationDelete: relationDeleteSlice.reducer,
  userLogin: persistReducer(persistConfig, userLoginSlice.reducer),
  userRegister: userRegisterSlice.reducer,
})

export const rootReducers = (state: any, action: any) => {
  if (action.type === USER_LOGOUT) {
    return appReducers(undefined, action)
  }

  return appReducers(state, action)
}