import React from 'react'

import { roles } from '../../../config'
import RecruitmentSection from './RecruitmentSection'

const TeamPanel = () => (
  <div className="panel">
    <section>
      <h2>Team Roles</h2>
      <br />
      <br />
      <h5>
        We know product development is a holistic process so we offer a range of
        roles below for inspiration, but feel free to craft your own:
      </h5>
      <br />
      <br />
      <div className="grid">
        {roles.team.map(r => {
          const { name, icon, description } = r

          return (
            <div key={name} className="role">
              <img src={icon} className="icon" alt={name} />
              <h3 className="name">{name}</h3>
              <p>{description}</p>
            </div>
          )
        })}
      </div>
    </section>
    <RecruitmentSection type="team" />
  </div>
)

export default TeamPanel
