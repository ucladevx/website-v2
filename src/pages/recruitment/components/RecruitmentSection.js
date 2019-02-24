import React from 'react'
import PropTypes from 'prop-types'

import { Pill, PillItem } from '../../../lib'
import { dates, recruitment } from '../../../config'

const RecruitmentSection = ({ type }) => {
  const appLink = recruitment.applicationLinks[type]
  return (
    <section>
      <a href={appLink} target="_blank" rel="noopener noreferrer">
        <Pill outline="yellow">
          <PillItem color="yellow" fill>
            Application
          </PillItem>
        </Pill>
      </a>
      <br />
      <br />
      <br />
      <br />
      <h2>Recruitment Process</h2>
      <br />
      <div className="grid">
        {recruitment[type].map(s => {
          const { step, name, description } = s

          return (
            <div key={step} className="step">
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

      <h2>Fall 2018 Recruitment Dates</h2>
      <br />
      <div className="grid">
        {dates[type].map(d => {
          const { name, date } = d

          return (
            <div key={name} className="date">
              <h3 className="name">{name}</h3>
              <h5>{date}</h5>
            </div>
          )
        })}
      </div>
    </section>
  )
}

RecruitmentSection.propTypes = {
  type: PropTypes.string.isRequired
}

export default RecruitmentSection
