import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import format from 'date-fns/format'

import { colors, breakpoints } from '../styles'
import Button from './Button'
import Text from './Text'
import { recruitment } from '../config'

const HeaderText = styled(Text).attrs(() => ({ as: 'h3' }))`
  margin-bottom: 10px;
  color: ${colors.yellow};
  font-weight: 500;
`

const NumberContainer = styled.div`
  display: inline-block;
  margin-right: 20px;

  div {
    background-color: ${colors.white};
    color: ${colors.darkBlue};
    border-radius: 50px;
    height: 40px;
    width: 40px;
    text-align: center;
    padding: 10px;
  }
`

const TextContainer = styled.div`
  display: inline-block;
`

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const RecruitmentStep = styled.div`
  flex: 0 1 100%;
  display: flex;
  flex-direction: row;
  padding-right: 0px;
  margin-bottom: 50px;

  ${breakpoints.lg`
    flex: 0 1 50%;
    padding-right: 50px;
  `}
`

const DateInfo = styled.div`
  padding-right: 50px;
  margin-bottom: 50px;
`

const EmphasisedLink = styled.a`
  text-decoration: underline;
`

const RecruitmentSection = ({ type }) => {
  const appLink = recruitment[type].applicationLink
  return (
    <section>
      <h2>Recruitment Process</h2>
      <br />
      <Grid>
        {recruitment[type].process.map(s => {
          const { step, name, description } = s

          return (
            <RecruitmentStep key={step}>
              <NumberContainer>
                <div>{step}</div>
              </NumberContainer>
              <TextContainer>
                <HeaderText>{name}</HeaderText>
                <Text>{description}</Text>
              </TextContainer>
            </RecruitmentStep>
          )
        })}
      </Grid>
      <h2>{recruitment.quarter} Recruitment Dates</h2>
      <br />
      {recruitment[type].isOpen ? (
        <React.Fragment>
          <Grid>
            {recruitment[type].dates.map(dateInfo => (
              <DateInfo key={dateInfo.name}>
                <HeaderText>{dateInfo.name}</HeaderText>
                {/* <Text>{formatDate(dateInfo)}</Text> */}
                <Text>{dateInfo.detail}</Text>
              </DateInfo>
            ))}
          </Grid>
          {appLink ? (
            <Button whiteFill as="a" href={appLink}>
              Application
            </Button>
          ) : (
            <h3>Application coming soon...</h3>
          )}
        </React.Fragment>
      ) : (
        <p>
          Recruitment for {recruitment.quarter} is currently closed. Please
          check back towards the end of this quarter for information about next
          quarter. Leave your email{' '}
          <EmphasisedLink href="http://eepurl.com/cFOmXH"> here</EmphasisedLink>{' '}
          to receive an email when apps open up.
        </p>
      )}
    </section>
  )
}

RecruitmentSection.propTypes = {
  type: PropTypes.string.isRequired
}

export default RecruitmentSection
