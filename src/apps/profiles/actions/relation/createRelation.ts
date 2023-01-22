import { createAsyncThunk } from "@reduxjs/toolkit"
import { ICreateRelationRequest, IRelation } from "apps/profiles/interfaces"
import { api, RootState } from "base"

export const CREATE_RELATION = 'CREATE_RELATION'

export const createRelation = createAsyncThunk<IRelation, ICreateRelationRequest>(
  CREATE_RELATION, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { user, type } = args

    const data = await api(`relation`, {
      method: 'POST',
      token,
      data: { user, type }
    })

    const { relation } = data
    return relation as IRelation
  }
)