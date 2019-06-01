import styled from 'styled-components'

const Logo = styled.img.attrs(props => ({
  src: props.theme.logoSrc,
  alt: 'DevX Logo'
}))`
  ${props => props.height && `height: ${props.height}px`};
  ${props => props.width && `width: ${props.width}px`};
`

export default Logo
