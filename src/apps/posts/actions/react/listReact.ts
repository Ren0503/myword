import { createAsyncThunk } from "@reduxjs/toolkit"
import { GetReactRequest, IReactStats } from "apps/posts/interfaces"
import { api, RootState } from "base"

export const LIST_REACTS = 'LIST_REACTS'

export const listReacts = createAsyncThunk<{ reacts: IReactStats[], total: number }, GetReactRequest>(
  LIST_REACTS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`react`, {
      method: 'GET',
      token,
      params: args
    })

    const { reacts, total } = data
    return {
      reacts,
      total,
    }
  }
)