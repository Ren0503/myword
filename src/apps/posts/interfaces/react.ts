import { IProfile } from "apps/profiles";
import { IModel, IQueryParams } from "base";
import { REACT_TYPE } from "../constants";
import { IComment } from "./comment";
import { IPost } from "./post";

export interface IReact extends IModel {
  type: REACT_TYPE
  post?: IPost
  comment?: IComment
  user: IProfile
}

export interface UpsertReactRequest {
  post?: string
  comment?: string
}

export interface ListReactRequest extends IQueryParams {
  post?: string
  comment?: string
}

export interface ReactUpsertState {
  loading?: boolean
  react?: IReact
  success?: boolean
}

export interface ReactListState {
  loading?: boolean
  reacts: {
    type: REACT_TYPE
    users: IProfile[]
  }[]
}