import { createSlice } from "@reduxjs/toolkit";
import { getGroupDetails, updateGroup } from "apps/groups/actions";
import { GroupDetailsState } from "apps/groups/interfaces";

const initialGroupDetailState: GroupDetailsState = {
  loading: false,
  group: undefined,
}

export const groupDetailsSlice = createSlice({
  name: 'groupDetails',
  initialState: initialGroupDetailState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGroupDetails.pending, (state) => {
      state.loading = true
      state.group = undefined
    })
    builder.addCase(getGroupDetails.fulfilled, (state, { payload }) => {
      state.loading = false
      state.group = payload
    })
    builder.addCase(updateGroup.fulfilled, (state, { payload }) => {
      state.loading = false
      state.group = payload
    })
    builder.addCase(getGroupDetails.rejected, (state) => {
      state.loading = false
      state.group = undefined
    })
  }
})