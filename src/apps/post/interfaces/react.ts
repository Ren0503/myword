import { IProfile } from "apps/profiles";
import { IModel } from "base";
import { REACT_TYPE } from "../constants";
import { IPost } from "./post";

export interface IReact extends IModel {
  type: REACT_TYPE
  post?: IPost
  user?: IProfile
}