import { IModel, IQueryParams } from "base";
import { POST_MODE, POST_STATUS, POST_TYPE, QUERY_POST_TYPE } from "../constants";

export interface IPost extends IModel {
  type: POST_TYPE
  content?: string
  images?: string[]
  video?: string
  mode: POST_MODE
  status: POST_STATUS
  totalReacts: number
  totalComments: number
}

export interface CreatePostRequest {
  type: POST_TYPE
  content?: string
  images?: string[]
  video?: string
  mode: POST_MODE
}

export interface GetPostRequest extends IQueryParams {
  queryType: QUERY_POST_TYPE
  type: POST_TYPE
  group?: string
  user?: string
  search?: string
}

export interface UpdatePostRequest {
  id: string
  content?: string
  images?: string[]
  video?: string
  mode: POST_MODE 
}

export interface DeletePostRequest {
  id: string
}

export interface PostCreateState {
  loading?: boolean
  post?: IPost
  success?: boolean
}

export interface PostListState {
  loading?: boolean
  posts?: IPost[]
  total?: number
}

export interface PostUpdateState {
  loading?: boolean
  post?: IPost
  success?: boolean
}

export interface PostDeleteState {
  loading?: boolean
  success?: boolean
}