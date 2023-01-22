import { createAsyncThunk } from "@reduxjs/toolkit"
import { api, RootState } from "base"
import { IProfile, IUpdateProfileRequest } from "../interfaces"

export const PROFILE_UPDATE = 'PROFILE_UPDATE'

export const updateProfile = createAsyncThunk<IProfile, IUpdateProfileRequest>(
  PROFILE_UPDATE, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`profile`, {
      method: 'PATCH',
      token,
      data: args,
    })

    const { profile } = data
    return profile as IProfile
  }
)