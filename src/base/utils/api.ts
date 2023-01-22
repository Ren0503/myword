import axios, { AxiosError, RawAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

export type Method = 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE'

interface ApiProps {
  method: Method
  token?: string
  params?: any
  data?: any
  isFile?: boolean
  customConfig?: any
}

export const api = async (endpoint: string, {
  method, token, data, params, isFile, ...customConfig
}: ApiProps) => {
  const config: RawAxiosRequestConfig = {
    ...customConfig,
    baseURL: `http://localhost:5000/api/`,
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`
    }
  }

  if (data) {
    config.data = data
  }

  if (params) {
    config.params = params
  }

  if (isFile) {
    config.headers = {
      setContentType: 'multipart/form-data',
    }
  }

  try {
    const res = await axios(endpoint, config)
    return res.data
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      toast(err.response?.data.message)
    }
  }
}