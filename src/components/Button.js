import styled, { css } from 'styled-components'

import { colors } from '../styles'

const yellowFillStyles = css`
  border: 2px solid ${colors.yellow};
  background-color: ${colors.yellow};
  color: ${colors.darkBlue};
`

const whiteFillStyles = css`
  border: 2px solid ${colors.white};
  background-color: ${colors.white};
  color: ${colors.darkBlue};
`

const unfilledStyles = css`
  color: ${colors.yellow};
`

const getButtonStyle = props => {
  if (props.whiteFill) {
    return whiteFillStyles
  }

  if (props.yellowFill) {
    return yellowFillStyles
  }

  return unfilledStyles
}

export default styled.button`
  display: inline-flex;
  flex-flow: row;
  cursor: pointer;
  letter-spacing: 3px;
  border-radius: 21.5px;
  overflow: hidden;
  padding: 12px 20px;
  font-size: 14px;
  ${getButtonStyle};
`
