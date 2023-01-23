import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "apps/posts/actions";
import {PostListState } from "apps/posts/interfaces";

const initialPostListPostListState:PostListState = {
  loading: false,
  posts: [],
  total: undefined
}

export const postListSlice = createSlice({
  name: 'postList',
  initialState: initialPostListPostListState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.posts = []
      state.total = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true
      state.posts = []
      state.total = undefined
    })
    builder.addCase(getPosts.fulfilled, (state, { payload}) => {
      state.loading = false
      state.posts = payload.posts
      state.total = payload.total
    })
    builder.addCase(getPosts.rejected, (state) => {
      state.loading = false
      state.posts = []
      state.total = undefined
    })
  }
})