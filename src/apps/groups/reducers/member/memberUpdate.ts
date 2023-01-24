import { createSlice } from "@reduxjs/toolkit";
import { updateMember } from "apps/groups/actions";
import { MemberUpdateState } from "apps/groups/interfaces";

const initialMemberUpdateState: MemberUpdateState = {
  loading: false,
  member: undefined,
  success: false,
}

export const memberUpdateSlice = createSlice({
  name: 'memberUpdate',
  initialState: initialMemberUpdateState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.member = undefined
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateMember.pending, (state) => {
      state.loading = true
      state.member = undefined
      state.success = false
    })
    builder.addCase(updateMember.fulfilled, (state, { payload }) => {
      state.loading = false
      state.member = payload
      state.success = true
    })
    builder.addCase(updateMember.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})