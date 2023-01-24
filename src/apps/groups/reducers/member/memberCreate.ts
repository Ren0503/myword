import { createSlice } from "@reduxjs/toolkit";
import { createMember } from "apps/groups/actions";
import { MemberCreateState } from "apps/groups/interfaces";

const initialMemberCreateState: MemberCreateState = {
  loading: false,
  member: undefined,
  success: false,
}

export const memberCreateSlice = createSlice({
  name: 'memberCreate',
  initialState: initialMemberCreateState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.member = undefined
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createMember.pending, (state) => {
      state.loading = true
      state.member = undefined
      state.success = false
    })
    builder.addCase(createMember.fulfilled, (state, { payload }) => {
      state.loading = false
      state.member = payload
      state.success = true
    })
    builder.addCase(createMember.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})