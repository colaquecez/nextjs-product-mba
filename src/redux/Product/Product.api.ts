import { emptySplitApi } from '../basequery'
import { IProductGetAllDTO, IProductGetAllResponse } from './Product.types'

export const productApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getAll: builder.query<IProductGetAllResponse, IProductGetAllDTO>({
      query: ({ page, perPage, orderDirection }) =>
        `/storeProducts/?page=${page}&perPage=${perPage}&orderDirection=${orderDirection}`
    })
  })
})

export const { useGetAllQuery } = productApi
