import React from 'react'
import styled from 'styled-components'

import Spinner from '../components/Spinner'
import Text from '../components/Text'
import { colors, sizes } from '../styles'

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - ${sizes.navbar.height}px);
  position: relative;
`

const WhileLoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const DocsIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export default () => (
  <Container>
    <WhileLoadingDiv>
      <Spinner />
      <Text as="h2" color={colors.black}>
        Loading...
      </Text>
    </WhileLoadingDiv>
    {/* Once the iframe loads, it'll show up OVER the WhileLoadingDiv, thus hiding it */}
    <DocsIframe title="UCLA DevX Docs" src="https://docs.ucladevx.com" />
  </Container>
)
