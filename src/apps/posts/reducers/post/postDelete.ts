import { createSlice } from "@reduxjs/toolkit";
import { deletePost } from "apps/posts/actions";
import { PostDeleteState } from "apps/posts/interfaces";

const initialPostDeleteState: PostDeleteState = {
  loading: false,
  success: false,
}

export const postDeleteSlice = createSlice({
  name: 'postDelete',
  initialState: initialPostDeleteState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true
      state.success = true
    })
    builder.addCase(deletePost.fulfilled, (state) => {
      state.loading = false
      state.success = true
    })
    builder.addCase(deletePost.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})