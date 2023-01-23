import { createAsyncThunk } from "@reduxjs/toolkit"
import { IReact, UpsertReactRequest } from "apps/posts/interfaces"
import { api, RootState } from "base"

export const UPSERT_REACT = 'UPSERT_REACT'

export const upsertReact = createAsyncThunk<IReact, UpsertReactRequest>(
  UPSERT_REACT, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { comment, post, type } = args
    const data = await api(`react`, {
      method: 'PUT',
      token,
      data: { comment, post, type }
    })

    const { react } = data
    return react as IReact
  }
)