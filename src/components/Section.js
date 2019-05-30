import styled from 'styled-components'
import { colors, breakpoints } from '../styles'

const Section = styled.div`
  display: flex;
  padding: 40px;
  background-color: ${props => (props.dark ? colors.darkBlue : colors.white)};

  & > * {
    @media (min-width: ${breakpoints.mdMin}px) {
      width: 75%;
      text-align: left;
    }

    @media (min-width: ${breakpoints.lgMin}px) {
      width: 50%;
    }
  }

  ${props => (props.small ? 'padding: 100px;' : '')};
  ${props => (props.left ? 'justify-content: flex-start;' : '')};
  ${props => (props.right ? 'justify-content: flex-end;' : '')};
  ${props =>
    props.middle
      ? `
          justify-content: center;
          & > * {
            width: auto;
            text-align: center;
          }
        `
      : ''};

  @media (min-width: ${breakpoints.mdMin}px) {
    padding: 140px;
  }
`

export default Section
