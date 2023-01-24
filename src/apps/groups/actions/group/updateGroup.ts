import { createAsyncThunk } from "@reduxjs/toolkit"
import { IGroup, UpdateGroupRequest } from "apps/groups/interfaces"
import { api, RootState } from "base"

export const UPDATE_GROUP = 'UPDATE_GROUP'

export const updateGroup = createAsyncThunk<IGroup, UpdateGroupRequest>(
  UPDATE_GROUP, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id, ...payload } = args

    const data = await api(`group/${id}`, {
      method: 'PATCH',
      token,
      data: payload,
    })

    const { group } = data
    return group as IGroup
  }
)