import { createSlice } from "@reduxjs/toolkit";
import { updateProfile } from "apps/profiles/actions";
import { ProfileUpdateState } from "apps/profiles/interfaces";

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
    builder.addCase(updateProfile.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  },
})