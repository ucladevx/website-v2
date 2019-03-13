import React from 'react'
import SelectorPill from '../../components/SelectorPill'
import Container from '../../components/lib/Container'
import ContainerBody from '../../components/lib/ContainerBody'
import TeamPanel from './components/TeamPanel'
import PMPanel from './components/PMPanel'

class Recruitment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      role: 'Team'
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
            <SelectorPill
              clickHandler={this.onPillClick}
              items={['PM', 'Team']}
              activeItem={role}
            />
          </div>
          <div className="recruitment_content">
            {role === 'Team' ? <TeamPanel /> : <PMPanel />}
          </div>
        </ContainerBody>
      </Container>
    )
  }
}

export default Recruitment
