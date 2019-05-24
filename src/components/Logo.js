import styled from 'styled-components'

const Logo = styled.img.attrs({
  src: props => props.theme.logoSrc,
  alt: 'DevX Logo'
})`
  ${props => props.height && `height: ${props.height}px`};
`

export default Logo
