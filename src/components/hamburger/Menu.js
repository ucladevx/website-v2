import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Col from '../lib/Col'
import { links } from '../../config'

const getLinks = close =>
  links.map(
    link =>
      ({
        internal: (
          <NavLink
            to={link.path}
            exact
            onClick={close}
            activeStyle={{ color: '#F8CC29' }}
          >
            {link.label}
          </NavLink>
        ),
        external: (
          <a key={link.path} href={link.path}>
            {link.label}
          </a>
        )
      }[link.type])
  )

const Menu = ({ close }) => (
  <div className="hamburger-menu">
    <Col>{getLinks(close)}</Col>
  </div>
)

Menu.defaultProps = {
  close: false
}

Menu.propTypes = {
  close: PropTypes.bool
}

export default Menu
