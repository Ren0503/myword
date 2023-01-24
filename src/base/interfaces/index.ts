export interface IModel {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

export interface IQueryParams {
  page?: number
  limit?: number
}

export interface IGetMany<T> {
  list: T[]
  page?: number
  total: number
}

export interface QueryState {
  loading?: boolean
}

export interface MutationState {
  loading?: boolean
  success?: boolean
}