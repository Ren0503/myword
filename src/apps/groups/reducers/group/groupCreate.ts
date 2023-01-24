import { createSlice } from "@reduxjs/toolkit";
import { createGroup } from "apps/groups/actions";
import { GroupCreateState } from "apps/groups/interfaces";

const initialGroupCreateState: GroupCreateState = {
  loading: false,
  group: undefined,
  success: false,
}

export const groupCreateSlice = createSlice({
  name: 'groupCreate',
  initialState: initialGroupCreateState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.group = undefined
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createGroup.pending, (state) => {
      state.loading = true
      state.group = undefined
      state.success = false
    })
    builder.addCase(createGroup.fulfilled, (state, { payload }) => {
      state.loading = false
      state.group = payload
      state.success = true
    })
    builder.addCase(createGroup.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})