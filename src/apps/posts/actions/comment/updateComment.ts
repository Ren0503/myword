import { createAsyncThunk } from "@reduxjs/toolkit"
import { IComment, UpdateCommentRequest } from "apps/posts/interfaces"
import { api, RootState } from "base"

export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export const updateComment = createAsyncThunk<IComment, UpdateCommentRequest>(
  UPDATE_COMMENT, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id, ...payload } = args
    const data = await api(`comment/${id}`, {
      method: 'PATCH',
      token,
      data: payload,
    })

    const { comment } = data
    return comment as IComment
  }
)