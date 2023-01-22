import { createSlice } from "@reduxjs/toolkit";
import { deleteRelation } from "apps/profiles/actions";
import { RelationDeleteState } from "apps/profiles/interfaces";

const initialRelationDeleteState: RelationDeleteState = {
  loading: false,
  success: false
}

export const relationDeleteSlice = createSlice({
  name: 'relationDelete',
  initialState: initialRelationDeleteState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(deleteRelation.pending, (state) => {
      state.loading = true
      state.success = true
    })
    builder.addCase(deleteRelation.fulfilled, (state, { payload }) => {
      state.loading = false
      state.success = true
    })
    builder.addCase(deleteRelation.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})