import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors, breakpoints, sizes } from '../styles'
import Logo from './Logo'
import Text from './Text'
import { links } from '../config'

const NavbarContainer = styled.div`
  height: ${sizes.navbar.height}px;
  width: 100%;
`

const NavbarLinks = styled.div`
  display: flex;
  position: relative;
  margin-left: 20px;
  overflow-x: auto;

  & > * {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
  }
`

const NavbarDiv = styled.nav`
  position: relative;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${colors.darkBlue};
  color: ${colors.white};
  letter-spacing: 3px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  /* On large screens, leave large gap on sides of navbar */
  @media (min-width: ${breakpoints.mdMin}px) {
    padding: 20px 140px;
  }
`

const Navbar = () => (
  <NavbarContainer>
    <NavbarDiv>
      <NavLink to="/" exact>
        <Logo height={19} />
      </NavLink>
      <NavbarLinks>
        {links.map(
          link =>
            ({
              internal: (
                <NavLink
                  key={link.path}
                  to={link.path}
                  exact
                  activeStyle={{ color: colors.yellow }}
                >
                  <Text size={14}>{link.label}</Text>
                </NavLink>
              ),
              external: (
                <a key={link.path} href={link.path}>
                  <Text size={14}>{link.label}</Text>
                </a>
              )
            }[link.type])
        )}
      </NavbarLinks>
    </NavbarDiv>
  </NavbarContainer>
)

export default Navbar
