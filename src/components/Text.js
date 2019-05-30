import styled from 'styled-components'
import { colors, typography } from '../styles'

const DEFAULT_COLOR = colors.white
const DEFAULT_SIZE = 14
const DEFAULT_WEIGHT = 'normal'

const getSize = props => {
  if (props.size) {
    return props.size
  }

  return (
    (props.as &&
      typography.typeHierarchy[props.as] &&
      typography.typeHierarchy[props.as].size) ||
    DEFAULT_SIZE
  )
}

const getWeight = props => {
  if (props.bold) {
    return 'bold'
  }

  if (props.weight) {
    return props.weight
  }

  return (
    (props.as &&
      typography.typeHierarchy[props.as] &&
      typography.typeHierarchy[props.as].weight) ||
    DEFAULT_WEIGHT
  )
}

const getColor = props => {
  if (props.color === 'css') {
    return null
  }

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
    DEFAULT_COLOR
  )
}

const Text = styled.p`
  font-size: ${getSize}px;
  font-weight: ${getWeight};
  line-height: ${props => props.lineHeight || '1.37em'};
  ${props => {
    const c = getColor(props)
    return c ? `color: ${c}` : ''
  }};
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
