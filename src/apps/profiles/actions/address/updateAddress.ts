import { createAsyncThunk } from "@reduxjs/toolkit"
import { IAddress, IUpdateAddressRequest } from "apps/profiles/interfaces"
import { api, RootState } from "base"

export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'

export const updateAddress = createAsyncThunk<IAddress, IUpdateAddressRequest>(
  UPDATE_ADDRESS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id, ...payload } = args

    const data = await api(`address/${id}`, {
      method: 'PATCH',
      token,
      data: payload,
    })

    const { address } = data
    return address as IAddress
  }
)