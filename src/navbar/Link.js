import React from 'react'
import { RowItem } from '../lib'
import { Link as _Link } from 'react-router-dom'

const Link = ({ children, to }) => {
  return (
    <RowItem style={{ margin: '0 10px' }}>
      <_Link to={to}>{children}</_Link>
    </RowItem>
  )
}

export default Link
