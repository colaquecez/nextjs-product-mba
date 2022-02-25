import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import AuthProvider from '../context/auth/auth.contetxt'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
