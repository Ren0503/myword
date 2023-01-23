import { IProfile } from "apps/profiles";
import { IModel, IQueryParams } from "base";
import { IPost } from "./post";

export interface IComment extends IModel {
  post: IPost
  user: IProfile
  content?: string
  image?: string
  totalReacts: number
}

export interface CreateCommentRequest {
  post: string
  content?: string
  image?: string
}

export interface GetCommentRequest extends IQueryParams {
  post: string
}

export interface UpdateCommentRequest {
  id: string
  content?: string
  image?: string
}

export interface DeleteCommentRequest {
  id: string
}
