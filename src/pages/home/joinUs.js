import React from 'react'
import { withRouter } from 'react-router-dom'
import { Pill } from '../../lib'

const JoinUs = withRouter(({ history }) => {
  return (
    <div
      onClick={() => {
        history.push('/recruitment')
      }}
    >
      <Pill fill white>
        JOIN US
      </Pill>
    </div>
  )
})

export default JoinUs
