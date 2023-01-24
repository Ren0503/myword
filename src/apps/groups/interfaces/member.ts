import { IProfile } from "apps/profiles";
import { IModel, IQueryParams, MutationState, QueryState } from "base";
import { MEMBER_ROLE, MEMBER_STATUS } from "../constants";
import { IGroup } from "./group";

export interface IMember extends IModel {
  user: IProfile
  group: IGroup
  role: MEMBER_ROLE
  status: MEMBER_STATUS
  archived?: string
}

export interface CreateMemberRequest {
  user: string
  group: string
}

export interface GetMembersRequest extends IQueryParams {
  group: string
}

export interface UpdateMemberRequest {
  id: string
  role?: MEMBER_ROLE
  status?: MEMBER_STATUS
  archived?: string
}

export interface DeleteMemberRequest {
  id: string
}

export interface MemberCreateState extends MutationState {
  member?: IMember
}

export interface MemberListState extends QueryState {
  members?: IProfile[]
  total?: number
}

export interface MemberUpdateState extends MutationState {
  member?: IMember
}

export interface MemberDeleteState extends MutationState { }