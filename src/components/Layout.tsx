import { Box, Container, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'
import { Router } from 'next/router'
import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react'
import { NavBar } from './NavBar'

interface LayoutProps {
  children?: ReactNode
  router?: Router
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>
}

export const Layout = (props: LayoutProps): JSX.Element => {
  const { children, router, setMode } = props
  
  const { colorMode } = useColorMode()
  useEffect(() => {
    setMode(colorMode)
  }, [colorMode])

  return (
    <Box as='main' pb='8'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content="Anh Nguyen Quy's portfolio" />
        <title>Anh Nguyen Quy</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
    </Box >
  )
}