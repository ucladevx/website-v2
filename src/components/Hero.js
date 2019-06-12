import React from 'react'
import styled from 'styled-components'

import { sizes, colors, breakpoints } from '../styles'
import { recruitment } from '../config'
import Button from './Button'
import Logo from './Logo'
import Text from './Text'

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoints.md`
    align-items: flex-start;
    position: absolute;
    bottom: 100px;
    z-index: 2;
    left: 139px;
  `}

  ${Logo} {
    margin-bottom: 36px;
  }

  ${Text} {
    margin-bottom: 25px;
  }
`

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.darkBlue};
  color: ${colors.white};
  z-index: 1;
  height: calc(100vh - ${sizes.navbar.height}px);

  ${'' /* Correlates with padding on navbar for visual consistency */}
  ${breakpoints.md`
    padding: 20px 140px;
    align-items: flex-start;

    ${HeroContent} {
      ${Text} {
        letter-spacing: 4px;
      }
    }
  `}
`

const Hero = () => (
  <HeroWrapper>
    <HeroContent>
      <Logo height={60} />
      <Text color={colors.white} as="h3">
        MOONSHOTS FOR UCLA
      </Text>
      <a href={recruitment.applicationLink}>
        <Button whiteFill>JOIN US</Button>
      </a>
    </HeroContent>
  </HeroWrapper>
)

export default Hero
