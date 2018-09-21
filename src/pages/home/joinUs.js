import React from 'react'
import { withRouter } from 'react-router-dom'
import { Pill, PillItem } from '../../lib'

const JoinUs = withRouter(({ history }) => (
  <Pill outline="white">
    <PillItem fill color="white" onClick={() => history.push('/recruitment')}>
      JOIN US
    </PillItem>
  </Pill>
))

export default JoinUs
