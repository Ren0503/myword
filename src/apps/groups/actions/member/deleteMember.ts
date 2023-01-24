import { createAsyncThunk } from "@reduxjs/toolkit"
import { DeleteMemberRequest, IMember } from "apps/groups/interfaces"
import { api, RootState } from "base"

export const DELETE_MEMBER = 'DELETE_MEMBER'

export const deleteMember = createAsyncThunk<IMember, DeleteMemberRequest>(
  DELETE_MEMBER, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id } = args

    const data = await api(`member/${id}`, {
      method: 'DELETE',
      token,
    })

    const { member } = data
    return member as IMember
  }
)