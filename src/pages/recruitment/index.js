import React from 'react'
import Pill from '../../components/lib/Pill'
import PillItem from '../../components/lib/PillItem'
import Container from '../../components/lib/Container'
import ContainerBody from '../../components/lib/ContainerBody'
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
    this.setState({
      role
    })
  }

  render() {
    const { role } = this.state
    return (
      <Container>
        <ContainerBody>
          <div className="recruitment_heading">
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
          <div className="recruitment_content">
            {role === 'TEAM' ? <TeamPanel /> : <PMPanel />}
          </div>
        </ContainerBody>
      </Container>
    )
  }
}

export default Recruitment
