import React from 'react'
import { NavLink } from 'react-router-dom'
import { RowItem } from '../lib'

const Link = ({ children, to }) => (
  <RowItem className="link-item">
    <NavLink to={to} exact activeStyle={{ color: '#F8CC29' }}>
      {children}
    </NavLink>
  </RowItem>
)

export default Link
