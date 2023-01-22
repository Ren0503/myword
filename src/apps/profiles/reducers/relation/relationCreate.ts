import { createSlice } from "@reduxjs/toolkit";
import { createRelation } from "apps/profiles/actions";
import { RelationCreateState } from "apps/profiles/interfaces";

const initialRelationCreateState: RelationCreateState = {
  loading: false,
  relation: undefined,
  success: false
}

export const relationCreateSlice = createSlice({
  name: 'relationCreate',
  initialState: initialRelationCreateState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.relation = undefined
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createRelation.pending, (state) => {
      state.loading = true
      state.relation = undefined
      state.success = true
    })
    builder.addCase(createRelation.fulfilled, (state, { payload }) => {
      state.loading = false
      state.relation = payload
      state.success = true
    })
    builder.addCase(createRelation.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})