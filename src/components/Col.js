import styled from 'styled-components'
import { breakpoints } from '../styles'

const Col = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  ${breakpoints.md`
    align-items: flex-start;
    text-align: auto;
  `}

  ${props => (props.middle ? 'align-items: center' : '')};
`

export default Col
