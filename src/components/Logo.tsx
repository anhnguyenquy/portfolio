import { Icon, Text, useColorModeValue, Image as ChakraImage } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { GiGearHammer } from 'react-icons/gi'


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  svg {
    transition: 200ms ease;
  }

  &:hover svg {
    transform: rotate(30deg);
  } 
`

export const Logo = (): JSX.Element => (
  <Link href='/' scroll={false}>
    <a>
      <LogoBox>
        <Icon as={GiGearHammer} w='20px' h='20px' />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='Helvetica'
          fontWeight='bold'
          ml={3}
        >
          Anh Nguyen Quy
        </Text>
      </LogoBox>
    </a>
  </Link>
)