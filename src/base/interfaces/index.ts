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