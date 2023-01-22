import { IModel } from "base";
import { POST_MODE, POST_STATUS, POST_TYPE } from "../constants";

export interface IPost extends IModel {
  type: POST_TYPE
  content: string
  images: string[]
  video: string
  mode: POST_MODE
  status: POST_STATUS
  totalReacts: number
  totalComments: number
}

export interface PostCreateState {
  loading?: boolean
  post?: IPost
  success?: boolean
}

export interface PostListState {
  loading?: boolean
  posts?: IPost[]
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