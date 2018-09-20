import React from 'react'
import { Container } from '../../lib'
import Config from '../../config'
import Panel from './components/Panel'
import Image from './components/Image'
import Text from './components/Text'

const Projects = () => {
  const panels = Config.products.map(product => {
    return (
      <Panel>
        <Image path={product.image} />
        <Text>
          <h1>{product.name}</h1>
          <h5>{product.description}</h5>
        </Text>
      </Panel>
    )
  })
  return <Container>{panels}</Container>
}

export default Projects
