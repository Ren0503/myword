import { createSlice } from "@reduxjs/toolkit";
import { deleteMember } from "apps/groups/actions";
import { MemberDeleteState } from "apps/groups/interfaces";

const initialMemberDeleteState: MemberDeleteState = {
  loading: false,
  success: false,
}

export const memberDeleteSlice = createSlice({
  name: 'memberDelete',
  initialState: initialMemberDeleteState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(deleteMember.pending, (state) => {
      state.loading = true
      state.success = false
    })
    builder.addCase(deleteMember.fulfilled, (state) => {
      state.loading = false
      state.success = true
    })
    builder.addCase(deleteMember.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})