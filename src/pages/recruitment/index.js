import React from 'react'
import { Pill } from '../../lib'
import TeamPanel from './components/TeamPanel'

const Recruitment = () => (
  <div className="recruitment-container">
    <div className="heading">
      <Pill>
        <div>PM</div>
        <div>Team</div>
      </Pill>
    </div>
    <div className="content">
      <TeamPanel />
    </div>
  </div>
)

export default Recruitment
