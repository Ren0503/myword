import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "base"
import { IRegisterRequest } from "../interfaces"
import { userLoginSlice } from "../reducers"

export const USER_REGISTER = 'USER_REGISTER'

export const register = createAsyncThunk<string, IRegisterRequest>(
  USER_REGISTER, async (args, thunkAPI) => {
    const { 
      firstName, 
      lastName, 
      username, 
      email, 
      password, 
      gender,
      birth, 
    } = args

    const data = await api(`user`, {
      method: 'POST',
      data: { firstName, lastName, username, email, password, gender, birth }
    })
    
    const { token } = data
    thunkAPI.dispatch(userLoginSlice.actions.loginSuccess(token))
    return token as string
  }
)