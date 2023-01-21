import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "base"
import { ILoginRequest } from "../interfaces"

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export const login = createAsyncThunk<string, ILoginRequest>(
  USER_LOGIN, async (args) => {
    const { usernameOrEmail, password } = args

    const data = await api(`user/login`, {
      method: 'POST',
      data: { usernameOrEmail, password }
    })

    const { token } = data
    return token as string
  }
)

export const logout = createAction<void>(USER_LOGOUT)