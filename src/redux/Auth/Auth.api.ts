import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  SignInDTO,
  SignInResponse,
  SignUpDTO,
  SignUpResponse
} from './Auth.types'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fiap-reactjs-presencial.herokuapp.com/'
  }),
  endpoints: builder => ({
    signIn: builder.mutation<SignInResponse, SignInDTO>({
      query(body) {
        return {
          body,
          method: 'POST',
          url: '/storeProducts/login'
        }
      }
    }),
    signUp: builder.mutation<SignUpResponse, SignUpDTO>({
      query(body) {
        return {
          body,
          method: 'POST'
        }
      }
    })
  })
})

export const { useSignInMutation } = authApi
