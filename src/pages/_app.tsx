import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Fonts, Layout } from 'src/components'
import theme from 'src/theme'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')

  return (
    <MantineProvider theme={{ colorScheme: mode }}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router} setMode={setMode}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
    </MantineProvider>
  )
}

export default App