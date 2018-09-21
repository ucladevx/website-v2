import React from 'react'

import roles from '../config/roles'
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

          const Img = require(`images/${icon}`)

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

export default TeamPanel
