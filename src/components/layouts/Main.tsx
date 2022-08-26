import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Router } from 'next/router'
import { ReactNode } from 'react'
import { NavBar } from '../NavBar'
import { Loader } from '../VoxelDogLoader'
const LazyVoxelDog = dynamic(() => import('../VoxelDog'), {
  ssr: false,
  loading: () => <Loader />
})

interface MainProps {
  children?: ReactNode
  router?: Router
}

export const Main = (props: MainProps): JSX.Element => {
  const { children, router } = props
  return (
    <Box as='main' pb='8'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Anh Nguyen Quy - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        <LazyVoxelDog />
        {children}
      </Container>
    </Box>
  )
}