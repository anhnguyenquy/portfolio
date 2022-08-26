import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, BoxProps, Container, Flex, Heading, IconButton, Link, LinkProps, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import { Logo } from './Logo'
import { ThemeToggleButton } from './ThemeToggleButton'

type LinkItemProps = LinkProps & {
  href: string
  path: string
  children?: ReactNode
}

const LinkItem = (props: LinkItemProps): JSX.Element => {
  const { href, path, children } = props
  const active = path == href

  return (
    <NextLink href={href}>
      <Link p={2} textDecor={active ? 'underline' : undefined} color={useColorModeValue('gray.800', 'whiteAlpha.900')} {...props}>
        {children}
      </Link>
    </NextLink>
  )
}

type NavBarProps = BoxProps & {
  path: string

}

export const NavBar = (props: NavBarProps): JSX.Element => {
  const { path } = props

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#FFFFFF40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        flexWrap='wrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/portfolio' path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href='/posts' path={path}>
            Posts
          </LinkItem>
          <LinkItem
            target='_blank'
            href='https://github.com/anhnguyenquy/portfolio'
            path={path}
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign='right'>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href='/portfolio' passHref>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href='/posts' passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href='https://github.com/anhnguyenquy/portfolio'
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}