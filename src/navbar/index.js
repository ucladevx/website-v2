import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from 'images/logo.svg'
import Config from '../config'
import { Row, RowItem } from '../lib'
import Link from './Link'

const links = Config.links.map(link => (
  <Link key={link.path} to={link.path}>
    {link.label}
  </Link>
))

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar">
      <Row maxHeight spaceBetween>
        <RowItem>
          <img src={logo} alt="logo" />
        </RowItem>
        <Row>{links}</Row>
      </Row>
    </div>
  </div>
)

export default Navbar
