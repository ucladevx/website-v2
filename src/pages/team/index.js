import React from 'react'
import Container from '../../components/lib/Container'
import ContainerBody from '../../components/lib/ContainerBody'

import { team } from '../../config'

const sortingHat = (personA, personB) => {
  // Make sure president comes first
  if (personA.role === 'President') return -1
  if (personB.role === 'President') return 1

  // After that, sort people in alphabetical order of their name
  return personA.name > personB.name ? 1 : -1
}

const Team = () => (
  <Container>
    <ContainerBody>
      <div className="team_content">
        {team.map(({ title, people }) => [
          <h1 key="header" className="header">
            {title}
          </h1>,
          <div key="people" className="people">
            {people.sort(sortingHat).map(person => (
              <div key={person.name} className="team_person">
                <img
                  className="person_image"
                  alt={`${person.name} headshot`}
                  src={person.image}
                />
                <div className="person_text">
                  <h3 className="name">{person.name}</h3>
                  <h4 className="role">{person.role}</h4>
                  <div className="links">
                    {person.email && (
                      <a href={`mailto:${person.email}`}>Email</a>
                    )}
                    {person.links &&
                      person.links.linkedIn && (
                        <a href={person.links.linkedIn}>LinkedIn</a>
                      )}
                    {person.links &&
                      person.links.personal && (
                        <a href={person.links.personal}>Portfolio</a>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ])}
      </div>
    </ContainerBody>
  </Container>
)

export default Team
