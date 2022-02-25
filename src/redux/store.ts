import { configureStore } from '@reduxjs/toolkit'

import { authApi } from './Auth/Auth.api'
import AuthSliceReducer from './Auth/Auth.slice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: AuthSliceReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
