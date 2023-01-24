import { createAsyncThunk } from "@reduxjs/toolkit"
import { GetPostRequest, IPost } from "apps/posts/interfaces"
import { api, IGetMany, RootState } from "base"

export const GET_POSTS = 'GET_POSTS'

export const getPosts = createAsyncThunk<IGetMany<IPost>, GetPostRequest>(
  GET_POSTS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`post`, {
      method: 'GET',
      token,
      params: args,
    })

    const { posts: list, total } = data
    return {
      list,
      total
    }
  }
)