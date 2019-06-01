import React from 'react'
import styled from 'styled-components'

import { breakpoints } from '../styles'
import pmIcon from '../assets/images/product-manager.svg'
import Text from './Text'

const PMHero = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 20px;

  ${breakpoints.lg`
      margin-bottom: 0;
      flex-direction: row-reverse;
  `}
`

const TextContainer = styled.div`
  flex: 0 1 100%;
  ${breakpoints.lg`
      flex: 0 1 60%;
  `}
`

const PMImageContainer = styled.div`
  text-align: center;
  flex: 0 1 100%;

  img {
    height: 300px;
    margin-bottom: 30px;
  }

  ${breakpoints.lg`
    text-align: right;
    flex: 0 1 40%;

    img {
      height: auto;
      margin-bottom: 0;
    }
  `}
`

const PMBrochure = () => (
  <section>
    <Text as="h2">Product Manager</Text>
    <br />
    <br />
    <PMHero>
      <PMImageContainer>
        <img src={pmIcon} alt="pm-logo" />
      </PMImageContainer>
      <TextContainer>
        <Text as="h5">
          PMs are primarily engaged with product vision, strategy and
          management. They may be hands-on developers or designers too, but
          their prime concern is designing new, innovative product features and
          brainstorming ways to enhance the user experience. The specific
          implementations of these ideas would then be delegated to team
          members. They also typically organize the sprint and deployment
          schedules as well as the overarching roadmap.
        </Text>
        <br />
        <Text as="h5">
          If you’re excited at the prospect of converting your own cool idea
          into a robust product, apply to be PM and we’ll be in touch!
        </Text>
      </TextContainer>
    </PMHero>
  </section>
)

export default PMBrochure
