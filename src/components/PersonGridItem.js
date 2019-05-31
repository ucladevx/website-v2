import React from 'react'
import styled from 'styled-components'

import Text from './Text'
import { colors } from '../styles'

const PersonImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 250px;
  height: 250px;
`

const PersonGridItemDiv = styled.div`
  margin-right: 40px;
  margin-bottom: 60px;
`

const PersonGridItemLinks = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-start;

  & > * {
    margin-right: 10px;
  }
`

const PersonGridItem = ({ person }) => (
  <PersonGridItemDiv key={person.name}>
    <PersonImage alt={`${person.name} headshot`} src={person.image} />
    <Text as="h3" bold color={colors.yellow}>
      {person.name}
    </Text>
    <Text as="h3" size={14} allCaps>
      {person.role}
    </Text>
    <PersonGridItemLinks>
      {person.email && (
        <Text as="a" href={`mailto:${person.email}`} underline bold>
          Email
        </Text>
      )}
      {person.links && person.links.linkedIn && (
        <Text as="a" href={person.links.linkedIn} underline bold>
          LinkedIn
        </Text>
      )}
      {person.links && person.links.personal && (
        <Text as="a" href={person.links.personal} underline bold>
          Portfolio
        </Text>
      )}
    </PersonGridItemLinks>
  </PersonGridItemDiv>
)

export default PersonGridItem
