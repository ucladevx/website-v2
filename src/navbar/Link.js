import React from 'react'
import { RowItem } from '../lib'
import { NavLink } from 'react-router-dom'

const Link = ({ children, to }) => {
  return (
    <RowItem style={{ margin: '0 10px' }}>
      <NavLink to={to} exact activeStyle={{ color: '#F8CC29' }}>
        {children}
      </NavLink>
    </RowItem>
  )
}

export default Link
