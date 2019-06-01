import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

import SelectorPill from '../components/SelectorPill'
import Container from '../components/Container'
import ContainerBody from '../components/ContainerBody'
import TeamBrochure from '../components/TeamBrochure'
import PMBrochure from '../components/PMBrochure'
import RecruitmentSection from '../components/RecruitmentSection'

const RecruitmentHeading = styled.div`
  padding: 20px 0;
`

const PositionBrochure = styled.div``

const RecruitmentPage = ({ location, history }) => {
  const path = location.pathname.split('/').slice(1)
  const baseRoute = path[0]
  const currentSection = path[1]

  return (
    <Container>
      <ContainerBody>
        <RecruitmentHeading>
          <SelectorPill
            clickHandler={role => {
              history.push(`/${baseRoute}/${role.toLowerCase()}`)
            }}
            items={['PM', 'Team']}
            activeItem={currentSection}
          />
        </RecruitmentHeading>
        <PositionBrochure>
          <Switch>
            <Route path={`/${baseRoute}/team`} component={TeamBrochure} />
            <Route path={`/${baseRoute}/pm`} component={PMBrochure} />
            {/* Re-direct to the team section of recruitment if no sub-route specified */}
            <Redirect to={`/${baseRoute}/team`} />
          </Switch>
        </PositionBrochure>
        {currentSection && <RecruitmentSection type={currentSection} />}
      </ContainerBody>
    </Container>
  )
}

RecruitmentPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
}

export default withRouter(RecruitmentPage)
