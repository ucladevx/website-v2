import React from 'react'
import { Pill, PillItem } from '../../lib'
import TeamPanel from './components/TeamPanel'

const Recruitment = () => (
  <div className="recruitment-container">
    <div className="heading">
      <Pill outline="yellow">
        <PillItem color="yellow">PM</PillItem>
        <PillItem color="yellow" fill>
          Team
        </PillItem>
      </Pill>
    </div>
    <div className="content">
      <TeamPanel />
    </div>
  </div>
)

export default Recruitment
