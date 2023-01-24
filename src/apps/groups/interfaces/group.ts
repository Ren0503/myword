import { IModel, IQueryParams, MutationState, QueryState } from "base";
import { GROUP_MODE } from "../constants";

export interface IGroup extends IModel {
  name: string
  description: string
  mode: GROUP_MODE
  avatar: string
  cover: string
  slug: string
  total: number
}

export interface CreateGroupRequest {
  name: string
  description: string
  mode: GROUP_MODE
  avatar: string
  cover: string
}

export interface GetGroupsRequest extends IQueryParams {
  search?: string
  domain?: string
}

export interface GetGroupDetailsRequest {
  id: string
}

export interface UpdateGroupRequest extends Partial<CreateGroupRequest> {
  id: string
}

export interface DeleteGroupRequest {
  id: string
}

export interface GroupCreateState extends MutationState {
  group?: IGroup
}

export interface GroupListState extends QueryState {
  groups?: IGroup[]
  total?: number
}

export interface GroupDetailsState extends QueryState {
  group?: IGroup
}

export interface GroupUpdateState extends MutationState {
  group?: IGroup
}

export interface GroupDeleteState extends MutationState { }