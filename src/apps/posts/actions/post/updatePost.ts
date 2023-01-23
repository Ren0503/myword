import { createAsyncThunk } from "@reduxjs/toolkit"
import { IPost, UpdatePostRequest } from "apps/posts/interfaces"
import { api, RootState } from "base"

export const UPDATE_POST = 'UPDATE_POST'

export const updatePost = createAsyncThunk<IPost, UpdatePostRequest>(
  UPDATE_POST, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id, ...payload } = args

    const data = await api(`post/${id}`, {
      method: 'PATCH',
      token,
      data: payload,
    })

    const { post } = data
    return post as IPost
  }
)