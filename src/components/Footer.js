import React from 'react'
import styled from 'styled-components'

import { colors, breakpoints } from '../styles'
import { sponsorship } from '../config'
import Text from './Text'
import Logo from './Logo'
import Icons from './Icons'

const FooterContainer = styled.section`
  padding: 40px;
  @media (min-width: ${breakpoints.mdMin}px) {
    padding: 80px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.darkBlue};

  ${Text} {
    margin-bottom: 25px;
  }

  ${Logo} {
    margin-bottom: 36px;
  }
`

const Footer = () => (
  <FooterContainer>
    <Logo width={156} />
    <Text size={16} center>
      Want to help one of the most influential organizations at UCLA?{' '}
      <a
        href={sponsorship.brochureLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Sponsor Us.
      </a>
    </Text>
    <Icons />
    <Text>Copyright © 2018 UCLA DevX</Text>
  </FooterContainer>
)

export default Footer
