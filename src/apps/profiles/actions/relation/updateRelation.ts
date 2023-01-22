import { createAsyncThunk } from "@reduxjs/toolkit"
import { IRelation, IUpdateRelationRequest } from "apps/profiles/interfaces"
import { api, RootState } from "base"

export const UPDATE_RELATION = 'UPDATE_RELATION'

export const updateRelation = createAsyncThunk<IRelation, IUpdateRelationRequest>(
  UPDATE_RELATION, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id } = args

    const data = await api(`relation/${id}`, {
      method: 'PATCH',
      token,
    })

    const { relation } = data
    return relation as IRelation
  }
)