import { createSlice } from "@reduxjs/toolkit";
import { deleteGroup } from "apps/groups/actions";
import { GroupDeleteState } from "apps/groups/interfaces";

const initialGroupDeleteState: GroupDeleteState = {
  loading: false,
  success: false,
}

export const groupDeleteSlice = createSlice({
  name: 'groupDelete',
  initialState: initialGroupDeleteState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(deleteGroup.pending, (state) => {
      state.loading = true
      state.success = false
    })
    builder.addCase(deleteGroup.fulfilled, (state, { payload }) => {
      state.loading = false
      state.success = true
    })
    builder.addCase(deleteGroup.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})