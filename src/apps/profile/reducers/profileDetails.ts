import { createSlice } from "@reduxjs/toolkit";
import { logout } from "apps/auth/actions";
import { getProfileDetails, updateProfile } from "../actions";
import { ProfileDetailState } from "../interfaces";

const initialProfileDetailsState: ProfileDetailState = {
  loading: false,
  profile: undefined
}

export const profileDetailsSlice = createSlice({
  name: 'profileDetails',
  initialState: initialProfileDetailsState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.profile = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.profile = undefined
    })
    builder.addCase(getProfileDetails.pending, (state) => {
      state.loading = true
      state.profile = undefined
    })
    builder.addCase(getProfileDetails.fulfilled, (state, { payload }) => {
      state.loading = false
      state.profile = payload
    })
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      state.loading = false
      state.profile = payload
    })
    builder.addCase(getProfileDetails.rejected, (state, action) => {
      state.loading = false
    })
  },
})