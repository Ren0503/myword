import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "apps/posts/actions";
import { PostCreateState } from "apps/posts/interfaces";

const initialPostCreateState: PostCreateState = {
  loading: false,
  post: undefined,
  success: false,
}

export const postCreateSlice = createSlice({
  name: 'postCreate',
  initialState: initialPostCreateState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.post = undefined
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.pending, (state) => {
      state.loading = true
      state.post = undefined
      state.success = true
    })
    builder.addCase(createPost.fulfilled, (state, { payload}) => {
      state.loading = false
      state.post = payload
      state.success = true
    })
    builder.addCase(createPost.rejected, (state) => {
      state.loading = false
      state.success = false
    })
  }
})