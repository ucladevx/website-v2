import styled from 'styled-components'
import { colors, typography } from '../styles'

const DEFAULT_COLOR = colors.white
const DEFAULT_SIZE = 14

const getSize = props => {
  if (props.size) {
    return props.size
  }

  return (
    (props.as &&
      typography.typeHierarchy[props.as] &&
      typography.typeHierarchy[props.as].size) ||
    DEFAULT_COLOR
  )
}

const getColor = props => {
  if (props.color) {
    return props.color
  }

  if (props.light) {
    return colors.gray
  }

  return (
    (props.as &&
      typography.typeHierarchy[props.as] &&
      typography.typeHierarchy[props.as].color) ||
    DEFAULT_SIZE
  )
}

const Text = styled.p`
  font-size: ${getSize}px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  line-height: 1.37em;
  color: ${getColor};
  ${props => props.center && 'text-align: center;'}
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  cursor: ${props =>
    props.pointer || props.as === 'a' ? 'pointer' : 'inherit'};
  text-align: ${props => (props.center ? 'center' : 'inherit')};
  font-family: ${typography.baseFont};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  ${props => props.allCaps && 'text-transform: uppercase;'}
`

export default Text
