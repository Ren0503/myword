import { createAsyncThunk } from "@reduxjs/toolkit"
import { IAddress, ICreateAddressRequest } from "apps/profiles/interfaces"
import { api, RootState } from "base"

export const CREATE_ADDRESS = 'CREATE_ADDRESS'

export const createAddress = createAsyncThunk<IAddress, ICreateAddressRequest>(
  CREATE_ADDRESS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const data = await api(`address`, {
      method: 'POST',
      token,
      data: args,
    })

    const { address } = data
    return address as IAddress
  }
)