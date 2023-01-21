export interface ILoginRequest {
  usernameOrEmail: string
  password: string
}

export interface IRegisterRequest {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  gender: string
  birth: string
}

export interface UserRegisterState {
  loading: boolean
  token: string | undefined
}

export interface UserLoginState {
  loading: boolean
  token: string | undefined
}