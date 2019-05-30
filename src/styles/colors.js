import { darken } from 'polished'

const colors = {
  yellow: '#f8cc29',
  white: '#fff',
  darkBlue: '#03022d',
  gray: '#333',
  black: '#000'
}

colors.darkYellow = darken(0.1, colors.yellow)

export default colors
