import { createAsyncThunk } from "@reduxjs/toolkit"
import { GetCommentRequest, IComment } from "apps/posts/interfaces"
import { api, RootState } from "base"

export const GET_COMMENTS = 'GET_COMMENTS'

export const getComments = createAsyncThunk<IComment[], GetCommentRequest>(
  GET_COMMENTS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`comment`, {
      method: 'POST',
      token,
      params: args,
    })

    const { comments } = data
    return comments as IComment[]
  }
)