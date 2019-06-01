import React from 'react'
import styled from 'styled-components'

import { colors, breakpoints } from '../styles'
import { roles } from '../config'
import Text from './Text'

const PositionGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const PositionName = styled(Text).attrs(() => ({ as: 'h3' }))`
  margin-bottom: 10px;
  color: ${colors.yellow};
`

const PositionIcon = styled.img`
  text-align: center;
  height: 120px;
  margin-bottom: 20px;
`

const PositionItem = styled.div`
  flex: 0 1 100%;
  padding-right: 0px;
  ${breakpoints.md`
    flex: 0 1 50%;
    padding-right: 50px;
  `}
  ${breakpoints.lg`
    flex: 0 1 33%;
    padding-right: 50px;
  `}
  padding-bottom: 50px;
`

const TeamBrochure = () => (
  <section>
    <Text as="h2">Team Roles</Text>
    <br />
    <br />
    <Text as="h5">
      We know product development is a holistic process so we offer a range of
      roles below for inspiration, but feel free to craft your own:
    </Text>
    <br />
    <br />
    <PositionGrid>
      {roles.team.map(r => {
        const { name, icon, description } = r

        return (
          <PositionItem key={name}>
            <PositionIcon src={icon} alt={name} />
            <PositionName>{name}</PositionName>
            <Text>{description}</Text>
          </PositionItem>
        )
      })}
    </PositionGrid>
  </section>
)

export default TeamBrochure
