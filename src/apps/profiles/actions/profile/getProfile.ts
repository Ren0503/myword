import { createAsyncThunk } from "@reduxjs/toolkit"
import { IGetProfileRequest, IProfile } from "apps/profiles/interfaces"
import { api, RootState } from "base"

export const PROFILE_DETAILS = 'PROFILE_DETAILS'

export const getProfileDetails = createAsyncThunk<IProfile, IGetProfileRequest>(
  PROFILE_DETAILS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { domain } = args

    const data = await api(`profile/${domain}`, {
      method: 'GET',
      token,
    })

    const { profile } = data
    return profile as IProfile
  }
)