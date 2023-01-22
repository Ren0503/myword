import { createSlice } from "@reduxjs/toolkit";
import { logout } from "apps/auth/actions";
import { updateProfile } from "../actions";
import { ProfileUpdateState } from "../interfaces";

const initialProfileUpdateState: ProfileUpdateState = {
  loading: false,
  profile: undefined,
  success: false
}

export const profileUpdateSlice = createSlice({
  name: 'profileUpdate',
  initialState: initialProfileUpdateState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.profile = undefined
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.profile = undefined
      state.success = true
    })
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = true
      state.profile = undefined
      state.success = true
    })
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      state.loading = false
      state.profile = payload
      state.success = true
    })
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false
      state.success = false
    })
  },
})