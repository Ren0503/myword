import { createAsyncThunk } from "@reduxjs/toolkit"
import { DeletePostRequest, IPost } from "apps/posts/interfaces"
import { api, RootState } from "base"

export const DELETE_POST = 'DELETE_POST'

export const deletePost = createAsyncThunk<IPost, DeletePostRequest>(
  DELETE_POST, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id } = args
    const data = await api(`post/${id}`, {
      method: 'DELETE',
      token,
    })

    const { post } = data
    return post as IPost
  }
)