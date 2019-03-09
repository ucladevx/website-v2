import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

import { Pill, PillItem } from '../../../lib'
import { recruitment } from '../../../config'

const formatDate = date => {
  const formatter = d => format(d, 'MMMM Do')
  const baseDate = {
    single: formatter(date.value),
    range: `${formatter(date.from)} - ${formatter(date.to)}`
  }[date.type]

  return `${baseDate}${date.detail ? ` (${date.detail})` : ''}`
}

const RecruitmentSection = ({ type }) => {
  const appLink = recruitment[type].applicationLink
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
        {recruitment[type].process.map(s => {
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
        {recruitment[type].dates.map(dateInfo => (
          <div key={dateInfo.name} className="date_info">
            <h3 className="name">{dateInfo.name}</h3>
            <h5 className="date">{formatDate(dateInfo)}</h5>
          </div>
        ))}
      </div>
    </section>
  )
}

RecruitmentSection.propTypes = {
  type: PropTypes.string.isRequired
}

export default RecruitmentSection
