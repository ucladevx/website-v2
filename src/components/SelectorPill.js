import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles'

const OuterPill = styled.div`
  display: inline-flex;
  flex-flow: row;
  cursor: pointer;
  letter-spacing: 3px;
  border-radius: 21.5px;
  overflow: hidden;
  border: 2px solid ${colors.yellow};
`

const PillItem = styled.div`
  padding: 12px 20px;
  color: ${props => (props.active ? colors.darkBlue : colors.yellow)};
  background-color: ${props =>
    props.active ? colors.yellow : colors.darkBlue};
`

const SelectorPill = ({ items, activeItem, clickHandler }) => (
  <OuterPill>
    {items.map(item => (
      <PillItem
        key={item}
        onClick={() => clickHandler(item)}
        active={item === activeItem}
      >
        {item}
      </PillItem>
    ))}
  </OuterPill>
)

export default SelectorPill
