import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, Styles } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F0E7DB', '#202023')(props)
    }
  })
} as Styles

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('teal', 'orange')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: '"Arvo"'
}

const colors = {
  
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors } as ThemeConfig)
export default theme