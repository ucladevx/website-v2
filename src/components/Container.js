import styled from 'styled-components'

import { colors, breakpoints } from '../styles'

export default styled.section`
  padding: 10px 40px 40px 40px;
  background-color: ${colors.darkBlue};
  min-height: calc(100vh - 80px);
  color: ${colors.white};
  display: flex;
  justify-content: center;

  @media (min-width: ${breakpoints.mdMin}px) {
    padding: 40px 140px 140px 140px;
  }
`
