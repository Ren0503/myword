import { createAsyncThunk } from "@reduxjs/toolkit"
import { GetMembersRequest } from "apps/groups/interfaces"
import { IProfile } from "apps/profiles"
import { api, IGetMany, RootState } from "base"

export const GET_MEMBERS = 'GET_MEMBERS'

export const getMembers = createAsyncThunk<IGetMany<IProfile>, GetMembersRequest>(
  GET_MEMBERS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`member`, {
      method: 'GET',
      token,
      params: args,
    })

    const { members: list, total } = data
    return {
      list,
      total,
    }
  }
)