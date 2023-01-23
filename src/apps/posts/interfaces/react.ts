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
  type: REACT_TYPE
  post?: string
  comment?: string
}

export interface IReactStats {
  type: REACT_TYPE
  users: IProfile[]
  total: number
}

export interface GetReactRequest extends IQueryParams {
  post?: string
  comment?: string
}