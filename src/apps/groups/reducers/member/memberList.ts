import { createSlice } from "@reduxjs/toolkit";
import { getMembers } from "apps/groups/actions";
import { MemberListState } from "apps/groups/interfaces";

const initialMemberListState: MemberListState = {
  loading: false,
  members: [],
  total: undefined,
}

export const memberListSlice = createSlice({
  name: 'memberList',
  initialState: initialMemberListState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMembers.pending, (state) => {
      state.loading = true
      state.members = []
      state.total = undefined
    })
    builder.addCase(getMembers.fulfilled, (state, { payload }) => {
      state.loading = false
      state.members = payload.list
      state.total = payload.total
    })
    builder.addCase(getMembers.rejected, (state) => {
      state.loading = false
      state.members = []
      state.total = undefined
    })
  }
})