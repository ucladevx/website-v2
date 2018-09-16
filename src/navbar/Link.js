import React from 'react'
import { RowItem } from '../lib'
import { Link as _Link } from 'react-router-dom'

const Link = ({ children }) => {
  return (
    <RowItem style={{ margin: '0 10px' }}>
      <_Link to={children}>{children.toUpperCase()}</_Link>
    </RowItem>
  )
}

export default Link
