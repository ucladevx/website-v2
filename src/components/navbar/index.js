import React from 'react'
import logo from '../../assets/images/logo.svg'
import { links } from '../../config'
import Row from '../lib/Row'
import RowItem from '../lib/RowItem'
import Link from './Link'

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar">
      <Row maxHeight spaceBetween>
        <RowItem>
          <img src={logo} alt="logo" />
        </RowItem>
        <Row>
          {links.map(link => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
        </Row>
      </Row>
    </div>
  </div>
)

export default Navbar
