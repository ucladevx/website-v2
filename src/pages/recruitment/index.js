import React from 'react'
import { Pill, PillItem } from '../../lib'
import TeamPanel from './components/TeamPanel'
//import PMPanel from './components/PMPanel'

class Recruitment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      team: true
    }
  }

  onPillClick = () => {
    this.setState(prevState => ({
      team: !prevState.team
    }))
  }

  render() {
    const { team } = this.state
    return (
      <div className="recruitment-container">
        <div className="heading">
          <Pill outline="yellow">
            <PillItem color="yellow" onClick={this.onPillClick} fill={!team}>
              PM
            </PillItem>
            <PillItem color="yellow" onClick={this.onPillClick} fill={team}>
              Team
            </PillItem>
          </Pill>
        </div>
        <div className="content">{team ? <TeamPanel /> : null}</div>
      </div>
    )
  }
}

export default Recruitment
