import { createAsyncThunk } from "@reduxjs/toolkit"
import { IDeleteRelationRequest, IRelation } from "apps/profiles/interfaces"
import { api, RootState } from "base"

export const DELETE_RELATION = 'DELETE_RELATION'

export const deleteRelation = createAsyncThunk<IRelation, IDeleteRelationRequest>(
  DELETE_RELATION, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id } = args

    const data = await api(`relation/${id}`, {
      method: 'DELETE',
      token,
    })

    const { relation } = data
    return relation as IRelation
  }
)