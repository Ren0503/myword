import { createAsyncThunk } from "@reduxjs/toolkit"
import { IAddress, IDeleteAddressRequest } from "apps/profiles/interfaces"
import { api, RootState } from "base"

export const DELETE_ADDRESS = 'DELETE_ADDRESS'

export const deleteAddress = createAsyncThunk<IAddress, IDeleteAddressRequest>(
  DELETE_ADDRESS, async (args, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState
    const token = state.userLogin.token

    const { id } = args

    const data = await api(`address/${id}`, {
      method: 'DELETE',
      token,
    })

    const { address } = data
    return address as IAddress
  }
)