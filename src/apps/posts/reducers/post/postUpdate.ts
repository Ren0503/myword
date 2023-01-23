import { createSlice } from "@reduxjs/toolkit";
import { updatePost } from "apps/posts/actions";
import { PostUpdateState } from "apps/posts/interfaces";

const initialPostUpdateState: PostUpdateState = {
  loading: false,
  post: undefined,
  success: false,
}

export const postUpdateSlice = createSlice({
  name: 'postUpdate',
  initialState: initialPostUpdateState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.post = undefined
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updatePost.pending, (state) => {
      state.loading = true
      state.post = undefined
      state.success = true
    })
    builder.addCase(updatePost.fulfilled, (state, { payload}) => {
      state.loading = false
      state.post = payload
      state.success = true
    })
    builder.addCase(updatePost.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})