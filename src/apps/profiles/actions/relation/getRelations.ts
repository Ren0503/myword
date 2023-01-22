import { createAsyncThunk } from "@reduxjs/toolkit"
import { IGetRelationRequest, IProfile } from "apps/profiles/interfaces"
import { api, RootState } from "base"

export const GET_RELATIONS = 'GET_RELATIONS'

export const getRelations = createAsyncThunk<IProfile[], IGetRelationRequest>(
  GET_RELATIONS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { domain, type, status } = args

    const data = await api(`relation`, {
      method: 'GET',
      token,
      data: { domain, type, status }
    })

    const { relations } = data
    return relations as IProfile[]
  }
)