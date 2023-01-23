import { createSlice } from "@reduxjs/toolkit";
import { getProfileDetails, updateProfile } from "apps/profiles/actions";
import { ProfileDetailState } from "apps/profiles/interfaces";

const initialProfileDetailsState: ProfileDetailState = {
  loading: false,
  profile: undefined
}

export const profileDetailsSlice = createSlice({
  name: 'profileDetails',
  initialState: initialProfileDetailsState,
  reducers: {},
  extraReducers: (builder) => {
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
    builder.addCase(getProfileDetails.rejected, (state) => {
      state.loading = false
    })
  },
})