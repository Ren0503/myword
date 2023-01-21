import { createSlice } from "@reduxjs/toolkit"
import { register } from "../actions"
import { UserRegisterState } from "../interfaces"

const initialUserRegisterState: UserRegisterState = {
  loading: false,
  token: undefined,
}

export const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState: initialUserRegisterState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true
      state.token = undefined
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false
      state.token = action.payload
    })
    builder.addCase(register.rejected, (state) => {
      state.loading = false
    })
  }
})