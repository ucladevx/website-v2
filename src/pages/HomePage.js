import React from 'react'
import styled from 'styled-components'

import { homeCopy } from '../config'
import { colors } from '../styles'
import Col from '../components/Col'
import Text from '../components/Text'
import Section from '../components/Section'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const WhatIsDevXContainer = styled.div`
  background-color: ${colors.white};
  z-index: 2;
  position: relative;

  & > *:nth-child(odd) {
    text-align: left;
  }

  & > *:nth-child(even) {
    text-align: right;
  }
`

const HomePage = () => (
  <div>
    <Hero />
    <WhatIsDevXContainer>
      {homeCopy.sections.map(({ title, contents }, secIdx) => {
        const evenRow = secIdx % 2 === 0
        const color = evenRow ? colors.black : colors.white
        return (
          <Section key={title} left={evenRow} right={!evenRow} dark={!evenRow}>
            <Col>
              <Text as="h1" color={color}>
                {title}
              </Text>
              {contents.map((C, i) => (
                // eslint-disable-next-line
                <Text key={i} as="h5" lineHeight="30px" color={color}>
                  <C />
                </Text>
              ))}
            </Col>
          </Section>
        )
      })}
    </WhatIsDevXContainer>
    <Footer />
  </div>
)

export default HomePage
