import { emptySplitApi } from '../basequery'
import {
  IProductGetAllDTO,
  IProductGetAllResponse,
  IProductSelect
} from './Product.types'

export const productApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getAll: builder.query<IProductGetAllResponse, IProductGetAllDTO>({
      query: ({ page, perPage, orderDirection }) =>
        `/storeProducts/?page=${page}&perPage=${perPage}&orderDirection=${orderDirection}`
    }),
    getAllFavorites: builder.query<IProductGetAllResponse, void>({
      query: () => `storeProducts/getFavProducts`
    }),
    storeProducts: builder.query<IProductSelect, { id: string }>({
      query: ({ id }) => `storeProducts/product/${id}`
    })
  })
})

export const {
  useGetAllQuery,
  useGetAllFavoritesQuery,
  useLazyGetAllQuery,
  useStoreProductsQuery,
  useLazyStoreProductsQuery
} = productApi
