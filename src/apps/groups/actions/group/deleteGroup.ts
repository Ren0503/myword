import { createAsyncThunk } from "@reduxjs/toolkit"
import { DeleteGroupRequest, IGroup } from "apps/groups/interfaces"
import { api, RootState } from "base"

export const DELETE_GROUP = 'DELETE_GROUP'

export const deleteGroup = createAsyncThunk<IGroup, DeleteGroupRequest>(
  DELETE_GROUP, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id } = args
    const data = await api(`group/${id}`, {
      method: 'DELETE',
      token,
    })

    const { group } = data
    return group as IGroup
  }
)