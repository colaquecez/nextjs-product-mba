import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { AuthProvider } from '@/components/'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { store } from '../redux/store'

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
