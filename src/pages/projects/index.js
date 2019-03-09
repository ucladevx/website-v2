import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../components/lib/Container'
import ContainerBody from '../../components/lib/ContainerBody'
import { projects } from '../../config'
import Panel from './components/Panel'
import Image from './components/Image'
import Text from './components/Text'

const Projects = ({ match }) => {
  const { year } = match.params
  const panels = projects[year].map((project, idx) => (
    <Panel key={project.name}>
      <Image path={project.image} />
      <Text left={idx % 2 === 1}>
        <h1>{project.name}</h1>
        <h5>{project.description}</h5>
      </Text>
    </Panel>
  ))
  return (
    <Container>
      <ContainerBody>{panels}</ContainerBody>
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
