import { createAsyncThunk } from "@reduxjs/toolkit"
import { IMember, UpdateMemberRequest } from "apps/groups/interfaces"
import { api, RootState } from "base"

export const UPDATE_MEMBER = 'UPDATE_MEMBER'

export const updateMember = createAsyncThunk<IMember, UpdateMemberRequest>(
  UPDATE_MEMBER, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id, ...payload } = args

    const data = await api(`member/${id}`, {
      method: 'PATCH',
      token,
      data: payload,
    })

    const { member } = data
    return member as IMember
  }
)