import { createSlice } from "@reduxjs/toolkit";
import { updateRelation } from "apps/profiles/actions";
import { RelationUpdateState } from "apps/profiles/interfaces";

const initialRelationUpdateState: RelationUpdateState = {
  loading: false,
  relation: undefined,
  success: false
}

export const relationUpdateSlice = createSlice({
  name: 'relationUpdate',
  initialState: initialRelationUpdateState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.relation = undefined
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateRelation.pending, (state) => {
      state.loading = true
      state.relation = undefined
      state.success = true
    })
    builder.addCase(updateRelation.fulfilled, (state, { payload }) => {
      state.loading = false
      state.relation = payload
      state.success = true
    })
    builder.addCase(updateRelation.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})