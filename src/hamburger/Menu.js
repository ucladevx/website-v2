import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col } from '../lib'
import Config from '../config'

const getLinks = close => {
  const links = Config.links.map(link => (
    <NavLink
      to={link.path}
      exact
      onClick={close}
      activeStyle={{ color: '#F8CC29' }}
    >
      {link.label}
    </NavLink>
  ))

  return links
}

const Menu = ({ close }) => (
  <div className="hamburger-menu">
    <Col>{getLinks(close)}</Col>
  </div>
)

export default Menu
