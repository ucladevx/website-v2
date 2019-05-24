import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;

  ${props => props.maxHeight && 'height: 100%'};
  ${props => props.spaceBetween && 'justify-content: space-between'};
`

export default Row
