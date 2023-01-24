import { createAsyncThunk } from "@reduxjs/toolkit"
import { GetGroupDetailsRequest, IGroup } from "apps/groups/interfaces"
import { api, RootState } from "base"

export const GET_GROUP_DETAILS = 'GET_GROUP_DETAILS'

export const getGroupDetails = createAsyncThunk<IGroup, GetGroupDetailsRequest>(
  GET_GROUP_DETAILS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id } = args
    const data = await api(`group/${id}`, {
      method: 'GET',
      token,
    })

    const { group } = data
    return group as IGroup
  }
)