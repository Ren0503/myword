import { createAsyncThunk } from "@reduxjs/toolkit"
import { GetReactRequest, IReactStats } from "apps/posts/interfaces"
import { api, IGetMany, RootState } from "base"

export const LIST_REACTS = 'LIST_REACTS'

export const listReacts = createAsyncThunk<IGetMany<IReactStats>, GetReactRequest>(
  LIST_REACTS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`react`, {
      method: 'GET',
      token,
      params: args
    })

    const { reacts: list, total } = data
    return {
      list,
      total,
    }
  }
)