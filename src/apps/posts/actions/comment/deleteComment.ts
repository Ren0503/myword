import { createAsyncThunk } from "@reduxjs/toolkit"
import { DeleteCommentRequest, IComment } from "apps/posts/interfaces"
import { api, RootState } from "base"

export const DELETE_COMMENT = 'DELETE_COMMENT'

export const deleteComment = createAsyncThunk<IComment, DeleteCommentRequest>(
  DELETE_COMMENT, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id } = args

    const data = await api(`comment/${id}`, {
      method: 'DELETE',
      token,
    })

    const { comment } = data
    return comment as IComment
  }
)