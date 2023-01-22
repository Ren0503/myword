import { IModel } from "base";
import { FRIEND_STATUS, RELATION_TYPE } from "../constants";
import { IProfile } from "./profile";

export interface IRelation extends IModel {
  requester: IProfile
  user: IProfile
  type: RELATION_TYPE
  status: FRIEND_STATUS
}

export interface ICreateRelationRequest {
  type: RELATION_TYPE
  user: string
}

export interface IGetRelationRequest {
  domain: string
  type: RELATION_TYPE
  status?: FRIEND_STATUS
}

export interface IUpdateRelationRequest {
  id: string
}

export interface IDeleteRelationRequest {
  id: string
}

export interface RelationCreateState {
  loading?: boolean
  relation?: IRelation
  success?: boolean
}

export interface RelationListState {
  loading?: boolean
  relations: IProfile[]
}

export interface RelationUpdateState {
  loading?: boolean
  relation?: IRelation
  success?: boolean
}

export interface RelationDeleteState {
  loading?: boolean
  success?: boolean
}