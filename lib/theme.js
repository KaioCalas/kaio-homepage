import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f2ece0', '#1c1917')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': props => ({
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4,
        paddingBottom: 1,
        borderBottom: '3px solid',
        borderColor: mode('#7b3f3f', '#5a7a5a')(props)
      })
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#7b3f3f', '#7a9e7a')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Playfair Display', serif"
}

const colors = {
  grassTeal: '#5a7a5a'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme