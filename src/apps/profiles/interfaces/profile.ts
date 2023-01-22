import { IModel } from "base"
import { GENDER_OPTIONS, PROFILE_ROLE, PROFILE_STATUS } from "../constants"

export interface IProfile extends IModel {
  name: string
  domain: string
  gender: GENDER_OPTIONS
  birth: string
  avatar: string
  cover: string
  about: string
  work: string
  socialLinks: string[]
  hobbies: string[]
  status: PROFILE_STATUS
  role: PROFILE_ROLE
}

export interface IGetProfileRequest {
  domain: string
}

export interface IUpdateProfileRequest extends Omit<IProfile, 'id'> {}

export interface ProfileDetailState {
  loading?: boolean
  profile?: IProfile
}

export interface ProfileUpdateState {
  loading?: boolean
  profile?: IProfile
  success?: boolean
}