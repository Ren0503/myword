import { createAsyncThunk } from "@reduxjs/toolkit"
import { CreateMemberRequest, IMember } from "apps/groups/interfaces"
import { api, RootState } from "base"

export const CREATE_MEMBER = 'CREATE_MEMBER'

export const createMember = createAsyncThunk<IMember, CreateMemberRequest>(
  CREATE_MEMBER, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`member`, {
      method: 'POST',
      token,
      data: args,
    })

    const { member } = data
    return member as IMember
  }
)