import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from 'src/theme'
import { Fonts, Main } from 'src/components'

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  )
}

export default App