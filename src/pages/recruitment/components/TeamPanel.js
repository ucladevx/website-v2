import React from 'react'

import roles from '../config/roles'
import RecruitmentSection from './RecruitmentSection'

const TeamPanel = () => {
  return (
    <div className="panel">
      <section>
        <h2>Team Roles</h2>
        <br />
        <br />
        <h3>
          We know product development is a holistic process so we offer a range
          of roles below for inspiration, but feel free to craft your own:
        </h3>
        <br />
        <br />
        <div className="grid">
          {roles.team.map(r => {
            const { name, icon, description } = r

            const Img = require('images/' + icon)

            return (
              <div key={name} className="role">
                <img src={Img} className="icon" />
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
}

export default TeamPanel
