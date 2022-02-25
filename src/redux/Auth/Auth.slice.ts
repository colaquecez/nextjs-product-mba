import { createSlice } from '@reduxjs/toolkit'
import { authApi } from './Auth.api'

const initialState = {
  name: ''
}

const AuthSliceReducer = createSlice({
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, action) => {
        state.name = 'logged'
      }
    )
  },
  name: 'authSlice',
  initialState: initialState,
  reducers: null
})

export default AuthSliceReducer.reducer
