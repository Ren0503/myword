import { createAsyncThunk } from "@reduxjs/toolkit"
import { IAddress, IUpdateAddressRequest } from "apps/profiles/interfaces"
import { api, IGetMany, RootState } from "base"

export const GET_ADDRESSES = 'GET_ADDRESSES'

export const getAddresses = createAsyncThunk<IGetMany<IAddress>, IUpdateAddressRequest>(
  GET_ADDRESSES, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`address`, {
      method: 'GET',
      token,
    })

    const { addresses: list, total } = data
    return {
      list,
      total,
    }
  }
)