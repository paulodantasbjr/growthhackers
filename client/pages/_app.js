import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/globalStyles'
import { theme } from '../styles/theme'
import { DataProvider } from '../context/globalState'
import { Notify } from '../components/Notify'

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Notify />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  )
}
