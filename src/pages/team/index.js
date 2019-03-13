import React from 'react'
import styled from 'styled-components'

import Container from '../../components/lib/Container'
import ContainerBody from '../../components/lib/ContainerBody'
import Text from '../../components/Text'
import PersonGridItem from './PersonGridItem'

import { team } from '../../config'

const sortingHat = (personA, personB) => {
  // Make sure president comes first
  if (personA.role === 'President') return -1
  if (personB.role === 'President') return 1

  // After that, sort people in alphabetical order of their name
  return personA.name > personB.name ? 1 : -1
}

const PeopleGrid = styled.div`
  margin-bottom: 80px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 100%;
  flex-wrap: wrap;
`

const Team = () => (
  <Container>
    <ContainerBody>
      {team.map(({ title, people }) => [
        <Text as="h1" key="header" bold>
          {title}
        </Text>,
        <PeopleGrid key="people">
          {people.sort(sortingHat).map(person => (
            <PersonGridItem key={person.name} person={person} />
          ))}
        </PeopleGrid>
      ])}
    </ContainerBody>
  </Container>
)

export default Team
