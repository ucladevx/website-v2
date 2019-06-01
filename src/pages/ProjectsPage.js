import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import ContainerBody from '../components/ContainerBody'
import Text from '../components/Text'
import { colors, breakpoints } from '../styles'
import { projects } from '../config'

const Image = styled.div`
  background-image: url(${props => props.path});
  background-color: ${colors.white};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
  text-align: center;
  width: 100%;
  border: 70px solid ${colors.white};

  &:before {
    content: '';
    padding: 50% 0; /* vertical value as  100% equals width */
    display: inline-block;
    vertical-align: middle;
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }
`

const Description = styled.div`
  margin: 30px 0;
  white-space: pre-line;
`

const Panel = styled.div`
  margin-top: 30px;
  border-bottom: 1px solid ${colors.white};
  display: flex;
  flex-flow: column;
  align-items: center;

  ${breakpoints.medium`
    flex-flow: row;
    border-bottom: none;

    ${Image} {
      width: 35%;
      flex-shrink: 0;
    }

    ${'' /* Odd-numbered rows have image on left so need margin-left */}
    &:nth-of-type(odd) {
      ${Description} {
        margin-left: 30px;
      }
    }

    ${'' /* Even-numbered rows have image on right so need margin-right */}
    &:nth-of-type(even) {
      flex-flow: row-reverse;
      ${Description} {
        margin-right: 30px;
      }
    }
  `}
`

const Projects = ({ match }) => {
  const { year } = match.params
  return (
    <Container>
      <ContainerBody>
        {projects[year].map(project => (
          <Panel key={project.name}>
            <Image path={project.image} />
            <Description>
              {project.link ? (
                <a href={project.link}>
                  <Text as="h1">{project.name}</Text>
                </a>
              ) : (
                <Text as="h1">{project.name}</Text>
              )}
              <Text as="h5">{project.description}</Text>
            </Description>
          </Panel>
        ))}
      </ContainerBody>
    </Container>
  )
}

Projects.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      year: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default Projects
