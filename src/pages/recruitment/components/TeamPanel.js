import React from 'react'

import roles from '../config/roles'
import recruitment from '../config/recruitment'
import dates from '../config/dates'

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
              <div className="role">
                <img src={Img} className="icon" />
                <h3 className="name">{name}</h3>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <h2>Recruitment Process</h2>
        <br />
        <div className="grid">
          {recruitment.team.map(s => {
            const { step, name, description } = s

            return (
              <div className="step">
                <div className="container-row">
                  <div className="number-container">
                    <div className="number">{step}</div>
                  </div>
                  <div className="text-container">
                    <h3 className="name">{name}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <h2>Fall 2018 Recruitment Dates</h2>
        <br />
        <div className="grid">
          {dates.team.map(d => {
            const { name, date } = d

            return (
              <div className="date">
                <h3 className="name">{name}</h3>
                <p>{date}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default TeamPanel
