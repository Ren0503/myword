import { createSlice } from "@reduxjs/toolkit";
import { updateGroup } from "apps/groups/actions";
import { GroupUpdateState } from "apps/groups/interfaces";

const initialGroupUpdateState: GroupUpdateState = {
  loading: false,
  group: undefined,
  success: false,
}

export const groupUpdateSlice = createSlice({
  name: 'groupUpdate',
  initialState: initialGroupUpdateState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.group = undefined
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateGroup.pending, (state) => {
      state.loading = true
      state.group = undefined
      state.success = false
    })
    builder.addCase(updateGroup.fulfilled, (state, { payload }) => {
      state.loading = false
      state.group = payload
      state.success = true
    })
    builder.addCase(updateGroup.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})