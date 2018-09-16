import React from 'react'
import { NavLink } from 'react-router-dom'
import Config from '../config'
import { Row, RowItem } from '../lib'
import Link from './Link'
import logo from 'images/logo.svg'

const links = Config.links.map(link => {
  return (
    <Link>{link}</Link>
  )
})

const Navbar = () => {
  return (
    <div className='navbar'>
      <Row maxHeight spaceBetween>
        <RowItem>
          <img src={logo} alt='logo' />
        </RowItem>
        <Row>
          {links}
        </Row>
      </Row>
    </div>
  )
}

export default Navbar
