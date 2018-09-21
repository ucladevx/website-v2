import React from 'react'
import { Col } from '../lib'
import Config from '../config'
import { NavLink } from 'react-router-dom'

const links = Config.links.map(link => (
  <NavLink to={link.path} exact activeStyle={{ color: '#F8CC29' }}>
    {link.label}
  </NavLink>
))

const Menu = ({ close }) => {
  return (
    <div className="hamburger-menu">
      <Col>{links}</Col>
    </div>
  )
}

export default Menu
