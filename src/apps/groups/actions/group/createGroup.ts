import { createAsyncThunk } from "@reduxjs/toolkit"
import { CreateGroupRequest, IGroup } from "apps/groups/interfaces"
import { api, RootState } from "base"

export const CREATE_GROUP = 'CREATE_GROUP'

export const createGroup = createAsyncThunk<IGroup, CreateGroupRequest>(
  CREATE_GROUP, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`group`, {
      method: 'POST',
      token,
      data: args,
    })

    const { group } = data
    return group as IGroup
  }
)