import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout } from "../actions";
import { UserLoginState } from "../interfaces";

const initialUserLoginState: UserLoginState = {
  loading: false,
  token: undefined,
}

const userLoginSuccess: CaseReducer<UserLoginState, PayloadAction<string>> = (
  state,
  action,
) => {
  state.loading = false
  state.token = action.payload
}

const userLogoutSuccess: CaseReducer<UserLoginState, PayloadAction<void>> = (
  state
) => {
  state.token = undefined
}

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: initialUserLoginState,
  reducers: {
    loginSuccess: userLoginSuccess,
  },
  extraReducers: (builder) => {
    builder.addCase(logout, userLogoutSuccess)
    builder.addCase(login.pending, (state) => {
      state.loading = true
      state.token = undefined
    })
    builder.addCase(login.fulfilled, userLoginSuccess)
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
    })
  }
})