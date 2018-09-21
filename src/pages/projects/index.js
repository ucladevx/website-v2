import React from 'react'
import PropTypes from 'prop-types'
import { Container, ContainerBody } from '../../lib'
import Config from '../../config'
import Panel from './components/Panel'
import Image from './components/Image'
import Text from './components/Text'

const Projects = ({ match }) => {
  const panels = Config.products[match.params.year].map(product => (
    <Panel>
      <Image path={product.image} />
      <Text>
        <h1>{product.name}</h1>
        <h5>{product.description}</h5>
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
