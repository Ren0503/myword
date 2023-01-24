import { createAsyncThunk } from "@reduxjs/toolkit"
import { CreateGroupRequest, IGroup } from "apps/groups/interfaces"
import { api, IGetMany, RootState } from "base"

export const GET_GROUPS = 'GET_GROUPS'

export const getGroups = createAsyncThunk<IGetMany<IGroup>, CreateGroupRequest>(
  GET_GROUPS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`group`, {
      method: 'POST',
      token,
      data: args,
    })

    const { groups: list, total } = data
    return {
      list,
      total,
    }
  }
)