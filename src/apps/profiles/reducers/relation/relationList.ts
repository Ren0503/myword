import { createSlice } from "@reduxjs/toolkit";
import { getRelations } from "apps/profiles/actions";
import { RelationListState } from "apps/profiles/interfaces";

const initialRelationListState: RelationListState = {
  loading: false,
  relations: [],
}

export const relationListSlice = createSlice({
  name: 'relationList',
  initialState: initialRelationListState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRelations.pending, (state) => {
      state.loading = true
      state.relations = []
    })
    builder.addCase(getRelations.fulfilled, (state, { payload }) => {
      state.loading = false
      state.relations = payload.list
    })
    builder.addCase(getRelations.rejected, (state) => {
      state.loading = false
    })
  }
})