import { IModel } from "base";
import { ADDRESS_TYPE } from "../constants";
import { IProfile } from "./profile";

export interface IAddress extends IModel {
  user: IProfile
  address: string
  state: string
  city: string
  country: string
  type: ADDRESS_TYPE
  lat?: number
  long?: number
}

export interface ICreateAddressRequest { 
  address: string
  state: string
  city: string
  country: string
  type: ADDRESS_TYPE
  lat?: number
  long?: number
}

export interface IUpdateAddressRequest extends Partial<ICreateAddressRequest> {
  id: string
}

export interface IDeleteAddressRequest {
  id: string
}

export interface AddressCreateState {
  loading?: boolean
  address?: IAddress
  success?: boolean
}

export interface AddressesListState {
  loading?: boolean
  addresses: IAddress[]
}

export interface AddressUpdateState {
  loading?: boolean
  address?: IAddress
  success?: boolean
}

export interface AddressDeleteState {
  loading?: boolean
  success?: boolean
}

