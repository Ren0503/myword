import { createSlice } from "@reduxjs/toolkit";
import { getGroups } from "apps/groups/actions";
import { GroupListState } from "apps/groups/interfaces";

const initialGroupListState: GroupListState = {
  loading: false,
  groups: [],
  total: undefined,
}

export const groupListSlice = createSlice({
  name: 'groupList',
  initialState: initialGroupListState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGroups.pending, (state) => {
      state.loading = true
      state.groups = []
      state.total = 0
    })
    builder.addCase(getGroups.fulfilled, (state, { payload }) => {
      state.loading = false
      state.groups = payload.list
      state.total = payload.total
    })
    builder.addCase(getGroups.rejected, (state) => {
      state.loading = false
      state.groups = []
      state.total = undefined
    })
  }
})