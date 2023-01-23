import { createAsyncThunk } from "@reduxjs/toolkit"
import { CreateCommentRequest, IComment } from "apps/posts/interfaces"
import { api, RootState } from "base"

export const CREATE_COMMENT = 'CREATE_COMMENT'

export const createComment = createAsyncThunk<IComment, CreateCommentRequest>(
  CREATE_COMMENT, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`comment`, {
      method: 'POST',
      token,
      data: args,
    })

    const { comment } = data
    return comment as IComment
  }
)