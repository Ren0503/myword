import { createAsyncThunk } from "@reduxjs/toolkit"
import { CreatePostRequest, IPost } from "apps/posts/interfaces"
import { api, RootState } from "base"

export const CREATE_POST = 'CREATE_POST'

export const createPost = createAsyncThunk<IPost, CreatePostRequest>(
  CREATE_POST, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`post`, {
      method: 'POST',
      token,
      data: args,
    })

    const { post } = data
    return post as IPost
  }
)