import React from 'react'
import { Pill, PillItem } from '../../lib'
import TeamPanel from './components/TeamPanel'
import PMPanel from './components/PMPanel'

class Recruitment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      role: 'TEAM'
    }
  }

  onPillClick = role => {
    this.setState(prevState => ({
      role
    }))
  }

  render() {
    const { role } = this.state
    return (
      <div className="recruitment-container">
        <div className="heading">
          <Pill outline="yellow">
            <PillItem
              color="yellow"
              onClick={() => this.onPillClick('PM')}
              fill={role === 'PM'}
            >
              PM
            </PillItem>
            <PillItem
              color="yellow"
              onClick={() => this.onPillClick('TEAM')}
              fill={role === 'TEAM'}
            >
              Team
            </PillItem>
          </Pill>
        </div>
        <div className="content">
          {role === 'TEAM' ? <TeamPanel /> : <PMPanel />}
        </div>
      </div>
    )
  }
}

export default Recruitment
